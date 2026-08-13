

const PackageIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M4 7.5L12 3L20 7.5 V16.5L12 21L4 16.5V7.5Z"
            stroke="currentColor"
            strokeWidth={1.7}
            strokeLinejoin="round"
        />
        <path
            d="M4 7.5L12 12L20 7.5"
            stroke="currentColor"
            strokeWidth={1.7}
            strokeLinejoin="round"
        />
        <path
            d="M12 12V21"
            stroke="currentColor"
            strokeWidth={1.7}
        />
    </svg>
);

const LocationIcon = ({ className = "h-6 w-6" }) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 21C12 21 19 15 19 9C19 5.13 15.87 2 12 2C8.13 2 5 5.13 5 9C5 15 12 21 12 21Z"
            fill="currentColor"
        />
        <circle
            cx={12}
            cy={9}
            r={3}
            fill="white"
        />
    </svg>
);

const TruckIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3 6H14V17H3V6Z"
            stroke="currentColor"
            strokeWidth={1.7}
            strokeLinejoin="round"
        />
        <path
            d="M14 10H18L21 13V17H14V10Z"
            stroke="currentColor"
            strokeWidth={1.7}
            strokeLinejoin="round"
        />
        <circle
            cx={7}
            cy={18}
            r={2}
            stroke="currentColor"
            strokeWidth={1.7}
        />
        <circle
            cx={17}
            cy={18}
            r={2}
            stroke="currentColor"
            strokeWidth={1.7}
        />
    </svg>
);

const CalendarIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="4"
            y="5"
            width="16"
            height="15"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.7"
        />

        <path
            d="M8 3V7M16 3V7M4 9H20"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
        />
    </svg>
);

const ClockIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="12"
            cy="12"
            r="8.5"
            stroke="currentColor"
            strokeWidth="1.7"
        />

        <path
            d="M12 7V12L15 14"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const HelpIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.7"
        />

        <path
            d="M9.5 9C9.8 7.8 10.7 7 12 7C13.5 7 14.5 8 14.5 9.3C14.5 10.4 13.8 11 12.8 11.6C11.8 12.2 11.5 12.8 11.5 14"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
        />

        <circle
            cx="11.5"
            cy="17"
            r="0.7"
            fill="currentColor"
        />
    </svg>
);

const ServiceLocationIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M4 21V8L12 4L20 8V21"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
        />

        <path
            d="M8 21V12H16V21"
            stroke="currentColor"
            strokeWidth="1.6"
        />

        <circle
            cx="17"
            cy="8"
            r="2.5"
            fill="white"
            stroke="currentColor"
            strokeWidth="1.5"
        />
    </svg>
);


const CustomersIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="9"
            cy="8"
            r="3"
            stroke="currentColor"
            strokeWidth="1.7"
        />

        <path
            d="M3.5 20C3.8 16.5 5.7 14.5 9 14.5C12.3 14.5 14.2 16.5 14.5 20"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
        />

        <circle
            cx="17"
            cy="9"
            r="2.3"
            stroke="currentColor"
            strokeWidth="1.7"
        />
    </svg>
);


const DeliveryStatsIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.7"
        />

        <path
            d="M12 7V12L15 14"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
        />

        <path
            d="M4 5L6 3M20 5L18 3"
            stroke="#FF6900"
            strokeWidth="1.7"
            strokeLinecap="round"
        />
    </svg>
);


const SupportIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5 13V11C5 7.13 8.13 4 12 4C15.87 4 19 7.13 19 11V13"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
        />

        <rect
            x="3"
            y="12"
            width="4"
            height="7"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.7"
        />

        <rect
            x="17"
            y="12"
            width="4"
            height="7"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.7"
        />
    </svg>
);



