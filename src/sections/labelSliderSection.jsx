import { useEffect, useRef } from "react";

const LabelSliderSection = ({ labels }) => {
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    // Track hover state
    const isHovering = useRef(false);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        let scrollAmount = 0;

        const scroll = () => {
            if (!isHovering.current) {
                scrollAmount += 1;
                if (scrollAmount >= container.scrollWidth / 2) {
                    scrollAmount = 0;
                }
                container.style.transform = `translateX(${-scrollAmount}px)`;
            }
            animationRef.current = requestAnimationFrame(scroll);
        };

        // Clone elements for infinite effect
        const clones = Array.from(container.children).map((child) =>
            child.cloneNode(true)
        );
        clones.forEach((clone) => container.appendChild(clone));

        animationRef.current = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationRef.current);
    }, []);

    const handleMouseEnter = () => {
        // Pause scrolling on hover
        isHovering.current = true;
    };

    const handleMouseLeave = () => {
        // Resume scrolling when hover ends
        isHovering.current = false;
    };

    return (
        <>
            {
                labels && labels.length > 0 && (
                    <section
                        className="label-slider-section py-7 sm:py-8 md:py-9 lg:py-11 xl:py-[46px] bg-foreground"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="relative overflow-hidden">
                            <div
                                className="flex whitespace-nowrap will-change-transform items-center"
                                ref={containerRef}
                            >
                                {
                                    labels.map((label, index) => (
                                        <h4 key={index} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-background uppercase pr-8 sm:pr-9 md:pr-10 lg:pr-12 xl:pr-[54px] mr-8 sm:mr-9 md:mr-10 lg:mr-12 xl:mr-[54px] relative after:content-[''] after:block after:w-0.5 md:after:w-1 lg:after:w-2 after:h-4/5 after:bg-background after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2">{label.text}</h4>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default LabelSliderSection;