import React from "react";

/* ============================================================
   ICONS
============================================================ */

const QuoteIcon = ({ className = "h-8 w-8" }) => (
    <svg
        viewBox="0 0 32 32"
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M6 8H14V16H9.5C9.5 20 11.5 22 14 23.5V27C8.8 25.8 5 21.6 5 15V8H6ZM19 8H27V16H22.5C22.5 20 24.5 22 27 23.5V27C21.8 25.8 18 21.6 18 15V8H19Z" />
    </svg>
);


const ShoppingBagIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5 8H19L18 20H6L5 8Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
        />

        <path
            d="M9 8V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
        />
    </svg>
);


const StoreIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M4 9H20V20H4V9Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
        />

        <path
            d="M3 9L5 4H19L21 9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
        />

        <path
            d="M8 13H16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
        />
    </svg>
);


const BuildingIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5 20V5H15V20"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
        />

        <path
            d="M15 10H19V20"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
        />

        <path
            d="M8 8H12M8 11H12M8 14H12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
    </svg>
);


/* ============================================================
   STAR RATING
============================================================ */

const StarRating = ({ rating }) => {
    return (
        <div className="flex items-center gap-1">

            {Array.from({ length: 5 }).map((_, index) => (
                <span
                    key={index}
                    className="text-[16px] leading-none text-[#FF6900]"
                >
                    ★
                </span>
            ))}

            <span className="ml-1 text-sm font-bold text-[#09285C]">
                {rating}/5
            </span>

        </div>
    );
};


/* ============================================================
   AVATAR
============================================================ */

const Avatar = ({ initials, variant = "blue" }) => {

    const variants = {
        blue: "bg-[#DCE9FF] text-[#09285C]",
        orange: "bg-[#FFF0E6] text-[#D85A00]",
        purple: "bg-[#ECE5FF] text-[#6340BB]",
    };

    return (
        <div
            className={`
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white
                text-base
                font-bold
                shadow-sm
                ${variants[variant]}
            `}
        >
            {initials}
        </div>
    );
};


/* ============================================================
   TESTIMONIAL DATA
============================================================ */

const testimonials = [
    {
        quote:
            "Nexgo has completely simplified our logistics operations. One platform for multiple couriers, real-time tracking, and powerful automation — it saves us hours every day.",
        name: "Vikram Kumar",


        rating: "4.8",
        initials: "",
        avatarVariant: "blue",
        icon: ShoppingBagIcon,
        accent: "text-[#2563EB]",
    },
    {
        quote:
            "With Nexgo, we can compare rates, choose the best delivery options, and keep our customers informed at every step. Our NPS score has improved significantly.",
        name: "Ajit Kumar",


        rating: "4.9",
        initials: " ",
        avatarVariant: "orange",
        icon: StoreIcon,
        accent: "text-[#FF6900]",
    },
    {
        quote:
            "The integrations, dashboard, and analytics give us full control over our distribution network. Nexgo is truly a technology partner we can rely on for scale.",
        name: "Abhishek Raj",


        rating: "5.0",
        initials: "",
        avatarVariant: "purple",
        icon: BuildingIcon,
        accent: "text-[#6D4BC7]",
    },
];


/* ============================================================
   TESTIMONIAL CARD
============================================================ */

const TestimonialCard = ({ testimonial }) => {

    const Icon = testimonial.icon;

    return (
        <article
            className="
                relative
                flex
                min-h-[330px]
                flex-col
                rounded-2xl
                border
                border-[#E4EAF2]
                bg-white
                p-6
                shadow-[0_8px_28px_rgba(9,40,92,0.05)]
            "
        >

            {/* ----------------------------------------------
                Top Quote Icon
            ----------------------------------------------- */}

            <div
                className={`
                    ${testimonial.accent}
                    mb-4
                `}
            >
                <QuoteIcon className="h-9 w-9" />
            </div>


            {/* ----------------------------------------------
                Quote
            ----------------------------------------------- */}

            <p
                className="
                    max-w-[390px]
                    text-sm
                    leading-6
                    text-[#26365A]
                "
            >
                {testimonial.quote}
            </p>


            {/* ----------------------------------------------
                Divider
            ----------------------------------------------- */}

            <div className="my-5 h-px bg-[#E8EDF4]" />


            {/* ----------------------------------------------
                Bottom Information
            ----------------------------------------------- */}

            <div
                className="
                    mt-auto
                    flex
                    items-end
                    justify-between
                    gap-4
                "
            >

                {/* Customer */}

                <div className="flex items-center gap-3">

                    <Avatar
                        initials={testimonial.initials}
                        variant={testimonial.avatarVariant}
                    />

                    <div>

                        <h3
                            className="
                                text-sm
                                font-bold
                                text-[#09285C]
                            "
                        >
                            {testimonial.name}
                        </h3>

                        <p
                            className="
                                mt-0.5
                                text-xs
                                text-slate-500
                            "
                        >
                            {testimonial.role}
                        </p>

                        <p
                            className={`
                                mt-1
                                text-xs
                                font-semibold
                                ${testimonial.accent}
                            `}
                        >
                            {testimonial.company}
                        </p>

                    </div>

                </div>


                {/* Rating Box */}

                <div
                    className="
                        shrink-0
                        rounded-xl
                        border
                        border-[#E4EAF2]
                        bg-white
                        px-3
                        py-2
                    "
                >
                    <StarRating rating={testimonial.rating} />
                </div>

            </div>


            {/* ----------------------------------------------
                Category Icon
            ----------------------------------------------- */}

            <div
                className="
                    absolute
                    right-6
                    top-6
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F5F8FD]
                    text-[#09285C]
                "
            >
                <Icon />
            </div>

        </article>
    );
};


/* ============================================================
   MAIN COMPONENT
============================================================ */

const Testimonials = () => {
    return (
        <section
            className="
                w-full
                bg-[#F7F9FD]
                py-14
                sm:py-16
                lg:py-18
            "
        >

            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1240px]
                    px-5
                    sm:px-7
                    lg:px-8
                "
            >

                {/* ============================================
                    HEADER
                ============================================= */}

                <div className="mx-auto max-w-3xl text-center">

                    <div className="mb-3 flex items-center justify-center gap-4">

                        <span className="hidden h-[2px] w-8 bg-[#FF6900] sm:block" />

                        <span
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-wide
                                text-[#FF6900]
                                sm:text-sm
                            "
                        >
                            Trusted By Businesses
                        </span>

                        <span className="hidden h-[2px] w-8 bg-[#FF6900] sm:block" />

                    </div>


                    <h2
                        className="
                            text-3xl
                            font-bold
                            leading-tight
                            text-[#09285C]
                            sm:text-4xl
                            lg:text-[46px]
                        "
                    >
                        What Our Customers Say
                    </h2>


                    <p
                        className="
                            mt-3
                            text-sm
                            leading-6
                            text-slate-500
                            sm:text-base
                        "
                    >
                        Real stories from real businesses that are growing
                        with Nexgo.
                    </p>

                </div>


                {/* ============================================
                    TESTIMONIAL GRID
                ============================================= */}

                <div
                    className="
                        mt-10
                        grid
                        grid-cols-1
                        gap-5
                        lg:grid-cols-3
                    "
                >

                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.name}
                            testimonial={testimonial}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Testimonials;