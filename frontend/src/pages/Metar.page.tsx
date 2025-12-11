import Assets from "../assets"
import GetMetar from "../../wailsjs/go/main/App"

export default function Metar(){
    const metar = new CMetar();
    return metar.render();
}

export class CMetar {
    assets = new Assets("Metar");
    constructor(){
        this.assets.changeHeadline();
    }
    render(){
        return (
            <>
                <label htmlFor="airport_icao">Flughafen ICAO Code: </label>
                <input type="text" onChange={() => this.changeICAO()} name="airport_icao" maxLength={4} minLength={4} />
            </>
        )
    }
    changeICAO(){
        let object: HTMLInputElement = document.getElementsByName('airport_icao')[0] as HTMLInputElement;
        if (object) {
            let result = async() => {return await GetMetar(object.value)};
            result();
        }
        if (object) return async () => { await GetMetar(object.value);} 
    }
}