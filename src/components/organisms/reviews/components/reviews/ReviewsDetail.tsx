import * as React from 'react';
import {Button} from "../../../../atoms/button/Button";
import {ReviewsDetailContainer} from "./ReviewsDetail.module";
import {ReviewsDetailProps} from "./Types";

export const ReviewsDetail = ({isSmallWidth, subtitle, title, next, author}: ReviewsDetailProps) => {
    return (
        <ReviewsDetailContainer>
            <div className="review__subtitle">
                <p>{subtitle}</p>
            </div>
            <div className="review__title">
                <h3>{title}</h3>
            </div>
            <div className="review__text">
                <p>
                    {next}
                </p>
            </div>
            <div className="review__author">
                <p>{author}</p>
            </div>
            <Button
                type="accent-fill"
                label={isSmallWidth ? "FAQ" : "Frequently Asked Questions"}
            />
        </ReviewsDetailContainer>
    );
};