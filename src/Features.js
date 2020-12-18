import { FeaturesJSON } from "./data.js"
import { gsap } from './../node_modules/gsap/index.js';

let FeaturesDIV = document.createElement("div");
    FeaturesDIV.classList.add("Features")
let items = [];
let imgs = []


FeaturesJSON.then(r => {
    FeaturesDIV.innerHTML = `
    <div class="Features_header">
        <h1 class="Features_h">${r.Features_header}</h1>
        <p class="Features_p">${r.Features_p}</p>
    </div>
    <div class="Features_menu">
        <div class="menu_item" data-menuid="0">
            <p>${r.Features_Simple_Bookmarking.Bookmarking_tittle}<p>
        </div>
        <div class="menu_item" data-menuid="1">
            <p>${r.Features_Speedy_Searching.Searching_tittle}<p>
        </div>
        <div class="menu_item" data-menuid="2">
            <p>${r.Features_Easy_Sharing.Sharing_tittle}<p>
        </div>
        <div class="menu_scroll"></div>
    </div>
    <div class="Features_menu_item" data-ItemID="0">
        <img class="Item_img" src=${r.Features_Simple_Bookmarking.Bookmarking_img} alt=${r.Features_Simple_Bookmarking.Bookmarking_header} >
        <div class="Item_bg"></div>
        <div class="Item_info">
            <h1 class="Item_h">${r.Features_Simple_Bookmarking.Bookmarking_header}</h1>
            <p class="Item_p">${r.Features_Simple_Bookmarking.Bookmarking_p}</p>
            <button class="Item_b">${r.Features_Simple_Bookmarking.Bookmarking_btn}</button>
        </div>
    </div>
    `
    imgs.push(r.Features_Simple_Bookmarking.Bookmarking_img);
    imgs.push(r.Features_Speedy_Searching.Searching_img);
    imgs.push(r.Features_Easy_Sharing.Sharing_img);
    items.push([r.Features_Simple_Bookmarking.Bookmarking_header,r.Features_Simple_Bookmarking.Bookmarking_p,r.Features_Simple_Bookmarking.Bookmarking_btn])
    items.push([r.Features_Speedy_Searching.Searching_header,r.Features_Speedy_Searching.Searching_p,r.Features_Speedy_Searching.Searching_btn])
    items.push([r.Features_Easy_Sharing.Sharing_header,r.Features_Easy_Sharing.Sharing_p,r.Features_Easy_Sharing.Sharing_btn])
}).then(r => {
    document.querySelectorAll(".menu_item").forEach(m => m.addEventListener('click', (e) => ChangeItem(e)));
    load()
})

function ChangeItem(e){
    let itemID = Number(e.path[1].dataset.menuid);
    window.innerWidth > 800 ?  document.querySelector(".menu_scroll").style.left = `${0 + (33.3 * itemID)}%` 
    : document.querySelector(".menu_scroll").style.bottom = `${0 + itemID == 2 ? 0 : 8.4 / (itemID + 1)}rem`

    let changeMenuItem = new Promise(resolve => {
        let MenuItem = document.querySelector(".Features_menu_item");
        hiddenMenu()

        resolve(MenuItem)
    })

    changeMenuItem.then(r => {
        setTimeout(() => {
            document.querySelector('.Item_img').src = imgs[itemID];
            let item = items[itemID];
            document.querySelector('.Item_h').innerHTML = item[0]
            document.querySelector('.Item_p').innerHTML = item[1]
            document.querySelector('.Item_b').innerHTML = item[2]
        }, 500);
    }).then(r => {
        setTimeout(() => {
            ShowMenu()
        }, 600);
    })
}


function hiddenMenu(){
    let img = document.querySelector('.Item_img');
    let info = document.querySelector('.Item_info');
    let n1 = gsap.timeline({defaults: {ease: "Power2.inOut"}});

    n1.to(img, .8 ,{
        x: -1000,
        opacity: 0
    })
    n1.to(info, .4, {
        delay: -1,
        y: -100,
        opacity: 0
    })
}

function ShowMenu(){
    let img = document.querySelector('.Item_img');
    let info = document.querySelector('.Item_info');
    let n1 = gsap.timeline({defaults: {ease: "Power2.inOut"}});

    n1.to(img, 1 ,{
        x: 0,
        opacity: 1
    })
    n1.to(info, 1, {
        delay: -0.8,
        y: 0,
        opacity: 1
    })
}


function load(){
    let gl = gsap.timeline({defaults: {ease: "Power2.inOut"}});
    ShowFeatures(gl);
}

function ShowFeatures(gl){
    gl.from('.Features_h',.3,{
        delay: .2,
        x:-500,
        opacity:0
    })
    gl.from('.Features_p',.3,{
        x:500,
        opacity:0
    },"-=.3")
    document.querySelectorAll(".menu_item").forEach(i => {
        gl.from(i,.3,{
            y:-100,
            opacity: 0
        })
    })
    gl.from(".Item_img", .6,{
        x: -1000,
        opacity: 0
    },"-=.7")
    gl.from(".Item_info", .8,{
        y: 200,
        opacity: 0
    },"-=.6")
}

export let Features = FeaturesDIV