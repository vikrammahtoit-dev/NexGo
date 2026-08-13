import { heroStats } from "./hero.data";

const HeroStats = () => {
    return (
        <div className="mt-7 w-full max-w-[570px] rounded-xl border border-[#e5eaf2] bg-white px-4 py-4 shadow-[0_8px_25px_rgba(20,42,78,0.06)] sm:px-5">
            <div className="grid grid-cols-1 sm:grid-cols-3">
                {heroStats.map((stat, index) => {
                    const Icon = stat.icon;

                    return (
                        <div
                            key={stat.value}
                            className={`flex items-center gap-3 py-3 sm:py-0 sm:px-4 ${index !== 0
                                    ? "border-t border-[#e5eaf2] sm:border-l sm:border-t-0"
                                    : ""
                                }`}
                        >
                            <Icon
                                size={22}
                                strokeWidth={1.8}
                                className={`shrink-0 ${stat.iconClass}`}
                            />

                            <div>
                                <p className="whitespace-nowrap text-[12px] font-bold text-[#162d55] sm:text-[11px] lg:text-[12px]">
                                    {stat.value}
                                </p>

                                <p className="mt-0.5 text-[9px] text-[#71809a]">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HeroStats;