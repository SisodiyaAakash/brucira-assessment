import btnIcon from "../assets/icons/btn-icon-red.svg";

const BruciraBtn = ({ text, isIcon, link }) => {
    return (
        <a className="brucira-btn" href={link}>
            {text} {isIcon && <img src={btnIcon} alt="Arrow Icon" />}
        </a>
    );
};

export default BruciraBtn;
