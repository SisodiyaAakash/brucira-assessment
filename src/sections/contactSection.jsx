const ContactSection = ({ data, team }) => {
    return (
        <section className="contact-section pb-28 md:pb-[120px] pt-20 md:pt-[89px] bg-[#F1F2F6] dark:bg-gray-800">
            <div className="inner-wrap flex flex-col md:flex-row gap-y-12">
                <div className="content-area w-full md:w-2/3">
                    <h2
                        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase mb-12 md:mb-14 lg:mb-16"
                        dangerouslySetInnerHTML={{ __html: data.title }}
                    />

                    {
                        team && team.length > 0 && (
                            <div className="team flex flex-wrap gap-8">
                                {team.map((member, index) => (
                                    <div
                                        key={index}
                                        className="team-member max-w-[275px] pl-5 md:pl-6 border-l border-[#21272A] dark:border-gray-500 border-opacity-15 dark:border-opacity-50 flex flex-col gap-5 md:gap-6"
                                    >
                                        {member.profile && (
                                            <img
                                                src={member.profile}
                                                alt={`${member.firstName} ${member.lastName}`}
                                                className="rounded-full w-16 lg:w-[70px] h-16 lg:h-[70px] object-cover object-center"
                                            />
                                        )}

                                        {member.intro && (
                                            <p className="text-sm opacity-70 text-[#1E1F1F] dark:text-gray-300">{member.intro}</p>
                                        )}

                                        {(member.firstName || member.lastName || member.designation) && (
                                            <h4 className="text-base">
                                                {member.firstName ? member.firstName : ""}
                                                {member.lastName ? " " + member.lastName : ""}
                                                {member.designation && (", " + member.designation)}
                                            </h4>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )
                    }
                </div>
                <div className="form-area w-full md:w-1/3 md:pl-16">
                </div>
            </div>
        </section>
    )
}

export default ContactSection;