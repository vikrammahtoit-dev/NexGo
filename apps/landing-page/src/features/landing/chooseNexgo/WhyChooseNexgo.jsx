import { IndianRupee } from "lucide-react";

const CourierSelectionIcon = () => (
    <svg
        viewBox="0 0 64 64"
        className="h-12 w-12 sm:h-12 sm:w-12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x={10}
            y={20}
            width={33}
            height={26}
            rx={5}
            stroke="currentColor"
            strokeWidth={3}
        />
        <path
            d="M39 26H48L55 33V42H39V26Z"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinejoin="round"
        />
        <circle
            cx={18}
            cy={46}
            r={5}
            stroke="currentColor"
            strokeWidth={3}
        />
        <circle
            cx={47}
            cy={46}
            r={5}
            stroke="currentColor"
            strokeWidth={3}
        />
        <path
            d="M48 26V33H55"
            stroke="#ff6900"
            strokeWidth={3}
        />
    </svg>
);

const TrackingIcon = () => (
    <svg
        viewBox="0 0 64 64"
        className="h-8 w-8 sm:h-9 sm:w-9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M32 55C32 55 48 40 48 27C48 18.16 40.84 11 32 11C23.16 11 16 18.16 16 27C16 40 32 55 32 55Z"
            stroke="currentColor"
            strokeWidth={3}
        />
        <circle
            cx={32}
            cy={27}
            r={6}
            stroke="#FF6900"
            strokeWidth={3}
        />
    </svg>
);

const SecurityIcon = () => (
    <svg
        viewBox=" 0 0 64 64"
        className="h-8 w-8 sm:h-9 sm:w-9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M32 8L51 15V29C51 41 43 51 32 56C21 51 13 41 13 29V15L32 8Z"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinejoin="round"
        />
        <path
            d="M23 31L29 37L42 23"
            stroke="#FF6900"
            strokeWidth={3}
            strokeLinecap="round"
        />
    </svg>
);

// const CostIcon = () => (
//     <svg
//         viewBox="0 0 64 64"
//         className="h-8 w-8 sm:h-9 sm:w-9"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//     >
//         <path
//             d="M39 12H28C22 12 18 15 18 20C18 25 22 28 29 28H35C42 28 46 31 46 36C46 41 42 45 35 45H24"
//             stroke="currentColor"
//             strokeWidth="4"
//             strokeLinecap="round"
//         />
//         <path
//             d="M32 7V51"
//             stroke="currentColor"
//             strokeWidth="4"
//             strokeLinecap="round"
//         />
//     </svg>
// );

const AnalyticsIcon = () => (
    <svg
        viewBox="0 0 64 64"
        className="h-8 w-8 sm:h-9 sm:w-9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="9"
            y="35"
            width="8"
            height="17"
            rx="2"
            fill="currentColor"
        />
        <rect
            x="28"
            y="25"
            width="8"
            height="27"
            rx="2"
            fill="currentColor"
        />
        <rect
            x="47"
            y="12"
            width="8"
            height="40"
            rx="2"
            fill="currentColor"
        />
        <path
            d="M10 18L24 29L39 18L53 9"
            stroke="#FF6900"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const SupportIcon = () => (
    <svg
        viewBox="0 0 64 64"
        className="h-8 w-8 sm:h-9 sm:w-9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14 34V28C14 18.06 22.06 10 32 10C41.94 10 50 18.06 50 28V34"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
        />

        <rect
            x="9"
            y="31"
            width="10"
            height="17"
            rx="4"
            stroke="currentColor"
            strokeWidth="3"
        />

        <rect
            x="45"
            y="31"
            width="10"
            height="17"
            rx="4"
            stroke="currentColor"
            strokeWidth="3"
        />

        <path
            d="M45 48C42 54 37 56 31 56"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
        />
    </svg>
);

const benefits = [
    {
        title: "Smart Courier Selection",
        description:
            "Compare multiple courier partners in real-time and choose the best option for your shipments.",
        icon: CourierSelectionIcon,
        iconColor: "#0B3B82",
        iconBackground: "#EEF4FF",
    },
    {
        title: "Real-Time Tracking",
        description:
            "Track every shipment in real-time and keep your customers informed at every step.",
        icon: TrackingIcon,
        iconColor: "#0B9B73",
        iconBackground: "#ECFBF5",
    },
    {
        title: "Secure & Reliable Deliveries",
        description:
            "Partner with trusted courier partners to ensure safe and on-time deliveries.",
        icon: SecurityIcon,
        iconColor: "#F29A00",
        iconBackground: "#FFF7E8",
    },
    {
        title: "Reduce Shipping Costs",
        description:
            "Optimize shipping, reduce RTOs and COD failures with data driven decisions.",
        icon: IndianRupee,
        iconColor: "#EF476F",
        iconBackground: "#FFF0F3",
    },
    {
        title: "Analytics & Insights",
        description:
            "Powerful reports and insights help you make smarter decisions and grow your business.",
        icon: AnalyticsIcon,
        iconColor: "#7856E8",
        iconBackground: "#F3F0FF",
    },
    {
        title: "Dedicated Support",
        description:
            "Our support team is always ready to help you, whenever you need it.",
        icon: SupportIcon,
        iconColor: "#0B63D8",
        iconBackground: "#EEF5FF",
    },
];

const WhyChooseNexgo = () => {
    return (
        <section className="w-full bg-white py-6 sm:py-8 lg:py-10">
            <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-7 lg:px-8">
                {/* section Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    {/* label */}
                    <span className="inline-flex rounded-full bg-[#F2F5FF] px-6 py-1.5 text-[10px] font-bold tracking-wide text-[#FF6900] sm:text-xs">
                        Why Choose NexGo
                    </span>

                    <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#09285C] sm:text-4xl lg:text-[36px]">
                        Why is Nexgo the Trusted Logistics Partner
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm lg:text-[15px]">
                        From real-time tracking and efficient shipping to dependable last-mile delivery, Nexgo Provides everything businesses need to streamline logistics.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;

                        return (
                            <article
                                key={benefit.title}
                                className="min-h-[170px] rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_6px_22px_rgba(9,40,92,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(9,40,92,0.08)]"
                            >
                                <div className="flex items-start gap-5">
                                    <div
                                        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full"
                                        style={{
                                            backgroundColor: benefit.iconBackground,
                                            color: benefit.iconColor,
                                        }}
                                    >
                                        <Icon />
                                    </div>

                                    <div className="min-w-0 pt-0.5">
                                        <h3 className="text-lg font-bold leading 5 text-[#09285C] sm:text-[15px] ">
                                            {benefit.title}
                                        </h3>

                                        <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-[13px]">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Orange/Navy accent */}
                                {/* <div className="mt-5 h-[2px] w-15 rounded-full bg-[#FF6900]" /> */}
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};

export default WhyChooseNexgo;