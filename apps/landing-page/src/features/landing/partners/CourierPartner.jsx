import blueDart from "../../../assets/logos/bluedart.svg";
import Amazon from "../../../assets/logos/amazon.svg";
import blitz from "../../../assets/logos/blitz.svg";
import delhivery from "../../../assets/logos/delhivery.png";
import dhl from "../../../assets/logos/dhl.svg";
import dtdc from "../../../assets/logos/dtdc.png";
import ekart from "../../../assets/logos/ekart.svg";
import indianPost from "../../../assets/logos/indianpost.svg";
import porter from "../../../assets/logos/porter.png";
import shadowfox from "../../../assets/logos/fedex.png";
import shriMaruti from "../../../assets/logos/shri_maruti.png";
import Xpressbees from "../../../assets/logos/xpressbees.svg";
import Gati from "../../../assets/logos/gati.svg";



const courierPartners = [
    {
        name: "Blue Dart",
        logo: blueDart,
    },
    {
        name: "Amazon",
        logo: Amazon,
    },
    {
        name: "Blitz",
        logo: blitz,
    },
    {
        name: "Delhivery",
        logo: delhivery,
    },
    {
        name: "DHL",
        logo: dhl,
    },
    {
        name: "DTDC",
        logo: dtdc,
    },
    {
        name: "Ekart",
        logo: ekart,
    },
    {
        name: "Indian Post ",
        logo: indianPost,
    },
    {
        name: "Porter",
        logo: porter,
    },
    {
        name: "Shadowfox",
        logo: shadowfox,
    },
    {
        name: "Shri Maruti",
        logo: shriMaruti,
    },
    {
        name: "XpressBees",
        logo: Xpressbees,
    },
    {
        name: "Gati",
        logo: Gati,
    },
];


// const CourierPartner = () => {
//     const duplicatedPartners = [
//         ...courierPartners,
//         ...courierPartners,
//     ];

//     return (
//         <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#062d6b] via-[#dbe6f8] to-[#ff6900] py-14 sm:py-16 lg:py-20">
//             {/* Background Decoration */}
//             <div className="pointer-events-none absolute inset-0 overflow-hidden">
//                 {/* Left Blue Glow */}
//                 <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />

//                 {/* Right Orange Glow */}
//                 <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-500/25 blur-3xl" />

//                 {/* Left Dotted pattern */}
//                 <div className="abolute bottom-8 left-0 h-40 w-56 opacity-30 [background-image:radial-gradient(#0b4ea2_1.5px,transparent_1.5px)] [background-size:18px_18px]" />

//                 {/* Right Dotted pattern */}
//                 <div className="absolute bottom-8 right-0 h-40 w-56 opacity-20 [background-image:radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:18px_18px]" />

//                 {/* Left Diagonal Decoration */}
//                 <div className="absolute -left-20 -top-24 h-96 w-96 rotate-45 border-b border-white/10" />

//                 {/* Right Diagonal Decoration */}
//                 <div className="absolute -bottom-32 -right-20 h-[500px] w-[500px] rotate-45 border-t border-white/20" />
//             </div>

//             {/* Main Content */}
//             <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
//                 {/* Heading */}
//                 <div className="mb-10 text-center sm:mb-12 lg:mb-14">
//                     <div className="mb-3 flex items-center justify-center gap-3 sm:gap-5 ">
//                         {/* Left Line */}
//                         <span className="hidden h-[2px] w-12 bg-[#0b3b82] sm:block lg:w-20" />
//                         {/* Heading */}
//                         <h2 className="text-3xl font-bold tracking-tight text-[#09285c] sm:text-4xl lg:text-3xl">
//                             Our Courier{" "}
//                             <span className="text-[#f56616]">
//                                 Partners
//                             </span>
//                         </h2>
//                         {/* Right Line */}
//                         <span className="hidden h-[2px] bg-[#f56616] sm:block lg:w-20" />
//                     </div>

//                     {/* Subtitle */}
//                     <p className="mx-auto max-w-2xl text-sm font-medium text-slate-700 sm:text-base lg:text-lg">
//                         Seamlessly integrated with India's leading courier partners.
//                     </p>
//                 </div>

//                 <div className="relative">
//                     {/* Left Arrow */}
//                     <div className=" absolute left-1 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center  justify-center rounded-full border  border-white/70  bg-white/90 text-3xl  font-medium text-[#0b3b82] shadow-lg sm:left-3 sm:h-11 sm:w-11">
//                         ‹
//                     </div>

