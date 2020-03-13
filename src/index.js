import { store } from "./store";
import "./css.css";
const { getState, dispatch } = store;
let wrap = document.getElementById("wrap");
var traffic_light = `<div class="traffic-light"></div>`;
let red_button = "<button id='red'>红灯</button>";
let yellow_button = "<button id='yellow'>黄灯</button>";
let green_button = "<button id='green'>绿灯</button>";
let deng = `<div style="width:150px;margin:20px auto">${red_button}${yellow_button}${green_button}</div>`;
let name = "green";
let deng_show = `<div class='show ${name}'>${getState()}</div>`;
wrap.innerHTML = deng_show + deng;
document.getElementById("red").addEventListener("click", () => {
    dispatch({ type: "STOP" });
    document.querySelector(".show").innerHTML = getState();
    document.querySelector(".show").className = `show red`
});
document.getElementById("yellow").addEventListener("click", () => {
    dispatch({ type: "CAUTION" });
    document.querySelector(".show").innerHTML = getState();
    document.querySelector(".show").className = `show yellow`
});
document.getElementById("green").addEventListener("click", () => {
    dispatch({ type: "GO" });
    document.querySelector(".show").innerHTML = getState();
    document.querySelector(".show").className = `show green`
});
