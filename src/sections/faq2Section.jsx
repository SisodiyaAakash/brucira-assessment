import { useState } from "react";
import accordionIcon from "../assets/icons/accordion-arrow.svg"

const Faq2Section = ({ data }) => {
    // State to track the active accordion index
    const [activeIndex, setActiveIndex] = useState(null);

    // Handle click on an accordion item
    const handleAccordionClick = (index) => {
        if (activeIndex === index) {
            // If clicking on the already active accordion, reset to first accordion
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
            // Set the clicked accordion as active
        }
    };

    return (
        <section className="faq-section pb-28 md:pb-[120px] pt-20 md:pt-[89px]">
            <div className="inner-wrap flex flex-col md:flex-row">
                <h2
                    className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 w-full md:w-1/3"
                    dangerouslySetInnerHTML={{ __html: data.title }}
                />

                {data.accordion && data.accordion.length > 0 && (
                    <div className="flex flex-col gap-5 md:gap-6 w-full md:w-2/3 md:pl-8">
                        {data.accordion.map((item, index) => (
                            <div
                                key={index}
                                className={`accordion-item pb-5 md:pb-6 border-b border-[#111010] dark:border-white border-opacity-15 dark:border-opacity-30 ${activeIndex === index
                                    ? "active"
                                    : ""
                                    }
                                    `}
                            >
                                {item.title && (
                                    <h3
                                        className={`duration-200 cursor-pointer relative pr-7 ${activeIndex === index ? "text-2xl md:text-3xl mb-3 md:mb-4 lg:mb-5" : "text-lg md:text-xl"}`}
                                        onClick={() => handleAccordionClick(index)}
                                    >
                                        {item.title}
                                        
                                        <img src={accordionIcon} alt="Accordion Icon" className={`absolute right-0 top-1/2 -translate-y-1/2 duration-300 dark:brightness-[1000] ${activeIndex === index ? "rotate-180" : "rotate-0"}`} />
                                    </h3>
                                )}
                                {item.bodyText && (
                                    <p className={`duration-200 opacity-70 ${activeIndex === index ? "text-base md:text-lg" : "hidden"}`}>{item.bodyText}</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Faq2Section;
