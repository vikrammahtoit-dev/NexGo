import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

import {
    ChevronDown,
    ShoppingBag,
    Building2,
    Package,
    MapPin,
    Truck,
    Map,
    ChartNoAxesCombined,
    Workflow,
    BookOpen,
    BookMarked,
    CircleHelp,
    Code,
    Menu,
    X,
} from "lucide-react";

import { navbarLinks } from "./navbar.data";


/* ============================================================
   ICON MAP
============================================================ */

const iconMap = {
    ShoppingBag,
    Building2,
    Package,
    MapPin,
    Truck,
    Map,
    ChartNoAxesCombined,
    Workflow,
    BookOpen,
    BookMarked,
    CircleHelp,
    Code,
};


/* ============================================================
   NAVBAR
============================================================ */

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    /* ========================================================
       MENU TOGGLE
    ======================================================== */

    const handleMenuToggle = (label) => {
        setActiveMenu((currentMenu) =>
            currentMenu === label ? null : label
        );
    };


    /* ========================================================
       CLOSE MENU
    ======================================================== */

    const handleMenuClose = () => {
        setActiveMenu(null);
    };


    /* ========================================================
       GET SECTIONS
       
       Supports both:
       
       menu: {
           sections: [...]
       }

       AND old structure:
       
       menu: {
           title: "...",
           items: [...]
       }
    ======================================================== */

    const getMenuSections = (menu) => {
        if (!menu) {
            return [];
        }

        if (Array.isArray(menu.sections)) {
            return menu.sections.slice(0, 2);
        }

        if (menu.title && Array.isArray(menu.items)) {
            return [
                {
                    title: menu.title,
                    items: menu.items,
                },
            ];
        }

        return [];
    };


    /* ========================================================
       FIND ACTIVE DROPDOWN
    ======================================================== */

    const activeLink = navbarLinks.find(
        (link) => link.label === activeMenu
    );

    const activeSections = getMenuSections(
        activeLink?.menu
    );


    /* ========================================================
       DROPDOWN WIDTH
       
       1 section  -> compact
       2 sections -> wider mega menu
    ======================================================== */

    const dropdownWidth =
        activeSections.length === 1
            ? "w-[460px]"
            : "w-[860px]";


    /* ========================================================
       GRID COLUMNS
       
       1 section  -> 1 column
       2 sections -> 2 columns
    ======================================================== */

    const dropdownGrid =
        activeSections.length === 1
            ? "grid-cols-1"
            : "grid-cols-2";


    return (
        <header
            className="
                sticky
                top-0
                z-50
                w-full
                border-b
                border-slate-100
                bg-white
            "
            onMouseLeave={handleMenuClose}
        >

            <div
                className="
                    relative
                    mx-auto
                    flex
                    h-[76px]
                    w-[calc(100%-32px)]
                    max-w-[1280px]
                    items-center
                    justify-between
                    sm:w-[calc(100%-48px)]
                    lg:w-[calc(100%-80px)]
                "
            >

                {/* =====================================================
                    LOGO
                ====================================================== */}

                <Logo />


                {/* =====================================================
                    DESKTOP NAVIGATION
                ====================================================== */}

                <nav
                    className="
                        hidden
                        items-center
                        gap-6
                        lg:flex
                        xl:gap-8
                    "
                >

                    {navbarLinks.map((link) => {

                        const isActive =
                            activeMenu === link.label;


                        /* ================================================
                           NORMAL LINK
                        ================================================= */

                        if (!link.dropdown) {

                            return (
                                <Link
                                    key={link.label}
                                    to={link.path}
                                    className="
                                        whitespace-nowrap
                                        text-[13px]
                                        font-medium
                                        text-[#253657]
                                        transition-colors
                                        duration-200
                                        hover:text-[#ff6414]
                                        xl:text-[14px]
                                    "
                                >
                                    {link.label}
                                </Link>
                            );
                        }


                        /* ================================================
                           DROPDOWN BUTTON
                        ================================================= */

                        return (
                            <div
                                key={link.label}
                                className="relative"
                                onMouseEnter={() =>
                                    setActiveMenu(link.label)
                                }
                            >

                                <button
                                    type="button"
                                    onClick={() =>
                                        handleMenuToggle(link.label)
                                    }
                                    className={`
                                        group
                                        inline-flex
                                        items-center
                                        gap-1.5
                                        whitespace-nowrap
                                        text-[13px]
                                        font-medium
                                        transition-colors
                                        duration-200
                                        xl:text-[14px]

                                        ${isActive
                                            ? "text-[#ff6414]"
                                            : "text-[#253657] hover:text-[#ff6414]"
                                        }
                                    `}
                                    aria-expanded={isActive}
                                >

                                    <span>
                                        {link.label}
                                    </span>


                                    <ChevronDown
                                        size={14}
                                        strokeWidth={1.8}
                                        className={`
                                            transition-transform
                                            duration-200

                                            ${isActive
                                                ? "rotate-180"
                                                : ""
                                            }
                                        `}
                                    />

                                </button>

                            </div>
                        );
                    })}

                </nav>


                {/* =====================================================
                    CTA BUTTONS
                ====================================================== */}

                <div
                    className="
                        ml-6
                        hidden
                        shrink-0
                        items-center
                        gap-3
                        lg:flex
                        xl:ml-10
                    "
                >

                    <Link
                        to="/login"
                        className="
                            inline-flex
                            h-[42px]
                            items-center
                            justify-center
                            rounded-[9px]
                            border
                            border-[#cbd4e2]
                            bg-white
                            px-5
                            text-[13px]
                            font-semibold
                            text-[#172b50]
                            transition-all
                            duration-200
                            hover:-translate-y-px
                            hover:border-[#ff6414]
                            hover:text-[#ff6414]
                            xl:h-[44px]
                            xl:px-[23px]
                            xl:text-[14px]
                        "
                    >
                        Login
                    </Link>


                    <Link
                        to="/get-started"
                        className="
                            inline-flex
                            h-[42px]
                            min-w-[108px]
                            items-center
                            justify-center
                            rounded-[9px]
                            border
                            border-[#ff6414]
                            bg-[#ff6414]
                            px-5
                            text-[13px]
                            font-semibold
                            text-white
                            shadow-[0_4px_12px_rgba(255,100,20,0.12)]
                            transition-all
                            duration-200
                            hover:-translate-y-px
                            hover:border-[#ed590e]
                            hover:bg-[#ed590e]
                            hover:shadow-[0_7px_18px_rgba(255,100,20,0.2)]
                            xl:h-[44px]
                            xl:min-w-[116px]
                            xl:px-[23px]
                            xl:text-[14px]
                        "
                    >
                        Get Started
                    </Link>

                </div>


                {/* =====================================================
                    MOBILE MENU BUTTON
                ====================================================== */}

                <button
                    type="button"
                    onClick={() =>
                        setMobileMenuOpen(
                            (current) => !current
                        )
                    }
                    aria-label={
                        mobileMenuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    className="
                        ml-auto
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-slate-200
                        text-[#172b50]
                        transition-colors
                        duration-200
                        hover:border-[#ff6414]
                        hover:text-[#ff6414]
                        lg:hidden
                    "
                >
                    {mobileMenuOpen ? (
                        <X size={20} />
                    ) : (
                        <Menu size={20} />
                    )}
                </button>


                {/* =====================================================
                    DESKTOP DYNAMIC MEGA MENU
                ====================================================== */}

                {activeMenu && activeLink?.menu && (
                    <div
                        className={`
                            absolute
                            left-1/2
                            top-[76px]
                            hidden
                            -translate-x-1/2
                            overflow-hidden
                            rounded-b-2xl
                            border
                            border-t-0
                            border-slate-100
                            bg-white
                            shadow-[0_18px_45px_rgba(20,38,70,0.12)]
                            lg:block
                            ${dropdownWidth}
                        `}
                        onMouseEnter={() =>
                            setActiveMenu(activeMenu)
                        }
                    >

                        <div className="p-7 xl:p-8">

                            {/* =================================================
                                DYNAMIC SECTIONS
                            ================================================== */}

                            <div
                                className={`
                                    grid
                                    gap-x-8
                                    gap-y-8
                                    ${dropdownGrid}
                                `}
                            >

                                {activeSections.map(
                                    (section) => (
                                        <div
                                            key={section.title}
                                            className="min-w-0"
                                        >

                                            {/* SECTION TITLE */}

                                            <div className="mb-5">

                                                <p
                                                    className="
                                                        text-[11px]
                                                        font-semibold
                                                        tracking-[0.16em]
                                                        text-[#ff6414]
                                                    "
                                                >
                                                    {section.title}
                                                </p>

                                            </div>


                                            {/* SECTION ITEMS */}

                                            <div className="space-y-2">

                                                {section.items.map(
                                                    (item) => {

                                                        const Icon =
                                                            iconMap[
                                                            item.icon
                                                            ];

                                                        return (
                                                            <Link
                                                                key={
                                                                    item.label
                                                                }
                                                                to={
                                                                    item.path
                                                                }
                                                                onClick={
                                                                    handleMenuClose
                                                                }
                                                                className="
                                                                    group
                                                                    flex
                                                                    items-start
                                                                    gap-4
                                                                    rounded-xl
                                                                    p-4
                                                                    transition-colors
                                                                    duration-200
                                                                    hover:bg-slate-50
                                                                "
                                                            >

                                                                {/* ICON */}

                                                                <div
                                                                    className="
                                                                        flex
                                                                        h-10
                                                                        w-10
                                                                        shrink-0
                                                                        items-center
                                                                        justify-center
                                                                        rounded-lg
                                                                        bg-[#fff3ec]
                                                                        text-[#ff6414]
                                                                        transition-colors
                                                                        duration-200
                                                                        group-hover:bg-[#ff6414]
                                                                        group-hover:text-white
                                                                    "
                                                                >
                                                                    {Icon && (
                                                                        <Icon
                                                                            size={
                                                                                19
                                                                            }
                                                                            strokeWidth={
                                                                                1.8
                                                                            }
                                                                        />
                                                                    )}
                                                                </div>


                                                                {/* CONTENT */}

                                                                <div className="min-w-0">

                                                                    <p
                                                                        className="
                                                                            text-[14px]
                                                                            font-semibold
                                                                            text-[#172b50]
                                                                            transition-colors
                                                                            duration-200
                                                                            group-hover:text-[#ff6414]
                                                                        "
                                                                    >
                                                                        {
                                                                            item.label
                                                                        }
                                                                    </p>


                                                                    <p
                                                                        className="
                                                                            mt-1
                                                                            text-[12px]
                                                                            leading-5
                                                                            text-slate-500
                                                                        "
                                                                    >
                                                                        {
                                                                            item.description
                                                                        }
                                                                    </p>

                                                                </div>

                                                            </Link>
                                                        );
                                                    }
                                                )}

                                            </div>

                                        </div>
                                    )
                                )}

                            </div>

                        </div>

                    </div>
                )}


                {/* =====================================================
                    MOBILE MENU
                ====================================================== */}

                {mobileMenuOpen && (
                    <div
                        className="
                            absolute
                            left-0
                            right-0
                            top-[76px]
                            border-t
                            border-slate-100
                            bg-white
                            shadow-[0_18px_35px_rgba(20,38,70,0.1)]
                            lg:hidden
                        "
                    >

                        <div
                            className="
                                max-h-[calc(100vh-76px)]
                                overflow-y-auto
                                p-5
                            "
                        >

                            {navbarLinks.map((link) => (

                                <div
                                    key={link.label}
                                    className="
                                        border-b
                                        border-slate-100
                                        last:border-b-0
                                    "
                                >

                                    {/* ========================================
                                        DROPDOWN LINK
                                    ========================================= */}

                                    {link.dropdown ? (

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleMenuToggle(
                                                    link.label
                                                )
                                            }
                                            className="
                                                flex
                                                w-full
                                                items-center
                                                justify-between
                                                py-4
                                                text-left
                                                text-[15px]
                                                font-medium
                                                text-[#253657]
                                            "
                                        >

                                            <span>
                                                {link.label}
                                            </span>


                                            <ChevronDown
                                                size={17}
                                                className={`
                                                    transition-transform
                                                    duration-200

                                                    ${activeMenu ===
                                                        link.label
                                                        ? "rotate-180 text-[#ff6414]"
                                                        : ""
                                                    }
                                                `}
                                            />

                                        </button>

                                    ) : (

                                        /* ====================================
                                           NORMAL MOBILE LINK
                                        ===================================== */

                                        <Link
                                            to={link.path}
                                            onClick={() => {
                                                setMobileMenuOpen(
                                                    false
                                                );
                                                setActiveMenu(null);
                                            }}
                                            className="
                                                block
                                                py-4
                                                text-[15px]
                                                font-medium
                                                text-[#253657]
                                            "
                                        >
                                            {link.label}
                                        </Link>

                                    )}


                                    {/* ========================================
                                        MOBILE DROPDOWN
                                    ========================================= */}

                                    {link.dropdown &&
                                        activeMenu ===
                                        link.label &&
                                        link.menu && (

                                            <div className="pb-4">

                                                <div className="space-y-6">

                                                    {getMenuSections(
                                                        link.menu
                                                    ).map(
                                                        (
                                                            section
                                                        ) => (

                                                            <div
                                                                key={
                                                                    section.title
                                                                }
                                                            >

                                                                {/* SECTION TITLE */}

                                                                <p
                                                                    className="
                                                                        mb-3
                                                                        px-2
                                                                        text-[10px]
                                                                        font-semibold
                                                                        tracking-[0.15em]
                                                                        text-[#ff6414]
                                                                    "
                                                                >
                                                                    {
                                                                        section.title
                                                                    }
                                                                </p>


                                                                {/* SECTION ITEMS */}

                                                                <div className="space-y-1">

                                                                    {section.items.map(
                                                                        (
                                                                            item
                                                                        ) => {

                                                                            const Icon =
                                                                                iconMap[
                                                                                item.icon
                                                                                ];

                                                                            return (
                                                                                <Link
                                                                                    key={
                                                                                        item.label
                                                                                    }
                                                                                    to={
                                                                                        item.path
                                                                                    }
                                                                                    onClick={() => {
                                                                                        setMobileMenuOpen(
                                                                                            false
                                                                                        );
                                                                                        setActiveMenu(
                                                                                            null
                                                                                        );
                                                                                    }}
                                                                                    className="
                                                                                        flex
                                                                                        items-center
                                                                                        gap-3
                                                                                        rounded-lg
                                                                                        p-3
                                                                                        hover:bg-slate-50
                                                                                    "
                                                                                >

                                                                                    {/* ICON */}

                                                                                    <div
                                                                                        className="
                                                                                            flex
                                                                                            h-9
                                                                                            w-9
                                                                                            shrink-0
                                                                                            items-center
                                                                                            justify-center
                                                                                            rounded-lg
                                                                                            bg-[#fff3ec]
                                                                                            text-[#ff6414]
                                                                                        "
                                                                                    >
                                                                                        {Icon && (
                                                                                            <Icon
                                                                                                size={
                                                                                                    17
                                                                                                }
                                                                                                strokeWidth={
                                                                                                    1.8
                                                                                                }
                                                                                            />
                                                                                        )}
                                                                                    </div>


                                                                                    {/* CONTENT */}

                                                                                    <div>

                                                                                        <p
                                                                                            className="
                                                                                                text-[13px]
                                                                                                font-semibold
                                                                                                text-[#172b50]
                                                                                            "
                                                                                        >
                                                                                            {
                                                                                                item.label
                                                                                            }
                                                                                        </p>


                                                                                        <p
                                                                                            className="
                                                                                                mt-0.5
                                                                                                text-[11px]
                                                                                                text-slate-500
                                                                                            "
                                                                                        >
                                                                                            {
                                                                                                item.description
                                                                                            }
                                                                                        </p>

                                                                                    </div>

                                                                                </Link>
                                                                            );
                                                                        }
                                                                    )}

                                                                </div>

                                                            </div>
                                                        )
                                                    )}

                                                </div>

                                            </div>
                                        )}

                                </div>

                            ))}


                            {/* =================================================
                                MOBILE ACTIONS
                            ================================================== */}

                            <div
                                className="
                                    mt-5
                                    flex
                                    gap-3
                                    border-t
                                    border-slate-100
                                    pt-5
                                "
                            >

                                <Link
                                    to="/login"
                                    onClick={() =>
                                        setMobileMenuOpen(false)
                                    }
                                    className="
                                        flex
                                        h-11
                                        flex-1
                                        items-center
                                        justify-center
                                        rounded-lg
                                        border
                                        border-[#cbd4e2]
                                        text-[13px]
                                        font-semibold
                                        text-[#172b50]
                                    "
                                >
                                    Login
                                </Link>


                                <Link
                                    to="/get-started"
                                    onClick={() =>
                                        setMobileMenuOpen(false)
                                    }
                                    className="
                                        flex
                                        h-11
                                        flex-1
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-[#ff6414]
                                        text-[13px]
                                        font-semibold
                                        text-white
                                    "
                                >
                                    Get Started
                                </Link>

                            </div>

                        </div>

                    </div>
                )}

            </div>

        </header>
    );
};


export default Navbar;