import Assets from "../assets";

export default function FlightPlan(){
    const assets = new Assets("Flugplan");
    assets.changeHeadline();
    return (
        <p>Hier könnte Ihr Flugplan stehen.</p>
    )
}