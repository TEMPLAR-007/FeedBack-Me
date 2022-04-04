import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import ReviewSection from '../ReviewSection/ReviewSection';

const Home = () => {

    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <div className='main-product mt-5'>
                <div className='container'>
                    <div className='row gap-5'>
                        <div className='col-md-6'>
                            <div className='d-grid gap-3'>
                                <div className='mt-5'>
                                    <h1 className='text-warning fs-1 fw-bolder font-monospace'>Hero<span className='text-danger'>10</span></h1>
                                    <h2 className='text-start text-danger mt-5'>Award-Winning Footage.
                                        Unreal Savings</h2>
                                    <h6 className='text-start'>HERO10 Black + Accessories Bundle
                                        Includes 1-year GoPro Subscription¹</h6>
                                    <h5 className='text-start'>Price: $399</h5>
                                </div>
                                <button type="button" className="btn btn-warning btn-outline-dark border-0 shadow p-2 mb-5 fs-5 mt-5">
                                    Get it
                                </button>
                            </div>
                        </div>
                        <div className='col shadow p-3 mb-5 bg-body rounded'>
                            <div>
                                <img className='w-70 img-fluid' src="https://i.ibb.co/BcsRHyH/Gear-hero9-black-front-SOURCE-Go-Pro.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='review-section mt-5 mb-5'>
                <div>
                    <h1>Happy Customer</h1>
                    <div className="container">
                        <div className="row">
                            {
                                reviews.map(review => <ReviewSection
                                    key={review.id}
                                    review={review}
                                ></ReviewSection>)
                            }
                            <Link to='/reviews'>
                                <button type="button" className="btn btn-warning btn-outline-dark border-0 fw-bold px-5">
                                    See All Reviews
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;