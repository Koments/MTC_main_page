import {Button} from "../../../../atoms/button/Button";
import {DiscoverDetailsContainer} from "./DiscoverDetails";

export const DiscoveryDetails = () => {
    return (
            <DiscoverDetailsContainer>
                <div className="details__block">
                    <div className="discover__subtitle">
                        <p>Quality Craftmanship from build to delivery</p>
                    </div>
                    <div className="discover__title">
                        <h2>Discover the beauty of a handmade kitchen</h2>
                    </div>
                    <div className="discover__text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod, tellus a scelerisque venenatis, odio ex porta est, sit amet commodo risus mi vel erat. Vestibulum sed augue id est varius volutpat. Fusce vel pretium lorem. Nullam dignissim lectus ac lectus vestibulum, id consectetur arcu lacinia. Vivamus vitae ipsum id sem eleifend efficitur. Quisque at arcu vitae ante lacinia fermentum. Morbi sit amet ligula eu eros placerat auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec tincidunt, dui nec eleifend sagittis, ipsum eros luctus odio, sit amet venenatis sapien erat vel metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vel nisl efficitur, convallis turpis vitae, lobortis elit. Donec nec sapien nec velit tincidunt feugiat vel ac urna. Curabitur et fringilla mi. Suspendisse a eros id ligula fermentum convallis. Nulla at finibus metus.
                        </p>
                    </div>
                    <div className="discover__cta">
                        <Button type={"accent-fill"} label={"About Us"}/>
                    </div>
                </div>
            </DiscoverDetailsContainer>
    );
};