import { useState } from 'react';
import { Button } from "../../atoms/button/Button";
import { GalleryContainer } from "./Gallery.module";
import { galleryImageSizes } from "./helps";
import { ImagesList } from "../footer/Data";

export const Gallery = () => {
    const [visibleImages, setVisibleImages] = useState(4);

    const showMoreImages = () => {
        console.log(visibleImages)
        setVisibleImages(8);
    };

    return (
        <GalleryContainer>
            <div className="gallery__title">
                <h3>Customer Gallery</h3>
            </div>
            <div className="gallery__images">
                {ImagesList.slice(0, visibleImages).map((el, index) => (
                    <img
                        key={index}
                        src={`./assets/gallery/gallery-${el}.png`}
                        alt="MTC Gallery"
                        srcSet={galleryImageSizes(el.srcSet)}
                    />
                ))}
            </div>
            <div className="gallery__button-container">
                {visibleImages < ImagesList.length && (
                    <Button type="accent-fill" label="View More" onClick={showMoreImages} />
                )}
            </div>
        </GalleryContainer>
    );
};