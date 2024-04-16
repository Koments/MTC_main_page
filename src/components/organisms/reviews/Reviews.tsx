import {Button} from "../../atoms/button/Button";
import {useLayoutEffect, useRef, useState} from "react";
import {ReviewButton} from "../../atoms/review-button/ReviewButton";
import {ReviewsContainer, ReviewWrapper} from "./Reviews.module";
import {ReviewsDetail} from "./components/reviews/ReviewsDetail";
export const Reviews = () => {
    const [isSmallWidth, setIsSmallWidth] = useState(false);
    const reviewsRef = useRef< HTMLImageElement | null >(null);

    useLayoutEffect(() => {
        const handleResize = () => {
            setIsSmallWidth(reviewsRef.current!.clientWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {};
    }, []);


    return (
        <ReviewWrapper >
            <ReviewsContainer ref={reviewsRef} >
                <div className="reviews__btnPrev">
                    <ReviewButton />
                </div>
                <ReviewsDetail isSmallWidth={isSmallWidth}/>
                <div className="reviews__btnNext">
                    <ReviewButton />
                </div>
            </ReviewsContainer>
        </ReviewWrapper>
    )
};