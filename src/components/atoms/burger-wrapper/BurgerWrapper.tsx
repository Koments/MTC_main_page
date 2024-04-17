import {BurgerContainer} from "./BurgerWrapper.module";
import {useDispatch, useSelector} from "react-redux";
import {Logo} from "../logo/Logo";
import {changeBurgerActiveStatus} from "../../../store/burgerSlice";
import {stateProps} from "../../../store/types";

export const BurgerWrapper = () => {
    const activeStatus = useSelector((state: stateProps) => state.burgerState.burgerStatus)
    const dispatch = useDispatch()
    const toggleMenu = () => {
        dispatch(changeBurgerActiveStatus(activeStatus))
    }


    return (
        <>
            {activeStatus ? <BurgerContainer>
                <div className={`menu__overlay open`}>
                    <button className="menu__closeButton" onClick={toggleMenu}></button>

                    <div className={`center`}>
                        <Logo src={'./assets/logo.svg'} alt={'MTK Logo'}/>
                    </div>

                    <nav className="menu__nav">
                        <a href="/" className="menu__link">Shop</a>
                        <a href="/" className="menu__link">Plan My Kitchen</a>
                        <a href="/" className="menu__link">MTK Logo</a>
                        <a href="/" className="menu__link">Gallery</a>
                    </nav>
                </div>
            </BurgerContainer> : <></>}
        </>
    );
};