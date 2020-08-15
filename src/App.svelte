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
      el: {
        conatiner: undefined,
        sticky: undefined,
      },
    },
    {
      scrollHeight: 0,
      heightNum: 3,
      background: "images/preview.png",
    },
    {
      scrollHeight: 0,
      heightNum: 1,
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
        if (1500 > yOffset && yOffset > 850) {
          scene[0].el.sticky.style.color = "white";
        } else {
          scene[0].el.sticky.style.color = "#292931";
        }
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
    console.log(scene);
  });

  window.addEventListener("scroll", () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  });
</script>

<style lang="scss">
  @import "./scss/main.scss";
</style>

<main class={`page${sceneNow}`}>
  <section
    class="s0 {scene[0].type}"
    style="height: {scene[0].scrollHeight}px; background-image: url('{scene[0].background}');
    background-size: auto {300 - (yOffset / scene[0].scrollHeight) * 300 < 100 ? 100 : 300 - (yOffset / scene[0].scrollHeight) * 300}%">
    <div
      class="sticky-elem"
      bind:this={scene[0].el.sticky}
      style="top: {(window.innerHeight - 203) / 2}px;">
      <neulhan>개발자 늘한</neulhan>
      <div class="sub">늘 한결같은 즐거움을 좇고 있습니다</div>
    </div>
  </section>
  <section class="s1" style="height: {scene[1].scrollHeight}px">
    <div class="gallery-wrapper">
      <div
        class="img"
        style={`background-image: url("${scene[1].background}")`} />
      <div class="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
        fugiat error suscipit accusantium quia laudantium quidem atque cumque,
        inventore maxime sapiente esse reprehenderit magni harum neque eaque ab
        quibusdam, provident sint repellat nam impedit. Eaque, iure nam. Non,
        ducimus ea.
      </div>
    </div>
    <div class="gallery-wrapper">
      <div
        class="img"
        style={`background-image: url("${scene[1].background}")`} />
      <div class="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
        fugiat error suscipit accusantium quia laudantium quidem atque cumque,
        inventore maxime sapiente esse reprehenderit magni harum neque eaque ab
        quibusdam, provident sint repellat nam impedit. Eaque, iure nam. Non,
        ducimus ea.
      </div>
    </div>
    <div class="gallery-wrapper">
      <div
        class="img"
        style={`background-image: url("${scene[1].background}")`} />
      <div class="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
        fugiat error suscipit accusantium quia laudantium quidem atque cumque,
        inventore maxime sapiente esse reprehenderit magni harum neque eaque ab
        quibusdam, provident sint repellat nam impedit. Eaque, iure nam. Non,
        ducimus ea.
      </div>
    </div>
  </section>
  <section class="s2" style="height: {scene[2].scrollHeight}px">
    <div class="text">개발자 늘한</div>
  </section>
  <section class="s3" style="height: {scene[3].scrollHeight}px" />
</main>
