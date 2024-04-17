import {DiscoveryContainer} from "./Discovery.module";
import {DiscoveryDetails} from "./components/discovery-details/DiscoveryDetails";

export const Discovery = () => {
    return (
        <DiscoveryContainer>
            <div className="discover__image">
                <img
                    src="./assets/discover.png"
                    alt="Discover MTC"
                    srcSet="./assets/discover.png 1000w, ./assets/discover@2x.png 2000w"
                />
            </div>

            <DiscoveryDetails/>
        </DiscoveryContainer>
    )
};