import { StayJSON } from "./data.js"

let StayDIV = document.createElement("div");
    StayDIV.classList.add("Stay")

StayJSON.then(r => {
    StayDIV.innerHTML = `
        <p class="Stay_p">${r.Stay_joined}</p>
        <h1 class="Stay_h">${r.Stay_header}</h1>
        <div class="Stay_form">
            <input type="email" name="stay_email" class="stay_email" placeholder="Enter your email address">
            <button type="Submit" class="stay_btn">${r.Stay_submit}</button>
        </div>
    `
}).then(r => {
    document.querySelector(".stay_btn").addEventListener('click', (e) => SubmitEmail(e));
})

function SubmitEmail(e){
    let v = document.querySelector(".stay_email").value;
    if(v.includes("@")){
        v = v.split("");
        let index = v.indexOf("@");
        let s = v.slice(index+ 1).join("")
        s.includes(".") ? null : alert("wrong email")
    }else alert("wrong email")
}



export let Stay = StayDIV;