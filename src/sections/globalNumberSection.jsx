import Statistics from "../comps/statistics";

const GlobalNumberSection = ({ data, stats }) => {
    return (
        <section className="global-number-section py-10 sm:py-16 md:py-20 lg:py-[92px]">
            <div className="inner-wrap">
                {data.title && (
                    <h2 className="section-title mb-6 md:mb-[30px]">{data.title}</h2>
                )}

                <Statistics stats={stats} />
            </div>
        </section>
    );
}

export default GlobalNumberSection;
