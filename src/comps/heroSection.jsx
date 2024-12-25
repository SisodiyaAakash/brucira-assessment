import React from "react";
import BruciraBtn from "../micro-modules/bruciraBtn";
import playIcon from "../assets/icons/play.svg";

const HeroSection = ({ data }) => {
    return (
        <section className="hero-section py-7 md:py-9">
            <div className="hero-section-inner-wrap container">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 md:mb-10 lg:mb-12" dangerouslySetInnerHTML={{ __html: data.title }} />

                <div className="flex flex-wrap row-gap-10 items-end">
                    <div className="flex flex-wrap gap-5 items-center w-full md:w-2/3 pr-0 md:pr-20">
                        <p className="text-xl sm:text-2xl font-semibold md:text-3xl mb-6 md:mb-8 lg:mb-10">{data.subtitle}</p>
                        {data.ctaButton.text && data.ctaButton.link && (
                            <BruciraBtn
                                text={data.ctaButton.text}
                                isIcon={data.ctaButton.isIcon}
                                link={data.ctaButton.link}
                            />
                        )}

                        {/* Profile Area */}
                        {/* <div className="global-services-area"></div> */}
                    </div>

                    {data.videoArea && (
                        // Video Area
                        <div className="video-area w-full md:w-1/3">
                            <a href={data.videoArea.videoUrl} className="brucira-btn bg-white bg-opacity-15 border-opacity-15 border-white text-white hover:bg-transparent hover:text-white hover:border-opacity-100 hover:opacity-100">
                                <img className="custom invert-0 brightness-100" src={playIcon} alt="Play Icon" />
                                {data.videoArea.playBtnText}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
