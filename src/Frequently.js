import { FrequentlyJSON } from "./data.js"

let FrequentlyDIV = document.createElement("div");
    FrequentlyDIV.classList.add("Frequently")

FrequentlyJSON.then(r => {
    FrequentlyDIV.innerHTML = `
        <h1>${r.Frequently_header}</h1>
        <p>${r.Frequently_p}</p>
        <div class="Frequently_list">
            <div class="Frequently_item">
                <details>
                    <summary>${r.Frequently_ask_1.ask_1_header}</summary>
                    <p>${r.Frequently_ask_1.ask_1_p}</p>
                </details>
            </div>
            <div class="Frequently_item">
                <details>
                    <summary>${r.Frequently_ask_2.ask_2_header}</summary>
                    <p>${r.Frequently_ask_2.ask_2_p}</p>
                </details>
            </div>
            <div class="Frequently_item">
                <details>
                    <summary>${r.Frequently_ask_3.ask_3_header}</summary>
                    <p>${r.Frequently_ask_3.ask_3_p}</p>
                </details>
            </div>
            <div class="Frequently_item">
                <details>
                    <summary>${r.Frequently_ask_4.ask_4_header}</summary>
                    <p>${r.Frequently_ask_4.ask_4_p}</p>
                </details>
            </div>
        </div>
        <button>${r.Frequently_btn}</button>
    `
})


export let Frequently = FrequentlyDIV