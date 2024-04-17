import {AppContainer} from "./App.module";
import {Hero} from "./components/organisms/hero/Hero";
import {Discovery} from "./components/organisms/discovery/Discovery";
import {Reviews} from "./components/organisms/reviews/Reviews";
import {Gallery} from "./components/organisms/gallery/Gallery";
import {Footer} from "./components/organisms/footer/Footer";
import {HeaderWrapper} from "./components/organisms/header-wrapper/HeaderWrapper";
import {BurgerWrapper} from "./components/atoms/burger-wrapper/BurgerWrapper";

function App() {
    return (
        <AppContainer>
            <BurgerWrapper/>
            <HeaderWrapper/>
            <Hero/>
            <Discovery/>
            <Reviews/>
            <Gallery/>
            <Footer/>
        </AppContainer>
    );
}

export default App;