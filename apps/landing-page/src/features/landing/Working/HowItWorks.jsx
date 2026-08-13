const BookingIcon = () => (
    <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 sm:h-12  sm:w-12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="14"
            y="10"
            width="36"
            height="44"
            rx="5"
            stroke="currentColor"
            strokeWidth="3"
        />
        <path
            d="M22 22H42"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
        />
        <path
            d="M22 30H42"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
        />
        <path
            d="M22 38H42"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
        />
        <path
            d="M39 37L42 40L48 33"
            stroke="#FF6900"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />

    </svg>
);

const PickupIcon = () => (
    <svg
        viewBox="0 0 64 64"
        className="h-8 w-8 sm:h-9 sm:w-9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="8"
            y="20"
            width="34"
            height="24"
            rx="3"
            stroke="currentColor"
            strokeWidth="3"
        />

        <path
            d="M42 27H50L56 34V44H42V27Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
        />

        <circle
            cx="19"
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
            d="M48 27V34H56"
            stroke="#FF6900"
            strokeWidth="3"
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
            strokeWidth="3"
        />

        <circle
            cx="32"
            cy="27"
            r="6"
            stroke="#FF6900"
            strokeWidth="3"
        />

        <path
            d="M42 15L48 11"
            stroke="#FF6900"
            strokeWidth="3"
            strokeLinecap="round"
        />

        <path
            d="M48 11H43"
            stroke="#FF6900"
            strokeWidth="3"
            strokeLinecap="round"
        />
    </svg>
);

const DeliveryIcon = () => (
    <svg
        viewBox="0 0 64 64"
        className="h-8 w-8 sm:h-9 sm:w-9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M11 17H53V51H11V17Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
        />

        <path
            d="M11 25H53"
            stroke="currentColor"
            strokeWidth="3"
        />

        <path
            d="M22 17V11H42V17"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
        />

        <path
            d="M21 38L28 45L44 29"
            stroke="#FF6900"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);


const steps = [
    {
        number: "01",
        title: "Book Your Shipment",
        description: "Enter your details and schedule a pickup",
        icon: BookingIcon,
    },
    {
        number: "02",
        title: "We Pick It Up",
        description: "Our team picks up your package from your location",
        icon: PickupIcon,
    },
    {
        number: "03",
        title: "In Transit",
        description: "Your package is on the way with real-time tracking",
        icon: TrackingIcon,
    },
    {
        number: "04",
        title: "Delivered Safely",
        description: "We deliver it safely to your dorrstep",
        icon: DeliveryIcon,
    },
]

const HowItWorks = () => {
    return (
        <section className="w-full bg-[#F7F9FD] py-12 sm:py-14 lg:py-16">
            {/* Main Container */}
            <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-7 lg:px-8">
                {/* Section Heading */}
                <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
                    <h2 className="text-2xl font-bold leading-tight text-[#09285C] sm:text-2xl lg:text-3xl">
                        From Pickup to Delivery,
                        <br className="hidden sm:block" />
                        We Make It Simple
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                        One Seamless process to book, move, track, and
                        deliver every shipment with confidence.
                    </p>
                </div>


                <div className="relative">

                    {/* ONE CONTINUOUS CONNECTION LINE */}
                    <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[40px] hidden border-t-2 border-dashed border-[#C4CDDC] lg:block" />

                    {/* STEPS */}
                    <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">

                        {steps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.number}
                                    className="flex flex-col items-center text-center  lg:px-5 "
                                >

                                    {/* ICON */}
                                    <div
                                        className="
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#C8D2E2]
                            bg-white
                            shadow-[0_5px_20px_rgba(9,40,92,0.07)]
                        "
                                    >
                                        <div
                                            className="
                                flex
                                h-16
                                w-16
                                items-center
                                justify-center
                                rounded-full
                                bg-[#F4F7FC]
                                text-[#09285C]
                            "
                                        >
                                            <Icon />
                                        </div>
                                    </div>

                                    {/* NUMBER */}
                                    <span
                                        className="
                            mt-4
                            text-xs
                            font-bold
                            tracking-widest
                            text-[#FF6900]
                        "
                                    >
                                        {step.number}
                                    </span>

                                    {/* TITLE */}
                                    <h3
                                        className="
                            mt-1.5
                            text-base
                            font-bold
                            leading-tight
                            text-[#09285C]
                            sm:text-[17px]
                        "
                                    >
                                        {step.title}
                                    </h3>

                                    {/* DESCRIPTION */}
                                    <p
                                        className="
                            mt-2
                            max-w-[210px]
                            text-xs
                            leading-5
                            text-slate-500
                            sm:text-sm
                        "
                                    >
                                        {step.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>
                </div>



                {/* Bottom Line */}
                <div className="mt-10 text-center sm:mt-12">
                    <p className="text-sm font-semibold text-[#09285C] sm:text-base">
                        From pickup to delivery, Nexgo keeps you connected
                        every step of the way.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

{/* <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.number}
                                className="relative flex flex-col items-center text-center lg:px-5 "
                            >
                                {index !== steps.length - 1 && (
                                    <div className="pointer-events-none absolute left-[calc(50% + 48px)] top-[40px] hidden  w-[calc(100%-96px)] border-t-2 border-dashed border-[#C4CDDC] lg:block" />
                                )}

                                {/* Icon s
                                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#C8D2E2] bg-white shadow-[0_5px_20px_rgba(9,40,92,0.07)]">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F4F7FC] text-[#09285C]">
                                        <Icon />
                                    </div>
                                </div>

                                {/* Step Number  
                                <span className="mt-4 text-xs font-bold tracking-widest text-[#FF6900]">
                                    {step.number}
                                </span>

                                {/* Step Title 
                                <h3 className="mt-1.5 text-base font-bold leading-tight text-[#09285C] sm:text-[17px]">
                                    {step.title}
                                </h3>

                                {/* Step description 
                                <p className="mt-2 max-w-[210px] text-xs leading-5 text-slate-500 sm:text-sm">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div> */}