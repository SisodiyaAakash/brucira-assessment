import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import navLeftIcon from '../assets/icons/nav-left.svg';

const Reviews = ({ reviews }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const updateButtons = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', updateButtons);
        updateButtons();
    }, [emblaApi, updateButtons]);

    return (
        <>
            {reviews && reviews.length > 0 && (
                <div className="reviews relative">
                    {reviews.length > 1 ? (
                        <div className="embla overflow-hidden" ref={emblaRef}>
                            <div className="embla__container flex">
                                {reviews.map((review, index) => (
                                    <div
                                        className="embla__slide flex flex-col md:flex-row gap-y-8 flex-none w-full"
                                        key={index}
                                    >
                                        <div className="image-area w-full md:w-1/3 aspect-[484/517]">
                                            <img
                                                className="w-full h-full object-cover"
                                                src={review.profile ? review.profile : ""}
                                                alt={`${review.firstName ? review.firstName : "Name"} ${review.lastName ? review.lastName : ""}`}
                                            />
                                        </div>
                                        <div className="content-area w-full md:w-2/3 md:pl-8 flex flex-col gap-6 md:gap-8">
                                            {review.feedback && (
                                                <p className="feedback text-xl leading-6 md:text-2xl md:leading-8 lg:text-3xl lg:leading-10 opacity-90">{review.feedback}</p>
                                            )}
                                            <div className="reviewer-info md:pr-44 md:mt-auto uppercase">
                                                <h3 className="font-body text-3xl md:text-[28px] md:leading-7 font-bold">
                                                    {review.firstName ? review.firstName : ""} {review.lastName ? review.lastName : ""},{" "}

                                                    {review.company && (
                                                        <span className="text-lg md:text-xl text-inherit leading-none">
                                                            {review.company}
                                                        </span>
                                                    )}
                                                </h3>

                                                {review.designation && (
                                                    <p className="text-lg md:text-xl opacity-80">{review.designation}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Navigation Buttons */}
                            <div className='navigation-arrow flex justify-center gap-1 md:max-w-max mt-8 md:absolute md:bottom-0 md:right-0 md:mt-0'>
                                <button
                                    className={`px-4 md:px-6 py-3 md:py-4 hover:border-foreground ${canScrollPrev ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}
                                    onClick={scrollPrev}
                                    disabled={!canScrollPrev}
                                >
                                    <img className='nav-prev dark:hover:brightness-[1000]' src={navLeftIcon} />
                                </button>
                                <button
                                    className={`px-4 md:px-6 py-3 md:py-4 hover:border-foreground ${canScrollNext ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}
                                    onClick={scrollNext}
                                    disabled={!canScrollNext}
                                >
                                    <img className='nav-next rotate-180 dark:hover:brightness-[1000]' src={navLeftIcon} />
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Render without slider if only one review exists
                        reviews.map((review, index) => (
                            <div className="review flex flex-col md:flex-row gap-y-8" key={index}>
                                <div className="image-area w-full md:w-1/3 aspect-[484/517]">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={review.profile ? review.profile : ""}
                                        alt={`${review.firstName ? review.firstName : "Name"} ${review.lastName ? review.lastName : ""}`}
                                    />
                                </div>
                                <div className="content-area w-full md:w-2/3 md:pl-8 flex flex-col gap-6 md:gap-8">
                                    {review.feedback && (
                                        <p className="feedback text-xl leading-6 md:text-2xl md:leading-8 lg:text-3xl lg:leading-10 opacity-90">{review.feedback}</p>
                                    )}
                                    <div className="reviewer-info md:pr-44 md:mt-auto uppercase">
                                        <h3 className="font-body text-3xl md:text-[28px] md:leading-7 font-bold">
                                            {review.firstName ? review.firstName : ""} {review.lastName ? review.lastName : ""},{" "}

                                            {review.company && (
                                                <span className="text-lg md:text-xl text-inherit leading-none">
                                                    {review.company}
                                                </span>
                                            )}
                                        </h3>

                                        {review.designation && (
                                            <p className="text-lg md:text-xl opacity-80">{review.designation}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </>
    );
};

export default Reviews;
