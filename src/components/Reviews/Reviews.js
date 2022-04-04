import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import AllReviews from '../AllReviews/AllReviews';

const Reviews = () => {

    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        reviews.map(review => <AllReviews
                            key={review.id}
                            review={review}
                        ></AllReviews>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;