import { StayJSON } from "./data.js"
// import { gsap } from './../node_modules/gsap/index.js';

let StayDIV = document.createElement("div");
    StayDIV.classList.add("Stay")

StayJSON.then(r => {
    StayDIV.innerHTML = `
        <p class="Stay_p">${r.Stay_joined}</p>
        <h1 class="Stay_h">${r.Stay_header}</h1>
        <div class="Stay_form">
            <p class="error" > Whoops, make sure it's an email</p>
            <input type="email" name="stay_email" class="stay_email" placeholder="Enter your email address">
            <button type="Submit" class="stay_btn">${r.Stay_submit}</button>
        </div>
    `
}).then(r => {
    document.querySelector(".stay_btn").addEventListener('click', (e) => SubmitEmail(e));
}).then(r => {
    load()
})

function SubmitEmail(e){
    document.querySelector(".error").style.opacity = "0";
    document.querySelector(".stay_email").style.zIndex = "200000000"
    let v = document.querySelector(".stay_email").value;
    if(v.includes("@")){
        v = v.split("");
        let index = v.indexOf("@");
        let s = v.slice(index+ 1).join("")
        s.includes(".") ? alert("Correct Email") : showError()
    }else showError()
}

function showError(){
    document.querySelector(".stay_email").style.zIndex = "1";
    document.querySelector(".error").style.opacity = "1";
}

function load(){
    let gl = gsap.timeline({defaults: {ease: "Power2.inOut"}});
    showStay(gl)
}

function showStay(gl){
    gl.from(".Stay_form",.5,{
        delay: 1.5,
        y:-100,
        opacity: 0,
        scale: 0,
        rotate: 1000
    })
    gl.from(".stay_btn", .5,{
        width: 0,
        x: -200,
        opacity: 0
    })
    gl.from(".Stay_h",.3,{
        x:-500,
        opacity: 0,
        fontSize: 0
    },"-=1.2")
    gl.from(".Stay_p",.3,{
        x:500,
        opacity: 0,
        scale: 3
    },"-=1.5")
}


export let Stay = StayDIV;