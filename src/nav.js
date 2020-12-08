import { NavJSON }  from "./data.js"

let NavDiv = document.createElement("div");
NavDiv.classList.add("nav");

NavJSON.then(r => {
    console.log(r)
    let NavHeader = document.createElement("div");
    NavHeader.classList.add("nav_Header");
    NavHeader.innerHTML = `<h1>${r.nav_header}</h1>`;
    NavDiv.appendChild(NavHeader)
})


export let Nav = NavDiv