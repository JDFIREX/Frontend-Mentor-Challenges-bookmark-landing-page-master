import * as Nav from "/src/nav.js"
import * as Header from "/src/header.js"
import * as Features from "/src/Features.js"
import * as Download from "/src/Download.js"
import * as Frequently from "/src/Frequently.js"
import * as Stay from "/src/Stay.js"

let root = document.querySelector('.root')


root.appendChild(Nav.Nav);
root.appendChild(Header.Header);
root.appendChild(Features.Features);
root.appendChild(Download.Download);
root.appendChild(Frequently.Frequently);
root.appendChild(Stay.Stay);