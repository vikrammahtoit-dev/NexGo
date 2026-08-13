const ExpressDeliveryIcon = () => (
    <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 sm:h-11 sm:w-11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14 20L30 11L47 20V40L30 50L14 40V20Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
        />

        <path
            d="M14 20L30 30L47 20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
        />

        <path
            d="M30 30V50"
            stroke="currentColor"
            strokeWidth="3"
        />

        <path
            d="M43 16L53 11"
            stroke="#FF6900"
            strokeWidth="4"
            strokeLinecap="round"
        />

        <path
            d="M50 7L55 11L49 15"
            stroke="#FF6900"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);


const RoadFreightIcon = () => (
    <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 sm:h-11 sm:w-11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="7"
            y="19"
            width="34"
            height="24"
            rx="3"
            stroke="currentColor"
            strokeWidth="3"
        />

        <path
            d="M41 26H49L56 33V43H41V26Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
        />

        <circle
            cx="18"
            cy="47"
            r="5"
            stroke="#FF6900"
            strokeWidth="3"
        />

        <circle
            cx="48"
            cy="47"
            r="5"
            stroke="#FF6900"
            strokeWidth="3"
        />

        <path
            d="M49 26V33H56"
            stroke="#FF6900"
            strokeWidth="3"
        />
    </svg>
);


const WarehouseIcon = () => (
    <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 sm:h-11 sm:w-11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8 27L32 12L56 27V53H8V27Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
        />

        <path
            d="M18 53V31H46V53"
            stroke="currentColor"
            strokeWidth="3"
        />

        <path
            d="M27 53V39H37V53"
            stroke="#FF6900"
            strokeWidth="3"
        />

        <path
            d="M18 27H46"
            stroke="#FF6900"
            strokeWidth="3"
        />
    </svg>
);


const EcommerceIcon = () => (
    <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 sm:h-11 sm:w-11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9 13H15L20 40H48L54 22H18"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />

        <circle
            cx="24"
            cy="49"
            r="4"
            fill="#FF6900"
        />

        <circle
            cx="44"
            cy="49"
            r="4"
            fill="#FF6900"
        />

        <path
            d="M30 29H43"
            stroke="#FF6900"
            strokeWidth="3"
            strokeLinecap="round"
        />

        <path
            d="M36.5 22V35"
            stroke="#FF6900"
            strokeWidth="3"
            strokeLinecap="round"
        />
    </svg>
);


const CustomSolutionsIcon = () => (
    <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 sm:h-11 sm:w-11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14 20L31 10L49 20V40L31 50L14 40V20Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
        />

        <path
            d="M14 20L31 30L49 20"
            stroke="currentColor"
            strokeWidth="3"
        />

        <path
            d="M31 30V50"
            stroke="currentColor"
            strokeWidth="3"
        />

        <circle
            cx="46"
            cy="42"
            r="7"
            fill="white"
            stroke="#FF6900"
            strokeWidth="3"
        />

        <path
            d="M46 38V46"
            stroke="#FF6900"
            strokeWidth="2.5"
            strokeLinecap="round"
        />

        <path
            d="M42 42H50"
            stroke="#FF6900"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
    </svg>
);


const ReliableDeliveryIcon = () => (
    <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 sm:h-11 sm:w-11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M32 7L51 14V28C51 41 43 51 32 56C21 51 13 41 13 28V14L32 7Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
        />

        <path
            d="M23 31L29 37L42 23"
            stroke="#FF6900"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);


/* ============================================================
   SERVICE DATA
============================================================ */

