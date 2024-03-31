---
title: Flutter 의존성 주입과 테스트
description: 개인 프로젝트에서 Flutter 로 clean 함을 적용해볼 일이 생겼다. 일단 백엔드 없이 FireStore 만 써서 진행중인데, 나중에 백엔드 확장이 될 것 같다. 먼저 필요한 기능들을 인터페이스로 만든다.
date: '2023-11-20'
categories:
    - flutter
    - dart
published: true
thumbnail: https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/flutter-의존성-주입과-테스트/2023-11-19-04-13-57.png
---

# 들어가며

개인 프로젝트에서 플러터를 사용중인데 의존성 주입을 적용해볼 일이 생겼다.

백엔드를 지금은 FireStore 를 쓰고 있는데, 나중에 직접 백엔드 서버를 구축할 예정이다.

![flutter 의존성 주입](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/flutter-의존성-주입과-테스트/2023-11-19-04-13-57.png)

이런 상황에서 잘못하면 코드가 덕지덕지 붙어서 껌딱지처럼 떼어내기가 어려워진다.

이럴 때 필요한게 의존성 주입을 통한 느슨한 연결.

서버와 연결되는 부분을 **인터페이스를 통해서 정의**해두고, 필요에 맞게 인터페이스에 맞는 구현체를 **의존성 주입을 통해 사용**하면 나중에 간단하게 백엔드 교체가 가능하다.

<br>
<br>

# Interface

-   먼저 필요한 기능들을 인터페이스로 만든다.
-   아직은 CRUD 만 존재한다

```dart
abstract interface class CapsulePackageRepo {
  Future<List<CapsulePackageData>> getCapsulePackageList();
  Future<CapsulePackageData?> getCapsulePackage(
      {required CapsulePackageId packageId});
  Future<void> createCapsulePackage({required CapsulePackageData package});
  Future<void> deleteCapsulePackage({required CapsulePackageId packageId});
  Future<void> updateCapsulePackage({required CapsulePackageData package});
}
```

<br>

# Implement

-   그리고 해당 인터페이스를 구현한 repository 구현체를 만든다.
-   현재는 `FireStore` 를 사용중이기 때문에 `FireStoreCapsulePackageRepo` 로 구현

![flutter implements](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/flutter-의존성-주입과-테스트/2023-11-19-01-37-25.png)

<br>

# Injectable

이제 의존성 주입을 해보자.  
의존성 주입을 쉽게 할 수 있도록 도와주는 **`Injectable`** 이라는 라이브러리가 있다.  
좋아요 1,000개짜리라 거의 공식 라이브러리라고 할 수 있다.

![Injectable](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/flutter-의존성-주입과-테스트/2023-11-19-02-27-06.png)

<br>

공식문서에 나와있는대로 설치를 해주고,

```yaml title="pubspec.yaml"
dependencies:
    # add injectable to your dependencies
    injectable:
    # add get_it
    get_it:

dev_dependencies:
    # add the generator to your dev_dependencies
    injectable_generator:
    # add build runner if not already added
    build_runner:
```

<br>

`lib/injectable.dart` 에 아래 코드를 적어주고

```dart title="lib/injectable.dart"
import 'package:get_it/get_it.dart';
import 'package:injectable/injectable.dart';

final getIt = GetIt.instance;

@InjectableInit()
void configureDependencies() => getIt.init();
```

<br>

빌드 러너도 돌려주고

```shell
flutter pub run build_runner build
```

<br>

`lib/main.dart` 에 `configureDependencies` 를 해주면 기본 준비는 끝

```dart hl_lines="2"
// ...
import 'package:capsule_todo_app/injectable.dart';

void main() {
 configureDependencies();

 runApp(MyApp());
}
```

<br>
<br>

# 의존성 주입 사용하기

다음과 같이 `FireStoreCapsulePackageRepo` 를 `CapsulePackageRepo` 로서 사용한다고 써준다.

```dart
import 'package:capsule_todo_app/app/repos/interfaces.dart';
import 'package:injectable/injectable.dart';

// 여기
@Injectable(as: CapsulePackageRepo)
class FireStoreCapsulePackageRepo implements CapsulePackageRepo {
    // ...
```

<br>

이렇게 의존성이 주입되면 아래와 같이 `FireStoreCapsuleRepo` 를 코드에서 직접 언급하지 않아도 된다.  
`CapsuleRepo` 인터페이스의 구현체로 `FireStoreCapsuleRepo` 를 쓰겠다고 써놨기 때문에 `getIt` 을 통해 초기화 하면 `FireStoreCapsuleRepo` 가 사용되는 것이다.

```dart
// 의존성 주입 하기 전
final repo = FireStoreCapsuleRepo();

// 의존성 주입 후
final CapsuleRepo repo = getIt();
```

<br>

나중에 백엔드가 바뀔 때 `@Injectable` 코드만 옮겨주면 사용처의 코드를 변경하지 않고도 일괄 변경이 가능하다.

```dart
import 'package:capsule_todo_app/app/repos/interfaces.dart';
import 'package:injectable/injectable.dart';

class FireStoreCapsulePackageRepo implements CapsulePackageRepo {
    // ...

// 여기
@Injectable(as: CapsulePackageRepo)
class FastAPICapsulePackageRepo implements CapsulePackageRepo {
    // ...
```

