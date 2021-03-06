import { NavJSON } from "./data.js"
// import { gsap } from './../node_modules/gsap/index.js';

let NavDiv = document.createElement("div");
    NavDiv.classList.add("Nav")
let NavOpen = false;


NavJSON.then(r => {
    NavDiv.innerHTML = `
        <div class="logo">
            <img src=${r.nav_logo} alt="logo" class="logo_img">
        </div>
        <div class="Nav_list">
            ${Nav_list(r)}
        </div>
        <div class="Nav_humb">
            <img src=${r.nav_humb} alt="humb" class="humb_img">
            <div class="fb"></div>
            <div class="tw"></div>
        </div>
        `
}).then(result => {
    document.querySelector(".humb_img").addEventListener("click", (e) => OpenNav(e))
    load()
})

function load(){
    let gl = gsap.timeline({defaults: {ease: "Power2.inOut"}});
    HideNav(gl)
    AnimateNav(gl)
    
}

function HideNav(gl){
    document.querySelector(".logo").style.marginTop = "-100vw";
    document.querySelector(".list_b").style.marginRight = "-100vw";
    document.querySelectorAll('.list_p').forEach(p => {
        p.style.opacity = "0"
        p.style.marginTop = "-100vw";
    })
}
function AnimateNav(gl){
        gl.to(".logo",.5,{
            delay: 0,
            marginTop: "0",
            opacity: 1
        })
    document.querySelectorAll(".list_p").forEach(p => {
        gl.to(p, .3,{
            delay: -.25,
            marginTop: "0",
            opacity: 1,
        })
    })
    gl.to('.list_b',.5,{
        delay: -.8,
        marginRight: "0",
    })
}

function Nav_list(r){
    let list = "";
    r.nav_info.forEach(i => {
        return i != "LOGIN" ? 
        list += `<p class="list_p">${i}</p>` : 
        list += `<button class="list_b">${i}</button>`
    })
    return list;
}



function OpenNav(e){
    let NavList = document.querySelector(".Nav_list");
    let LogoImg = document.querySelector(".logo_img");
    let logo = document.querySelector(".logo");
    let n1 = gsap.timeline({defaults: {ease: "Power2.inOut"}})

    !NavOpen ? ShowNav(n1,NavList,NavOpen,LogoImg,e) 
    : CloseNav(n1,NavList,NavOpen,LogoImg,e) 
    
    NavOpen = !NavOpen;
} 

function ShowNav(n1,NavList,NavOpen,LogoImg,e){
    n1.to(NavList, {
        duration : .4,
        opacity : 1,
        top : 0
    })
    document.querySelectorAll('.list_p').forEach((l,b) => {
        n1.from(l, .3,{
            x : -1000,
            border: 0
        }, "-=.15")
        if(b == NavList.childElementCount - 2){
            n1.to(l, .2,{
                borderTop: "1px solid hsla(229, 8%, 60%, 0.452)",
                borderBottom: "1px solid hsla(229, 8%, 60%, 0.452)",
            })
        }else{
            n1.to(l, .1,{
                borderTop: "1px solid hsla(229, 8%, 60%, 0.452)"
            })
        }
    })
    n1.to(".fb",.2,{
        display: "block"
    })
    n1.to(".tw",.2,{
        display: "block"
    })
    n1.to(".list_b",{
        duration: .02,
        opacity : 1
    })
    n1.from(".list_b",{
        duration: .05,
        y : 500
    })
    
    setTimeout(() => {
        LogoImg.src = "../images/logo-bookmark-white.svg";
        e.path[0].src = "../images/icon-close.svg"
        LogoImg.style.position = "fixed";
        e.path[0].style.position = "fixed";
        e.path[0].style.right = "5vw";
    }, 250);
}

function CloseNav(n1,NavList,NavOpen,LogoImg,e){
    n1.to(".list_b",{
        duration: .1,
        opacity : 0,
        y : 500 
    })
    n1.to(".fb",.2,{
        display: "none"
    })
    n1.to(".tw",.2,{
        display: "none"
    })
    document.querySelectorAll('.list_p').forEach((l,b) => {
        if(b == NavList.childElementCount - 2){
            n1.to(l, .1,{
                borderTop: null,
                borderBottom: null
            }, "-=1")
        }else{
            n1.to(l, .1,{
                borderTop: null
            }, "-=1")
        }
        n1.to(l, .15,{
            x : -1000
        })
    })
    n1.to(NavList, {
        duration : .25,
        opacity : 0,
        top : -1000
    })
    setTimeout(() => {
        LogoImg.src = "../images/logo-bookmark.svg";
        e.path[0].src = "../images/icon-hamburger.svg"
        LogoImg.style.position = "relative";
        e.path[0].style.position = "relative";
        e.path[0].style.right = "0vw";
    }, 1000);
    document.querySelectorAll('.list_p').forEach((l,b) => {
        n1.to(l, .1,{
            x : 0
        })
    })
    n1.to(".list_b",{
        duration: .1,
        y : 0 
    })
}

export let Nav = NavDiv