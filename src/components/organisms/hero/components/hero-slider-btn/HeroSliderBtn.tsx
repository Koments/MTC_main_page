import {HeroSliderBtnContainer} from "./HeroSliderBtn.module";
import {SliderBtn} from "../slider-btn/SliderBtn";
import {HeroSliderBtnProps} from "../../Types";

export const HeroSliderBtn = ({active, changeActive}: HeroSliderBtnProps) => {
    return (
        <HeroSliderBtnContainer>
            <span className="sliderBtn active"/>
            {
                [...Array(3)].map((_, index) => (
                        <SliderBtn key={index} spanNum={index} active={active} changeActive={(number) => changeActive(number)} />
                ))
            }
        </HeroSliderBtnContainer>
    );
};