import { DownloadJSON } from "./data.js"

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
})


export let Download = DownloadDIV