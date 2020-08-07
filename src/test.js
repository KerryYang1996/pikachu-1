import string from "./CSS.js";
const demo = document.querySelector("#demo");
const demo2 = document.querySelector("#demo2");
let n = 0;
let time = 100;
let id;

// demo.innerHTML = n;

const player = {
  init: () => {
    demo.innerText = string.substring(0, n);
    demo2.innerHTML = string.substring(0, n);
    player.play();
    player.bindEvents();
  },
  bindEvents: () => {
    // //暂停按钮
    // document.querySelector("#btnPause").onclick = player.pause;
    // //播放按钮
    // document.querySelector("#btnPlay").onclick = player.play;
    // //慢速播放
    // document.querySelector("#btnSlow").onclick = player.slow;
    // //中速播放
    // document.querySelector("#btnNormal").onclick = player.normal;
    // //快速播放
    // document.querySelector("#btnFast").onclick = player.fast; //这调用函数不要加括号fast（）
    //上面的代码可以简写如下
    const hashTable = {
      "#btnPause": player.pause,
      "#btnPlay": player.play,
      "#btnSlow": player.slow,
      "#btnNormal": player.normal,
      "#btnFast": player.fast,
    };
    for (let key in hashTable) {
      document.querySelector(key).onclick = hashTable[key];
    }
  },
  run: () => {
    n += 1;
    if (n > string.length) {
      window.clearInterval(id);
      return;
    }
    console.log(n + ":" + string.substring(0, n));
    demo.innerText = string.substring(0, n);
    demo2.innerHTML = string.substring(0, n);
    demo.scrollTop = 9999;
  },
  play: () => {
    id = setInterval(player.run, time);
  },
  pause: () => {
    window.clearInterval(id);
  },
  slow: () => {
    player.pause();
    time = 300;
    player.play();
  },
  normal: () => {
    player.pause();
    time = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    time = 0;
    player.play();
  },
};

player.init();
