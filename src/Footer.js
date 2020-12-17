import { FooterJSON } from "./data.js"

let FooterDIV = document.createElement('div');
    FooterDIV.classList.add("Footer")

FooterJSON.then(r => {
    FooterDIV.innerHTML = `
        <img src=${r.Footer_img} alt=${r.Footer_header}>
        <div class="Footer_list">
            ${ListMap(r.Footer_info)}
        </div>
        <div class="Footer_media">
            <div class="media_fb"></div>
            <div class="media_tw"></div>
        </div>
    `
})

function ListMap(r){
    let list = "";
    r.forEach(element => {
        list += `<p class="Footer_info">${element}</p>`;   
    });
    return list;
}


export let Footer = FooterDIV;