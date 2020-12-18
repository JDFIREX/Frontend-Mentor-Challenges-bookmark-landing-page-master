import { DownloadJSON } from "./data.js"
// import { gsap } from './../node_modules/gsap/index.js';

let DownloadDIV = document.createElement("div");
    DownloadDIV.classList.add("Download");

DownloadJSON.then(r => {
    DownloadDIV.innerHTML = `
        <h1 class="Download_h">${r.Download_header}</h1>
        <p class="Download_p">${r.Download_p}</p>
        <div class="Download_s">
            <div class="s_item">
                <img class="item_logo" src=${r.Download_Chrome.Chrome_img} alt=${r.Download_Chrome.Chrome_header}>
                <h1>${r.Download_Chrome.Chrome_header}</h1>
                <p>${r.Download_Chrome.Chrome_p}</p>
                <img class="item_dot" src=${r.Download_Chrome.Chrome_dot} alt="dot">
                <button type="Submit">${r.Download_Chrome.Chrome_btn}</button>
            </div>
            <div class="s_item">
                <img class="item_logo" src=${r.Download_Firefox.Firefox_img} alt=${r.Download_Firefox.Firefox_header}>
                <h1>${r.Download_Firefox.Firefox_header}</h1>
                <p>${r.Download_Firefox.Firefox_p}</p>
                <img class="item_dot" src=${r.Download_Firefox.Firefox_dot} alt="dot">
                <button type="Submit">${r.Download_Firefox.Firefox_btn}</button>
            </div>
            <div class="s_item">
                <img class="item_logo" src=${r.Download_Opera.Opera_img} alt=${r.Download_Opera.Opera_header}>
                <h1>${r.Download_Opera.Opera_header}</h1>
                <p>${r.Download_Opera.Opera_p}</p>
                <img class="item_dot" src=${r.Download_Opera.Opera_dot} alt="dot">
                <button type="Submit">${r.Download_Opera.Opera_btn}</button>
            </div>
        </div>
    `
}).then(r => {
    load()
})

function load(){
    let gl = gsap.timeline({defaults: {ease: "Power2.inOut"}});
    showDownloads(gl)
}

function showDownloads(gl){
    gl.from(".Download_h",.3,{
        delay:.5,
        y:200,
        opacity: 0
    })
    gl.from(".Download_p",.3,{
        x:200,
        opacity: 0
    })
    document.querySelectorAll(".s_item").forEach((s,b) => {
        gl.from(s,.4,{
            y: -1 * (50 * (b + 1)),
            opacity: 0
        })
    })
}




export let Download = DownloadDIV