const LiveTracking = () => {

    const stats = [
        {
            value: "10K+",
            title: "Packages Delivered Everyday",
            subtitle: "Safe & Secure delivery",
            icon: PackageIcon,
        },
        {
            value: "200+",
            title: "Service Locations",
            subtitle: "Across India & growing",
            icon: ServiceLocationIcon,
        },
        {
            value: "99.8%",
            title: "On-Time Delivery",
            subtitle: "Your time, our promise",
            icon: DeliveryStatsIcon,
        },
        {
            value: "24/7",
            title: "Customer Support",
            subtitle: "We're here to help",
            icon: SupportIcon,
        }
    ]
    return (
        <section className="w-full bg-white py-6 sm:py-08 lg:py-12">
            <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-7 lg:px-8">
                {/* Top Tracking Area */}
                <div className="grid items-center gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
                    {/*----- Left Content--------- */}
                    <div className="max-w-[430px]">
                        {/* label */}
                        <p className="text-[11px] font-bold uppercase tracking-wide text-[#FF6900]">
                            Track Your Order
                        </p>
                        {/* Heading */}
                        <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-[#09285C] sm:text-[36px] lg:text-[40px]">
                            Real-Time Tracking,
                            <br />
                            Complete Transparency
                        </h2>

                        {/* Description */}
                        <p className="mt-6 max-w-[410px] text-sm leading-6 text-slate-500 sm:text-[15px]">
                            Stay updated at every step. Enter your tracking
                            number to get real-time updates on your shipment.
                        </p>

                        {/* Tracking Input + Button */}
                        <div className="mt-6 flex gap-2.5">
                            <div className="flex h-11 min-w-0 flex-1 items-center rounded-lg border border-[#DCE3ED] bg-white px-3.5 shadow-[0_3px_12px_rgba(9,40,92,0.03)]">
                                <PackageIcon />
                                <input
                                    type="text"
                                    placeholder="Enter tracking number"
                                    className="ml-2.5 min-w-0 flex-1 bg-transparent text-xs text-[#09285C] outline-none placeholder:text-slate-400 sm:text-sm"
                                />
                            </div>
                            <button
                                type="button"
                                className="flex h-11 shrink-0 items-center gap-3 rounded-lg bg-[#FF6900] px-4 text-xs font-bold text-white shadow-[0_6px_18px_rgba(255,105, 0, 0.2)] transition hover:bg-[#e85e00] sm:px-5 sm:text-sm"
                            >
                                Track Now
                                <span className="text-base">
                                    →
                                </span>
                            </button>


                        </div>
                        {/* Help */}
                        <button
                            type="button"
                            className="mt-6 flex items-center gap-2 text-xs font-medium text-[#1457FF] transition hover:text-[#09285C]"
                        >
                            <HelpIcon />
                            How to find your tacking number ?
                        </button>

                    </div>


                    {/* --- Map Area ---- */}
                    <div className="relative rounded-xl border border-[#DDE5EF] bg-white p-1.5 shadow-[0_8px_25px_rgba(9,40,92,0.06)]">
                        <div className="realtive h-[310px] overflow-hidden rounded-lg bg-[#EEF3F5] sm:h-[330px]">
                            {/* Map Background */}
                            <div
                                className="absolute inset-0 opacity-60"
                                style={{
                                    backgroundImage: `
                                    linear-gradient(32deg, transparent 47%, #dce5e9 48%, transparent 49%),
                                    linear-gradient(148deg, transparent 47%, #dce5e9 48%, transparent 49%),
                                    linear-gradient(90deg, transparent 49%, #e1e7eb 50%, transparent 51%),
                                    linear-gradient(0deg, transparent 49%, #e1e7eb 50%, transparent 51%)
                                    `,
                                    backgroundSize: "95px 70px",
                                }}
                            />

                            {/* Soft map Areas */}
                            <div className="absolute left-[15%] top-[-15%] h-[90%] w-[35%] rotate-[25deg] rounded-[50%] bg-white/80 blur-xl" />
                            <div className="absolute right-[5%] top-[10%] h-[75%] w-[35%] rotate-[-20deg] rounded-[50%] bg-white/70 blur-xl" />
                            <div className="absolute bottom-[-20%] left-[30%] h-[60%] w-[45%] rounded-full bg-[#dce9ee]/50 blur-2xl" />

                            {/* Route */}
                            <svg
                                className="absolute inset-0 h-full w-full"
                                viewBox="0 0 700 330"
                                preserveAspectRatio="none"
                            >
                                {/* Blue Route  */}
                                <path
                                    d="M45 55
                                    C90 115, 125 100, 175 115
                                    C20 132, 245 180, 315 185
                                    C365 190, 390 165, 430 175"
                                    fill="none"
                                    stroke="#2376FF"
                                    strokeWidth={5}
                                    strokeLinecap="round"
                                />
                                {/* Orange Routes */}
                                <path
                                    d="M430 175
                                    C475 190, 505 155, 540 175
                                    C575 195, 600 150, 650, 120"
                                    fill="none"
                                    stroke="#FF6900"
                                    strokeWidth={5}
                                    strokeLinecap="round"
                                />
                            </svg>

                            {/* Pickup Marker */}
                            <div className="absolute left-[3%] top-[2%]">
                                <div className="flex h-10 w-10 items-center justfiy-center rounded-full bg-[#2376FF] text-white shadow-[0_6px_15px_rgba(35,118,255, 0.3)]">
                                    <LocationIcon className="h-7 w-7" />
                                </div>
                                <div className="mx-auto mt-[-4px] h-3 w-3 rotate-45 bg-[#2376FF]" />
                            </div>

                            {/* pickup Information */}
                            <div className="absolute left-[10%] top-[4%] rounded-lg bg-white px-3 py-2 shadow-[0_5px_18px_rgba(9,40,92,0.1)]">
                                <p className="text-[10px] font-bold text-[#09285C]">
                                    Pickup
                                </p>
                                <p className="mt-0.5 text-[10px] font-semibold text-[#9285C]">
                                    New Delhi
                                </p>
                            </div>

                            {/* Current Shipment*/}
                            <div className="absolute left-[62%] top-[44%] flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-white text-[#1457FF] shadow-[0_5px_15px_rgba(9,40,92,0.15)]">
                                <TruckIcon />
                            </div>

                            {/* Destination Marker */}
                            <div className="absolute right-[4%] top-[21%]">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6900] text-white shadow-[0_6px_15px_rgba(255,105,0, 0.25)]">
                                    <LocationIcon className="h-7 w-7" />
                                </div>
                                <div className="mx-auto mt-[-4px] h-3 w-3 rotate-45 bg-[#FF6900]" />
                            </div>

                            {/* Destination Information */}
                            <div className="absolute bottom-[30%] right-[4%] rounded-lg bg-white px-3 py-2 shadow-[0_5px_18px_rgba(9,40,92,0.1)]">

                                <p className="text-[10px] font-bold text-[#09285C]">
                                    Destination
                                </p>

                                <p className="mt-0.5 text-[10px] font-semibold text-[#09285C]">
                                    Patna, India
                                </p>
                            </div>

                            {/* In trnasit Card  */}
                            <div className="absolute bottom-3 left-3 w-[195px] rounded-xl bg-white p-3 shadow-[0_8px_25px_rgba(9,40,92,0.13)] sm:w-[205px]">
                                {/* Status */}
                                <div className="flex items-center gap-2.5">
                                    <div className="flex items-center justify-center h-9 w-9 shrink-0 rounded-lg bg-[#eff5ff] text-[#1457ff]">
                                        <TruckIcon />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold text-[#1457FF]">
                                            In Transit
                                        </p>
                                        <p className="mt-0.5 text-[9px] text-slate-500">
                                            Your package is on the way
                                        </p>
                                    </div>
                                </div>
                                <div className="my-2.5 h-px bg-[#e7ecf2]" />
                                {/* Estimmated Delivery */}
                                <p className="text-[11px] text-slate-500">
                                    Estimated Delivery
                                </p>
                                <div className="mt-1.5 flex items-center gap-2 text-[10px] font-bold text-[#9285C]">
                                    <span className="text-[#1457FF]">
                                        <CalendarIcon />
                                    </span>
                                    Aug 16, 2026
                                </div>

                                <div className="mt-1.5 flex items-center gap-2 text-[10px] text-[#09285C]">

                                    <span className="text-[#1457FF]">
                                        <ClockIcon />
                                    </span>

                                    10:30 AM – 02:30 PM

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Statstics */}
                <div className="mt-10 overflow-hidden rounded-xl border border-[#E1E7EF] bg-white shadow-[0_6px_20px_rgba(9,40,92,0.66)]">
                    <div className="grid grid-cols-1 divide-y divide-[#e6ebf2] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
                        {stats.map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={stat.title}
                                    className="flex items-center gap-3 px-5 py-4"
                                >
                                    {/* Icon */}
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f1f6ff] text-[#1457ff]">
                                        <Icon />
                                    </div>

                                    {/* Content */}
                                    <div className=" min-w-0">
                                        <p className="text-xl font-bold leading-none text-[#ff6900]">
                                            {stat.value}
                                        </p>
                                        <p className="mt-1 text-sm font-semibold text-[#09285C]">
                                            {stat.title}
                                        </p>
                                        {/* <p>
                                            {stat.subtitle}
                                        </p> */}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default LiveTracking;