//                     {/* Right Arrow */}
//                     <div className="absolute right-1 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-3xl font-medium text-[#f56616] shadow-lg  sm:right-3 sm:h-11 sm:w-11">
//                         ›
//                     </div>

//                     {/* Outer Carousel Container */}
//                     <div className="relative overflow-hidden rounded-2xl border  border-white/60 bg-white/20 px-10 py-7 shadow-[0_15px_50px_rgba(8,40, 95, 0.15)] backdrop-blur-sm sm:px-14 sm:py-8 lg:px-16 lg:py-9">
//                         {/* Top Glow  */}
//                         <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
//                         {/* Bottom Glow */}
//                         <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

//                         {/* -----Moving Track--------- */}
//                         <div
//                             className="flex w-max items-center"
//                             style={{
//                                 animation: "courier-marquee 35s linear infinite"
//                             }}

//                         >
//                             {duplicatedPartners.map((partner, index) => (
//                                 <div
//                                     key={`${partner.name}-${index}`}
//                                     className="flex items-center"
//                                 >
//                                     {/* --- Courier Card----- */}
//                                     <div className="flex h-20 w-[150px] shrink-0 items-center justify-center rounded-xl border border-white bg-white px-4 shadow-[0_8px_25px_rgba(8,40,95,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(8,40,95,0.18)] sm:h-24 sm:w-[175px] sm:px-5 lg:h-24 lg:w-[185px]">
//                                         <img
//                                             src={partner.logo}
//                                             alt={`${partner.name} logo`}
//                                             className="max-h-12 max-w-[135px] object-contain sm:max-h-14 sm:max-w-[155px]"
//                                         />
//                                     </div>
//                                     {/*----- Dashed Connection ------------------*/}
//                                     {index !== duplicatedPartners.length - 1 && (
//                                         <div className="h-0 w-8 shrink-0 border-t-2 border-dashed border-[#173f82] sm:w-10 lg:w-12" />
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* ------Animation--- */}
//             <style>{`@keyframes courier-marquee {
//               0% {
//             transform: translateX(-50%);
//             }
//            100% {
//             transform: translateX(0);
//             }
//         }
//         @media (prefers-reduced-motion: reduce) {

//           [style*="courier-marquee"] {
//             animation: none !important;
//             transform: translateX(0) !important;
//           }

//         }
//       `}
//             </style>
//         </section>
//     )
// };





