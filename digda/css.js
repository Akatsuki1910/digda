export const css = `.digda-wrapper .digda-main .digda-eye-right, .digda-wrapper .digda-main .digda-eye-left {
  position: absolute;
  width: 20px;
  height: 50px;
  border-radius: 50% 50%;
  background-color: black;
  -webkit-transform: translateX(-50%) translateY(-50%);
          transform: translateX(-50%) translateY(-50%);
}

.digda-wrapper {
  width: 250px;
  height: 240px;
  margin: 4px;
}

.digda-wrapper .digda-main {
  -webkit-clip-path: inset(0px 0px);
          clip-path: inset(0px 0px);
}

.digda-wrapper .digda-main .digda-body {
  margin: 0 auto;
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50% 50% 0 0;
  background-color: #b37653;
  -webkit-transition: -webkit-transform 1s;
  transition: -webkit-transform 1s;
  transition: transform 1s;
  transition: transform 1s, -webkit-transform 1s;
}

.digda-wrapper .digda-main .digda-body:hover {
  -webkit-transform: translateY(100px);
          transform: translateY(100px);
}

.digda-wrapper .digda-main .digda-eye-right {
  top: 30%;
  left: 35%;
}

.digda-wrapper .digda-main .digda-eye-left {
  top: 30%;
  left: 65%;
}

.digda-wrapper .digda-main .digda-eye-white {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50% 50%;
  background-color: white;
  -webkit-transform: translateX(-50%) translateY(-50%);
          transform: translateX(-50%) translateY(-50%);
  top: 30%;
  left: 50%;
}

.digda-wrapper .digda-main .digda-nose {
  position: absolute;
  width: 60px;
  height: 30px;
  border-radius: 50% 50%;
  background-color: pink;
  -webkit-transform: translateX(-50%) translateY(-50%);
          transform: translateX(-50%) translateY(-50%);
  top: 50%;
  left: 50%;
}

.digda-wrapper .digda-stone-wrapper {
  margin: 0 auto;
}

.digda-wrapper .digda-stone-wrapper .digda-stone {
  display: inline-block;
  position: relative;
  height: 30px;
  width: calc((3 / 1.73205) * 30px);
  background-color: gray;
  margin: 0;
}

.digda-wrapper .digda-stone-wrapper .digda-stone:not(:first-of-type) {
  margin-left: -2.5px;
}

.digda-wrapper .digda-stone-wrapper .digda-stone::before {
  content: "";
  position: absolute;
  height: 30px;
  width: calc((3 / 1.73205) * 30px);
  background-color: gray;
  -webkit-transform: rotate(60deg);
          transform: rotate(60deg);
}

.digda-wrapper .digda-stone-wrapper .digda-stone::after {
  content: "";
  position: absolute;
  height: 30px;
  width: calc((3 / 1.73205) * 30px);
  background-color: gray;
  -webkit-transform: rotate(-60deg);
          transform: rotate(-60deg);
}
`;