import { useEffect } from 'react';

const ContactSection = ({ data, team }) => {
    useEffect(() => {
        if (data.form) {
            const { portalId, formId, target } = data.form;

            const script = document.createElement('script');
            script.src = "//js.hsforms.net/forms/embed/v2.js";
            script.charset = "utf-8";
            script.type = "text/javascript";
            script.async = true;

            script.onload = () => {
                if (window.hbspt && window.hbspt.forms) {
                    window.hbspt.forms.create({
                        portalId: portalId,
                        formId: formId,
                        target: "#" + target
                    });
                }
            };

            document.body.appendChild(script);

            // Cleanup function to remove the script when the component unmounts
            return () => {
                document.body.removeChild(script);
            };
        }
    }, [data.form]);

    return (
        <section className="contact-section pb-28 md:pb-[120px] pt-20 md:pt-[89px] bg-[#F1F2F6] dark:bg-gray-800">
            <div className="inner-wrap flex flex-col md:flex-row gap-y-12 gap-x-14">
                <div className="content-area w-full md:w-auto flex-grow">
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
                <div className="form-area w-full md:max-w-[468px]">
                    <h3 className='text-2xl md:text-3xl font-body tracking-normal mb-6 md:mb-7'>Give us few details and we’ll get in touch</h3>
                    {
                        data.form && (<div id={data.form.target}></div>)
                    }
                </div>
            </div>
        </section>
    )
}

export default ContactSection;