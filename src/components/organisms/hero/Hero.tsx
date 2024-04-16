import {Button} from "../../atoms/button/Button";
import {HeroContainer} from "./HeroComponent";
import {useState} from "react";
import {HeroSliderBtn} from "./components/hero-slider-btn/HeroSliderBtn";
import {HeroDetails} from "./components/hero-details/HeroDetails";

export const Hero = () => {
    const [active, setActive] = useState(1)

    return (
        <HeroContainer>
            <img
                src="/assets/hero.png"
                alt="MTC_Hero_Image"
                srcSet="/assets/hero.png 2000w, /assets/hero@2x.png 4000w"
                sizes="(max-width: 1920) 2000px, 4000px"
                className="hero__background"
            />
            <HeroDetails />
            <HeroSliderBtn active={active} changeActive={(newNumber) => setActive(newNumber)}/>
        </HeroContainer>
    );
};