<br>
<br>

# 테스트

이게 끝이 아니다. 느슨한 연결의 진짜 장점 중 하나는 **테스트 구현이 쉬워진다는 것**. 내친김에 테스트까지 작성해보자.

`test/repo/capsule_package_repo_test.dart` 를 만들어서 테스트 구현을 시작한다.

```dart hl_lines="7"
// test/repo/capsule_package_repo_test.dart

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  // environment 를 test 로 설정
  globals.environment = globals.EnvironmentEnum.test;
  // Injectable config
  configureDependencies();
  // Test 에서 사용할 State
  final List<CapsulePackageData> createdPackageList = [];
  // Repo 를 초기화
  late final CapsulePackageRepo capsulePackageRepo = getIt();

  //...
}
```

`environment` 를 test 로 설정한다.

test 로 설정되면 `FireStoreCapsulePackageRepo` 가 내부적으로 `FakeFireStore` 를 사용하도록 구현해놨다.

나중에 다른 백엔드의 레포지토리를 구현할 때에도, 생성자 내부에서 환경에 따라 다른 client 를 사용하도록 할 수 있을 것이다.

```dart
@Injectable(as: CapsuleRepo)
class FireStoreCapsuleRepo implements CapsuleRepo {
  final FirebaseFirestore instance;

  FireStoreCapsuleRepo()
      : instance = globals.environment == globals.EnvironmentEnum.prod
            ? FirebaseFirestore.instance
            : FakeFirebaseFirestore();

  // ...
}
```

<br>

create repo 테스트

```dart
void main() {
  // ...
  test('createCapsulePackage', () async {
    final package = CapsulePackageData.create(
      name: "TEST PACKAGE",
      description: "DESCRIPTION",
      color: Colors.black,
      userId: "TEST USER",
    );
    await capsulePackageRepo.createCapsulePackage(package: package);
    final result =
        await capsulePackageRepo.getCapsulePackage(packageId: package.id);
    expect(result, package);
    createdPackageList.add(package);
  });
  // ...
}

```

<br>

다른 메서드 구현도 테스트한다.

```dart
void main() {
  //...
  test('getCapsulePackage', () async {
    final first = createdPackageList.first;
    final result =
        await capsulePackageRepo.getCapsulePackage(packageId: first.id);
    expect(first, result);
  });

  test('getCapsulePackageList', () async {
    final result = await capsulePackageRepo.getCapsulePackageList();
    expect(createdPackageList, result);
  });

  test('deleteCapsulePackage', () async {
    await capsulePackageRepo.deleteCapsulePackage(
        packageId: createdPackageList.first.id);
    createdPackageList
        .removeWhere((package) => package.id == createdPackageList.first.id);
    final result = await capsulePackageRepo.getCapsulePackageList();
    expect(createdPackageList, result);
  });
}

```

<br><br>

이렇게 테스트를 구성하면 나중에 다른 Repository 를 변경해도 테스트 코드를 수정하지 않아도 된다.

나중에 아래와 같이 Injectable 에서 어떤 구현체를 쓸지만 바꿔주면 **새 구현체가 잘 작성되었는지 테스트**도 자동으로 가능하다.

```dart
import 'package:capsule_todo_app/app/repos/interfaces.dart';
import 'package:injectable/injectable.dart';

class FireStoreCapsulePackageRepo implements CapsulePackageRepo {
    // ...

@Injectable(as: CapsulePackageRepo)
class FastAPICapsulePackageRepo implements CapsulePackageRepo {
    // ...
```

<br>
<br>

# Eqautable

잊을 뻔 했는데 방금 작성된 테스트가 가능하게 해준건 `Equatable` 이라는 패키지 덕분이다.
dart 에서는 equal 메서드와 hashcode 메서드를 간단하게 만들기가 어렵다.

이 패키지도 like 가 2,700개 가까이 되는 근본 패키지이다.

![equatable](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/flutter-의존성-주입과-테스트/2023-11-19-23-53-23.png)

### 사용법

모델로 사용하고 있는 클래스가 `Equatable` 을 상속받도록 한 다음 `props` 를 오버라이딩 해주면된다.

`props` 에 적힌 프로퍼티를 가지고 hashcode 를 만들기 때문에, 여기 적힌 프로퍼티들의 값만 동일하면 나중에 비교할 때 같은 객체로 취급된다.

```dart
import 'package:equatable/equatable.dart';

class CapsulePackageData extends Equatable {
  //...

  @override
  List<Object> get props => [id, name, description, createdAt];
}
```

그럼 아래처럼 객체간 비교가 가능하게 해줘서 테스트 코드를 작성하기가 매우 편해진다.

```dart
void main() {
  //...
  test('getCapsulePackage', () async {
    final CapsulePackageData first = createdPackageList.first;
    final CapsulePackageData result =
        await capsulePackageRepo.getCapsulePackage(packageId: first.id);
    // CapsulePackageData 끼리의 비교
    expect(first, result);
  });
  //...
}

```

<br><br>

# 마무리

끝!
