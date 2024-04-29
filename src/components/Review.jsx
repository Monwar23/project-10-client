import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { GoStarFill } from "react-icons/go";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Review = () => {
    const reviews = [
        {
            stars: 5,
            verified: true,
            text: "Prodotti ottimi ma un po troppo costosi!",
            author: "Giuseppe",
            date: "5 days ago"
        },
        {
            stars: 4,
            verified: true,
            text: "Good products, fair prices.",
            author: "Maria",
            date: "1 week ago"
        },
        {
            stars: 5,
            verified: true,
            text: "Excellent, fast delivery!",
            author: "Hales",
            date: "4 days ago"
        },
        {
            stars: 5,
            verified: true,
            text: "Top classes Art!",
            author: "Alex",
            date: "6 days ago"
        },
        {
            stars: 3,
            verified: false,
            text: "Decent quality, but delivery took too long.",
            author: "John",
            date: "2 weeks ago"
        },
        {
            stars: 5,
            verified: true,
            text: "Excellent service and fast delivery!",
            author: "Emily",
            date: "3 days ago"
        }
    ];

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                    <div className="review-slide p-4 border rounded-lg mt-10">
                        <div className="flex items-center mb-2">
                            {[...Array(review.stars)].map((_, i) => (
                                <GoStarFill key={i} className="text-yellow-500 mr-1" />
                            ))}
                        </div>
                        <div className="flex items-center mb-2">
                            {review.verified && <RiVerifiedBadgeFill className="text-green-500 mr-1" />}
                            <p className={review.verified ? "text-green-500" : "text-red-500"}>
                                {review.verified ? "Verified" : "Not Verified"}
                            </p>
                        </div>
                        <p> {review.text}</p>
                        <p className="text-gray-600">{review.author}, {review.date}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Review;
