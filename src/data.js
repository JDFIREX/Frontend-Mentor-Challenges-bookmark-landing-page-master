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
    async Features(){
        return await this.data.then(r => r.Features);
    }
    async Download(){
        return await this.data.then(r => r.Download);
    }
    async Frequently(){
        return await this.data.then(r => r.Frequently);
    }
    async Stay(){
        return await this.data.then(r => r.Stay);
    }
    async Footer(){
        return await this.data.then(r => r.Footer);
    }
}

export let NavJSON = new GetData().Nav()

export let HeaderJSON = new GetData().Header()
export let FeaturesJSON = new GetData().Features()
export let DownloadJSON = new GetData().Download()
export let FrequentlyJSON = new GetData().Frequently()
export let StayJSON = new GetData().Stay()
export let FooterJSON = new GetData().Footer()