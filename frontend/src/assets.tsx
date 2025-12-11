import { useEffect } from "react";

export default class Assets {
    page: string;
    constructor(page: string){
        this.page = page;
    }
    changeHeadline(){
        useEffect(() => {
            const headline = document.querySelector('#headline') as HTMLElement | null;
            if (headline) {
                headline.innerHTML = this.page;
            } else {
                console.log("No headline found.");
            }
        }, []);
    }
}