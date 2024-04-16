import * as React from 'react';
import {Button} from "../../../../atoms/button/Button";
import {ReviewsDetailContainer} from "./ReviewsDetail.module";
import {ReviewsDetailProps} from "./Types";
export const ReviewsDetail = ({isSmallWidth}: ReviewsDetailProps) => {
    return (
        <ReviewsDetailContainer>
            <div className="review__subtitle">
                <p>What Our Customers Say</p>
            </div>
            <div className="review__title">
                <h3>Over 35 years experience designing handmade kitchens</h3>
            </div>
            <div className="review__text">
                <p>
                    Since my first contact I have received a very high level of
                    customer service and advice with my kitchen plans. Ben responded
                    very quickly to all of my emails and delivery of the kitchen was
                    as planned.
                </p>
            </div>
            <div className="review__author">
                <p>Jane, Dundee</p>
            </div>
            <Button
                type="accent-fill"
                label={isSmallWidth ? "FAQ" : "Frequently Asked Questions"}
            />
        </ReviewsDetailContainer>
    );
};