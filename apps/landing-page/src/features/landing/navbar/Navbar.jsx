import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

import {
    ChevronDown,
    Menu,
    X,
} from "lucide-react";

import { navbarLinks } from "./navbar.data";


/* ============================================================
   ICON MAP
============================================================ */

import {
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
} from "lucide-react";


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
       GET MENU SECTIONS
    ======================================================== */

    const getMenuSections = (menu) => {
        if (!menu) {
            return [];
        }

        // New structure
        if (Array.isArray(menu.sections)) {
            return menu.sections.slice(0, 2);
        }

        // Backward compatibility with old structure
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
       ACTIVE MENU DATA
    ======================================================== */

    const activeLink = navbarLinks.find(
        (link) => link.label === activeMenu
    );

    const activeSections = getMenuSections(
        activeLink?.menu
    );


    /* ========================================================
       DROPDOWN WIDTH
    ======================================================== */

    const dropdownWidth =
        activeSections.length === 1
            ? "w-[460px] max-w-[calc(100vw-48px)]"
            : "w-[860px] max-w-[calc(100vw-48px)]";


    /* ========================================================
       DROPDOWN GRID
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
                bg-white/95
                backdrop-blur-md
            "
            onMouseLeave={handleMenuClose}
        >

            <div
                className="
                    relative
                    mx-auto
                    flex
                    h-[72px]
                    w-[calc(100%-24px)]
                    max-w-[1280px]
                    items-center
                    justify-between
                    sm:w-[calc(100%-40px)]
                    lg:w-[calc(100%-56px)]
                    xl:h-[76px]
                    xl:w-[calc(100%-80px)]
                "
            >

                {/* =====================================================
                    LOGO
                ====================================================== */}

                <Logo />


                {/* =====================================================
                    DESKTOP NAVIGATION

                    ONLY SHOWS FROM xl (1280px)
                ====================================================== */}

                <nav
                    className="
                        hidden
                        h-full
                        items-center
                        gap-5
                        xl:flex
                        2xl:gap-7
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
                                        relative
                                        flex
                                        h-full
                                        items-center
                                        whitespace-nowrap
                                        text-[13px]
                                        font-medium
                                        text-[#253657]
                                        transition-colors
                                        duration-200
                                        hover:text-[#ff6414]
                                        2xl:text-[14px]
                                    "
                                >
                                    {link.label}
                                </Link>
                            );
                        }


                        /* ================================================
                           DROPDOWN
                        ================================================= */

                        return (
                            <div
                                key={link.label}
                                className="relative h-full"
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
                                        flex
                                        h-full
                                        items-center
                                        gap-1.5
                                        whitespace-nowrap
                                        text-[13px]
                                        font-medium
                                        transition-colors
                                        duration-200
                                        2xl:text-[14px]

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
                    TABLET ACTIONS

                    Visible from md to xl
                ====================================================== */}

                <div
                    className="
                        ml-auto
                        hidden
                        items-center
                        gap-2
                        md:flex
                        xl:hidden
                    "
                >

                    <Link
                        to="/login"
                        className="
                            flex
                            h-10
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-[#cbd4e2]
                            px-4
                            text-xs
                            font-semibold
                            text-[#172b50]
                            transition-colors
                            duration-200
                            hover:border-[#ff6414]
                            hover:text-[#ff6414]
                            lg:px-5
                            lg:text-[13px]
                        "
                    >
                        Login
                    </Link>


                    <Link
                        to="/get-started"
                        className="
                            flex
                            h-10
                            items-center
                            justify-center
                            rounded-lg
                            bg-[#ff6414]
                            px-4
                            text-xs
                            font-semibold
                            text-white
                            shadow-[0_4px_12px_rgba(255,100,20,0.12)]
                            transition-all
                            duration-200
                            hover:bg-[#ed590e]
                            lg:px-5
                            lg:text-[13px]
                        "
                    >
                        Get Started
                    </Link>

                </div>


                {/* =====================================================
                    DESKTOP CTA

                    Only visible from xl
                ====================================================== */}

                <div
                    className="
                        ml-5
                        hidden
                        shrink-0
                        items-center
                        gap-3
                        border-l
                        border-slate-200
                        pl-5
                        xl:flex
                        2xl:ml-8
                        2xl:pl-7
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
                            2xl:h-[44px]
                            2xl:px-[23px]
                            2xl:text-[14px]
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
                            2xl:h-[44px]
                            2xl:min-w-[116px]
                            2xl:px-[23px]
                            2xl:text-[14px]
                        "
                    >
                        Get Started
                    </Link>

                </div>


                {/* =====================================================
                    MOBILE / TABLET MENU BUTTON

                    Visible below xl
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
                        ml-3
                        flex
                        h-10
                        w-10
                        shrink-0
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
                        xl:hidden
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

                    Only exists on xl+ because desktop nav starts
                    at xl.
                ====================================================== */}

                {activeMenu && activeLink?.menu && (
                    <div
                        className={`
                            absolute
                            left-1/2
                            top-[72px]
                            hidden
                            -translate-x-1/2
                            overflow-hidden
                            rounded-b-2xl
                            border
                            border-t-0
                            border-slate-100
                            bg-white
                            shadow-[0_18px_45px_rgba(20,38,70,0.12)]
                            xl:block
                            ${dropdownWidth}
                            xl:top-[76px]
                        `}
                        onMouseEnter={() =>
                            setActiveMenu(activeMenu)
                        }
                    >

                        <div className="p-6 2xl:p-8">

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

                                            <div className="mb-4">

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

                                            <div className="space-y-1">

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
                                                                    gap-3
                                                                    rounded-xl
                                                                    p-3
                                                                    transition-colors
                                                                    duration-200
                                                                    hover:bg-slate-50
                                                                    2xl:gap-4
                                                                    2xl:p-4
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
                                                                        transition-colors
                                                                        duration-200
                                                                        group-hover:bg-[#ff6414]
                                                                        group-hover:text-white
                                                                        2xl:h-10
                                                                        2xl:w-10
                                                                    "
                                                                >
                                                                    {Icon && (
                                                                        <Icon
                                                                            size={
                                                                                18
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
                                                                            text-[13px]
                                                                            font-semibold
                                                                            text-[#172b50]
                                                                            transition-colors
                                                                            duration-200
                                                                            group-hover:text-[#ff6414]
                                                                            2xl:text-[14px]
                                                                        "
                                                                    >
                                                                        {
                                                                            item.label
                                                                        }
                                                                    </p>


                                                                    <p
                                                                        className="
                                                                            mt-1
                                                                            text-[11px]
                                                                            leading-5
                                                                            text-slate-500
                                                                            2xl:text-[12px]
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
                    MOBILE / TABLET MENU

                    Below xl
                ====================================================== */}

                {mobileMenuOpen && (
                    <div
                        className="
                            absolute
                            left-0
                            right-0
                            top-[72px]
                            border-t
                            border-slate-100
                            bg-white
                            shadow-[0_18px_35px_rgba(20,38,70,0.1)]
                            xl:hidden
                            xl:top-[76px]
                        "
                    >

                        <div
                            className="
                                max-h-[calc(100vh-72px)]
                                overflow-y-auto
                                p-4
                                sm:p-5
                                lg:p-6
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

                                    {/* ====================================
                                        DROPDOWN
                                    ===================================== */}

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
                                                text-sm
                                                font-medium
                                                text-[#253657]
                                                sm:text-[15px]
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

                                        /* =================================
                                           NORMAL LINK
                                        ================================== */

                                        <Link
                                            to={link.path}
                                            onClick={() => {
                                                setMobileMenuOpen(
                                                    false
                                                );
                                                setActiveMenu(
                                                    null
                                                );
                                            }}
                                            className="
                                                block
                                                py-4
                                                text-sm
                                                font-medium
                                                text-[#253657]
                                                sm:text-[15px]
                                            "
                                        >
                                            {link.label}
                                        </Link>

                                    )}


                                    {/* ====================================
                                        MOBILE DROPDOWN CONTENT
                                    ===================================== */}

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

                                                                                    <div className="min-w-0">

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
                                                                                                leading-4
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
                                MOBILE / TABLET ACTIONS
                            ================================================== */}

                            <div
                                className="
                                    mt-5
                                    grid
                                    grid-cols-1
                                    gap-3
                                    border-t
                                    border-slate-100
                                    pt-5
                                    sm:grid-cols-2
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