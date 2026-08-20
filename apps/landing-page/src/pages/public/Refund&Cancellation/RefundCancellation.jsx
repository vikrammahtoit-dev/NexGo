import { ArrowRight, CalendarDays, CheckCircle2, ChevronRight, ClipboardCheck, CreditCard, FileCheck2, Info, RefreshCcw, ShieldCheck, WalletCards, } from "lucide-react";
import { paymentTimeline, policyProcessingNote, refundCancellationPolicy, refundRequestNote, refundSections, refundSteps } from "./RefundCancellation.data.js";
import React from "react";
import Navbar from "../../../features/landing/navbar/Navbar.jsx"
import Footer from "../../../features/landing/footer/Footer.jsx"

const HeroArtwork = () => {
    return (
        <div className="relative mx-auto w-full max-w-[520px]">
            <svg
                viewBox="0 0 620 500"
                className="h-auto w-full"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Refund and cancellation policy illustration"
            >
                <defs>
                    {/* Background */}
                    <radialGradient
                        id="refundGlow"
                        cx="50%"
                        cy="50%"
                        r="60%"
                    >
                        <stop offset="0%" stopColor="#EEF3FF" />
                        <stop offset="70%" stopColor="#F8FAFF" />
                        <stop offset="100%" stopColor="#FFFFFF" />
                    </radialGradient>

                    {/* Clipboard */}
                    <linearGradient
                        id="clipboardBorder"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                    >
                        <stop offset="0%" stopColor="#3155C9" />
                        <stop offset="100%" stopColor="#173B9F" />
                    </linearGradient>

                    {/* Shield */}
                    <linearGradient
                        id="shieldGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                    >
                        <stop offset="0%" stopColor="#3567F2" />
                        <stop offset="55%" stopColor="#1F4FD0" />
                        <stop offset="100%" stopColor="#14379B" />
                    </linearGradient>

                    {/* Rupee */}
                    <linearGradient
                        id="rupeeGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                    >
                        <stop offset="0%" stopColor="#668BEA" />
                        <stop offset="100%" stopColor="#244DB8" />
                    </linearGradient>

                    {/* Box */}
                    <linearGradient
                        id="boxFront"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                    >
                        <stop offset="0%" stopColor="#DFA96F" />
                        <stop offset="100%" stopColor="#B9763B" />
                    </linearGradient>

                    <linearGradient
                        id="boxTop"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                    >
                        <stop offset="0%" stopColor="#F1C184" />
                        <stop offset="100%" stopColor="#D99858" />
                    </linearGradient>

                    {/* Shadows */}
                    <filter
                        id="softShadow"
                        x="-30%"
                        y="-30%"
                        width="160%"
                        height="170%"
                    >
                        <feDropShadow
                            dx="0"
                            dy="16"
                            stdDeviation="18"
                            floodColor="#274A9F"
                            floodOpacity="0.14"
                        />
                    </filter>

                    <filter
                        id="smallShadow"
                        x="-30%"
                        y="-30%"
                        width="160%"
                        height="170%"
                    >
                        <feDropShadow
                            dx="0"
                            dy="8"
                            stdDeviation="9"
                            floodColor="#294A9C"
                            floodOpacity="0.18"
                        />
                    </filter>

                    <filter
                        id="shieldShadow"
                        x="-40%"
                        y="-40%"
                        width="180%"
                        height="190%"
                    >
                        <feDropShadow
                            dx="0"
                            dy="12"
                            stdDeviation="10"
                            floodColor="#153B9C"
                            floodOpacity="0.25"
                        />
                    </filter>
                </defs>

                {/* =====================================================
            BACKGROUND
        ===================================================== */}

                <rect
                    x="0"
                    y="0"
                    width="620"
                    height="500"
                    rx="30"
                    fill="url(#refundGlow)"
                />

                {/* Soft background blobs */}
                <ellipse
                    cx="312"
                    cy="408"
                    rx="255"
                    ry="38"
                    fill="#DDE7FF"
                    opacity="0.55"
                />

                <circle
                    cx="510"
                    cy="125"
                    r="85"
                    fill="#EEF3FF"
                    opacity="0.9"
                />

                <circle
                    cx="125"
                    cy="270"
                    r="90"
                    fill="#EEF3FF"
                    opacity="0.85"
                />

                {/* =====================================================
            DECORATIVE DASHED CIRCLE
        ===================================================== */}

                <path
                    d="M385 70
             C450 30 530 47 567 103
             C597 148 588 207 555 241"
                    fill="none"
                    stroke="#91AAF2"
                    strokeWidth="2.2"
                    strokeDasharray="8 8"
                    strokeLinecap="round"
                />

                {/* =====================================================
            LEFT DECORATIVE LEAVES
        ===================================================== */}

                <g opacity="0.82">
                    <path
                        d="M96 370
               C63 327 66 275 102 238
               C126 280 122 326 96 370Z"
                        fill="#C9D8FF"
                    />

                    <path
                        d="M112 330
               C87 275 103 222 145 188
               C159 244 146 291 112 330Z"
                        fill="#B9CCFA"
                    />

                    <path
                        d="M93 292
               C70 244 82 204 112 176
               C128 222 119 261 93 292Z"
                        fill="#D6E1FF"
                    />

                    <path
                        d="M108 361
               C107 301 122 248 151 205"
                        fill="none"
                        stroke="#7596E9"
                        strokeWidth="2"
                    />

                    <path
                        d="M105 321
               C91 288 85 253 86 225"
                        fill="none"
                        stroke="#7898E9"
                        strokeWidth="2"
                    />

                    <path
                        d="M112 359
               C130 320 143 281 147 241"
                        fill="none"
                        stroke="#7898E9"
                        strokeWidth="2"
                    />
                </g>

                {/* =====================================================
            RIGHT DECORATIVE LEAVES
        ===================================================== */}

                <g opacity="0.72">
                    <path
                        d="M472 367
               C449 324 456 278 492 248
               C510 292 503 333 472 367Z"
                        fill="#C4D5FF"
                    />

                    <path
                        d="M500 344
               C489 296 510 252 550 231
               C551 281 531 318 500 344Z"
                        fill="#B4C9F8"
                    />

                    <path
                        d="M516 382
               C526 339 557 309 591 301
               C580 346 551 372 516 382Z"
                        fill="#D6E1FF"
                    />

                    <path
                        d="M480 365
               C495 326 508 289 518 249"
                        fill="none"
                        stroke="#7796E4"
                        strokeWidth="2"
                    />
                </g>

                {/* =====================================================
            CLIPBOARD SHADOW
        ===================================================== */}

                <ellipse
                    cx="292"
                    cy="420"
                    rx="145"
                    ry="20"
                    fill="#B7C7EE"
                    opacity="0.32"
                />

                {/* =====================================================
            CLIPBOARD
        ===================================================== */}

                <g filter="url(#softShadow)">
                    {/* Outer clipboard */}
                    <rect
                        x="145"
                        y="92"
                        width="285"
                        height="323"
                        rx="18"
                        fill="url(#clipboardBorder)"
                    />

                    {/* Inner paper */}
                    <rect
                        x="160"
                        y="108"
                        width="255"
                        height="292"
                        rx="10"
                        fill="#FFFFFF"
                    />

                    {/* =================================================
              CLIP
          ================================================= */}

                    <rect
                        x="228"
                        y="68"
                        width="120"
                        height="55"
                        rx="15"
                        fill="#234AB6"
                        filter="url(#smallShadow)"
                    />

                    <circle
                        cx="288"
                        cy="68"
                        r="15"
                        fill="#234AB6"
                    />

                    <circle
                        cx="288"
                        cy="68"
                        r="6"
                        fill="#AFC2FA"
                    />

                    {/* =================================================
              TITLE
          ================================================= */}

                    <text
                        x="287"
                        y="151"
                        textAnchor="middle"
                        fontFamily="Arial, Helvetica, sans-serif"
                        fontSize="17"
                        fontWeight="800"
                        fill="#13255B"
                    >
                        REFUND &amp;
                    </text>

                    <text
                        x="287"
                        y="175"
                        textAnchor="middle"
                        fontFamily="Arial, Helvetica, sans-serif"
                        fontSize="16"
                        fontWeight="800"
                        fill="#13255B"
                    >
                        CANCELLATION POLICY
                    </text>

                    {/* =================================================
              CHECKLIST
          ================================================= */}

                    {[0, 1, 2, 3, 4].map((item) => {
                        const y = 213 + item * 35;

                        return (
                            <g key={item}>
                                <circle
                                    cx="192"
                                    cy={y}
                                    r="10"
                                    fill="#EFF4FF"
                                />

                                <path
                                    d={`M187 ${y}
                      L191 ${y + 4}
                      L198 ${y - 5}`}
                                    fill="none"
                                    stroke="#2550C2"
                                    strokeWidth="2.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                <rect
                                    x="215"
                                    y={y - 5}
                                    width={item % 2 === 0 ? 150 : 125}
                                    height="7"
                                    rx="3.5"
                                    fill="#D7E2FA"
                                />

                                <rect
                                    x="215"
                                    y={y + 8}
                                    width={item % 2 === 0 ? 115 : 142}
                                    height="5"
                                    rx="2.5"
                                    fill="#E5EBF9"
                                />
                            </g>
                        );
                    })}
                </g>

                {/* =====================================================
            RUPEE COIN
        ===================================================== */}

                <g filter="url(#smallShadow)">
                    <circle
                        cx="485"
                        cy="156"
                        r="42"
                        fill="#D9E4FF"
                    />

                    <circle
                        cx="485"
                        cy="156"
                        r="35"
                        fill="url(#rupeeGradient)"
                    />

                    <circle
                        cx="485"
                        cy="156"
                        r="28"
                        fill="none"
                        stroke="#87A5F0"
                        strokeWidth="2"
                        opacity="0.55"
                    />

                    <text
                        x="485"
                        y="168"
                        textAnchor="middle"
                        fontFamily="Arial, Helvetica, sans-serif"
                        fontSize="34"
                        fontWeight="700"
                        fill="#FFFFFF"
                    >
                        ₹
                    </text>
                </g>

                {/* =====================================================
            REFUND ARROW
        ===================================================== */}

                <path
                    d="M435 105
     C490 65 550 90 560 145
     C566 180 550 207 526 222"
                    fill="none"
                    stroke="#6A8CE4"
                    strokeWidth="8"
                    strokeLinecap="round"
                />

                <path
                    d="M528 199
     L526 224
     L550 214"
                    fill="none"
                    stroke="#6A8CE4"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* =====================================================
            NEXGO PACKAGE
        ===================================================== */}

                <g filter="url(#smallShadow)">

                    {/* Box top */}
                    <path
                        d="M404 325
               L507 289
               L579 320
               L478 359Z"
                        fill="url(#boxTop)"
                    />

                    {/* Front */}
                    <path
                        d="M404 325
               L478 359
               L478 439
               L404 401Z"
                        fill="#C9894B"
                    />

                    {/* Right */}
                    <path
                        d="M478 359
               L579 320
               L579 399
               L478 439Z"
                        fill="url(#boxFront)"
                    />

                    {/* Tape */}
                    <path
                        d="M477 300
               L510 311
               L434 342
               L404 325Z"
                        fill="#F5D29B"
                        opacity="0.95"
                    />

                    <path
                        d="M478 359
               L478 438"
                        stroke="#F2D19C"
                        strokeWidth="8"
                        opacity="0.9"
                    />

                    {/* NEXGO */}
                    <text
                        x="527"
                        y="382"
                        textAnchor="middle"
                        transform="rotate(-20 527 382)"
                        fontFamily="Arial, Helvetica, sans-serif"
                        fontSize="15"
                        fontWeight="900"
                        fill="#24345B"
                    >
                        NEXGO
                    </text>

                    {/* Box arrows */}
                    <path
                        d="M430 381
               L430 366
               M424 373
               L430 366
               L436 373"
                        fill="none"
                        stroke="#9B5D2F"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    <path
                        d="M443 388
               L443 373
               M437 380
               L443 373
               L449 380"
                        fill="none"
                        stroke="#9B5D2F"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>

                {/* =====================================================
            SHIELD
        ===================================================== */}

                <g filter="url(#shieldShadow)">

                    <path
                        d="
              M360 284
              L418 306
              L418 351
              C418 390 395 420 360 440
              C325 420 302 390 302 351
              L302 306
              Z
            "
                        fill="url(#shieldGradient)"
                    />

                    {/* Shield inner border */}
                    <path
                        d="
              M360 299
              L404 316
              L404 351
              C404 381 386 404 360 421
              C334 404 316 381 316 351
              L316 316
              Z
            "
                        fill="none"
                        stroke="#6D93FF"
                        strokeWidth="3"
                        opacity="0.65"
                    />

                    {/* Shield check */}
                    <path
                        d="
              M332 356
              L351 375
              L389 331
            "
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>

                {/* =====================================================
            SMALL DECORATIVE DOTS
        ===================================================== */}

                <circle
                    cx="544"
                    cy="76"
                    r="5"
                    fill="#C8D6FB"
                />

                <circle
                    cx="570"
                    cy="251"
                    r="6"
                    fill="#D2DEFA"
                />

                <circle
                    cx="83"
                    cy="147"
                    r="6"
                    fill="#D3DEFA"
                />

                <circle
                    cx="115"
                    cy="405"
                    r="5"
                    fill="#BFD0FA"
                />

                {/* =====================================================
            GROUND SHADOW
        ===================================================== */}

                <ellipse
                    cx="355"
                    cy="449"
                    rx="205"
                    ry="14"
                    fill="#9DB3E9"
                    opacity="0.22"
                />
            </svg>
        </div>
    );
}

