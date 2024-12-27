const Reviews = ({ reviews }) => {
    return (
        <>
            {reviews && reviews.length > 0 && (
                <div className="reviews">
                    {reviews.map((review, index) => (
                        <div className="review flex flex-col md:flex-row gap-y-8" key={index}>
                            <div className="image-area w-full md:w-1/3">
                                <img src={review.profile} alt={`Profile Image of ${review.firstName} ${review.lastName}`} />
                            </div>
                            <div className="content-area w-full md:w-2/3 md:pl-8 flex flex-col gap-6 md:gap-8">
                                <p className="feedback">
                                    {review.feedback}
                                </p>
                                <div className="reviewer-info md:pr-44 md:mt-auto">
                                    <h3 className="font-body text-3xl md:text-[28px] md:leading-7 font-bold">
                                        {review.firstName} {review.lastName}, <span className="text-lg md:text-xl text-inherit leading-none">{review.company}</span>
                                    </h3>
                                    <p className="text-lg md:text-xl opacity-80">{review.designation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Reviews;
