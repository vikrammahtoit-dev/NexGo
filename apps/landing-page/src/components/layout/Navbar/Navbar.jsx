import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

import Logo from "./Logo";
import { navLinks } from "./navLinks";
import useScroll from "../../../hooks/useScroll";
import NavLinkItem from "./NavLinkItem";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const isScrolled = useScroll();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header
            className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-300
        ${isScrolled
                    ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-200"
                    : "bg-transparent"
                }
      `}
        >
            {/* mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8 */}
            <div className="flex items-center justify-between mx-auto h-18  px-4 lg:px-8">

                {/* Logo */}
                <Logo />

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-10 lg:flex">

                    {navLinks.map((item) => (
                        <NavLinkItem
                            key={item.label}
                            item={item}
                        />
                    ))}

                </nav>

                {/* Right Side */}
                <div className="hidden items-center gap-4 lg:flex">

                    <Link
                        to="/login"
                        className="
              rounded-xl
              border
              border-slate-300
              px-6
              py-3
              text-sm
              font-semibold
              transition
              hover:border-orange-500
              hover:text-orange-500
            "
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="
              rounded-xl
              bg-orange-500
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-orange-600
            "
                    >
                        Get Started
                    </Link>

                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="
            rounded-lg
            p-2
            text-slate-700
            transition
            hover:bg-slate-100
            lg:hidden
          "
                >
                    {mobileOpen ? (
                        <X size={28} />
                    ) : (
                        <Menu size={28} />
                    )}
                </button>

            </div>

            {/* Mobile Menu Component */}
            <MobileMenu
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                navLinks={navLinks}
            />
        </header>
    );
}