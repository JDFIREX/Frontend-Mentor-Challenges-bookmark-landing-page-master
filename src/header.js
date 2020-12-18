import { HeaderJSON } from "./data.js"
import { gsap } from './../node_modules/gsap/index.js';

let HeaderDIV = document.createElement("div");
    HeaderDIV.classList.add("Header");


HeaderJSON.then(r => {
    HeaderDIV.innerHTML = `
        <div class="Header_welcome"> 
            <h1 class="welcome_h">${r.header_welcom}</h1>
            <p class="welcome_p">${r.header_p}</p>
            <div class="welcome_b">
                <button class="b_chrome">${r.header_btn_Chrome}</button>
                <button class="b_firefox">${r.header_btn_Firefox}</button>
            </div>
        </div>
        <img src=${r.header_img} class="welcome_img" alt="hero illustratior" >
        <div class="Header_bg"></div>
    `;
}).then(r => {
    load()
})


function load(){
    let gl = gsap.timeline({defaults: {ease: "Power2.inOut"}});
    ShowHeader(gl)
}


function ShowHeader(gl){
    gl.from(".welcome_h", .3, {
        x: -1000
    })
    gl.from(".welcome_p", .3, {
        x: -1000
    },"-=.15")
    gl.from(".welcome_b", .3, {
        y: 100,
        opacity: 0
    },"-=.15")
    gl.from(".welcome_img", .5, {
        x: 1000
    },"-=.3")
    gl.from(".Header_bg", .3,{
        width: "0"
    }, "-=.6")
}


export let Header = HeaderDIV;