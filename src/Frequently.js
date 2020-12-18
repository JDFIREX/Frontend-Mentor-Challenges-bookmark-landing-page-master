import { FrequentlyJSON } from "./data.js"
import { gsap } from './../node_modules/gsap/index.js';

let FrequentlyDIV = document.createElement("div");
    FrequentlyDIV.classList.add("Frequently")

FrequentlyJSON.then(r => {
    FrequentlyDIV.innerHTML = `
        <h1 class="freq_h">${r.Frequently_header}</h1>
        <p class="freq_p">${r.Frequently_p}</p>
        <div class="Frequently_list">
            <div class="Frequently_item">
                <details>
                    <summary>${r.Frequently_ask_1.ask_1_header}</summary>
                    <p>${r.Frequently_ask_1.ask_1_p}</p>
                </details>
            </div>
            <div class="Frequently_item">
                <details>
                    <summary>${r.Frequently_ask_2.ask_2_header}</summary>
                    <p>${r.Frequently_ask_2.ask_2_p}</p>
                </details>
            </div>
            <div class="Frequently_item">
                <details>
                    <summary>${r.Frequently_ask_3.ask_3_header}</summary>
                    <p>${r.Frequently_ask_3.ask_3_p}</p>
                </details>
            </div>
            <div class="Frequently_item">
                <details>
                    <summary>${r.Frequently_ask_4.ask_4_header}</summary>
                    <p>${r.Frequently_ask_4.ask_4_p}</p>
                </details>
            </div>
        </div>
        <button class="freq_b">${r.Frequently_btn}</button>
    `
}).then(r => {
    load()
})

function load(){
    let gl = gsap.timeline({defaults: {ease: "Power2.inOut"}});
    showFreq(gl)
}

function showFreq(gl){
    gl.from(".freq_h",.3,{
        y:200,
        delay: .8,
        opacity:0
    })
    gl.from(".freq_p",.5,{
        y:0,
        opacity:0,
        scale: 0
    })
    document.querySelectorAll(".Frequently_item").forEach((i,b) => {
        gl.from(i,.5,{
            y: -75 * b,
            opacity: 0
        },"-=.4")
    })
    gl.from(".freq_b",1,{
        y: -25,
        opacity: 0,
        rotate: 250
    })
}


export let Frequently = FrequentlyDIV