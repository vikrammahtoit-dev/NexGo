import HeroContent from "./HeroContent";
// import HeroVisual from "./HeroVisual";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-white">

            {/* Background glow */}

            <div className="pointer-events-none absolute inset-0">

                <div className="absolute left-[-180px] top-[80px] h-[450px] w-[450px] rounded-full bg-[#fff1e9] blur-[120px]" />

                <div className="absolute right-[-180px] top-[-100px] h-[500px] w-[500px] rounded-full bg-[#edf3ff] blur-[120px]" />

            </div>


            {/* Hero Container */}
            {/* relative mx-auto grid min-h-[650px] w-[calc(100%-32px)] max-w-[1500px] grid-cols-1 items-center  sm:w-[calc(100%-48px)] lg:grid-cols-[40%_60%] xl:w-[calc(100%-80px)] */}

            <div className="relative mx-auto grid min-h-[530px] w-[calc(100%-32px)] max-w-[1500px] grid-cols-1 items-center  sm:w-[calc(100%-48px)] lg:grid-cols-[40%_60%] xl:w-[calc(100%-80px)]">

                {/* LEFT — 40% */}

                <HeroContent />


                {/* RIGHT — 60% */}

                {/* <HeroVisual /> */}

            </div>

        </section>
    );
};

export default Hero;