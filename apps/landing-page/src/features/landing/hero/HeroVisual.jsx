import {
    BrainCircuit,
    Check,
    MapPin,
    Package,
    Route,
    Truck,
} from "lucide-react";

import {
    courierPartners,
    deliveryStages,
    heroMetricCards,
} from "./hero.data";

const HeroVisual = () => {
    return (
        <div className="relative mt-12 min-h-[560px] w-full overflow-hidden lg:mt-0 lg:min-h-[620px]">

            {/* =====================================================
          MAIN BLUE VISUAL BACKGROUND
      ====================================================== */}

            <div className="absolute inset-y-0 right-[-15%] w-[115%] overflow-hidden rounded-l-[35%] bg-[radial-gradient(circle_at_55%_40%,#416bb1_0%,#193c79_35%,#092451_68%,#061a39_100%)]" />


            {/* Soft Glow */}

            <div className="absolute right-[15%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#5797ff]/20 blur-[90px]" />

            <div className="absolute bottom-[15%] left-[25%] h-[250px] w-[250px] rounded-full bg-[#1c70e8]/20 blur-[70px]" />


            {/* =====================================================
          DIGITAL MAP EFFECT
      ====================================================== */}

            <div className="absolute bottom-[10%] left-[12%] right-[8%] h-[48%] opacity-70">

                <div className="absolute inset-0 bg-[radial-gradient(circle,#91c8ff_1px,transparent_1px)] [background-size:14px_14px] opacity-20" />

                <div className="absolute left-[5%] top-[30%] h-px w-[90%] rotate-[10deg] bg-gradient-to-r from-transparent via-[#77b9ff] to-transparent" />

                <div className="absolute left-[5%] top-[52%] h-px w-[90%] -rotate-[8deg] bg-gradient-to-r from-transparent via-[#4c8ee9] to-transparent" />

                <div className="absolute left-[10%] top-[72%] h-px w-[80%] rotate-[4deg] bg-gradient-to-r from-transparent via-[#ff8b42] to-transparent" />

            </div>


            {/* =====================================================
          AI DECISION ENGINE
      ====================================================== */}

            <div className="absolute left-[48%] top-[4%] -translate-x-1/2">

                <div className="relative">

                    {/* Vertical connector */}

                    <div className="absolute left-1/2 top-[-52px] h-[52px] w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-[#8c82ff]" />

                    {/* AI Icon */}

                    <div className="absolute left-1/2 top-[-83px] flex h-[54px] w-[54px] -translate-x-1/2 items-center justify-center rounded-full border border-[#928aff] bg-[#193776] shadow-[0_0_30px_rgba(114,103,255,0.75)]">

                        <BrainCircuit
                            size={27}
                            strokeWidth={1.7}
                            className="text-white"
                        />

                    </div>


                    <div className="rounded-full border border-[#9d92ff] bg-[#182c70]/95 px-7 py-2.5 shadow-[0_0_25px_rgba(107,93,255,0.45)]">

                        <span className="whitespace-nowrap text-[10px] font-bold text-white sm:text-[11px]">
                            AI DECISION ENGINE
                        </span>

                    </div>

                </div>

            </div>


            {/* =====================================================
          COURIER PARTNERS
      ====================================================== */}

            <div className="absolute left-[10%] right-[10%] top-[19%] grid grid-cols-5 gap-2">

                {courierPartners.map((partner) => (
                    <div
                        key={partner.name}
                        className="flex h-[46px] items-center justify-center rounded-xl border border-white/70 bg-white px-1 shadow-[0_8px_20px_rgba(0,0,0,0.12)] sm:h-[52px]"
                    >
                        <span
                            className={`text-center text-[7px] font-extrabold sm:text-[9px] ${partner.className}`}
                        >
                            {partner.name}
                        </span>
                    </div>
                ))}

            </div>


            {/* =====================================================
          NETWORK CONNECTIONS
      ====================================================== */}

            <div className="absolute left-[19%] right-[19%] top-[25%] h-[120px]">

                <div className="absolute left-[12%] top-0 h-[100px] w-px rotate-[38deg] bg-gradient-to-b from-[#83d1ff] to-transparent" />

                <div className="absolute left-[37%] top-0 h-[110px] w-px bg-gradient-to-b from-[#83d1ff] to-transparent" />

                <div className="absolute right-[37%] top-0 h-[110px] w-px bg-gradient-to-b from-[#83d1ff] to-transparent" />

                <div className="absolute right-[12%] top-0 h-[100px] w-px -rotate-[38deg] bg-gradient-to-b from-[#83d1ff] to-transparent" />

            </div>


            {/* =====================================================
          CENTRAL NEXGO NODE
      ====================================================== */}

            <div className="absolute left-[48%] top-[33%] -translate-x-1/2">

                <div className="relative flex h-[105px] w-[105px] items-center justify-center rounded-full border-[3px] border-[#80bfff] bg-white shadow-[0_0_45px_rgba(77,159,255,0.7)] sm:h-[120px] sm:w-[120px]">

                    <div className="absolute inset-[8px] rounded-full border border-[#dce9ff]" />

                    <div className="text-center">

                        <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-[#f4f7fc]">
                            <Route
                                size={20}
                                strokeWidth={1.8}
                                className="text-[#f46718]"
                            />
                        </div>

                        <p className="text-[17px] font-extrabold tracking-tight text-[#172b50] sm:text-[19px]">
                            NEXGO
                        </p>

                    </div>

                </div>

            </div>


            {/* =====================================================
          SMART ROUTING
      ====================================================== */}

            <div className="absolute left-[48%] top-[52%] -translate-x-1/2">

                <div className="flex min-w-[205px] items-center gap-2.5 rounded-xl border border-[#5f7eb8] bg-[#09204b]/95 px-4 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.25)] sm:min-w-[240px]">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                        <MapPin
                            size={17}
                            className="text-white"
                        />
                    </div>

                    <div>

                        <p className="text-[9px] font-bold text-white sm:text-[10px]">
                            SMART ROUTING
                        </p>

                        <p className="mt-0.5 text-[7px] text-[#70e2b0] sm:text-[8px]">
                            Best Courier • Best Rate • Fastest Delivery
                        </p>

                    </div>

                </div>

            </div>


            {/* =====================================================
          WAREHOUSE
      ====================================================== */}

            <div className="absolute bottom-[21%] left-[10%]">

                <div className="flex flex-col items-center">

                    <div className="relative flex h-[58px] w-[76px] items-end justify-center rounded-lg bg-[#102e5b] shadow-[0_8px_20px_rgba(0,0,0,0.25)]">

                        <div className="absolute bottom-0 h-[38px] w-[58px] rounded-t-lg border border-[#7390b9] bg-[#dbe5f1]" />

                        <Package
                            size={22}
                            className="relative z-10 mb-2 text-[#f47a2c]"
                        />

                    </div>

                    <span className="mt-2 text-[8px] font-bold text-white">
                        WAREHOUSE
                    </span>

                </div>

            </div>


            {/* =====================================================
          DELIVERY TRUCK
      ====================================================== */}

            <div className="absolute bottom-[20%] left-[48%]">

                <div className="relative flex items-end">

                    <div className="absolute bottom-[-5px] left-1/2 h-3 w-20 -translate-x-1/2 rounded-full bg-[#36aaff]/30 blur-md" />

                    <div className="h-[27px] w-[38px] rounded-l-md bg-white shadow-md" />

                    <div className="flex h-[34px] w-[38px] items-center justify-center rounded-r-md bg-[#f47a2c]">
                        <Truck
                            size={18}
                            className="text-white"
                        />
                    </div>

                </div>

            </div>


            {/* =====================================================
          CUSTOMER LOCATION
      ====================================================== */}

            <div className="absolute bottom-[19%] right-[9%]">

                <div className="flex flex-col items-center">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6414] shadow-[0_0_25px_rgba(255,100,20,0.55)]">

                        <MapPin
                            size={21}
                            className="text-white"
                        />

                    </div>

                    <span className="mt-2 text-[8px] font-bold text-white">
                        CUSTOMER
                    </span>

                </div>

            </div>


            {/* =====================================================
          METRIC CARDS
      ====================================================== */}

            <div className="absolute right-[2%] top-[5%] hidden w-[120px] space-y-3 xl:block">

                {heroMetricCards.map((metric) => (
                    <div
                        key={metric.title}
                        className="rounded-xl border border-white/60 bg-white/90 p-3 shadow-[0_10px_25px_rgba(0,0,0,0.16)] backdrop-blur-md"
                    >

                        <p className="text-[8px] font-medium text-[#26385a]">
                            {metric.title}
                        </p>

                        <p
                            className={`mt-1 text-[17px] font-bold ${metric.type === "savings"
                                    ? "text-[#12945c]"
                                    : "text-[#162b51]"
                                }`}
                        >
                            {metric.value}
                        </p>

                        <p
                            className={`mt-1 text-[7px] ${metric.type === "savings"
                                    ? "text-[#12945c]"
                                    : "text-[#1c9b5d]"
                                }`}
                        >
                            {metric.change}
                        </p>

                        <div className="mt-3 h-6 overflow-hidden rounded bg-gradient-to-tr from-[#edf3ff] to-[#cbdcff]">
                            <div className="mt-3 h-px w-full rotate-[-5deg] bg-[#719cff]" />
                        </div>

                    </div>
                ))}

            </div>


            {/* =====================================================
          DELIVERY TIMELINE
      ====================================================== */}

            <div className="absolute bottom-[5%] left-[8%] right-[7%]">

                <div className="relative">

                    <div className="absolute left-0 right-0 top-3 h-px bg-gradient-to-r from-[#2bd68c] via-[#6b81ff] to-[#ff772e]" />

                    <div className="relative flex justify-between">

                        {deliveryStages.map((stage, index) => {
                            const Icon = stage.icon;

                            return (
                                <div
                                    key={stage.label}
                                    className="flex flex-col items-center"
                                >

                                    <div
                                        className={`flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#163b76] ${index === 0
                                                ? "bg-[#25ca80]"
                                                : index === deliveryStages.length - 1
                                                    ? "bg-[#20c87c]"
                                                    : "bg-[#153467]"
                                            }`}
                                    >
                                        <Icon
                                            size={10}
                                            strokeWidth={2}
                                            className="text-white"
                                        />
                                    </div>

                                    <span className="mt-1.5 whitespace-nowrap text-[6px] font-medium text-white sm:text-[7px]">
                                        {stage.label}
                                    </span>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default HeroVisual;