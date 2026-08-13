import { Link } from "react-router-dom";
import nexgoLogo from "../../../assets/logos/Nexgo_logo.png";

const Logo = () => {
    return (
        <Link
            to="/"
            className="
                flex
                h-10
                w-[130px]
                shrink-0
                items-center
                overflow-hidden
                sm:h-11
                sm:w-[145px]
                lg:w-[160px]
            "
        >
            <img
                src={nexgoLogo}
                alt="Nexgo"
                className="
                    block
                    h-auto
                    w-full
                    max-w-full
                    object-contain
                "
            />
        </Link>
    );
};

export default Logo;