import {HeroContainer} from "./HeroComponent";
import {useState} from "react";
import {HeroSliderBtn} from "./components/hero-slider-btn/HeroSliderBtn";
import {HeroDetails} from "./components/hero-details/HeroDetails";
const images = [
    './assets/slide1.png',
    './assets/slide2.png',
    './assets/slide3.png',
];

export const Hero = () => {
    const [activeContainer, setActiveContainer] = useState(1)
    const OnClickHandler = (type: string) => {
        setActiveContainer(
                activeContainer + 1 === 3 ? 0 : activeContainer + 1
        );
    }


    return (
        <HeroContainer>
            <img
                src={`./assets/hero-${activeContainer}.png`}
                alt="MTC_Hero_Image"
                srcSet={`./assets/hero-${activeContainer}.png 2000w, ./assets/hero-${activeContainer}@2x.png 4000w`}
                sizes="(max-width: 1920) 2000px, 4000px"
                className="hero__background"
            />
            <HeroDetails />
            <HeroSliderBtn active={activeContainer} changeActive={(newNumber) => setActiveContainer(newNumber)}/>
        </HeroContainer>
    );
};