import { Link } from "react-router-dom";
import logo from "../../../assets/logos/Company_logo.png";

export default function Logo() {
    return (
        <Link to="/" className="flex items-center">
            <img
                src={logo}
                alt="NEXGO"
                className="h-30 w-auto object-contain"
            />
        </Link>
    );
}