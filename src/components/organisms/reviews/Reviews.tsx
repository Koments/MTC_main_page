import {useLayoutEffect, useRef, useState} from "react";
import {ReviewButton} from "../../atoms/review-button/ReviewButton";
import {ReviewsContainer, ReviewWrapper} from "./Reviews.module";
import {ReviewsDetail} from "./components/reviews/ReviewsDetail";
import {ReviewDetailData} from "./data";

export const Reviews = () => {
    const [activeContainer, setActiveContainer] = useState(1)
    const [isSmallWidth, setIsSmallWidth] = useState(false);
    const reviewsRef = useRef<HTMLImageElement | null>(null);

    useLayoutEffect(() => {
        const handleResize = () => {
            setIsSmallWidth(reviewsRef.current!.clientWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
        };
    }, []);

    const OnClickHandler = (type: string) => {
        setActiveContainer(
            type === 'next'
                ? activeContainer + 1 === 4 ? 1 : activeContainer + 1
                : activeContainer - 1 === 0 ? 3 : activeContainer - 1
        );
    }

    return (
        <ReviewWrapper>
            <ReviewsContainer ref={reviewsRef}>
                <div className="reviews__btnPrev" onClick={() => OnClickHandler('prev')}>
                    <ReviewButton/>
                </div>
                {ReviewDetailData.map((el, index) =>
                    el.id === activeContainer
                        ? <ReviewsDetail key={el.id} isSmallWidth={isSmallWidth} author={el.author} next={el.next}
                                         subtitle={el.subtitle} title={el.title}/>
                        : null
                )}
                <div className="reviews__btnNext" onClick={() => OnClickHandler('next')}>
                    <ReviewButton/>
                </div>
            </ReviewsContainer>
        </ReviewWrapper>
    )
};