const Statistics = ({ stats }) => {
    function formatNumber(value) {
        if (value >= 1_000_000) {
            return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
        } else if (value >= 1_000) {
            return `${(value / 1_000).toFixed(1).replace(/\.0$/, '')}K`;
        }
        return value;
    }

    return (
        <>
            {stats && stats.length > 0 && (
                <div className="statistics grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16">
                    {stats.map((stat, index) => (
                        <div key={index}
                            className={`
                                    stat relative after:bg-[#BDBDBD] dark:after:bg-[#454545] after:absolute 
                                    ${(index + 1) % 4 !== 0 ? " lg:after:content-[''] lg:after:w-[0.94px] lg:after:h-10 lg:after:block after:right-0 after:top-2/4 -after:translate-y-2/4 lg:pr-8" : ""}
                                    ${(index + 1) % 2 !== 0 ? " sm:after:content-[''] sm:after:w-[0.94px] sm:after:h-10 sm:after:block after:right-0 after:top-2/4 -after:translate-y-2/4 sm:pr-6" : ""}
                                    ${index !== 0 ? "pt-8 sm:pt-0 border-t-[0.94px] sm:border-t-0 border-[#BDBDBD] dark:border-[#454545]" : ""}
                                `}
                        >
                            {stat.statValue && (
                                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-3">
                                    {stat.prefix && <span>{stat.prefix}</span>}
                                    {formatNumber(stat.statValue)}
                                    {stat.suffix && <span>{stat.suffix}</span>}
                                </h3>
                            )}
                            {stat.label && (
                                <h4
                                    className="text-xl md:text-2xl lg:text-3xl"
                                    dangerouslySetInnerHTML={{ __html: stat.label }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Statistics;