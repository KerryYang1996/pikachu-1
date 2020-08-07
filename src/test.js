// import string from "./CSS.js";
const string = `
.skin * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .skin ::before,
  .skin ::after {
    box-sizing: border-box;
  }
  .skin {
    position: relative;
    background: #ffe600;
    height: 50vh; 
  }
  .nose {
    /*鼻子由两部分组成圆弧+三角形*/
    border: 10px solid red;
    border-color: black transparent transparent;
    width: 0px; /**content-box*/
    height: 0px;
    /* 水平居中 */
    /* position: absolute;
    top: 200px;
    left: 50%;
    transform: translate(-50%, -50%); */
    position: relative;
    top: 145px; /*距离top200px*/
    left: 50%;
    margin-left: -10px; /*左边框10像素，右边框10像素，所以div宽20px*/
    z-index: 10;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(6deg);
    }
    66% {
      transform: rotate(-6deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
    animation: wave 300ms infinite;
  }
  .yuan {
    width: 20px;
    height: 6px;
    position: absolute;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: black;
  }
  .eye {
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
  }
  .eye::before {
    content: "";
    display: block;
    border: 3px solid black;
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 50%;
    position: relative;
    left: 4px;
    top: 2px;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 170px;
    left: 50%;
    margin-left: -100px;
  }
  .mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
  }
  .mouth .up .lip {
    border: 3px solid black;
    width: 100px;
    height: 30px;
    border-top-color: transparent;
    border-right-color: transparent;
    background: #ffe600;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
  }
  .mouth .up .lip.left {
    /* position: relative;
    left: 100px; */
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
  }
  .mouth .up .lip.right {
    /* position: relative;
      left: 100px; */
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(53px);
  }
  .mouth .up .lip::before {
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background-color: #ffe600;
  }
  .mouth .up .lip.left::before {
    right: -6px;
    /* left: 95px;
      top: -5px; */
  }
  .mouth .up .lip.right::before {
    left: -6px;
    /* left: 95px;
      top: -5px; */
  }
  .mouth .down {
    width: 100%;
    height: 180px;
    position: absolute;
    top: 5px;
    overflow: hidden;
  }
  .mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    background: #ff485f;
    position: absolute;
    bottom: -155px;
    left: 50%; /*子元素的左边框相对父元素的位置左移50%的父元素宽度*/
    margin-left: -100px;
    border-radius: 100px;
  }
  .face {
    position: absolute;
    left: 50%;
    top: 200px;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    margin-left: -44px;
    z-index: 3;
    background: red;
    border-radius: 50%;
  }
  .face > img {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .face.left > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
  }
  
  .face.left {
    transform: translateX(-180px);
  }
  .face.right {
    transform: translateX(180px);
  }
`;

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
