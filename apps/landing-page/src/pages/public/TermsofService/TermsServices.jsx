import { useEffect, useRef, useState } from "react";
import {
    AlertTriangle,
    CalendarDays,
    ChevronRight,
    Clock3,
    FileText,
} from "lucide-react";

import Navbar from "../../../features/landing/navbar/Navbar";
import Footer from "../../../features/landing/footer/Footer";

import { termsConditionsData } from "./TermsCondition.data";

/* =========================================================
   INLINE TEXT RENDERER
   Keeps **highlighted content** from the original data.
   ========================================================= */

function renderInlineText(text) {
    if (!text) return null;

    const parts = text.split(/(\*\*[^*]+\*\*)/g);

    return parts.map((part, index) => {
        if (
            part.startsWith("**") &&
            part.endsWith("**")
        ) {
            return (
                <strong
                    key={index}
                    className="font-semibold text-[#102a63]"
                >
                    {part.slice(2, -2)}
                </strong>
            );
        }

        return (
            <span key={index}>
                {part}
            </span>
        );
    });
}

/* =========================================================
   CONTENT BLOCKS
   Uses the EXACT block types from termsData.js:
   paragraph
   list
   orderedList
   gridList
   ========================================================= */

function ContentBlock({ block }) {
    if (block.type === "paragraph") {
        return (
            <p className="text-[15px] leading-7 text-slate-600 sm:text-[15.5px]">
                {renderInlineText(block.text)}
            </p>
        );
    }

    if (block.type === "list") {
        return (
            <ul className="list-disc space-y-2 pl-6 text-[15px] leading-7 text-slate-600 marker:text-[#ff5a1f]">
                {block.items.map((item, index) => (
                    <li key={index}>
                        {renderInlineText(item)}
                    </li>
                ))}
            </ul>
        );
    }

    if (block.type === "orderedList") {
        return (
            <ol className="list-decimal space-y-2 pl-6 text-[15px] leading-7 text-slate-600 marker:font-semibold marker:text-[#102a63]">
                {block.items.map((item, index) => (
                    <li key={index}>
                        {renderInlineText(item)}
                    </li>
                ))}
            </ol>
        );
    }

    if (block.type === "gridList") {
        return (
            <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 text-[15px] leading-7 text-slate-600 sm:grid-cols-2">
                {block.items.map((item, index) => (
                    <li
                        key={index}
                        className="relative pl-5"
                    >
                        <span className="absolute left-0 top-[11px] h-1.5 w-1.5 rounded-full bg-[#ff5a1f]" />

                        {renderInlineText(item)}
                    </li>
                ))}
            </ul>
        );
    }

    return null;
}

/* =========================================================
   SVG ILLUSTRATION
   No image is used.
   ========================================================= */

