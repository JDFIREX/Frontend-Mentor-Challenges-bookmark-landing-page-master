import { FooterJSON } from "./data.js"
// import { gsap } from './../node_modules/gsap/index.js';

let FooterDIV = document.createElement('div');
    FooterDIV.classList.add("Footer")

FooterJSON.then(r => {
    FooterDIV.innerHTML = `
        <img class="footer_logo" src=${r.Footer_img} alt=${r.Footer_header}>
        <div class="Footer_list">
            ${ListMap(r.Footer_info)}
        </div>
        <div class="Footer_media">
            <div class="media_fb"></div>
            <div class="media_tw"></div>
        </div>
    `
}).then(r => {
    load()
})

function ListMap(r){
    let list = "";
    r.forEach(element => {
        list += `<p class="Footer_info">${element}</p>`;   
    });
    return list;
}


function load(){
    let gl = gsap.timeline({defaults: {ease: "Power2.inOut"}});
    showFooter(gl)
}

function showFooter(gl){
    gl.from(".footer_logo",.3,{
        delay: 1.5,
        opacity: 0,
        y:500
    })
    document.querySelectorAll(".Footer_info").forEach(i => {
        gl.from(i,.3,{
            opacity: 0,
            y:500
        },"-=.2")
    })
    gl.from(".media_fb",.3,{
        opacity: 0,
        y:500
    },"-=.4")
    gl.from(".media_tw",.3,{
        opacity: 0,
        y:500
    },"-=.2")
}



export let Footer = FooterDIV;