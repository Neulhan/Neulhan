import{s as F1,n as ZC}from"./scheduler.2cdf953d.js";import{S as G1,i as K1,g as C,s as u,H as v,h as p,x,c as n,j as f,C as E,f as e,k as b,a as i}from"./index.2f9721ad.js";function N1(a1){let s,$C="인트로",dt,B,ot,q1='<code class="language-undefined">지긋지긋해 사는게~ 기술부채에서 사는게~</code>',rt,m,hC="IT 업계가 대부분 그렇겠지만 특히 초기 스타트업은 매 순간이 기술 부채와의 전쟁이다.",gt,_,cC='<img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/%EA%B8%B0%EC%88%A0%EB%B6%80%EC%B1%84%EC%99%80-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84/2023-11-12-17-05-42.png" alt="alt"/> <img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/%EA%B8%B0%EC%88%A0%EB%B6%80%EC%B1%84%EC%99%80-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84/2023-11-12-17-06-03.png" alt="alt"/>',te,P,dC="당장 기술 부채를 해결할 만큼 충분한 자원을 투자할 수 없거나, 비즈니스 로드맵 상 아직 기술 부채가 중요하게 여겨지지 않는 지점에 위치하기 때문에 초기 스타트업의 개발자들은 딜레마에 빠진다.",ee,le,ie,Ce,pe,A,oC="그렇게 축적된 기술 부채는 개발자들의 사기를 떨어뜨리고, 프로덕트 개발 효율을 떨어뜨린다.",ue,H,rC="개발자 처우가 좋지 않은 상황이나 마찬가지이다 보니 좋은 개발자를 새로 데려오기도 힘들다.",ne,T,gC="<strong>“우리 팀은 비즈니스적 가치를 최우선을 생각합니다. 빠른 개발을 위해 스택은 LAMP에 jquery를 쓰고 있습니다.”</strong>",xe,R,tp="성장의 의지가 강하고 열정있고 실력도 좋은 개발자를 데려올 수 있을까? 글쎄.",se,ve,fe,w,ep='<img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/%EA%B8%B0%EC%88%A0%EB%B6%80%EC%B1%84%EC%99%80-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84/2023-11-12-17-10-17.png" alt="alt"/>',Ee,L,be,D1=`<code class="language-python"><span class="token string">"열심히 연습하는 자신을 놔두고 동시대가 휙 지나가버렸다는걸"</span> 뒤늦게
깨닫게 될때의 절망감은 말로 표현하기 어렵다<span class="token punctuation">.</span>

그렇게 되면 사랑스러웠던 회사와 서비스도 더이상은 사랑할 수 없게 된다<span class="token punctuation">.</span>

내가 속한 조직의 구성원들이 동시대를 살아가는 개발자가 아니게 될까봐
정말 많은 걱정이 되었다<span class="token punctuation">.</span>

이 문제가 전문성이 필요한 개발자에게 정말로<span class="token punctuation">,</span> 정말로 중요하다<span class="token punctuation">.</span>

서비스는 성장하는데 구성원이 성장하지 못하는 상황
종국엔 아무 회사에서도 받아주지 않는 사람들만 남게되는 상황
이런 상황이 바깥 세상과 단절하고 우리만의 힙함을 강조하는
스타트업에서는 비일비재하게 발생한다<span class="token punctuation">.</span>

<span class="token operator">-</span> 향로님 블로그 발췌</code>`,Be,me,_e,Pe,Ae,M,lp="반면에 과도한 기술 부채 개선, 과도한 개인의 성장 지향 또한 회사에 도움이 되지 않는다.",He,k,ip='<img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/%EA%B8%B0%EC%88%A0%EB%B6%80%EC%B1%84%EC%99%80-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84/2023-11-12-17-15-37.png" alt="alt"/>',Te,Re,we,z,Cp="결국 개발자는 비즈니스적인 가치를 뽑아내기 위해서 고용되어 있는 것인데, 그보다 기술적인 완성도에 집중하게 되면 오버엔지니어링이 될 가능성이 크다.",Le,j,Me,O1=`<code class="language-python">얼마전에 한 스타트업 CTO 가 쓴 기술 스택과 구현 과정이 인터넷페이스북
상에서 많이 공유되었는데<span class="token punctuation">,</span> 솔직히 과도했다고 느껴졌다<span class="token punctuation">.</span>

뭐 나름대로 그렇게 한 이유는 다양하겠지만<span class="token punctuation">,</span> 그 서비스의 엔지니어링 스펙을
실제로는 <span class="token number">20</span><span class="token operator">%</span>도 다 못쓰고 있을거라는 것이 자명했다<span class="token punctuation">.</span>

본질적으로 해당 서비스는 쇼핑몰이었다<span class="token punctuation">.</span> 동영상이 들어간 쇼핑몰<span class="token punctuation">.</span>
아마 그 정도는 카X24 혹은 고X몰고자몰? 로도 충분히 만들 수 있고
안정적으로 운영할 수 있었을 것이다<span class="token punctuation">.</span> 물론 기왕 만들거 잘 만들면 좋겠지만<span class="token punctuation">,</span>
장담컨데 들어간 엔지니어링 혹은 개발자에 비해 트래픽은 상대적으로 낮을것이다<span class="token punctuation">.</span>
그렇다면 굳이 왜 그렇게 만들어야 했을까?

<span class="token operator">-</span> 김석준님 블로그 발췌</code>`,ke,ze,je,ye,ae,y,pp="이렇듯 기술 부채를 언제 어떻게 얼마나 해소할지, 우선순위를 어떻게 둬야할지는 IT 씬에서 논의가 많이 되는 주제이기에 다른 회사, 개발자들은 어떻게 생각하고 있는지를 정리해 보았다.",qe,De,Oe,a,up="1. Prioritizing Technical Debt As If Time And Money Matters",Ie,q,np="Software Design X-ray 의 저자 Adam Tornhill 의 강연이다.",Se,D,xp='<img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/%EA%B8%B0%EC%88%A0%EB%B6%80%EC%B1%84%EC%99%80-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84/2023-11-12-17-17-12.png" alt="alt"/>',Ue,O,sp="아담 톤힐은 결국 기술 부채의 우선순위를 지정하기 위해서는 정량적인 측정이 필요하다고 이야기 한다.",Xe,I,vp='<img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/%EA%B8%B0%EC%88%A0%EB%B6%80%EC%B1%84%EC%99%80-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84/2023-11-12-17-17-43.png" alt="alt"/>',Je,Fe,Ge,Ke,Ne,Qe,Ve,S,fp="그리고 그 방법으로 깃과 같은 버전 관리 시스템의 메타데이터를 활용하는 사례를 이야기한다.",We,U,Ep="특정 파일의 코드 줄 수, contribue 한 개발자 수, 커밋의 빈도, 최근 수정일을 분석해서 Hotspot 이라고 불리는 높은 온도의 기술 부채를 파악할 수 있다는 것이다.",Ye,X,bp='<img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/%EA%B8%B0%EC%88%A0%EB%B6%80%EC%B1%84%EC%99%80-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84/2023-11-12-17-20-09.png" alt="alt"/>',Ze,$e,he,ce,de,oe,re,J,Bp="흥미로운 주제였고 도움이 될만한 내용도 있지만 결국 내가 원하는 답과는 조금 거리가 있는 것 같다.",ge,F,mp="내가 생각했던 문제점은 “비즈니스 vs 기술부채” 상황에서 기술부채의 우선순위를 정하는 방법이었는데, 아담 톤힐은 “기술부채 vs 기술부채” 기술부채 중에서 더 우선순위가 높은 것을 판단하는 방법을 설명한다.",tl,G,_p='<img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/%EA%B8%B0%EC%88%A0%EB%B6%80%EC%B1%84%EC%99%80-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84/2023-11-12-17-21-22.png" alt="alt"/>',el,ll,il,Cl,pl,ul,nl,K,Pp=`?
<img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/%EA%B8%B0%EC%88%A0%EB%B6%80%EC%B1%84%EC%99%80-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84/2023-11-12-17-21-52.png" alt="alt"/>`,xl,N,Ap="(아차차..! 광고였다! )",sl,Q,Hp="codescene 이라는 곳에서 해당 시각화를 제공하고 있다고 하니 관심이 있다면 한 번 시도해보는 것도 나쁘지 않을 것 같다. free 트라이얼이 제공되고 있고, 이후에는 contributer 1인당 한 달에 18유로 이다.",vl,fl,El,bl,Bl,ml,_l,V,Tp="2. A Practical Prioritization Approach for Technical Debt",Pl,W,Rp="다음은 기술 부채에 관한 한 블로그 글이다.",Al,Y,wp='<img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/%EA%B8%B0%EC%88%A0%EB%B6%80%EC%B1%84%EC%99%80-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84/2023-11-12-17-22-33.png" alt="alt"/> <img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/%EA%B8%B0%EC%88%A0%EB%B6%80%EC%B1%84%EC%99%80-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84/2023-11-12-17-22-58.png" alt="alt"/>',Hl,Z,Lp="“새로운 비즈니스 피처 요청이 있는데, 개발팀이 기술부채를 먼저 해결하기를 원한다면 어떻게 할 것인가요?”",Tl,Rl,wl,Ll,Ml,$,Mp="글쓴이는 기술부채를 크게 두가지로 나눠서 보고 있다.",kl,h,kp="<strong>1. The ‘Deliberate Tech Debts’</strong>",zl,c,zp="<strong>2. The ‘Accidental Tech Debts’</strong>",jl,yl,al,ql,Dl,d,jp="그 중 우연한 기술 부채는 줄이기 힘들고, 고의적인 기술 부채를 줄일 수 있다고 한다.",Ol,o,yp="본질적으로, ‘고의적인 기술 부채’를 실제 금융 부채처럼 취급하는 것이 요령이다.",Il,r,ap="금융부채가 많을 때는 투자금을 낮추고 빚을 먼저 갚는 것이 가장 현명한 방법이다. 왜냐하면 일반적으로 이자부담금이 투자수익률보다 높기 때문이다. 마찬가지로, 고의적인 기술 부채의 경우에도 긴급한 비즈니스 요구사항에 영향을 미치지 않으면서 이를 줄이고 가능한 한 빨리 제거하는 것이 가장 좋은 방법이다.",Sl,Ul,Xl,Jl,Fl,Gl,Kl,g,qp="그리고 글쓴이는 기술부채 우선순위 결정 트리를 만들어놨다.",Nl,tt,Dp='<img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/%EA%B8%B0%EC%88%A0%EB%B6%80%EC%B1%84%EC%99%80-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84/2023-11-12-17-23-29.png" alt="alt"/>',Ql,et,Op="<li>기술부채를 고치는 것이 필요한 것으로 여겨지나요? (이 기술 부채가 있으면 프로덕트를 진행할 수 없는가)</li> <li>기술 부채가 실현 가능한 작업 없이 기능 개발을 가로막고 있는가?</li> <li>계획된 스프린트 스코프에 영향을 주지 않고 현재 스프린트에 추가할 수 있을 정도로 충분히 작은가?</li> <li>이 기술부채를 해결하려는 투두가 백로그에 계획되어있는가?</li> <li>이 기술부채의 영향을 받는 새로운 기능을 다음 스프린트에 넣을 수 있는가?</li>",Vl,Wl,Yl,Zl,$l,hl,cl,dl,ol,lt,Ip="비즈니스 vs 기술부채의 딱 내가 원하는 구도에서의 우선순위 선정 방식이라서 좋았다.",rl,it,Sp="괜찮은 우선순위 선정 방식인 것 같고, 일단 도입해보고 차차 우리 조직에 맞게 개선해보면 좋을 것 같다.",gl,Ct,Up="3. <strong>오버 엔지니어링과 기술 부채</strong>",ti,pt,Xp="기술부채를 판단하는 알고리즘을 만들어놨다는 점에서 비슷한 글이 있어서 가져왔다.",ei,ut,Jp='<a href="http://op.gg" rel="nofollow">op.gg</a> 에서 일하고 계시는 김석준님의 블로그 글이다.',li,nt,Fp="일단 이분은 기술부채를 더 많이 감당해도 괜찮다는 스탠스(더 비즈니스 지향적인)를 가지고 계신다.",ii,xt,Ci,I1=`<code class="language-undefined">솔직히 말해서 나도 한번씩 다 해보고 싶은 것들이다. 뛰어난 개발자일수록
이러한 유혹에 빠지기 쉬운데, 가장 큰 이유는 꼭 필요해서가 아니라,
해보고 싶고 또 할 수 있기 때문이라는 것을 부정할 수 없을 것이다.

반면 CEO 라면 필요한 것의 대부분은 이미 저렴한 가격에 디자인만 입히면
(심지어 디자인도 저렴하다)
바로 서비스를 시작할 수 있는데 왜 저렇게 해야 하나 하는 의문이 생길 것이다.</code>`,pi,st,Gp='<img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/%EA%B8%B0%EC%88%A0%EB%B6%80%EC%B1%84%EC%99%80-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84/2023-11-12-17-25-18.png" alt="alt"/>',ui,vt,ni,S1=`<code class="language-undefined">나는 어플리케이션 개발자로서 엔지니어링과 서비스 운영이라는 두가지 토끼를
쫓아야 한다고 생각한다. 개발자로서 서비스를 운영을 게을리 해서도 안되고,
엔지니어링에 집착해서 빠르게 방향전환을 못해서도 안된다.

하지만 둘 중 하나를 꼭 선택해야 한다면 당연히 서비스 운영이어야 한다.
개발자도 월급이 필요하다. 월급을 받으려면 회사가 기능해야 하고 회사로서
발빠르게 고객에 대처하려면 개발의 도움이 반드시 필요하다.</code>`,xi,si,vi,fi,Ei,bi,Bi,ft,Kp="그래도 존재하는 <strong>기술부채를 해결해야만 하는 상황</strong>",mi,Et,Np="<li>단독 서비스에 한계가 왔다.<ul><li>추가적인 서비스를 개발해야 하는데 레거시 코드를 손보기가 매우 어렵다.</li> <li>이미 매출이 발생하는 레거시를 버릴수는 없고, 이걸 건드리자니 너무나 고생스럽고 그러다보니 당연히 버그가 많다.</li></ul></li> <li>트래픽과 서버 유지/보수 비용이 동시에 가파르게 증가한다.<ul><li>트래픽이 늘어나는 건 확실한데 서버 유지/보수 비용 또한 함께 증가한다.</li> <li>가상화가 되어있지 않아서, 빠르게 스케일 아웃 할 수 없고 다시 줄일수도 없다.</li> <li>데이터베이스를 확장하다보니 서비스 중단이 발생한다.</li></ul></li> <li>신기술 도입이 필요하다.<ul><li>실시간성이 중요해져서 소켓을 도입하려니, 현재 기술 스택에서 개발기간이 크게 늘어난다.</li> <li>차세대를 할만한 여유는 없는데, 지금 기술로는 성장에 방해가 될 정도에 이르렀다.</li> <li>오래된 기술 때문에 좋은 개발자들이 지원하지 않는다.</li></ul></li>",_i,Pi,Ai,Hi,Ti,bt,Qp="기술 부채를 해결할지 결정하는 기준.",Ri,Bt,Vp="<li>이 기술이 없으면 서비스가 불가능한가?<ul><li>가능하다 : 0점</li> <li>불편하다 : 3점</li> <li>불가능하다 : 5점</li></ul></li> <li>이 서비스는 단기간 내에 복잡도가 증가할 것인가?<ul><li>그렇지 않다 : 0점</li> <li>잘 모르겠다 : 1점</li> <li>그렇다 : 3점</li> <li>매우 그렇다 : 5점</li></ul></li> <li>이 기술을 감당할 개발자가 나 말고 또 있는가?<ul><li>그렇지 않다 : -1점</li> <li>1명 : 1점</li> <li>2명 이상 : 3점</li></ul></li> <li>이 서비스의 고객은 어떠한 사람인가?<ul><li>무료 사용자 : 0점</li> <li>유료 사용자 : 3점</li></ul></li> <li>해보고 싶고 일정을 지킬 수 있는가?<ul><li>해보고 싶다 : 1점</li> <li>해보고 싶지만 자신 없다 : 0점</li> <li>두마리 토끼 둘다 가능하다 : 3점</li></ul></li>",wi,Li,Mi,mt,Wp="<strong>결과</strong>",ki,_t,Yp="<li>8점 이하 : 오버 엔지니어링</li> <li>8점~11점 : 기술 부채를 쌓아도 괜찮다</li> <li>12점 이상 : 적정 엔지니어링</li>",zi,ji,yi,ai,qi,Di,Oi,Pt,Zp="2번 글과 달리 기준에서 개발자 리소스를 고려했고,",Ii,At,$p="개발자들이 기술부채를 해결하는 것을 비즈니스적인 문제 해결을 위해서보다 해보고 싶어서 한다는 생각을 고려해서 나온 기준이라 설득력이 더 있었던 것 같다.",Si,Ht,hp='<img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/%EA%B8%B0%EC%88%A0%EB%B6%80%EC%B1%84%EC%99%80-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84/2023-11-12-17-25-48.png" alt="alt"/>',Ui,Tt,cp="직접 창업을 하고 엑싯까지 해보신 개발자분이라서 그런지, 블로그에 비즈니스에 중심을 둔 개발적인 생각들이 많았고 대부분 흥미롭게 읽었다.",Xi,Rt,dp="오늘 정리한 글 중에서 가장 마음이 많이 가는 방식이었다.",Ji,Fi,Gi,Ki,Ni,Qi,Vi,Wi,Yi,wt,op="4. <strong>화해 개발팀이 협업하는 방법</strong>",Zi,Lt,rp="네번째 글은 화해의 글이다. 협업 방법이라고 써있지만 기술부채와 관련된 내용이 있어서 읽어봤다.",$i,Mt,hi,U1=`<code class="language-undefined">원하는 만큼의 기술을 원하는 시기에 모두 개선하거나 교체해나갈 수 있다면 좋겠지만,
늘 사람이 부족할 수밖에 없는 스타트업 실행 조직의 상황에서
기술 부채 개선을 위한 과제 실행은 당장 비즈니스 성장 측면에서는
오히려 실행속도가 저하된 상황을 연출하게 됩니다.

따라서 이 두 가지를 잘 조율하면서 실행해나갈 수 있도록
시기적절한 의사결정들을 해나간다는 것은 늘 어려운 일 같습니다.</code>`,ci,kt,gp="완전 공감되는 문구이다.",di,oi,ri,gi,tC,eC,lC,zt,iC,X1=`<code class="language-undefined">화해팀은 우리가 하는 일들이 우리가 추구하는 가치와 맞닿아있는지를 고민합니다.

화해 개발팀이 추구하는 가치 : “회사, 비즈니스, 팀, 개인의 성장”
가치 판단 기준 : “지속성, 연속성”</code>`,CC,pC,uC,nC,xC,jt,t1="회사, 비즈니스, 팀, 개인의 성장을 모두 추구하는데, 그 사이에서 상충하는 상황이 생긴다면 어떻게 하는지는 글에 나와있지가 않다.",sC,yt,e1="당연히 회사 > 비즈니스 > 팀 > 개인 순 이겠거니 싶기는 하다.",vC,at,l1="그래도 좋게 느낀 점 중 하나는, 팀, 개인의 성장까지도 추구하는 가치로 써놓고 놓치지 않을려고 한다는 점이 인상깊었다.",fC,EC,bC,BC,mC,_C,PC,qt,i1="마무리",AC,Dt,C1="나는 한 동안 회사와 비즈니스의 성장을 최우선 가치로 두고 행동했었다.",HC,Ot,p1="그게 좀 과해서 팀과 개인의 성장을 거의 무시하게 될 정도였다.",TC,It,u1="그런데 최근에 개발자를 채용하기 위해서 JD를 쓰는데, 약간 현타가 왔다. “아 이런 개발팀에 개발자가 지원하고 싶을까? 아닐 것 같은데..”",RC,St,n1="나랑 범수형이야 회사에서 초기멤버고 스톡옵션을 크게 가지고 있기 때문에 회사에서 받아갈 큼지막한 보상을 보고 일할 수 있다.",wC,Ut,x1="그런데 새로 들어올 개발자들에게도 그런식으로 일하기를 강요할 수는 없겠다, 애초에 좋은 개발자가 들어오고 싶지 않겠다 싶은 생각이 들었다.",LC,Xt,s1='<img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/%EA%B8%B0%EC%88%A0%EB%B6%80%EC%B1%84%EC%99%80-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84/2023-11-12-17-28-16.png" alt="alt"/>',MC,Jt,v1="결정적으로 영향을 받은건 jojoldu 의 글과 이 페이스북 글.",kC,Ft,f1="<strong>동시대를 살아가는 개발자가 아니게 된다</strong>",zC,Gt,E1="회사에서 스톡옵션을 실현하기 위해 나는 개발자이기를 포기했다. 현재 회사에서 서버 개발자로 동시대를 살 수 있을거라는 생각이 들지를 않았다.",jC,Kt,b1="동시에 개발자의 커리어보다 자유로운 창업가가 되고 싶은 마음도 한 몫하기는 했지만.",yC,aC,qC,DC,OC,Nt,B1="이제는 나만 개발하는게 아니라, 매니징 해야하는 팀원도 있고, 새로 들어올 사람들도 있다. 그 과정에서 기술적인 성장을 놓치지는 말아야 겠다는 생각이 들었고, 기술 부채 우선순위를 잘 설정해서 개발팀, 개발자 개인의 성장과 결부되는 투두들을 만들어야겠다.",IC,Qt,m1="전에 만났던 토스의 도환님이 그런 이야기를 해줬었다.",SC,Vt,UC,J1=`<code class="language-undefined">토스에 들어오면 오히려 성장을 하기가 힘들어요. 대부분 경력직으로 들어오는데,
성과에 대한 압박이 심하니까 익숙한 스택으로 빨리 빨리 개발을 하게 되더라구요.

그런데 그 와중에도 새로운 스택과 기술로 듀데이트와 요구사항을 다 맞춰내는
개발자들이 있어요. 저는 그런 사람들이 진짜 잘하는 사람이라고 생각해요.</code>`,XC,JC,FC,GC,KC,Wt,_1="앞으로는 프로덕트, 비즈니스 요구사항을 잘 지켜내는 선에서 팀과 개인의 성장을 위해서 다양한 시도들을 해봐야 할 것 같다.",NC,Yt,P1="성장이 힘든 상황에서도 요구사항을 다 맞춰내면서 성장해내는 팀이 잘하는 팀이고, 잘하는 개발자이니까.",QC,Zt,A1="아무튼 오늘은 그런 관점에서 글을 작성하다보니, 기술 부채와 개발자의 성장에 대한 내용이 조금 섞인 것 같다.",VC,$t,H1="끗!",WC,ht,T1="참고자료",YC,ct,R1='<li><a href="https://kadensungbincho.tistory.com/72" rel="nofollow">레거시를 파악하고 변경해나가기: 우선순위와 고려사항들</a></li> <li><a href="https://productcoalition.com/a-practical-prioritization-approach-for-technical-debt-f1eb31b8e409" rel="nofollow">A Practical Prioritization Approach for Technical Debt</a></li> <li><a href="https://seokjun.kim/over-engineering-vs-techincal-debt/" rel="nofollow">오버 엔지니어링과 기술 부채</a></li> <li><a href="https://jojoldu.tistory.com/626" rel="nofollow">2021년 CTO 회고</a> <a href="http://blog.hwahae.co.kr/all/tech/tech-tech/6560/" rel="nofollow">화해 개발팀이 협업하는 방법 - 화해 블로그 | 기술 블로그</a></li> <li><a href="https://medium.com/swlh/how-product-manager-can-help-reduce-technical-debt-202b2e571d6f" rel="nofollow">How Product Manager Can Help Reduce Technical Debt</a></li>';return{c(){s=C("h1"),s.textContent=$C,dt=u(),B=C("pre"),ot=new v(!1),rt=u(),m=C("p"),m.textContent=hC,gt=u(),_=C("p"),_.innerHTML=cC,te=u(),P=C("p"),P.textContent=dC,ee=u(),le=C("hr"),ie=u(),Ce=C("br"),pe=u(),A=C("p"),A.textContent=oC,ue=u(),H=C("p"),H.textContent=rC,ne=u(),T=C("p"),T.innerHTML=gC,xe=u(),R=C("p"),R.textContent=tp,se=u(),ve=C("br"),fe=u(),w=C("p"),w.innerHTML=ep,Ee=u(),L=C("pre"),be=new v(!1),Be=u(),me=C("hr"),_e=u(),Pe=C("br"),Ae=u(),M=C("p"),M.textContent=lp,He=u(),k=C("p"),k.innerHTML=ip,Te=u(),Re=C("br"),we=u(),z=C("p"),z.textContent=Cp,Le=u(),j=C("pre"),Me=new v(!1),ke=u(),ze=C("hr"),je=u(),ye=C("br"),ae=u(),y=C("p"),y.textContent=pp,qe=u(),De=C("br"),Oe=u(),a=C("h1"),a.textContent=up,Ie=u(),q=C("p"),q.textContent=np,Se=u(),D=C("p"),D.innerHTML=xp,Ue=u(),O=C("p"),O.textContent=sp,Xe=u(),I=C("p"),I.innerHTML=vp,Je=u(),Fe=C("br"),Ge=u(),Ke=C("br"),Ne=u(),Qe=C("br"),Ve=u(),S=C("p"),S.textContent=fp,We=u(),U=C("p"),U.textContent=Ep,Ye=u(),X=C("p"),X.innerHTML=bp,Ze=u(),$e=C("br"),he=u(),ce=C("br"),de=u(),oe=C("br"),re=u(),J=C("p"),J.textContent=Bp,ge=u(),F=C("p"),F.textContent=mp,tl=u(),G=C("p"),G.innerHTML=_p,el=u(),ll=C("br"),il=u(),Cl=C("br"),pl=u(),ul=C("br"),nl=u(),K=C("p"),K.innerHTML=Pp,xl=u(),N=C("p"),N.textContent=Ap,sl=u(),Q=C("p"),Q.textContent=Hp,vl=u(),fl=C("br"),El=u(),bl=C("br"),Bl=u(),ml=C("br"),_l=u(),V=C("h1"),V.textContent=Tp,Pl=u(),W=C("p"),W.textContent=Rp,Al=u(),Y=C("p"),Y.innerHTML=wp,Hl=u(),Z=C("p"),Z.textContent=Lp,Tl=u(),Rl=C("br"),wl=u(),Ll=C("br"),Ml=u(),$=C("p"),$.textContent=Mp,kl=u(),h=C("p"),h.innerHTML=kp,zl=u(),c=C("p"),c.innerHTML=zp,jl=u(),yl=C("br"),al=u(),ql=C("br"),Dl=u(),d=C("p"),d.textContent=jp,Ol=u(),o=C("p"),o.textContent=yp,Il=u(),r=C("p"),r.textContent=ap,Sl=u(),Ul=C("br"),Xl=u(),Jl=C("br"),Fl=u(),Gl=C("br"),Kl=u(),g=C("p"),g.textContent=qp,Nl=u(),tt=C("p"),tt.innerHTML=Dp,Ql=u(),et=C("ol"),et.innerHTML=Op,Vl=u(),Wl=C("br"),Yl=u(),Zl=C("br"),$l=u(),hl=C("br"),cl=u(),dl=C("hr"),ol=u(),lt=C("p"),lt.textContent=Ip,rl=u(),it=C("p"),it.textContent=Sp,gl=u(),Ct=C("h1"),Ct.innerHTML=Up,ti=u(),pt=C("p"),pt.textContent=Xp,ei=u(),ut=C("p"),ut.innerHTML=Jp,li=u(),nt=C("p"),nt.textContent=Fp,ii=u(),xt=C("pre"),Ci=new v(!1),pi=u(),st=C("p"),st.innerHTML=Gp,ui=u(),vt=C("pre"),ni=new v(!1),xi=u(),si=C("br"),vi=u(),fi=C("br"),Ei=u(),bi=C("br"),Bi=u(),ft=C("p"),ft.innerHTML=Kp,mi=u(),Et=C("ol"),Et.innerHTML=Np,_i=u(),Pi=C("br"),Ai=u(),Hi=C("br"),Ti=u(),bt=C("p"),bt.textContent=Qp,Ri=u(),Bt=C("ol"),Bt.innerHTML=Vp,wi=u(),Li=C("br"),Mi=u(),mt=C("p"),mt.innerHTML=Wp,ki=u(),_t=C("ul"),_t.innerHTML=Yp,zi=u(),ji=C("br"),yi=u(),ai=C("br"),qi=u(),Di=C("br"),Oi=u(),Pt=C("p"),Pt.textContent=Zp,Ii=u(),At=C("p"),At.textContent=$p,Si=u(),Ht=C("p"),Ht.innerHTML=hp,Ui=u(),Tt=C("p"),Tt.textContent=cp,Xi=u(),Rt=C("p"),Rt.textContent=dp,Ji=u(),Fi=C("br"),Gi=u(),Ki=C("br"),Ni=u(),Qi=C("br"),Vi=u(),Wi=C("br"),Yi=u(),wt=C("h1"),wt.innerHTML=op,Zi=u(),Lt=C("p"),Lt.textContent=rp,$i=u(),Mt=C("pre"),hi=new v(!1),ci=u(),kt=C("p"),kt.textContent=gp,di=u(),oi=C("br"),ri=u(),gi=C("br"),tC=u(),eC=C("br"),lC=u(),zt=C("pre"),iC=new v(!1),CC=u(),pC=C("br"),uC=u(),nC=C("br"),xC=u(),jt=C("p"),jt.textContent=t1,sC=u(),yt=C("p"),yt.textContent=e1,vC=u(),at=C("p"),at.textContent=l1,fC=u(),EC=C("br"),bC=u(),BC=C("br"),mC=u(),_C=C("br"),PC=u(),qt=C("h1"),qt.textContent=i1,AC=u(),Dt=C("p"),Dt.textContent=C1,HC=u(),Ot=C("p"),Ot.textContent=p1,TC=u(),It=C("p"),It.textContent=u1,RC=u(),St=C("p"),St.textContent=n1,wC=u(),Ut=C("p"),Ut.textContent=x1,LC=u(),Xt=C("p"),Xt.innerHTML=s1,MC=u(),Jt=C("p"),Jt.textContent=v1,kC=u(),Ft=C("p"),Ft.innerHTML=f1,zC=u(),Gt=C("p"),Gt.textContent=E1,jC=u(),Kt=C("p"),Kt.textContent=b1,yC=u(),aC=C("br"),qC=u(),DC=C("br"),OC=u(),Nt=C("p"),Nt.textContent=B1,IC=u(),Qt=C("p"),Qt.textContent=m1,SC=u(),Vt=C("pre"),UC=new v(!1),XC=u(),JC=C("br"),FC=u(),GC=C("br"),KC=u(),Wt=C("p"),Wt.textContent=_1,NC=u(),Yt=C("p"),Yt.textContent=P1,QC=u(),Zt=C("p"),Zt.textContent=A1,VC=u(),$t=C("p"),$t.textContent=H1,WC=u(),ht=C("h1"),ht.textContent=T1,YC=u(),ct=C("ul"),ct.innerHTML=R1,this.h()},l(t){s=p(t,"H1",{"data-svelte-h":!0}),x(s)!=="svelte-190wqwm"&&(s.textContent=$C),dt=n(t),B=p(t,"PRE",{class:!0});var l=f(B);ot=E(l,!1),l.forEach(e),rt=n(t),m=p(t,"P",{"data-svelte-h":!0}),x(m)!=="svelte-m4bgp8"&&(m.textContent=hC),gt=n(t),_=p(t,"P",{"data-svelte-h":!0}),x(_)!=="svelte-1ifp04a"&&(_.innerHTML=cC),te=n(t),P=p(t,"P",{"data-svelte-h":!0}),x(P)!=="svelte-pk3svm"&&(P.textContent=dC),ee=n(t),le=p(t,"HR",{}),ie=n(t),Ce=p(t,"BR",{}),pe=n(t),A=p(t,"P",{"data-svelte-h":!0}),x(A)!=="svelte-11de8pw"&&(A.textContent=oC),ue=n(t),H=p(t,"P",{"data-svelte-h":!0}),x(H)!=="svelte-12cd7u0"&&(H.textContent=rC),ne=n(t),T=p(t,"P",{"data-svelte-h":!0}),x(T)!=="svelte-p7rtnu"&&(T.innerHTML=gC),xe=n(t),R=p(t,"P",{"data-svelte-h":!0}),x(R)!=="svelte-yqy65n"&&(R.textContent=tp),se=n(t),ve=p(t,"BR",{}),fe=n(t),w=p(t,"P",{"data-svelte-h":!0}),x(w)!=="svelte-itj169"&&(w.innerHTML=ep),Ee=n(t),L=p(t,"PRE",{class:!0});var w1=f(L);be=E(w1,!1),w1.forEach(e),Be=n(t),me=p(t,"HR",{}),_e=n(t),Pe=p(t,"BR",{}),Ae=n(t),M=p(t,"P",{"data-svelte-h":!0}),x(M)!=="svelte-1hfde95"&&(M.textContent=lp),He=n(t),k=p(t,"P",{"data-svelte-h":!0}),x(k)!=="svelte-nhr55w"&&(k.innerHTML=ip),Te=n(t),Re=p(t,"BR",{}),we=n(t),z=p(t,"P",{"data-svelte-h":!0}),x(z)!=="svelte-mftc9k"&&(z.textContent=Cp),Le=n(t),j=p(t,"PRE",{class:!0});var L1=f(j);Me=E(L1,!1),L1.forEach(e),ke=n(t),ze=p(t,"HR",{}),je=n(t),ye=p(t,"BR",{}),ae=n(t),y=p(t,"P",{"data-svelte-h":!0}),x(y)!=="svelte-uxp3a7"&&(y.textContent=pp),qe=n(t),De=p(t,"BR",{}),Oe=n(t),a=p(t,"H1",{"data-svelte-h":!0}),x(a)!=="svelte-1qtgiv2"&&(a.textContent=up),Ie=n(t),q=p(t,"P",{"data-svelte-h":!0}),x(q)!=="svelte-17wfpo2"&&(q.textContent=np),Se=n(t),D=p(t,"P",{"data-svelte-h":!0}),x(D)!=="svelte-jvvwy5"&&(D.innerHTML=xp),Ue=n(t),O=p(t,"P",{"data-svelte-h":!0}),x(O)!=="svelte-tccn63"&&(O.textContent=sp),Xe=n(t),I=p(t,"P",{"data-svelte-h":!0}),x(I)!=="svelte-ot9i9r"&&(I.innerHTML=vp),Je=n(t),Fe=p(t,"BR",{}),Ge=n(t),Ke=p(t,"BR",{}),Ne=n(t),Qe=p(t,"BR",{}),Ve=n(t),S=p(t,"P",{"data-svelte-h":!0}),x(S)!=="svelte-mmdyyz"&&(S.textContent=fp),We=n(t),U=p(t,"P",{"data-svelte-h":!0}),x(U)!=="svelte-2ni4i3"&&(U.textContent=Ep),Ye=n(t),X=p(t,"P",{"data-svelte-h":!0}),x(X)!=="svelte-1lt4r83"&&(X.innerHTML=bp),Ze=n(t),$e=p(t,"BR",{}),he=n(t),ce=p(t,"BR",{}),de=n(t),oe=p(t,"BR",{}),re=n(t),J=p(t,"P",{"data-svelte-h":!0}),x(J)!=="svelte-1j7p30o"&&(J.textContent=Bp),ge=n(t),F=p(t,"P",{"data-svelte-h":!0}),x(F)!=="svelte-2qj42u"&&(F.textContent=mp),tl=n(t),G=p(t,"P",{"data-svelte-h":!0}),x(G)!=="svelte-12syqmt"&&(G.innerHTML=_p),el=n(t),ll=p(t,"BR",{}),il=n(t),Cl=p(t,"BR",{}),pl=n(t),ul=p(t,"BR",{}),nl=n(t),K=p(t,"P",{"data-svelte-h":!0}),x(K)!=="svelte-bypqxn"&&(K.innerHTML=Pp),xl=n(t),N=p(t,"P",{"data-svelte-h":!0}),x(N)!=="svelte-18w3jbo"&&(N.textContent=Ap),sl=n(t),Q=p(t,"P",{"data-svelte-h":!0}),x(Q)!=="svelte-icr01v"&&(Q.textContent=Hp),vl=n(t),fl=p(t,"BR",{}),El=n(t),bl=p(t,"BR",{}),Bl=n(t),ml=p(t,"BR",{}),_l=n(t),V=p(t,"H1",{"data-svelte-h":!0}),x(V)!=="svelte-18ldimo"&&(V.textContent=Tp),Pl=n(t),W=p(t,"P",{"data-svelte-h":!0}),x(W)!=="svelte-1qrk5za"&&(W.textContent=Rp),Al=n(t),Y=p(t,"P",{"data-svelte-h":!0}),x(Y)!=="svelte-h1b02v"&&(Y.innerHTML=wp),Hl=n(t),Z=p(t,"P",{"data-svelte-h":!0}),x(Z)!=="svelte-1jwzyv1"&&(Z.textContent=Lp),Tl=n(t),Rl=p(t,"BR",{}),wl=n(t),Ll=p(t,"BR",{}),Ml=n(t),$=p(t,"P",{"data-svelte-h":!0}),x($)!=="svelte-1b9arvi"&&($.textContent=Mp),kl=n(t),h=p(t,"P",{"data-svelte-h":!0}),x(h)!=="svelte-15n5qjn"&&(h.innerHTML=kp),zl=n(t),c=p(t,"P",{"data-svelte-h":!0}),x(c)!=="svelte-1wn40g3"&&(c.innerHTML=zp),jl=n(t),yl=p(t,"BR",{}),al=n(t),ql=p(t,"BR",{}),Dl=n(t),d=p(t,"P",{"data-svelte-h":!0}),x(d)!=="svelte-1p50sbe"&&(d.textContent=jp),Ol=n(t),o=p(t,"P",{"data-svelte-h":!0}),x(o)!=="svelte-fjhjfr"&&(o.textContent=yp),Il=n(t),r=p(t,"P",{"data-svelte-h":!0}),x(r)!=="svelte-1dnuf8m"&&(r.textContent=ap),Sl=n(t),Ul=p(t,"BR",{}),Xl=n(t),Jl=p(t,"BR",{}),Fl=n(t),Gl=p(t,"BR",{}),Kl=n(t),g=p(t,"P",{"data-svelte-h":!0}),x(g)!=="svelte-7y6oyt"&&(g.textContent=qp),Nl=n(t),tt=p(t,"P",{"data-svelte-h":!0}),x(tt)!=="svelte-lh2e10"&&(tt.innerHTML=Dp),Ql=n(t),et=p(t,"OL",{"data-svelte-h":!0}),x(et)!=="svelte-1xoyf49"&&(et.innerHTML=Op),Vl=n(t),Wl=p(t,"BR",{}),Yl=n(t),Zl=p(t,"BR",{}),$l=n(t),hl=p(t,"BR",{}),cl=n(t),dl=p(t,"HR",{}),ol=n(t),lt=p(t,"P",{"data-svelte-h":!0}),x(lt)!=="svelte-1pl4tjq"&&(lt.textContent=Ip),rl=n(t),it=p(t,"P",{"data-svelte-h":!0}),x(it)!=="svelte-fu6ewe"&&(it.textContent=Sp),gl=n(t),Ct=p(t,"H1",{"data-svelte-h":!0}),x(Ct)!=="svelte-tcfse3"&&(Ct.innerHTML=Up),ti=n(t),pt=p(t,"P",{"data-svelte-h":!0}),x(pt)!=="svelte-hi3ezd"&&(pt.textContent=Xp),ei=n(t),ut=p(t,"P",{"data-svelte-h":!0}),x(ut)!=="svelte-10xpm2k"&&(ut.innerHTML=Jp),li=n(t),nt=p(t,"P",{"data-svelte-h":!0}),x(nt)!=="svelte-1e868fk"&&(nt.textContent=Fp),ii=n(t),xt=p(t,"PRE",{class:!0});var M1=f(xt);Ci=E(M1,!1),M1.forEach(e),pi=n(t),st=p(t,"P",{"data-svelte-h":!0}),x(st)!=="svelte-1dsitum"&&(st.innerHTML=Gp),ui=n(t),vt=p(t,"PRE",{class:!0});var k1=f(vt);ni=E(k1,!1),k1.forEach(e),xi=n(t),si=p(t,"BR",{}),vi=n(t),fi=p(t,"BR",{}),Ei=n(t),bi=p(t,"BR",{}),Bi=n(t),ft=p(t,"P",{"data-svelte-h":!0}),x(ft)!=="svelte-uuhy09"&&(ft.innerHTML=Kp),mi=n(t),Et=p(t,"OL",{"data-svelte-h":!0}),x(Et)!=="svelte-il8edc"&&(Et.innerHTML=Np),_i=n(t),Pi=p(t,"BR",{}),Ai=n(t),Hi=p(t,"BR",{}),Ti=n(t),bt=p(t,"P",{"data-svelte-h":!0}),x(bt)!=="svelte-i1bekv"&&(bt.textContent=Qp),Ri=n(t),Bt=p(t,"OL",{"data-svelte-h":!0}),x(Bt)!=="svelte-1im7qcz"&&(Bt.innerHTML=Vp),wi=n(t),Li=p(t,"BR",{}),Mi=n(t),mt=p(t,"P",{"data-svelte-h":!0}),x(mt)!=="svelte-1esrlzd"&&(mt.innerHTML=Wp),ki=n(t),_t=p(t,"UL",{"data-svelte-h":!0}),x(_t)!=="svelte-1q9afme"&&(_t.innerHTML=Yp),zi=n(t),ji=p(t,"BR",{}),yi=n(t),ai=p(t,"BR",{}),qi=n(t),Di=p(t,"BR",{}),Oi=n(t),Pt=p(t,"P",{"data-svelte-h":!0}),x(Pt)!=="svelte-1iob562"&&(Pt.textContent=Zp),Ii=n(t),At=p(t,"P",{"data-svelte-h":!0}),x(At)!=="svelte-1tf7kne"&&(At.textContent=$p),Si=n(t),Ht=p(t,"P",{"data-svelte-h":!0}),x(Ht)!=="svelte-1m7kmmx"&&(Ht.innerHTML=hp),Ui=n(t),Tt=p(t,"P",{"data-svelte-h":!0}),x(Tt)!=="svelte-56bh89"&&(Tt.textContent=cp),Xi=n(t),Rt=p(t,"P",{"data-svelte-h":!0}),x(Rt)!=="svelte-nms19d"&&(Rt.textContent=dp),Ji=n(t),Fi=p(t,"BR",{}),Gi=n(t),Ki=p(t,"BR",{}),Ni=n(t),Qi=p(t,"BR",{}),Vi=n(t),Wi=p(t,"BR",{}),Yi=n(t),wt=p(t,"H1",{"data-svelte-h":!0}),x(wt)!=="svelte-8wwddl"&&(wt.innerHTML=op),Zi=n(t),Lt=p(t,"P",{"data-svelte-h":!0}),x(Lt)!=="svelte-m3k1z2"&&(Lt.textContent=rp),$i=n(t),Mt=p(t,"PRE",{class:!0});var z1=f(Mt);hi=E(z1,!1),z1.forEach(e),ci=n(t),kt=p(t,"P",{"data-svelte-h":!0}),x(kt)!=="svelte-1chqtbr"&&(kt.textContent=gp),di=n(t),oi=p(t,"BR",{}),ri=n(t),gi=p(t,"BR",{}),tC=n(t),eC=p(t,"BR",{}),lC=n(t),zt=p(t,"PRE",{class:!0});var j1=f(zt);iC=E(j1,!1),j1.forEach(e),CC=n(t),pC=p(t,"BR",{}),uC=n(t),nC=p(t,"BR",{}),xC=n(t),jt=p(t,"P",{"data-svelte-h":!0}),x(jt)!=="svelte-krv0so"&&(jt.textContent=t1),sC=n(t),yt=p(t,"P",{"data-svelte-h":!0}),x(yt)!=="svelte-15p5e5p"&&(yt.textContent=e1),vC=n(t),at=p(t,"P",{"data-svelte-h":!0}),x(at)!=="svelte-1e72ncr"&&(at.textContent=l1),fC=n(t),EC=p(t,"BR",{}),bC=n(t),BC=p(t,"BR",{}),mC=n(t),_C=p(t,"BR",{}),PC=n(t),qt=p(t,"H1",{"data-svelte-h":!0}),x(qt)!=="svelte-1hmxnju"&&(qt.textContent=i1),AC=n(t),Dt=p(t,"P",{"data-svelte-h":!0}),x(Dt)!=="svelte-1ovldvj"&&(Dt.textContent=C1),HC=n(t),Ot=p(t,"P",{"data-svelte-h":!0}),x(Ot)!=="svelte-1ksq8s7"&&(Ot.textContent=p1),TC=n(t),It=p(t,"P",{"data-svelte-h":!0}),x(It)!=="svelte-v7sc8k"&&(It.textContent=u1),RC=n(t),St=p(t,"P",{"data-svelte-h":!0}),x(St)!=="svelte-elhwev"&&(St.textContent=n1),wC=n(t),Ut=p(t,"P",{"data-svelte-h":!0}),x(Ut)!=="svelte-1073sxr"&&(Ut.textContent=x1),LC=n(t),Xt=p(t,"P",{"data-svelte-h":!0}),x(Xt)!=="svelte-1pehidn"&&(Xt.innerHTML=s1),MC=n(t),Jt=p(t,"P",{"data-svelte-h":!0}),x(Jt)!=="svelte-1xcgwk7"&&(Jt.textContent=v1),kC=n(t),Ft=p(t,"P",{"data-svelte-h":!0}),x(Ft)!=="svelte-1p4hdhi"&&(Ft.innerHTML=f1),zC=n(t),Gt=p(t,"P",{"data-svelte-h":!0}),x(Gt)!=="svelte-7wlm7r"&&(Gt.textContent=E1),jC=n(t),Kt=p(t,"P",{"data-svelte-h":!0}),x(Kt)!=="svelte-zkm17m"&&(Kt.textContent=b1),yC=n(t),aC=p(t,"BR",{}),qC=n(t),DC=p(t,"BR",{}),OC=n(t),Nt=p(t,"P",{"data-svelte-h":!0}),x(Nt)!=="svelte-qbyjl9"&&(Nt.textContent=B1),IC=n(t),Qt=p(t,"P",{"data-svelte-h":!0}),x(Qt)!=="svelte-5ujc4q"&&(Qt.textContent=m1),SC=n(t),Vt=p(t,"PRE",{class:!0});var y1=f(Vt);UC=E(y1,!1),y1.forEach(e),XC=n(t),JC=p(t,"BR",{}),FC=n(t),GC=p(t,"BR",{}),KC=n(t),Wt=p(t,"P",{"data-svelte-h":!0}),x(Wt)!=="svelte-d7sjdh"&&(Wt.textContent=_1),NC=n(t),Yt=p(t,"P",{"data-svelte-h":!0}),x(Yt)!=="svelte-zmccwl"&&(Yt.textContent=P1),QC=n(t),Zt=p(t,"P",{"data-svelte-h":!0}),x(Zt)!=="svelte-cl1jjv"&&(Zt.textContent=A1),VC=n(t),$t=p(t,"P",{"data-svelte-h":!0}),x($t)!=="svelte-w2f9sw"&&($t.textContent=H1),WC=n(t),ht=p(t,"H1",{"data-svelte-h":!0}),x(ht)!=="svelte-bn9628"&&(ht.textContent=T1),YC=n(t),ct=p(t,"UL",{"data-svelte-h":!0}),x(ct)!=="svelte-144xhuo"&&(ct.innerHTML=R1),this.h()},h(){ot.a=null,b(B,"class","language-undefined"),be.a=null,b(L,"class","language-python"),Me.a=null,b(j,"class","language-python"),Ci.a=null,b(xt,"class","language-undefined"),ni.a=null,b(vt,"class","language-undefined"),hi.a=null,b(Mt,"class","language-undefined"),iC.a=null,b(zt,"class","language-undefined"),UC.a=null,b(Vt,"class","language-undefined")},m(t,l){i(t,s,l),i(t,dt,l),i(t,B,l),ot.m(q1,B),i(t,rt,l),i(t,m,l),i(t,gt,l),i(t,_,l),i(t,te,l),i(t,P,l),i(t,ee,l),i(t,le,l),i(t,ie,l),i(t,Ce,l),i(t,pe,l),i(t,A,l),i(t,ue,l),i(t,H,l),i(t,ne,l),i(t,T,l),i(t,xe,l),i(t,R,l),i(t,se,l),i(t,ve,l),i(t,fe,l),i(t,w,l),i(t,Ee,l),i(t,L,l),be.m(D1,L),i(t,Be,l),i(t,me,l),i(t,_e,l),i(t,Pe,l),i(t,Ae,l),i(t,M,l),i(t,He,l),i(t,k,l),i(t,Te,l),i(t,Re,l),i(t,we,l),i(t,z,l),i(t,Le,l),i(t,j,l),Me.m(O1,j),i(t,ke,l),i(t,ze,l),i(t,je,l),i(t,ye,l),i(t,ae,l),i(t,y,l),i(t,qe,l),i(t,De,l),i(t,Oe,l),i(t,a,l),i(t,Ie,l),i(t,q,l),i(t,Se,l),i(t,D,l),i(t,Ue,l),i(t,O,l),i(t,Xe,l),i(t,I,l),i(t,Je,l),i(t,Fe,l),i(t,Ge,l),i(t,Ke,l),i(t,Ne,l),i(t,Qe,l),i(t,Ve,l),i(t,S,l),i(t,We,l),i(t,U,l),i(t,Ye,l),i(t,X,l),i(t,Ze,l),i(t,$e,l),i(t,he,l),i(t,ce,l),i(t,de,l),i(t,oe,l),i(t,re,l),i(t,J,l),i(t,ge,l),i(t,F,l),i(t,tl,l),i(t,G,l),i(t,el,l),i(t,ll,l),i(t,il,l),i(t,Cl,l),i(t,pl,l),i(t,ul,l),i(t,nl,l),i(t,K,l),i(t,xl,l),i(t,N,l),i(t,sl,l),i(t,Q,l),i(t,vl,l),i(t,fl,l),i(t,El,l),i(t,bl,l),i(t,Bl,l),i(t,ml,l),i(t,_l,l),i(t,V,l),i(t,Pl,l),i(t,W,l),i(t,Al,l),i(t,Y,l),i(t,Hl,l),i(t,Z,l),i(t,Tl,l),i(t,Rl,l),i(t,wl,l),i(t,Ll,l),i(t,Ml,l),i(t,$,l),i(t,kl,l),i(t,h,l),i(t,zl,l),i(t,c,l),i(t,jl,l),i(t,yl,l),i(t,al,l),i(t,ql,l),i(t,Dl,l),i(t,d,l),i(t,Ol,l),i(t,o,l),i(t,Il,l),i(t,r,l),i(t,Sl,l),i(t,Ul,l),i(t,Xl,l),i(t,Jl,l),i(t,Fl,l),i(t,Gl,l),i(t,Kl,l),i(t,g,l),i(t,Nl,l),i(t,tt,l),i(t,Ql,l),i(t,et,l),i(t,Vl,l),i(t,Wl,l),i(t,Yl,l),i(t,Zl,l),i(t,$l,l),i(t,hl,l),i(t,cl,l),i(t,dl,l),i(t,ol,l),i(t,lt,l),i(t,rl,l),i(t,it,l),i(t,gl,l),i(t,Ct,l),i(t,ti,l),i(t,pt,l),i(t,ei,l),i(t,ut,l),i(t,li,l),i(t,nt,l),i(t,ii,l),i(t,xt,l),Ci.m(I1,xt),i(t,pi,l),i(t,st,l),i(t,ui,l),i(t,vt,l),ni.m(S1,vt),i(t,xi,l),i(t,si,l),i(t,vi,l),i(t,fi,l),i(t,Ei,l),i(t,bi,l),i(t,Bi,l),i(t,ft,l),i(t,mi,l),i(t,Et,l),i(t,_i,l),i(t,Pi,l),i(t,Ai,l),i(t,Hi,l),i(t,Ti,l),i(t,bt,l),i(t,Ri,l),i(t,Bt,l),i(t,wi,l),i(t,Li,l),i(t,Mi,l),i(t,mt,l),i(t,ki,l),i(t,_t,l),i(t,zi,l),i(t,ji,l),i(t,yi,l),i(t,ai,l),i(t,qi,l),i(t,Di,l),i(t,Oi,l),i(t,Pt,l),i(t,Ii,l),i(t,At,l),i(t,Si,l),i(t,Ht,l),i(t,Ui,l),i(t,Tt,l),i(t,Xi,l),i(t,Rt,l),i(t,Ji,l),i(t,Fi,l),i(t,Gi,l),i(t,Ki,l),i(t,Ni,l),i(t,Qi,l),i(t,Vi,l),i(t,Wi,l),i(t,Yi,l),i(t,wt,l),i(t,Zi,l),i(t,Lt,l),i(t,$i,l),i(t,Mt,l),hi.m(U1,Mt),i(t,ci,l),i(t,kt,l),i(t,di,l),i(t,oi,l),i(t,ri,l),i(t,gi,l),i(t,tC,l),i(t,eC,l),i(t,lC,l),i(t,zt,l),iC.m(X1,zt),i(t,CC,l),i(t,pC,l),i(t,uC,l),i(t,nC,l),i(t,xC,l),i(t,jt,l),i(t,sC,l),i(t,yt,l),i(t,vC,l),i(t,at,l),i(t,fC,l),i(t,EC,l),i(t,bC,l),i(t,BC,l),i(t,mC,l),i(t,_C,l),i(t,PC,l),i(t,qt,l),i(t,AC,l),i(t,Dt,l),i(t,HC,l),i(t,Ot,l),i(t,TC,l),i(t,It,l),i(t,RC,l),i(t,St,l),i(t,wC,l),i(t,Ut,l),i(t,LC,l),i(t,Xt,l),i(t,MC,l),i(t,Jt,l),i(t,kC,l),i(t,Ft,l),i(t,zC,l),i(t,Gt,l),i(t,jC,l),i(t,Kt,l),i(t,yC,l),i(t,aC,l),i(t,qC,l),i(t,DC,l),i(t,OC,l),i(t,Nt,l),i(t,IC,l),i(t,Qt,l),i(t,SC,l),i(t,Vt,l),UC.m(J1,Vt),i(t,XC,l),i(t,JC,l),i(t,FC,l),i(t,GC,l),i(t,KC,l),i(t,Wt,l),i(t,NC,l),i(t,Yt,l),i(t,QC,l),i(t,Zt,l),i(t,VC,l),i(t,$t,l),i(t,WC,l),i(t,ht,l),i(t,YC,l),i(t,ct,l)},p:ZC,i:ZC,o:ZC,d(t){t&&(e(s),e(dt),e(B),e(rt),e(m),e(gt),e(_),e(te),e(P),e(ee),e(le),e(ie),e(Ce),e(pe),e(A),e(ue),e(H),e(ne),e(T),e(xe),e(R),e(se),e(ve),e(fe),e(w),e(Ee),e(L),e(Be),e(me),e(_e),e(Pe),e(Ae),e(M),e(He),e(k),e(Te),e(Re),e(we),e(z),e(Le),e(j),e(ke),e(ze),e(je),e(ye),e(ae),e(y),e(qe),e(De),e(Oe),e(a),e(Ie),e(q),e(Se),e(D),e(Ue),e(O),e(Xe),e(I),e(Je),e(Fe),e(Ge),e(Ke),e(Ne),e(Qe),e(Ve),e(S),e(We),e(U),e(Ye),e(X),e(Ze),e($e),e(he),e(ce),e(de),e(oe),e(re),e(J),e(ge),e(F),e(tl),e(G),e(el),e(ll),e(il),e(Cl),e(pl),e(ul),e(nl),e(K),e(xl),e(N),e(sl),e(Q),e(vl),e(fl),e(El),e(bl),e(Bl),e(ml),e(_l),e(V),e(Pl),e(W),e(Al),e(Y),e(Hl),e(Z),e(Tl),e(Rl),e(wl),e(Ll),e(Ml),e($),e(kl),e(h),e(zl),e(c),e(jl),e(yl),e(al),e(ql),e(Dl),e(d),e(Ol),e(o),e(Il),e(r),e(Sl),e(Ul),e(Xl),e(Jl),e(Fl),e(Gl),e(Kl),e(g),e(Nl),e(tt),e(Ql),e(et),e(Vl),e(Wl),e(Yl),e(Zl),e($l),e(hl),e(cl),e(dl),e(ol),e(lt),e(rl),e(it),e(gl),e(Ct),e(ti),e(pt),e(ei),e(ut),e(li),e(nt),e(ii),e(xt),e(pi),e(st),e(ui),e(vt),e(xi),e(si),e(vi),e(fi),e(Ei),e(bi),e(Bi),e(ft),e(mi),e(Et),e(_i),e(Pi),e(Ai),e(Hi),e(Ti),e(bt),e(Ri),e(Bt),e(wi),e(Li),e(Mi),e(mt),e(ki),e(_t),e(zi),e(ji),e(yi),e(ai),e(qi),e(Di),e(Oi),e(Pt),e(Ii),e(At),e(Si),e(Ht),e(Ui),e(Tt),e(Xi),e(Rt),e(Ji),e(Fi),e(Gi),e(Ki),e(Ni),e(Qi),e(Vi),e(Wi),e(Yi),e(wt),e(Zi),e(Lt),e($i),e(Mt),e(ci),e(kt),e(di),e(oi),e(ri),e(gi),e(tC),e(eC),e(lC),e(zt),e(CC),e(pC),e(uC),e(nC),e(xC),e(jt),e(sC),e(yt),e(vC),e(at),e(fC),e(EC),e(bC),e(BC),e(mC),e(_C),e(PC),e(qt),e(AC),e(Dt),e(HC),e(Ot),e(TC),e(It),e(RC),e(St),e(wC),e(Ut),e(LC),e(Xt),e(MC),e(Jt),e(kC),e(Ft),e(zC),e(Gt),e(jC),e(Kt),e(yC),e(aC),e(qC),e(DC),e(OC),e(Nt),e(IC),e(Qt),e(SC),e(Vt),e(XC),e(JC),e(FC),e(GC),e(KC),e(Wt),e(NC),e(Yt),e(QC),e(Zt),e(VC),e($t),e(WC),e(ht),e(YC),e(ct))}}}const W1={title:"기술부채와 우선순위",description:"IT 업계가 대부분 그렇겠지만 특히 초기 스타트업은 매 순간이 기술 부채와의 전쟁이다. 당장 기술 부채를 해결할 만큼 충분한 자원을 투자할 수 없거나, 비즈니스 로드맵 상 아직 기술 부채가 중요하게 여겨지지 않는 지점에 위치하기 때문에 초기 스타트업의 개발자들은 딜레마에 빠진다.",date:"2023-11-12",categories:["기술부채","의사결정"],published:!0,thumbnail:"https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/기술부채와-우선순위/2023-11-12-17-17-43.png"};class Y1 extends G1{constructor(s){super(),K1(this,s,null,N1,F1,{})}}export{Y1 as default,W1 as metadata};
