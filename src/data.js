class GetData {
    async setData() {
        return await  fetch("./src/data.json").then(resolve => resolve.json());
    }
    constructor(data){
        this.data = this.setData()
    }
    async Nav(){
        return await this.data.then(r => r.Nav);
    }
    async Header(){
        return await this.data.then(r => r.Header);
    }
}

export let NavJSON = new GetData().Nav()

export let HeaderJSON = new GetData().Header()
// export let HeaderJSON = {};
// export let FeaturesJSON = {};
// export let DownloadJSON = {};
// export let FrequentlyJSON = {};
// export let StayJSON = {};
// export let FooterJSON = {};