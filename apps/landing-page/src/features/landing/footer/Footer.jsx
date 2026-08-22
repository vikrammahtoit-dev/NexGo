
import { Link } from "react-router-dom";
import nexgoLogo from "../../../assets/logos/CompanyName.png";

/* ============================================================
   ICONS
============================================================ */

const MailIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.7"
        />

        <path
            d="M4 7L12 13L20 7"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);


const PhoneIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6.5 3.5L9.5 5L8 8.5C9.2 11 11 12.8 13.5 14L17 12.5L18.5 15.5L17 18.5C16.7 19.1 16.1 19.5 15.4 19.4C9.7 18.7 5.3 14.3 4.6 8.6C4.5 7.9 4.9 7.3 5.5 7L6.5 3.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);


const LocationIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 21C12 21 19 15 19 9C19 5.13 15.87 2 12 2C8.13 2 5 5.13 5 9C5 15 12 21 12 21Z"
            stroke="currentColor"
            strokeWidth="1.7"
        />

        <circle
            cx="12"
            cy="9"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.7"
        />
    </svg>
);


/* ============================================================
   SOCIAL ICONS
============================================================ */

const LinkedInIcon = () => (
    <span className="text-xs font-bold">in</span>
);

const FacebookIcon = () => (
    <span className="text-sm font-bold">f</span>
);

const TwitterIcon = () => (
    <span className="text-xs font-bold">𝕏</span>
);

const YoutubeIcon = () => (
    <span className="text-xs font-bold">▶</span>
);


/* ============================================================
   FOOTER LINK
============================================================ */

