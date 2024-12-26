import { useEffect, useState } from "react";
import arrowTopRight from "../assets/icons/arrow-top-right.svg";
import arrowTopRightRed from "../assets/icons/arrow-top-right-red.svg";
import Loader from "./loading";

const Footer = () => {
    const [footerData, setFooterData] = useState(null);

    useEffect(() => {
        fetch("/json/comps.json")
            .then((response) => response.json())
            .then((data) => {
                setFooterData(data.footer);
            })
            .catch((error) => {
                console.error("Error fetching footer data:", error);
            });
    }, []);

    if (!footerData) {
        return <Loader />;
    }

    const { mainMenu, copyrightContent, legalMenu } = footerData;

    return (
        <footer className="footer">
            <div className="inner-wrap">
                <div className="footer-top py-14 md:py-16 lg:py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-8">
                        {
                            mainMenu.map((item, index) => (
                                <div key={index}>
                                    {item.title && (
                                        <h5 className="text-3xl uppercase leading-none mb-5 md:mb-6 lg:mb-[26px]">
                                            {item.title}
                                        </h5>
                                    )}
                                    {item.subMenu && (
                                        <ul className="space-y-2">
                                            {item.subMenu.map((subItem, subIndex) => (
                                                <li key={subIndex} className="">
                                                    <a
                                                        href={subItem.link}
                                                        className="text-lg relative after:content-[''] after:w-0 after:h-0.5 after:bg-foreground after:absolute after:bottom-0 after:left-0 after:duration-300 hover:after:w-full hover:after:right-0"
                                                    >
                                                        {subItem.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="footer-bottom border-t border-[#111010] dark:border-white border-opacity-20 dark:border-opacity-40 py-6 md:py-8 flex flex-wrap justify-between items-center flex-col md:flex-row gap-y-10 gap-x-7">
                    <p className="text-lg">
                        {copyrightContent.text ? copyrightContent.text : "Copyright 2024"}
                    </p>
                    {
                        legalMenu && (
                            <ul className="flex gap-x-8 gap-y-6">
                                {legalMenu.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.link}
                                            className="text-lg relative after:content-[''] after:w-0 after:h-0.5 after:bg-foreground after:absolute after:bottom-0 after:left-0 after:duration-300 hover:after:w-full hover:after:right-0"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                </div>
            </div>
        </footer>
    );
};

export default Footer;
