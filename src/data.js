async function Nav() {
    let data = await fetch("/src/data.json").then(resolve => resolve.json()).then(result => result.Nav);
    return data;
}

export let NavJSON = Nav()
// export let HeaderJSON = {};
// export let FeaturesJSON = {};
// export let DownloadJSON = {};
// export let FrequentlyJSON = {};
// export let StayJSON = {};
// export let FooterJSON = {};