const FooterLink = ({ children }) => (
    <a
        href="#"
        className="
            text-sm
            text-[#C7D2EA]
            transition
            duration-200
            hover:text-[#FF6900]
        "
    >
        {children}
    </a>
);


/* ============================================================
   SOCIAL BUTTON
============================================================ */

const SocialButton = ({ children }) => (
    <a
        href="#"
        className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            text-white
            transition
            duration-200
            hover:border-[#FF6900]
            hover:text-[#FF6900]
        "
    >
        {children}
    </a>
);


/* ============================================================
   FOOTER
============================================================ */

const Footer = () => {
    return (
        <footer className="w-full bg-[#061221] text-white">

            {/* ==================================================
                MAIN FOOTER
            =================================================== */}

            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1240px]
                    px-5
                    py-12
                    sm:px-7
                    lg:px-8
                    lg:py-14
                "
            >

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-10
                        md:grid-cols-2
                        lg:grid-cols-[1.35fr_0.8fr_1fr_0.9fr_1fr]
                        lg:gap-8
                    "
                >

                    {/* ==================================================
                        BRAND
                    =================================================== */}

                    <div>

                        {/* Logo */}
                        <img
                            src={nexgoLogo}
                            alt="Nexgo_logo"
                            className="h-28 max-w-[310px] object-contain"
                        />

                        {/* Tagline */}

                        <p
                            className="
                                
                                max-w-xs
                                text-sm
                                leading-6
                                text-[#C7D2EA]
                            "
                        >
                            Smarter logistics. Stronger businesses.
                        </p>


                        {/* Social Links */}

                        <div className="mt-5 flex items-center gap-2">

                            <SocialButton>
                                <LinkedInIcon />
                            </SocialButton>

                            <SocialButton>
                                <FacebookIcon />
                            </SocialButton>

                            <SocialButton>
                                <TwitterIcon />
                            </SocialButton>

                            <SocialButton>
                                <YoutubeIcon />
                            </SocialButton>

                        </div>

                    </div>


                    {/* ==================================================
                        PLATFORM
                    =================================================== */}

                    <div>

                        <h3
                            className="
                                text-sm
                                font-bold
                                text-white
                            "
                        >
                            Platform
                        </h3>

                        <div className="mt-5 flex flex-col gap-3">

                            <FooterLink>
                                Features
                            </FooterLink>

                            <FooterLink>
                                Integrations
                            </FooterLink>

                            <FooterLink>
                                Pricing
                            </FooterLink>

                            <FooterLink>
                                How It Works
                            </FooterLink>

                            <FooterLink>
                                Dashboard
                            </FooterLink>

                        </div>

                    </div>


                    {/* ==================================================
                        SOLUTIONS
                    =================================================== */}

                    <div>

                        <h3
                            className="
                                text-sm
                                font-bold
                                text-white
                            "
                        >
                            Solutions
                        </h3>

                        <div className="mt-5 flex flex-col gap-3">

                            <FooterLink>
                                E-commerce & D2C
                            </FooterLink>

                            <FooterLink>
                                Retail & Brands
                            </FooterLink>

                            <FooterLink>
                                SMEs & Startups
                            </FooterLink>

                            <FooterLink>
                                Enterprise
                            </FooterLink>

                            <FooterLink>
                                Custom Logistics
                            </FooterLink>

                        </div>

                    </div>


                    {/* ==================================================
                        RESOURCES
                    =================================================== */}

                    <div>

                        <h3
                            className="
                                text-sm
                                font-bold
                                text-white
                            "
                        >
                            Resources
                        </h3>

                        <div className="mt-5 flex flex-col gap-3">

                            <FooterLink>
                                <Link
                                    to="/api-guides">
                                    API Docs
                                </Link>
                            </FooterLink>

                            {/* <FooterLink>
                                Blog
                            </FooterLink> */}

                            <FooterLink>
                                Help Center
                            </FooterLink>

                            <FooterLink>
                                <Link to="/shipping-guides">
                                    Shipping Guide
                                </Link>
                            </FooterLink>

                            <FooterLink>
                                Shipping SOP
                            </FooterLink>

                            <FooterLink>
                                <Link to="/faqs">
                                    FAQs
                                </Link>

                            </FooterLink>

                        </div>

                    </div>


                    {/* ==================================================
                        CONTACT
                    =================================================== */}

                    <div>

                        <h3
                            className="
                                text-sm
                                font-bold
                                text-white
                            "
                        >
                            Contact Us
                        </h3>


                        <div className="mt-5 flex flex-col gap-4">

                            {/* Email */}

                            <a
                                href="mailto:hello@nexgo.com"
                                className="
                                    flex
                                    items-center
                                    gap-2.5
                                    text-sm
                                    text-[#C7D2EA]
                                    transition
                                    hover:text-[#FF6900]
                                "
                            >
                                <MailIcon />

                                emailaddress
                            </a>


                            {/* Phone */}

                            <a
                                href="tel:+919876543210"
                                className="
                                    flex
                                    items-center
                                    gap-2.5
                                    text-sm
                                    text-[#C7D2EA]
                                    transition
                                    hover:text-[#FF6900]
                                "
                            >
                                <PhoneIcon />

                                +91 1234567890

                            </a>


                            {/* Location */}

                            <div
                                className="
                                    flex
                                    items-start
                                    gap-2.5
                                    text-sm
                                    text-[#C7D2EA]
                                "
                            >
                                <LocationIcon />

                                <span>
                                    Address ........
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ==================================================
                    DIVIDER
                =================================================== */}

                <div className="my-9 h-px bg-white/10" />


                {/* ==================================================
                    BOTTOM BAR
                =================================================== */}

                <div
                    className="
                        flex
                        flex-col
                        gap-4
                        text-xs
                        text-[#AEBBD6]
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >

                    <p>
                        © 2026 Nexgo. All rights reserved.
                    </p>


                    <div
                        className="
                            flex
                            flex-wrap
                            gap-x-6
                            gap-y-2
                        "
                    >

                        <Link to="/privacy-policy"
                            className="transition hover:text-white"
                        >
                            Privacy Policy
                        </Link>



                        <Link
                            to="/terms-services"
                            className="transition hover:text-white"
                        >
                            Terms of Service
                        </Link>

                        <Link
                            to="/cookie-policy"
                            className="transition hover:text-white"
                        >
                            Cookie Policy
                        </Link>


                        <Link
                            to="/refund-policy"
                            className="transition hover:text-white"
                        >
                            Refund & Cancellation Policy
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;