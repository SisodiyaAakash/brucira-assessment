import { useEffect, useRef } from "react";

const PartnersLogoSection = ({ data }) => {
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
        <section
            className="partners-logo-sectionoverflow-hidden py-8 md:py-12 lg:py-20"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {data.title && (
                <h2 className="text-2xl font-semibold text-center mb-6">{data.title}</h2>
            )}

            <div className="relative overflow-hidden">
                <div
                    className="flex whitespace-nowrap will-change-transform gap-12 items-center"
                    ref={containerRef}
                >
                    {data.partners && data.partners.length > 0 && data.partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 max-w-28 md:max-w-32 lg:max-w-36 mx-2"
                        >
                            <a
                                href={partner.link ? partner.link : "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={partner.logo ? partner.logo : "/media"}
                                    alt={partner.partnerName ? partner.partnerName : "Partner"}
                                    className="w-full h-auto object-contain"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PartnersLogoSection;