const InlineText = ({ children }) => {
    if (typeof children !== "string") {
        return children;
    }
    const parts = children.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return (
                <strong
                    key={index}
                    className="font-bold text-blue-950"
                >
                    {part.slice(2, -2)}
                </strong>
            );
        }
        return (
            <React.Fragment key={index}>
                {part}
            </React.Fragment>
        )
    })
}

const PolicyParagraph = ({ children }) => {
    return (
        <p className="mb-2 text-[13px] leading-[1.9] text-[#36425F] sm:text-[14px] text-left">
            <InlineText>
                {children}
            </InlineText>
        </p>
    );
};

const HighlightsStrip = () => {
    const items = [
        {
            title: "Fair & Transparent",
            description:
                "Clear rules for cancellations and refunds.",
            icon: RefreshCcw,
            target: 2,
        },
        {
            title: "Fast Refunds",
            description:
                "Quick Processing to your original payment method or Nexgo Wallet.",
            icon: WalletCards,
            target: 23,
        },
        {
            title: "Secure & Reliable",
            description:
                "Your transactions and data are always protected.",
            icon: ShieldCheck,
            target: 25,
        },
        {
            title: "Always Here",
            description:
                "Dedicated support for all your refund queries.",
            icon: ClipboardCheck,
            target: 24,
        },

    ];

    return (
        <div className="overflow-hidden rounded-xl border border-orange-100 bg-white shadow-[0_6px_25px_rgba(32, 57, 116, 0.07)] mb-7 ">
            <div className="grid divide-y  divide-orange-100 md:grid-cols-4 md:divide-x-0 md:divide-y-0">
                {items.map((item) => {
                    const Icon = item.icon;

                    return (
                        <a
                            href={`#policy-section-${item.target}`}
                            key={item.title}
                            className="group flex items-center gap-4 px-5 py-5 transition hover:bg-orange-50"
                        >
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                                <Icon />
                            </div>

                            <div>
                                <h3 className="text-[12px] font-extrabold text-[#16275a]">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-[12px] leading-6 text-slate-600">
                                    {item.description}
                                </p>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
};

// Section Number
const SectionNumber = ({ number }) => {
    return (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xs font-extrabold text-[#2147B7] ring-1 ring-[#DCE4F5]">
            {String(number).padStart(2, "0")}
        </div>
    )
}

// Section Header
const SectionHeader = ({ number, title }) => {
    return (
        <div className="mb-5 flex items-start gap-4">
            <SectionNumber number={number} />
            <h2 className="pt-1 text-[19px] font-extrabold tracking-[-0.025em] text-[#102357] sm:text-[21px]">
                {title}
            </h2>
        </div>
    )
};

// BulletList
const PolicyBulletList = ({ items }) => {
    return (
        <ul className="mb-5 space-y-1.5">
            {items.map((item, index) => (
                <li
                    key={`${item}-${index}`}
                    className="flex items-start gap-3 text-[14px] leading-6 text-[#36425f] sm:text-[15px]"
                >
                    <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span>
                        <InlineText>{item}</InlineText>
                    </span>
                </li>
            ))}
        </ul>
    )
}

// Normal Section
const NormalSection = ({ section }) => {
    return (
        <section
            id={`policy-section-${section.number}`}
            className="scroll-mt-24 border-t border-slate-100 py-8 sm:py-9"
        >
            <SectionHeader
                title={section.title}
                number={section.number}
            />

            <div className="ml-0 sm:ml-[52px]">
                {section.content.map((block, index) => {
                    if (block.type === "bullets") {
                        return (
                            <PolicyBulletList
                                key={`bullets-${index}`}
                                items={block.items}
                            />
                        )


                    }

                    return (
                        <PolicyParagraph key={`paragraph-${index}`}>
                            {block.text}
                        </PolicyParagraph>
                    )
                })}
            </div>
        </section>
    )
};

const RefundProcessingSection = ({ section }) => {
    return (
        <section
            id="policy-section-23"
            className="scroll-mt-24 border-t border-slate-100 py-8 sm:py-9"
        >
            <SectionHeader
                number={section.number}
                title={section.title}
            />

            <div className="ml-0 sm:ml-[52px]">
                <PolicyParagraph>
                    Once a refund is approved, Nexgo will generally initiate the refund
                    withing a reasonable processing perid.
                </PolicyParagraph>
                <PolicyParagraph>
                    The actual time for funds to reach the user's account may depend
                    on the relevant payment provider or bank.
                </PolicyParagraph>
                <PolicyParagraph>
                    Typical processing may vary depending on:
                </PolicyParagraph>

                {/* Payment Table */}
                <div className="overflow-hidden rounded-xl border border-[#dce3f0] bg-white shadow-[0_5px_18px_rgba(30,55,115,0.06)] max-w-[680px]">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[620px] border-collapse">
                            <thead>
                                <tr className="bg-[#f2f5ff]">
                                    <th className="border-b border-[#dce3f0] px-4 py-3 text-left text-xs font-extrabold text-[#17275b] sm:px-5">
                                        <InlineText>
                                            **Payment Method**
                                        </InlineText>
                                    </th>

                                    <th className=" border-l border-b border-[#dce3f0] px-4 py-3 text-left text-xs font-extrabold text-[#17275b] sm:px-5">
                                        <InlineText>
                                            **Processing**
                                        </InlineText>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {paymentTimeline.map((row) => (
                                    <tr
                                        key={row.method}
                                        className="even:bg-[#fcfdff]"
                                    >
                                        <td className="border-b border-[#e6eaf2] px-4 py-3 text-[13px] font-semibold text-[#29365b] sm:px-5">
                                            {row.method}
                                        </td>

                                        <td className=" border-l border-b border-[#e6eaf2] px-4 py-3 text-[13px] text-[#4b5670] sm:px-5">
                                            {row.processing}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Exact source sentence */}
                <div className=" max-w-2xl mt-7 flex gap-3 rounded-xl border border-[#d9e2ff] bg-[#f6f8ff] px-2 py-1">
                    <Info className="mt-1 h-4 w-4 shrink-0 text-[#2449b7]" />

                    <p className="text-[12px] leading-5 text-[#31477e] sm:text-[13px]">
                        {policyProcessingNote}
                    </p>
                </div>
            </div>
        </section>
    )
};

const RefundRequestSection = ({ section }) => {
    return (
        <section
            id="policy-section-24"
            className="scroll-mt-24 border-t border-slate-100 py-8 sm:py-9"
        >
            <SectionHeader
                number={section.number}
                title={section.title}
            />

            <div className="ml-0 sm:ml-[52px]">
                <PolicyParagraph>
                    To request a refund or billing adjustment:
                </PolicyParagraph>

                <div className="grid lg:grid-cols-5 gap-4">
                    {refundSteps.map((step, index) => (
                        <React.Fragment key={step.step}>
                            <div className="relative rounded-2xl border border-slate-200 bg-white p-5 text-center  shadow-[0_5px_18px_rgba(30,55,115,0.05)]" >
                                {/* Icon */}
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                                    {index == 0 && (
                                        <ClipboardCheck className="h-6 w-6" />
                                    )}

                                    {index == 1 && (
                                        <FileCheck2 className="h-6 w-6" />
                                    )}
                                    {index == 2 && (
                                        <RefreshCcw className="h-6 w-6" />
                                    )}

                                    {index == 3 && (
                                        <CreditCard className="h-6 w-6" />
                                    )}

                                    {index == 4 && (
                                        <CheckCircle2 className="h-6 w-6" />
                                    )}
                                </div>

                                {/* Steps */}
                                <div className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.08em] text-orange-600">
                                    {step.step}
                                </div>

                                {/* Normal Text */}
                                {step.text && (
                                    <p className="text-[12px] font-bold leading-5 text-[#394562]">
                                        <InlineText>
                                            {step.text}
                                        </InlineText>
                                    </p>
                                )}

                                {/* Prefix */}
                                {step.prefix && (
                                    <p className="text-[12px] leading-5 text-slate-500">
                                        {step.prefix}
                                    </p>
                                )}

                                {/* Highlight */}

                                {
                                    step.highlight && (
                                        <p className="mt-1 text-[12px] font-bold leading-5 text-[#183d9f]">
                                            <InlineText>
                                                {step.highlight}
                                            </InlineText>
                                        </p>
                                    )
                                }

                                {/* Step4 bullets */}

                                {
                                    step.bullets && (
                                        <ul className="mt-2 space-y-1 text-left">
                                            {step.bullets.map((item) => (
                                                <li
                                                    key={item}
                                                    className="flex gap-2 text-[11px] leading-4 text-[#4b5670]"
                                                >
                                                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#2449b7]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )
                                }
                            </div>

                            {/* Arrow on desktop */}
                            {
                                index < refundSteps.length - 1 && (
                                    <div className="hidden items-center justify-center lg:flex">
                                        <ArrowRight className="h-10 w-10 text-[#173d9f]" />
                                    </div>
                                )
                            }
                        </React.Fragment>
                    ))}
                </div>

                <div className="mt-5">
                    <PolicyParagraph>
                        {refundRequestNote}
                    </PolicyParagraph>
                </div>
            </div>
        </section >
    )
}

const RefundCancellationPolicy = () => {
    return (
        <main className="min-h-screen bg-white text-[#16264F]">
            <Navbar />
            <div className="mx-auto max-w-[1220px] px-3 pb-14 pt-7 sm:px-7 lg:px-5">
                {/* Breadcrumb */}
                <nav className="mb-7 flex items-center gap-2 text-xs font-semibold">
                    <a
                        href="/"
                        className="text-[#15265B] transition hover:text-[#2149B8]"
                    >
                        Home
                    </a>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                    <span className="text-orange-600">
                        Refund & Cancellation Policy
                    </span>
                </nav>

                {/* Hero Section */}
                <section className="grid items-center gap-6 pb-9 md:grid-cols-[1.05fr_0.95fr] lg:gap-10">
                    {/* Left */}
                    <div>
                        <h1 className="max-w-[650px] text-[42px] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#101F52] sm:text-[50px] lg:text-[57px]">
                            <span className="text-orange-600">NexGO</span> -Refund & <br />
                            Cancellation Policy
                        </h1>

                        {/* Dates */}
                        <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-[13px] font-bold text-[#27345b] sm:text-xs">
                            <div className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4" />
                                <span>
                                    Effective Date:{" "}
                                    {refundCancellationPolicy.effectiveDate}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <RefreshCcw className="h-4 w-4" />
                                <span>
                                    Lat Updated : {" "}
                                    {refundCancellationPolicy.lastUpdated}
                                </span>
                            </div>
                        </div>

                        {/* Intro */}
                        <div className="mt-7 max-w-[680px]">
                            {refundCancellationPolicy.intro.map(
                                (paragraph, index) => (
                                    <PolicyParagraph key={index}>
                                        {paragraph}
                                    </PolicyParagraph>
                                )
                            )}
                        </div>
                    </div>

                    {/* Right side - image */}
                    <HeroArtwork />
                </section>

                {/* Highlight Strip */}
                <HighlightsStrip />

                {/* Policy Content */}
                <div>
                    {refundSections.map((section) => {
                        if (section.number === 23) {
                            return (
                                <RefundProcessingSection
                                    key={section.number}
                                    section={section}
                                />
                            )
                        }
                        if (section.number === 24) {
                            return (
                                <RefundRequestSection
                                    key={section.number}
                                    section={section}
                                />
                            )
                        }

                        return (
                            <NormalSection
                                key={section.number}
                                section={section}
                            />
                        );

                    })}
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default RefundCancellationPolicy;