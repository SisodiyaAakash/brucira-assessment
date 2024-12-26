import React, { useState } from "react";

function Faq1Section({ data }) {
    // State to track the active accordion index
    const [activeIndex, setActiveIndex] = useState(0);

    // Handle click on an accordion item
    const handleAccordionClick = (index) => {
        if (activeIndex === index) {
            // If clicking on the already active accordion, reset to first accordion
            setActiveIndex(0);
        } else {
            // Set the clicked accordion as active
            setActiveIndex(index);
        }
    };

    return (
        <section className="faq-section py-9">
            <div className="inner-wrap">
                <h2
                    className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 md:mb-12 lg:mb-16"
                    dangerouslySetInnerHTML={{ __html: data.title }}
                />

                {data.accordion && (
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-y-8">
                        <div className="image-area w-full md:w-1/3 flex justify-center">
                            {data.accordion[activeIndex]?.image && (
                                <img
                                    src={data.accordion[activeIndex].image}
                                    alt={data.accordion[activeIndex].title}
                                    className="max-w-full h-auto aspect-[484/451] object-cover object-center duration-200"
                                />
                            )}
                        </div>

                        <div className="accordion-area w-full md:w-2/3 md:pl-9 lg:pl-12">
                            {data.accordion.map((item, index) => (
                                <div
                                    key={index}
                                    className={`accordion-item py-6 md:py-7 lg:py-8 border-b border-[#111010] dark:border-white border-opacity-15 dark:border-opacity-30 ${activeIndex === index
                                        ? "active"
                                        : ""
                                        }
                                        ${index === 0 ? "border-t" : ""}`}
                                >
                                    <h4 className={`text-red duration-200 ${activeIndex === index ? "text-2xl pb-4 md:pb-5 lg:pb-6" : "leading-[0] invisible"}`}>{index < 9 ? "0" + (index + 1) : index + 1}</h4>
                                    {item.title && (
                                        <h3
                                            className={`duration-200 cursor-pointer ${activeIndex === index ? "text-4xl pb-3 md:pb-4 lg:pb-5" : "text-3xl opacity-50"}`}
                                            onClick={() => handleAccordionClick(index)}
                                        >
                                            {item.title}
                                        </h3>
                                    )}
                                    {item.bodyText && (
                                        <p className={`duration-200 opacity-80 ${activeIndex === index ? "text-lg md:text-xl" : "hidden"}`}>{item.bodyText}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Faq1Section;
