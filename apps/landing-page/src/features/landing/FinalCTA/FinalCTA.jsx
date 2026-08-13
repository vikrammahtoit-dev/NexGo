import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
    return (
        <section className="w-full bg-[#f7f9fD] px-5 py-8 sm:px-7 lg:px-8">
            <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-3xl bg-gradient-to-r from-[#071D63] via-[#112B8A] to-[#243EB5] px-7 py-10 sm:px-10 lg:px-14">
                {/* Background Dots */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-20 [background-image:radial-gradient(#ffffff_1.2px, transparent_1.2px)] [background-size:16px_16px]" />
                {/* content */}
                <div className="ralative z-10 grid items-center gap-10 lg:grid-cols-[1fr_0.25fr_0.65fr]">
                    {/* Left */}
                    <div className="max-w-xl">
                        <h2 className="text-white text-3xl font-bold sm:text-4xl lg:text-[36px] leading-tight">
                            Ready to {" "}
                            <span className="text-[#ff6900]">
                                Simplify
                            </span>
                            Your Logistics
                        </h2>

                        <p className="mt-4 max-w-lg text-sm leading-6 text-blue-100 sm:text-base">
                            Join thousands of businesses that trust Nexgo to streamline operations,
                            save time, and deliver better experiences.
                        </p>
                    </div>

                    {/* middle */}
                    <div className="">

                    </div>

                    {/* Right */}
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <button
                            type="button"
                            className="flex h-12 items-center justify-center gap-3 rounded-xl bg-[#ff6900] px-6 text-sm font-bold text-white shadow-[0_8px_25px_rgba(255,105,0,0.25)] transition hover:bg-[#e95f00]"
                        >
                            Get Started
                            <ArrowRight size={18} />
                        </button>

                        <button
                            type="button"
                            className="flex h-12 items-center justify-center gap-3 rounded-xl bg-white px-6 text-sm font-bold text-[#09285C] transition hover:bg-blue-50"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default FinalCTA;