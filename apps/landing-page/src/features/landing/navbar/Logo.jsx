import { Link } from "react-router-dom";
import logo from "../../../assets/logos/Nexgo_logo.png";

export default function Logo() {
    return (
        <Link to="/" className="flex shrink-0 items-center" >
            <img
                src={logo}
                alt="Nexgo"
                className="block h-auto w-120px sm:w-[130px] lg:w-[138px]"
            />
        </Link>
    )
}