function TermsIllustration() {
    return (
        <svg
            viewBox="0 0 460 420"
            className="h-auto w-full max-w-[380px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            {/* Decorative dotted paths */}

            <path
                d="M72 318C39 274 42 217 65 175C89 130 135 98 184 89"
                stroke="#FF8B62"
                strokeWidth="1.5"
                strokeDasharray="4 9"
            />

            <path
                d="M290 65C343 45 402 63 427 105C451 145 450 197 433 238"
                stroke="#9BB6F4"
                strokeWidth="1.5"
                strokeDasharray="5 8"
            />

            <circle
                cx="73"
                cy="177"
                r="4"
                fill="#FF6B35"
            />

            <circle
                cx="100"
                cy="114"
                r="3"
                fill="#FF9A74"
            />

            <circle
                cx="402"
                cy="111"
                r="4"
                fill="#FF9A74"
            />

            <circle
                cx="426"
                cy="226"
                r="3"
                fill="#8FAAF1"
            />

            {/* Decorative leaves */}

            <g opacity="0.42">
                <path
                    d="M78 319C56 291 50 259 61 231C82 247 91 277 78 319Z"
                    fill="#D7E2FF"
                />

                <path
                    d="M95 312C77 277 81 246 103 224C118 248 117 281 95 312Z"
                    fill="#C7D7FF"
                />

                <path
                    d="M111 300C101 266 113 237 138 221C143 249 132 277 111 300Z"
                    fill="#E0E8FF"
                />

                <path
                    d="M369 306C388 278 391 249 379 226C359 247 355 277 369 306Z"
                    fill="#D5E1FF"
                />

                <path
                    d="M389 293C407 264 404 237 384 218C370 243 372 270 389 293Z"
                    fill="#C5D6FF"
                />

                <path
                    d="M403 272C415 245 407 220 389 205C382 229 388 251 403 272Z"
                    fill="#E1E9FF"
                />
            </g>

            {/* Base */}

            <path
                d="M72 333H395"
                stroke="#B8C8F5"
                strokeWidth="2"
            />

            {/* Clipboard shadow */}

            <rect
                x="137"
                y="75"
                width="214"
                height="258"
                rx="11"
                fill="#DCE5FF"
                opacity="0.5"
            />

            {/* Clipboard */}

            <rect
                x="122"
                y="62"
                width="214"
                height="260"
                rx="10"
                fill="white"
                stroke="#173C9B"
                strokeWidth="7"
            />

            {/* Clipboard top */}

            <rect
                x="174"
                y="47"
                width="112"
                height="42"
                rx="12"
                fill="#2F55C7"
            />

            <rect
                x="214"
                y="37"
                width="32"
                height="27"
                rx="13"
                fill="#2F55C7"
            />

            <circle
                cx="230"
                cy="50"
                r="5"
                fill="white"
            />

            {/* Title */}

            <text
                x="229"
                y="113"
                textAnchor="middle"
                fill="#173C9B"
                fontSize="12"
                fontWeight="700"
                fontFamily="Arial, sans-serif"
            >
                TERMS &amp; CONDITIONS
            </text>

            {/* Checklist */}

            {[143, 178, 213, 248, 283].map(
                (y, index) => (
                    <g key={index}>
                        <circle
                            cx="151"
                            cy={y}
                            r="9"
                            fill="#EEF2FF"
                        />

                        <path
                            d={`M147 ${y}L150 ${y + 3
                                }L156 ${y - 4}`}
                            stroke="#173C9B"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <rect
                            x="171"
                            y={y - 5}
                            width={
                                [105, 113, 96, 102, 91][
                                index
                                ]
                            }
                            height="6"
                            rx="3"
                            fill="#DDE5FA"
                        />

                        <rect
                            x="171"
                            y={y + 8}
                            width={
                                [73, 64, 81, 57, 68][
                                index
                                ]
                            }
                            height="5"
                            rx="2.5"
                            fill="#E8EDFA"
                        />
                    </g>
                ),
            )}

            {/* Pen */}

            <g transform="rotate(22 350 175)">
                <rect
                    x="342"
                    y="115"
                    width="20"
                    height="118"
                    rx="9"
                    fill="#183F9E"
                />

                <rect
                    x="347"
                    y="116"
                    width="6"
                    height="88"
                    rx="3"
                    fill="#3B61CF"
                />

                <path
                    d="M342 231L352 253L362 231"
                    fill="#173C9B"
                />

                <path
                    d="M346 118L350 104L356 118"
                    fill="#FF6B35"
                />
            </g>

            {/* Shield */}

            <path
                d="M320 220L373 238V276C373 308 351 330 320 342C289 330 267 308 267 276V238L320 220Z"
                fill="#173C9B"
            />

            <path
                d="M320 228L365 243V274C365 300 347 319 320 330C293 319 275 300 275 274V243L320 228Z"
                fill="#2F55C7"
            />

            <path
                d="M297 278L313 294L344 260"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <circle
                cx="115"
                cy="105"
                r="5"
                fill="#FF6B35"
            />

            <circle
                cx="385"
                cy="168"
                r="4"
                fill="#FF9A74"
            />

            <circle
                cx="98"
                cy="203"
                r="3"
                fill="#9EB5F1"
            />
        </svg>
    );
}

/* =========================================================
   RIGHT SIDE — ONLY SECTION HEADINGS
   ========================================================= */

