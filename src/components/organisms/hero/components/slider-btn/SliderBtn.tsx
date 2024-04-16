import {SliderBtnElement} from "./SliderBtn.module";
import {HeroSliderBtnProps} from "../../Types";

export const SliderBtn = ({active, changeActive, spanNum}: HeroSliderBtnProps) => {
    const onClickHandler = () => {
        if (spanNum) {
            changeActive(spanNum);
        } else {
            changeActive(0);
        }
    };

    return (
        active === spanNum ?
            <SliderBtnElement className="active" onClick={onClickHandler}/>
            :
            <SliderBtnElement onClick={onClickHandler}/>
    );
};