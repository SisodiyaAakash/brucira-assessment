import { useEffect, useState } from "react";
import arrowTopRight from "../assets/icons/arrow-top-right.svg";
import arrowTopRightRed from "../assets/icons/arrow-top-right-red.svg";
import Loader from "./loading";

const Header = () => {
    const [headerData, setHeaderData] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

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
        <header className="header sticky top-0 max-h-20 bg-background md:max-h-[86px] py-6 border-b border-black border-opacity-10 z-[999]">
            <div className="inner-wrap flex flex-wrap items-center justify-between gap-8 lg:gap-10">
                <div className="top-nav w-full md:w-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="logo">
                        {logo?.image?.src ? (
                            <img className="max-w-44 lg:max-w-52" src={logo.image.src} alt={logo.image.alt || "Logo"} />
                        ) : (
                            <span className="text-2xl text-foreground">Brucira</span>
                        )}
                    </div>

                    <a
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="menu-toggler flex flex-col gap-1.5 w-6 h-6 md:hidden focus:outline-none"
                    >
                        <span
                            className={`block h-0.5 w-full bg-foreground transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                        ></span>
                        <span
                            className={`block h-0.5 w-full bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`}
                        ></span>
                        <span
                            className={`block h-0.5 w-full bg-foreground transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                        ></span>
                    </a>
                </div>

                {/* Navigation Menu */}
                <nav className={`menu bg-background duration-300 ${menuOpen ? "open-menu" : ""}`}>
                    <ul className="menu-list flex flex-wrap items-center flex-col md:flex-row gap-8 lg:gap-10">
                        {menu && menu.map((item, index) => (
                            <li key={index} className="menu-item text-foreground w-full md:w-auto">
                                <a
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    href={item.link} className="group block menu-link w-full md:w-auto uppercase pr-6 relative h-5 opacity-40 dark:opacity-80 hover:opacity-100">
                                    {item.title}

                                    <img className="w-5 h-5 absolute right-0 top-0 bottom-0 invisible group-hover:visible group-hover:rotate-90 duration-300" src={arrowTopRightRed} alt="Arrow Icon" />
                                    <img className="w-5 h-5 absolute right-0 top-0 bottom-0 group-hover:invisible group-hover:rotate-90 duration-300 dark:brightness-[1000]" src={arrowTopRight} alt="Arrow Icon" />
                                </a>
                            </li>
                        ))}

                        <div className="cta flex flex-wrap items-center gap-8 lg:gap-10">
                            <a
                                onClick={() => setMenuOpen(!menuOpen)}
                                href={cta.button.link ? cta.button.link : "#"} className="brucira-btn text-sm px-4 py-2.5">
                                {cta.button.text ? cta.button.text : "Click"}
                            </a>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