const services = [
    {

        title: "Express Delivery",
        description:
            "Fast and reliable delivery for time-sensitive and urgent shipments.",
        icon: ExpressDeliveryIcon,
    },
    {

        title: "Domestic Shipping",
        description:
            "Efficient road transportation for heavy, bulk, and long-distance shipments.",
        icon: RoadFreightIcon,
    },
    {

        title: "Warehousing",
        description:
            "Secure storage and inventory support to keep your goods organized and ready to move.",
        icon: WarehouseIcon,
    },
    {

        title: "E-commerce Logistics",
        description:
            "End-to-end fulfillment and delivery solutions built for growing online businesses.",
        icon: EcommerceIcon,
    },
    {

        title: "Custom Logistics Solutions",
        description:
            "Flexible logistics services tailored to your unique shipping and operational requirements.",
        icon: CustomSolutionsIcon,
    },
    {

        title: "Safe & Reliable Deliveries",
        description:
            "Partner with trusted courier partners to ensure safe, secure, and on-time deliveries.",
        icon: ReliableDeliveryIcon,
    },
];

const LogisticsSolution = () => {
    return (
        <section className="w-full bg-white py-8 sm:py-10 lg:py-12">
            {/* Main Container */}
            <div className="mx-auto w-full max-w-[1340px] px-3 sm:px-6 lg:px-7">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] lg:gap-10 xl:grid-cols-[280px_1fr]">
                    {/* Left Content  */}
                    <div className="flex flex-col justify-center">
                        {/* Small Heading */}
                        <span className="mb-3 text-xs font-bold uppercase tracking-wide text-[#FF6900] sm:text-sm">
                            Our Services
                        </span>
                        {/* Main Heading */}
                        <h2 className="max-w-[280px] text-3xl font-bold leading-tight text-[#09285C] sm:text-3xl">
                            Complete Logistics
                            <br />
                            Solutions
                        </h2>
                        {/* Description */}
                        <p className="mt-4 max-w-[270px] text-sm leading-6 text-slate-500">
                            From small packages to large shipments, we provide end-to-end
                            delivery solutions tailored to your needs.
                        </p>
                        {/* Explore all Services */}
                    </div>

                    {/* Right Side - service Cards  */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <article
                                    key={service.title}
                                    className="
                  group
                  relative
                  flex
                  min-h-[230px]
                  flex-col
                  rounded-2xl
                  border
                  border-[#DCE5F1]
                  bg-white
                  p-6
                  shadow-[0_8px_24px_rgba(9,40,92,0.045)]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_14px_30px_rgba(9,40,92,0.09)]
                "
                                >

                                    {/* Orange Bottom Border */}

                                    <div
                                        className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-[2px]
                    rounded-b-2xl
                    bg-[#FF6900]
                    opacity-0
                    transition
                    duration-300
                    group-hover:opacity-100
                  "
                                    />


                                    {/* Top Section */}

                                    <div className="flex items-start gap-5">

                                        {/* Icon */}

                                        <div
                                            className="
                      flex
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#EEF4FF]
                      text-[#09285C]
                    "
                                        >
                                            <Icon />
                                        </div>


                                        {/* Number + Title + Description */}

                                        <div className="min-w-0">

                                            {/* Number */}

                                            <span
                                                className="
                        text-xs
                        font-bold
                        tracking-wide
                        text-[#FF6900]
                      "
                                            >
                                                {service.number}
                                            </span>


                                            {/* Title */}

                                            <h3
                                                className="
                        mt-2
                        text-lg
                        font-bold
                        leading-tight
                        text-[#09285C]
                        sm:text-xl
                      "
                                            >
                                                {service.title}
                                            </h3>


                                            {/* Description */}

                                            <p
                                                className="
                        mt-3
                        text-sm
                        leading-6
                        text-slate-600
                      "
                                            >
                                                {service.description}
                                            </p>

                                        </div>

                                    </div>


                                    {/* Learn More */}

                                    {/* <button
                                        type="button"
                                        className="
                    mt-auto
                    flex
                    items-center
                    gap-2
                    pt-6
                    text-sm
                    font-bold
                    text-[#09285C]
                    transition
                    duration-200
                    group-hover:text-[#FF6900]
                  "
                                    >
                                        Learn More

                                        <span
                                            className="
                      text-lg
                      text-[#FF6900]
                      transition
                      duration-200
                      group-hover:translate-x-1
                    "
                                        >
                                            →
                                        </span>
                                    </button> */}

                                </article>
                            );
                        }

                        )}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default LogisticsSolution;