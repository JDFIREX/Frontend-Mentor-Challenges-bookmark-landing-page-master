import { HeaderJSON } from "./data.js"


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
        <img src=${r.header_img} alt="hero illustratior" >
        <div class="Header_bg"></div>
    `;
})


export let Header = HeaderDIV;