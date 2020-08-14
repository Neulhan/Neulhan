<script>
  let yOffset = 0;
  let prevScrollHeight = 0;
  $: currentYOffset = yOffset - prevScrollHeight;
  let sceneNow = 0;
  let text = "";
  let time = 0;
  const scene = [
    {
      scrollHeight: 0,
      heightNum: 2,
      background: "images/mountain.jpg",
    },
    {
      scrollHeight: 0,
      heightNum: 2,
    },
    {
      scrollHeight: 0,
      heightNum: 3,
    },
    {
      scrollHeight: 0,
      heightNum: 4,
    },
  ];
  const scrollLoop = () => {
    console.log(yOffset, sceneNow, currentYOffset);
    prevScrollHeight = 0;

    for (let i = 0; i < sceneNow; i++) {
      prevScrollHeight += scene[i].scrollHeight;
    }
    if (yOffset > scene[sceneNow].scrollHeight + prevScrollHeight) {
      sceneNow++;
    }
    if (yOffset < prevScrollHeight) {
      if (sceneNow == 0) return;
      sceneNow--;
    }
    playAnimation();
  };
  const setLayout = () => {
    for (let i = 0; i < scene.length; i++) {
      scene[i].scrollHeight = window.innerHeight * scene[i].heightNum;
    }
    scrollLoop();
  };
  const playAnimation = () => {
    switch (sceneNow) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
    }
  };
  window.addEventListener("load", () => {
    setLayout();
  });

  window.addEventListener("scroll", () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  });
</script>

<style>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
    margin: 0;
  }
  section.s0 {
    background-position: top;
    background-repeat: no-repeat;
  }
  .sticky-elem {
    position: fixed;
    top: 300px;
    opacity: 0;
    transition: color 1s, opacity 1s;
  }
  .page0 > .s0 > .sticky-elem {
    opacity: 1;
  }
  neulhan {
    font-size: 120px;
    width: 800px;
    font-weight: 900;
    text-align: center;
    color: #292931;
  }
  .sub {
    color: #292931;
    font-size: 36px;
    font-weight: 100;
    margin-top: 1rem;
    text-align: center;
  }
</style>

<main class={`page${sceneNow}`}>
  <section
    class="s0 {scene[0].type}"
    style="height: {scene[0].scrollHeight}px; background-image: url('{scene[0].background}');
    background-size: auto {300 - (yOffset / scene[0].scrollHeight) * 300 < 100 ? 100 : 300 - (yOffset / scene[0].scrollHeight) * 300}%">
    <div class="sticky-elem" style="top: {(window.innerHeight - 203) / 2}px;">
      <neulhan>개발자 늘한</neulhan>
      <div class="sub">늘 한결같은 즐거움을 좇고 있습니다</div>
    </div>
  </section>
  <section class="s1" style="height: {scene[1].scrollHeight}px">
    <input type="text" bind:value={text} />
    <div>입력값은 {text}입니다.</div>
  </section>
  <section class="s2" style="height: {scene[2].scrollHeight}px" />
  <section class="s3" style="height: {scene[3].scrollHeight}px" />
</main>
