import Reviews from "../comps/reviews";

const TestimonialSection = ({ data, reviews }) => {
    return (
        <section className="testimonial-section py-7 sm:py-8 md:py-9 lg:py-[38px]" >
            <div className="inner-wrap">
                {data.title && (
                    <h2 className="section-title mb-6 md:mb-[30px]">{data.title}</h2>
                )}

                <Reviews reviews={reviews} />
            </div>
        </section >
    );
}

export default TestimonialSection;
