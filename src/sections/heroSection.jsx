import { useState } from "react";
import BruciraBtn from "../micro-modules/bruciraBtn";
import playIcon from "../assets/icons/play.svg";

const HeroSection = ({ data, team }) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const toggleVideoPopup = () => {
        setIsVideoOpen(!isVideoOpen);
    };

    return (
        <section className="hero-section py-7 md:py-9">
            <div className="inner-wrap">
                {data.title && (
                    <h1
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 md:mb-10 lg:mb-12"
                        dangerouslySetInnerHTML={{ __html: data.title }}
                    />
                )}

                <div className="flex flex-wrap gap-y-10 items-end justify-between">
                    <div className="w-full md:w-2/3 pr-0 md:pr-10 lg:pr-20">
                        {data.subtitle && (
                            <p className="text-xl sm:text-2xl font-semibold md:text-3xl mb-6 md:mb-8 lg:mb-10">
                                {data.subtitle}
                            </p>
                        )}

                        <div className="flex flex-wrap gap-5 items-center">
                            {data.ctaButton.text && data.ctaButton.link && (
                                <BruciraBtn
                                    text={data.ctaButton.text}
                                    isIcon={data.ctaButton.isIcon}
                                    link={data.ctaButton.link}
                                />
                            )}

                            {
                                team && team.length > 0 && (
                                    <div className="global-services-area flex items-center gap-3">
                                        <div className="team-profile-area flex">
                                            {team.map((member, index) => (
                                                <div
                                                    key={index}
                                                    className="team-member rounded-full overflow-hidden w-12 h-12 border-[1.2px] border-background"
                                                    style={{
                                                        marginLeft: index === 0 ? 0 : "-12px",
                                                        zIndex: team.length - index,
                                                    }}
                                                >
                                                    {member.profile && (
                                                        <img
                                                            src={member.profile}
                                                            alt={`${member.firstName} ${member.lastName}`}
                                                            className="w-full h-full object-cover object-center"
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="team-info-area">
                                            <h4 className="text-lg">
                                                {team.map((member, index) => (
                                                    <span className="text-foreground" key={index}>
                                                        {member.firstName && member.firstName}
                                                        {index < team.length - 1 && " / "}
                                                    </span>
                                                ))}
                                                <br />
                                                <span className="text-foreground opacity-60">Global Services</span>
                                            </h4>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    {data.videoArea && (
                        // Video Area
                        <div className="video-area relative w-full md:max-w-64 md:w-1/3 rounded-lg overflow-hidden">
                            {data.videoArea.thumbnailImg && (
                                <img src={data.videoArea.thumbnailImg} className="w-full h-auto" />
                            )}

                            <button
                                onClick={toggleVideoPopup}
                                className="brucira-btn absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white bg-opacity-15 border-opacity-15 border-white text-white backdrop-blur-[15px] hover:bg-transparent hover:text-white hover:border-opacity-100 hover:opacity-100 hover:backdrop-blur-0 dark:bg-black dark:border-black whitespace-nowrap dark:opacity-60 dark:hover:bg-black dark:hover:opacity-100"
                            >
                                <img className="custom invert-0 brightness-100" src={playIcon} alt="Play Icon" />
                                {data.videoArea.playBtnText ? data.videoArea.playBtnText : "Play"}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Video Popup */}
            {isVideoOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-40 backdrop-blur-md z-[9999] ">
                    <div className="relative bg-white dark:bg-black rounded-lg overflow-hidden w-11/12 max-w-3xl">
                        <button
                            onClick={toggleVideoPopup}
                            className="absolute top-2 right-2 rounded-full w-8 h-8 flex items-center justify-center z-50 hover:bg-background"
                        >
                            X
                        </button>
                        <iframe
                            width="100%"
                            height="400"
                            src={data.videoArea.videoUrl ? data.videoArea.videoUrl + "?autoplay=1" : ""}
                            title="Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            autoplay
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default HeroSection;
