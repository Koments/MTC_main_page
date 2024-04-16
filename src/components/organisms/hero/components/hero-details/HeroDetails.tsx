import {Button} from "../../../../atoms/button/Button";
import {HeroDetailsContainer} from "./SliderBtn.module";

export const HeroDetails = () => {
    return (
        <HeroDetailsContainer>
            <div className="details__small">
                Design and order your new kitchen online today
            </div>
            <h1 className="details__desktop">
                Bespoke &amp; made to measure handmade kitchen design
            </h1>
            <Button type={"accent-fill"} label={"Order Now"}/>
        </HeroDetailsContainer>
    );
};