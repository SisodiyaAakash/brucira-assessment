import { useEffect, useState } from "react";
import arrowTopRight from "../assets/icons/arrow-top-right.svg";
import arrowTopRightRed from "../assets/icons/arrow-top-right-red.svg";
import Loader from "./loading";

const Header = () => {
    const [headerData, setHeaderData] = useState(null);

    useEffect(() => {
        fetch("/json/comps.json")
            .then((response) => response.json())
            .then((data) => {
                setHeaderData(data.header);
            })
            .catch((error) => {
                console.error("Error fetching header data:", error);
            });
    }, []);

    if (!headerData) {
        return <Loader />;
    }

    const { logo, menu, cta } = headerData;

    return (
        <header className="header py-6 border-b border-black border-opacity-10">
            <div className="header-inner-wrap container mx-auto flex flex-wrap items-center justify-between gap-10">
                {/* Logo */}
                <div className="logo">
                    <img className="max-w-52" src={logo.image.src} alt={logo.image.alt} />
                </div>

                {/* Navigation Menu */}
                <nav className="menu">
                    <ul className="menu-list flex flex-wrap items-center gap-10">
                        {menu.map((item, index) => (
                            <li key={index} className="menu-item text-foreground">
                                <a href={item.link} className="group menu-link uppercase pr-6 relative h-5 opacity-40 hover:opacity-100">
                                    {item.title}

                                    <img className="w-5 h-5 absolute right-0 top-0 bottom-0 invisible group-hover:visible group-hover:rotate-90 duration-300" src={arrowTopRightRed} alt="Arrow Icon" />
                                    <img className="w-5 h-5 absolute right-0 top-0 bottom-0 group-hover:invisible group-hover:rotate-90 duration-300" src={arrowTopRight} alt="Arrow Icon" />
                                </a>
                            </li>
                        ))}

                        <div className="cta flex flex-wrap items-center gap-10">
                            <a href={cta.button.link} className="brucira-btn text-sm px-4 py-2.5">
                                {cta.button.text}
                            </a>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
