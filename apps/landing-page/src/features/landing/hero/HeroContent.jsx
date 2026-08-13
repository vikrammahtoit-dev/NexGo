import { ArrowRight, Sparkles } from "lucide-react";

import HeroStats from "./HeroStats";
import { heroFeatures } from "./hero.data";

const HeroContent = () => {
    return (
        <div className="relative z-10 flex w-full flex-col justify-center lg:pr-5 xl:pr-8">

            {/* AI Badge */}

            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#dce5fa] bg-[#f3f6ff] px-3 py-2">
                <Sparkles
                    size={13}
                    strokeWidth={1.8}
                    className="text-[#635be2]"
                />

                <span className="text-[9px] font-bold tracking-wide text-[#203b70] sm:text-[10px]">
                    AI-POWERED LOGISTICS ECOSYSTEM
                </span>
            </div>


            {/* Heading */}

            <h1 className="max-w-[570px] text-[42px] font-bold leading-[1.08] tracking-[-0.035em] text-[#132c59] sm:text-[50px] md:text-[56px] lg:text-[42px] xl:text-[52px] 2xl:text-[58px]">
                One Platform.
                <br />

                Every Courier.
                <br />

                <span className="text-[#f56617]">
                    Smarter Shipping.
                </span>
            </h1>


            {/* Description */}

            <p className="mt-5 max-w-[520px] text-[13px] leading-6 text-[#596b8c] sm:text-[15px] sm:leading-7">
                Connect with 15+ courier partners, compare real-time rates,
                ship, track and manage everything from a single intelligent
                platform.
            </p>


            {/* CTA Buttons */}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                <button
                    type="button"
                    className="inline-flex h-[48px] items-center justify-center gap-2 rounded-lg bg-[#ff6414] px-6 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(255,100,20,0.18)] transition hover:bg-[#ed590e]"
                >
                    Start Shipping Free

                    <ArrowRight
                        size={17}
                        strokeWidth={1.8}
                    />
                </button>

                <button
                    type="button"
                    className="inline-flex h-[48px] items-center justify-center rounded-lg border border-[#b8c5dc] bg-white px-7 text-[13px] font-semibold text-[#17366d] transition hover:border-[#17366d] hover:bg-[#f7f9fd]"
                >
                    Get Started
                </button>

            </div>


            {/* Feature Pills */}

            <div className="mt-7 flex w-full flex-wrap items-center gap-2 lg:flex-nowrap">

                {heroFeatures.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <div
                            key={feature.label}
                            className="flex shrink-0 items-center gap-2 rounded-lg border border-[#e2e8f1] bg-white px-2.5 py-2 shadow-[0_4px_14px_rgba(20,40,75,0.04)]"
                        >
                            <Icon
                                size={14}
                                strokeWidth={1.8}
                                className="shrink-0 text-[#274a82]"
                            />

                            <span className="whitespace-nowrap text-[9px] font-medium text-[#425574] xl:text-[10px]">
                                {feature.label}
                            </span>
                        </div>
                    );
                })}

            </div>


            {/* Trust Statistics */}

            {/* <HeroStats /> */}

        </div>
    );
};

export default HeroContent;