const CourierPartner = () => {

    const duplicatedPartners = [
        ...courierPartners,
        ...courierPartners,
    ];


    return (

        <section
            className="
        relative
        w-full
        overflow-hidden
        bg-gradient-to-r
        from-[#062d6b]
        via-[#dce7f8]
        to-[#ff6900]
        py-8
        sm:py-10
        lg:py-12
      "
        >


            <div
                className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
            >

                {/* Left Blue Glow */}

                <div
                    className="
            absolute
            -left-32
            top-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/20
            blur-3xl
          "
                />


                {/* Right Orange Glow */}

                <div
                    className="
            absolute
            -bottom-20
            -right-32
            h-[500px]
            w-[500px]
            rounded-full
            bg-orange-500/25
            blur-3xl
          "
                />


                {/* Left Dotted Pattern */}

                <div
                    className="
            absolute
            bottom-8
            left-0
            h-40
            w-56
            opacity-30
            [background-image:radial-gradient(#0b4ea2_1.5px,transparent_1.5px)]
            [background-size:18px_18px]
          "
                />


                {/* Right Dotted Pattern */}

                <div
                    className="
            absolute
            bottom-8
            right-0
            h-40
            w-56
            opacity-20
            [background-image:radial-gradient(#ffffff_1.5px,transparent_1.5px)]
            [background-size:18px_18px]
          "
                />


                {/* Left Diagonal Decoration */}

                <div
                    className="
            absolute
            -left-20
            -top-24
            h-96
            w-96
            rotate-45
            border-b
            border-white/10
          "
                />


                {/* Right Diagonal Decoration */}

                <div
                    className="
            absolute
            -bottom-32
            -right-20
            h-[500px]
            w-[500px]
            rotate-45
            border-t
            border-white/20
          "
                />

            </div>




            <div
                className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1600px]
          px-4
          sm:px-6
          lg:px-8
        "
            >


                {/* ==================================================
            HEADING
        =================================================== */}

                <div
                    className="
            mb-6
            text-center
            sm:mb-7
            lg:mb-8
          "
                >

                    <div
                        className="
              mb-3
              flex
              items-center
              justify-center
              gap-3
              sm:gap-5
            "
                    >

                        {/* Left Line */}

                        <span
                            className="
                hidden
                h-[2px]
                w-12
                bg-[#0b3b82]
                sm:block
                lg:w-20
              "
                        />


                        {/* Heading */}

                        <h2
                            className="
                text-3xl
                font-bold
                tracking-tight
                text-[#09285c]
                sm:text-2xl
                lg:text-3xl
              "
                        >

                            Our Courier{" "}

                            <span className="text-[#f56616]">
                                Partners
                            </span>

                        </h2>


                        {/* Right Line */}

                        <span
                            className="
                hidden
                h-[2px]
                w-12
                bg-[#f56616]
                sm:block
                lg:w-20
              "
                        />

                    </div>


                    {/* Subtitle */}

                    <p
                        className="
              mx-auto
              max-w-2xl
              text-sm
              font-medium
              text-slate-700
              sm:text-base
              lg:text-lg
            "
                    >
                        Seamlessly integrated with India's leading courier partners.
                    </p>

                </div>


                {/* ==================================================
            COURIER CAROUSEL
        =================================================== */}

                <div className="relative">


                    <div
                        className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/60
              bg-white/20
              px-10
              py-4
              shadow-[0_15px_50px_rgba(8,40,95,0.15)]
              backdrop-blur-sm
              sm:px-14
              sm:py-5
              lg:px-16
              lg:py-5
            "
                    >


                        {/* =================================================
                TOP GLOW
            ================================================== */}

                        <div
                            className="
                pointer-events-none
                absolute
                left-0
                right-0
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-white
                to-transparent
              "
                        />


                        {/* =================================================
                BOTTOM GLOW
            ================================================== */}

                        <div
                            className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                right-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-white
                to-transparent
              "
                        />


                        {/* =================================================
                FIXED DASHED CONNECTION LINE

                IMPORTANT:

                This line is OUTSIDE the moving track.

                Therefore:

                ❌ It does NOT move.
                ❌ It does NOT animate.
                ❌ It does NOT scroll.

                It simply stays behind the cards.
            ================================================== */}

                        <div
                            className="
                pointer-events-none
                absolute
                left-0
                right-0
                top-1/2
                z-0
                border-t-2
                border-dashed
                border-[#173f82]
              "
                        />


                        {/* =================================================
                MOVING COURIER TRACK

                ONLY THIS PART MOVES.

                Direction:

                LEFT → RIGHT

                Infinite loop.
            ================================================== */}

                        <div
                            className="
                relative
                z-10
                overflow-hidden
              "
                        >

                            <div
                                className="
                  flex
                  w-max
                  items-center
                  gap-8
                  sm:gap-10
                  lg:gap-12
                "
                                style={{
                                    animation:
                                        "courier-marquee 35s linear infinite",
                                }}
                            >


                                {/* ==========================================
                    COURIER CARDS
                =========================================== */}

                                {duplicatedPartners.map((partner, index) => (

                                    <div
                                        key={`${partner.name}-${index}`}
                                        className="
                      flex
                      shrink-0
                      items-center
                    "
                                    >

                                        {/* ======================================
                        COURIER CARD
                    ======================================= */}

                                        <div
                                            className="
  flex
  h-14
  w-[150px]
  items-center
  justify-center
  rounded-xl
  border
  border-white
  bg-white
  px-4
  shadow-[0_8px_25px_rgba(8,40,95,0.12)]
  transition
  duration-300
  hover:-translate-y-1
  hover:shadow-[0_12px_30px_rgba(8,40,95,0.18)]
  sm:h-16
  sm:w-[165px]
  sm:px-5
  lg:h-16
  lg:w-[175px]
"

                                        >

                                            <img
                                                src={partner.logo}
                                                alt={`${partner.name} logo`}
                                                className="
                          max-h-12
                          max-w-[135px]
                          object-contain
                          sm:max-h-14
                          sm:max-w-[155px]
                        "
                                            />

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </div>




            <style>{`

        @keyframes courier-marquee {

          0% {
            transform: translateX(-50%);
          }

          100% {
            transform: translateX(0);
          }

        }


        @media (prefers-reduced-motion: reduce) {

          [style*="courier-marquee"] {
            animation: none !important;
            transform: translateX(0) !important;
          }

        }

      `}</style>

        </section>
    );
};



export default CourierPartner;