function OnThisPage({
    sections,
    activeId,
    onNavigate,
}) {
    return (
        <aside className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(16,42,99,0.06)]">
                <div className="border-b border-slate-100 px-5 py-4">
                    <div className="flex items-center gap-2.5">
                        <FileText
                            size={18}
                            className="text-[#ff5a1f]"
                        />

                        <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-[#102a63]">
                            On This Page
                        </h2>
                    </div>
                </div>

                <nav className="max-h-[calc(100vh-150px)] overflow-y-auto p-2.5">
                    {sections.map((section) => {
                        const isActive =
                            activeId === section.id;

                        return (
                            <button
                                key={section.id}
                                type="button"
                                onClick={() =>
                                    onNavigate(section.id)
                                }
                                className={`group flex w-full items-start gap-2 rounded-lg px-3 py-2.5 text-left text-[13px] leading-5 transition-all ${isActive
                                    ? "bg-orange-50 font-semibold text-[#ff5a1f]"
                                    : "font-medium text-slate-600 hover:bg-slate-50 hover:text-[#102a63]"
                                    }`}
                            >
                                <span
                                    className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${isActive
                                        ? "bg-[#ff5a1f]"
                                        : "bg-slate-300 group-hover:bg-[#102a63]"
                                        }`}
                                />

                                <span className="min-w-0 flex-1">
                                    {section.title}
                                </span>
                            </button>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}

/* =========================================================
   MAIN PAGE
   ========================================================= */

export default function TermsService() {
    const {
        effectiveDate,
        lastUpdated,
        intro,
        warning,
        sections,
    } = termsConditionsData;

    const contentRef =
        useRef(null);

    const [activeId, setActiveId] =
        useState(sections[0]?.id ?? 1);

    /* =======================================================
       ACTIVE HEADING WHILE LEFT CONTENT SCROLLS
       ======================================================= */

    useEffect(() => {
        const container =
            contentRef.current;

        if (!container) return;

        const handleScroll = () => {
            const containerRect =
                container.getBoundingClientRect();

            const triggerPoint =
                containerRect.top + 70;

            let currentId =
                sections[0]?.id ?? 1;

            sections.forEach((section) => {
                const element =
                    document.getElementById(
                        `terms-section-${section.id}`,
                    );

                if (!element) return;

                const rect =
                    element.getBoundingClientRect();

                if (
                    rect.top <= triggerPoint
                ) {
                    currentId = section.id;
                }
            });

            setActiveId(currentId);
        };

        handleScroll();

        container.addEventListener(
            "scroll",
            handleScroll,
            { passive: true },
        );

        return () => {
            container.removeEventListener(
                "scroll",
                handleScroll,
            );
        };
    }, [sections]);

    /* =======================================================
       RIGHT HEADING CLICK
       ======================================================= */

    const scrollToSection = (id) => {
        const container =
            contentRef.current;

        const target =
            document.getElementById(
                `terms-section-${id}`,
            );

        if (!container || !target) {
            return;
        }

        const containerRect =
            container.getBoundingClientRect();

        const targetRect =
            target.getBoundingClientRect();

        const targetPosition =
            container.scrollTop +
            targetRect.top -
            containerRect.top -
            24;

        setActiveId(id);

        container.scrollTo({
            top: Math.max(
                targetPosition,
                0,
            ),
            behavior: "smooth",
        });
    };

    return (
        <div className="min-h-screen bg-white text-[#102a63]">
            <Navbar />

            <main>
                {/* =================================================
            HERO
            NOT SCROLLABLE
        ================================================= */}

                <section className="border-b border-slate-100 bg-white">
                    <div className="mx-auto max-w-[1280px] px-5 pb-10 pt-9 sm:px-8 lg:px-10 lg:pb-14 lg:pt-12">
                        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-14">
                            {/* LEFT HERO */}

                            <div>
                                {/* Breadcrumb */}

                                <div className="mb-7 flex items-center gap-2 text-sm font-medium">
                                    <span className="text-slate-500">
                                        Home
                                    </span>

                                    <ChevronRight
                                        size={15}
                                        className="text-slate-400"
                                    />

                                    <span className="text-[#ff5a1f]">
                                        Terms &amp;
                                        Conditions
                                    </span>
                                </div>

                                <h1 className="text-4xl font-bold tracking-[-0.035em] text-[#102a63] sm:text-5xl lg:text-[52px] lg:leading-[1.08]">
                                    NEXGO — TERMS &amp;
                                    CONDITIONS
                                </h1>

                                {/* Dates */}

                                <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-600">
                                    <div className="flex items-center gap-2">
                                        <CalendarDays
                                            size={17}
                                            className="text-[#ff5a1f]"
                                        />

                                        <span>
                                            Effective Date:{" "}
                                            <strong className="font-semibold text-[#102a63]">
                                                {effectiveDate}
                                            </strong>
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Clock3
                                            size={17}
                                            className="text-[#ff5a1f]"
                                        />

                                        <span>
                                            Last Updated:{" "}
                                            <strong className="font-semibold text-[#102a63]">
                                                {lastUpdated}
                                            </strong>
                                        </span>
                                    </div>
                                </div>

                                {/* ORIGINAL INTRO */}

                                <div className="mt-8 max-w-[820px] space-y-4">
                                    {intro.map(
                                        (item, index) => (
                                            <p
                                                key={index}
                                                className="text-[15px] leading-7 text-slate-600 sm:text-base"
                                            >
                                                {renderInlineText(
                                                    item.text,
                                                )}
                                            </p>
                                        ),
                                    )}
                                </div>

                                {/* ORIGINAL WARNING */}

                                <div className="mt-7 flex max-w-xl items-start gap-3 rounded-xl border border-orange-200 bg-orange-50/60 px-2 py-1.5">
                                    <AlertTriangle
                                        size={19}
                                        className="mt-0.5 shrink-0 text-[#ff5a1f]"
                                    />

                                    <p className="text-sm leading-6 text-slate-700">
                                        {warning}
                                    </p>
                                </div>
                            </div>

                            {/* SVG */}

                            <div className="hidden justify-center lg:flex">
                                <TermsIllustration />
                            </div>
                        </div>

                        {/* Mobile SVG */}

                        <div className="mt-8 flex justify-center lg:hidden">
                            <TermsIllustration />
                        </div>
                    </div>
                </section>

                {/* =================================================
            TERMS CONTENT + STICKY NAV
        ================================================= */}

                <section className="mx-auto max-w-[1280px] px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
                    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_285px] lg:gap-14">
                        {/* =================================================
                LEFT — ONLY THIS PART SCROLLS
            ================================================= */}

                        <article
                            ref={contentRef}
                            className="min-w-0 lg:h-[calc(100vh-155px)] lg:overflow-y-auto lg:pr-7"
                            style={{
                                scrollbarWidth: "thin",
                            }}
                        >
                            {sections.map(
                                (section) => (
                                    <section
                                        key={section.id}
                                        id={`terms-section-${section.id}`}
                                        className="border-b border-slate-200 py-8 first:pt-0 last:border-b-0"
                                    >
                                        {/* EXACT SECTION HEADING */}

                                        <h2 className="mb-5 text-[21px] font-bold tracking-[-0.015em] text-[#102a63] sm:text-[22px]">
                                            {section.title}
                                        </h2>

                                        {/* EXACT ORIGINAL BLOCK DATA */}

                                        <div className="space-y-5">
                                            {section.blocks.map(
                                                (
                                                    block,
                                                    index,
                                                ) => (
                                                    <ContentBlock
                                                        key={index}
                                                        block={
                                                            block
                                                        }
                                                    />
                                                ),
                                            )}
                                        </div>
                                    </section>
                                ),
                            )}
                        </article>

                        {/* =================================================
                RIGHT — STICKY / HEADINGS ONLY
            ================================================= */}

                        <OnThisPage
                            sections={sections}
                            activeId={activeId}
                            onNavigate={
                                scrollToSection
                            }
                        />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}