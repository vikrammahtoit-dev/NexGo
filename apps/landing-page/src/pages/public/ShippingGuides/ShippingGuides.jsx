import { useNavigate, Link, useParams } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    Download,
    FileText,
    ShieldCheck,
    Truck,
    Headphones,
    ArrowRight,

    RotateCcw,
    Scale,
    IndianRupee,
    Ban,
    List,
    BookOpen,

    Sparkles,
    Clock3,
    Target,
    Check,

    ArrowLeft,
    ArrowUpRight,
    CheckCircle2,
    Info,
    ChevronRight,
} from "lucide-react";

// src/data/shippingGuide/shippingPackagingPolicy.js

const shippingPackagingPolicy = {
    slug: "shipping-packaging",

    title: "Shipping & Packaging Best Practices",

    description:
        "Essential packaging and shipping tips to ensure safe delivery and avoid damages.",

    effectiveDate: null,
    lastUpdated: null,

    sections: [
        {
            id: "shipping-packaging-sop",
            number: "01",
            heading: "Shipping & Packaging SOP",

            paragraphs: [
                "The supplied Nexgo policy documents reference a Shipping & Packaging SOP, but the complete standalone SOP content has not been provided in the supplied source.",
            ],

            note:
                "Add the approved Shipping & Packaging SOP content here before publishing this policy as a final legal/operational document.",
        },
    ],
};

// src/components/shippingGuide/ShippingGuideHero.jsx

const iconMap = {
    shield: ShieldCheck,
    truck: Truck,
    headset: Headphones,
    file: FileText,
    rotate: RotateCcw,
    scale: Scale,
    rupee: IndianRupee,

    ban: Ban,
    list: List,


    book: BookOpen,

    sparkles: Sparkles,
    clock: Clock3,
    target: Target,
};

const colorMap = {
    blue: "bg-blue-500 shadow-blue-200",
    green: "bg-green-500 shadow-green-200",
    orange: "bg-orange-500 shadow-orange-200",
    purple: "bg-purple-500 shadow-purple-200",
    cyan: "bg-cyan-500 shadow-cyan-200",
    yellow: "bg-amber-500 shadow-amber-200",
};

const ShippingGuideHero = ({ data }) => {
    const handleViewPolicies = () => {
        document
            .getElementById("shipping-policies")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    const handleDownload = () => {
        window.print();
    };

    return (
        <section className="relative overflow-hidden bg-[#eef6ff]">
            <Navbar />
            <div className="mx-auto max-w-[1440px] px-5 py-3 sm:px-8 lg:px-10">
                <div className="relative min-h-[500px] overflow-hidden rounded-[28px] bg-gradient-to-br from-white via-[#f5f9ff] to-[#e8f2ff]">
                    {/* Background decoration */}
                    <div className="pointer-events-none absolute -right-24 -top-32 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />

                    <div className="grid min-h-[500px] items-center gap-8 px-7 py-14 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
                        {/* LEFT */}
                        <div className="relative z-10 max-w-[600px]">
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
                                    Shipping Guides
                                </span>
                            </nav>

                            <h1 className="text-4xl font-bold tracking-tight text-[#07152f] sm:text-5xl lg:text-[58px] lg:leading-[1.05]">
                                {data.title}
                            </h1>

                            <p className="mt-6 max-w-[560px] text-base leading-7 text-slate-600 sm:text-lg">
                                {data.description}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <button
                                    type="button"
                                    onClick={handleViewPolicies}
                                    className="inline-flex items-center gap-2 rounded-full bg-[#0d63f3] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-[#0757da]"
                                >
                                    <FileText size={17} />
                                    {data.primaryButton.label}
                                    <ArrowRight size={16} />
                                </button>

                                <button
                                    type="button"
                                    onClick={handleDownload}
                                    className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#0d63f3] transition hover:bg-blue-50"
                                >
                                    <Download size={17} />
                                    {data.downloadButton.label}
                                </button>
                            </div>
                        </div>

                        {/* RIGHT VISUAL */}
                        {/* <div className="relative flex min-h-[330px] items-center justify-center">
                            <div className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-blue-300" />

                            <div className="absolute h-[270px] w-[270px] rounded-full bg-blue-100/50 blur-2xl" />

                            <div className="relative z-10 flex h-[280px] w-[400px] items-end justify-center">
                                <div className="absolute bottom-8 left-4 h-16 w-16 rounded-full bg-blue-500/15 blur-xl" />

                                <div className="relative w-[360px] rounded-[30px] bg-white/40 p-8 shadow-[0_30px_80px_rgba(25,80,150,0.12)] backdrop-blur-sm">
                                    <div className="flex items-center justify-center">
                                        <div className="flex h-[150px] w-[270px] items-center justify-center rounded-2xl bg-gradient-to-r from-slate-100 to-blue-50">
                                            <div className="text-center">
                                                <Truck
                                                    size={90}
                                                    strokeWidth={1.2}
                                                    className="mx-auto text-[#0d63f3]"
                                                />

                                                <p className="mt-1 text-2xl font-bold tracking-wide text-[#1261bd]">
                                                    NEXGO
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 flex justify-center gap-3">
                                        <div className="h-10 w-14 rounded-lg bg-[#d6b07b]" />
                                        <div className="h-12 w-16 rounded-lg bg-[#c99c5c]" />
                                        <div className="h-8 w-12 rounded-lg bg-[#dfbe8b]" />
                                    </div>
                                </div>
                            </div>

                            {/* TRUST CARD 
                            <div className="absolute right-0 top-4 z-20 hidden w-[190px] rounded-2xl bg-white p-4 shadow-xl sm:block">
                                <div className="space-y-4">
                                    {data.trustItems.map((item) => {
                                        const Icon = iconMap[item.icon] || ShieldCheck;

                                        return (
                                            <div
                                                key={item.title}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                                    <Icon size={18} />
                                                </div>

                                                <div>
                                                    <p className="text-xs font-bold text-slate-800">
                                                        {item.title}
                                                    </p>

                                                    <p className="mt-0.5 text-[10px] text-slate-500">
                                                        {item.subtitle}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>


        </section>
    );
};

// src/components/shippingGuide/PolicyNavigation.jsx

const PolicyNavigation = ({ items }) => {
    const navigate = useNavigate();
    const { policySlug } = useParams();

    const handleClick = (item) => {
        if (item.slug) {
            navigate(`/shipping-guides/${item.slug}`);
            return;
        }

        document
            .getElementById("shipping-policies")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="relative z-20 mx-auto -mt-8 max-w-[1180px] px-5">
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_15px_45px_rgba(30,70,120,0.12)]">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                    {items.map((item, index) => {
                        const Icon = iconMap[item.icon] || FileText;
                        const isActive = item.slug
                            ? item.slug === policySlug
                            : !policySlug;

                        return (
                            <button
                                key={item.label}
                                type="button"
                                onClick={() => handleClick(item)}
                                className={`group relative flex min-h-[108px] flex-col items-center justify-center gap-3 border-slate-100 px-3 py-5 text-center transition hover:bg-blue-50 ${index < items.length - 1
                                    ? " sm:border-r lg:border-b-0"
                                    : ""
                                    }`}
                            >
                                <Icon
                                    size={27}
                                    strokeWidth={1.7}
                                    className={`${isActive ? "text-[#0d63f3]" : "text-slate-500"} transition group-hover:text-[#0d63f3]`}
                                />

                                <span className={`text-xs font-medium transition group-hover:text-[#0d63f3] ${isActive ? "text-[#0d63f3]" : "text-slate-600"}`}>
                                    {item.label}
                                </span>

                                {isActive && (
                                    <span className="absolute bottom-0 left-1/2 h-0.5 w-14 -translate-x-1/2 bg-[#0d63f3]" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// src/components/shippingGuide/PolicyCard.jsx
const PolicyCard = ({ policy }) => {
    const navigate = useNavigate();

    const Icon = iconMap[policy.icon] || FileText;
    const iconColor = colorMap[policy.color] || colorMap.blue;

    return (
        <article
            onClick={() => navigate(`/shipping-guides/${policy.slug}`)}
            className="group cursor-pointer rounded-xl border border-slate-100 bg-white px-7 py-8 text-center shadow-[0_5px_25px_rgba(15,50,100,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(15,80,160,0.12)]"
        >
            <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg ${iconColor}`}
            >
                <Icon size={25} strokeWidth={2} />
            </div>

            <h3 className="mx-auto mt-6 max-w-[220px] text-lg font-bold leading-6 text-slate-900">
                {policy.title}
            </h3>

            <p className="mx-auto mt-4 max-w-[260px] text-sm leading-6 text-slate-500">
                {policy.description}
            </p>

            <button
                type="button"
                onClick={(event) => {
                    event.stopPropagation();
                    navigate(`/shipping-guides/${policy.slug}`);
                }}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0d63f3]"
            >
                Explore Policy
                <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                />
            </button>
        </article>
    );
};

// src/components/shippingGuide/PolicyGrid.jsx



const PolicyGrid = ({ data }) => {
    return (
        <section
            id="shipping-policies"
            className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10"
        >
            <div className="mx-auto max-w-[1180px]">
                <div className="mx-auto max-w-[650px] text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0d63f3]">
                        {data.eyebrow}
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {data.title}
                    </h2>

                    <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                        <span className="h-px w-10 bg-blue-200" />
                        <span className="h-2 w-2 rounded-full bg-[#0d63f3]" />
                        <span className="h-px w-10 bg-blue-200" />
                    </div>

                    <p className="mt-5 text-sm leading-6 text-slate-500 sm:text-base">
                        {data.description}
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {data.policies.map((policy) => (
                        <PolicyCard key={policy.slug} policy={policy} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// src/components/shippingGuide/ShippingGuideCTA.jsx
const ShippingGuideCTA = ({ data }) => {
    return (
        <section className="px-5 pb-16 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-[1180px] overflow-hidden rounded-2xl bg-gradient-to-r from-[#edf5ff] to-[#f5f9ff] px-7 py-8 sm:px-10 lg:py-9">
                <div className="grid items-center gap-8 lg:grid-cols-[220px_1fr]">
                    <div className="hidden h-[150px] items-center justify-center lg:flex">
                        {/* <div className="relative">
                            <div className="absolute -left-10 bottom-0 h-12 w-20 rounded-lg bg-[#d6b07b]" />
                            <div className="absolute -right-10 bottom-0 h-16 w-24 rounded-lg bg-[#c99c5c]" />

                            <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-blue-100">
                                <ShieldCheck size={76} className="text-[#0d63f3]" />
                            </div>
                        </div> */}
                    </div>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0d63f3]">
                            {data.eyebrow}
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                            {data.title}
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            {data.description}
                        </p>

                        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {data.items.map((item) => {
                                const Icon = iconMap[item.icon] || Check;

                                return (
                                    <div
                                        key={item.title}
                                        className="flex items-start gap-3 border-slate-200 sm:border-r sm:pr-4 last:border-0"
                                    >
                                        <Icon
                                            size={20}
                                            className="mt-0.5 shrink-0 text-[#0d63f3]"
                                        />

                                        <div>
                                            <p className="text-xs font-bold text-slate-800">
                                                {item.title}
                                            </p>

                                            <p className="mt-1 text-[11px] leading-4 text-slate-500">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


// src/pages/public/shippingGuide/PolicyDetail.jsx


import {

} from "lucide-react";

import { ndrRtoPolicy, weightDisputePolicy, codRemittancePolicy, claimsInsurancePolicy, prohibitedItemsPolicy } from "./ShippingGuide.data";



const policies = {
    "ndr-rto": ndrRtoPolicy,
    "weight-dispute": weightDisputePolicy,
    "cod-remittance": codRemittancePolicy,
    "claims-insurance": claimsInsurancePolicy,
    "prohibited-items": prohibitedItemsPolicy,
    "shipping-packaging": shippingPackagingPolicy,
};

const renderInlineText = (text) => {
    if (!text) return null;

    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return (
                <strong
                    key={index}
                    className="font-semibold text-slate-900"
                >
                    {part.slice(2, -2)}
                </strong>
            );
        }

        return <React.Fragment key={index}>{part}</React.Fragment>;
    });
};

const PolicyDetail = () => {
    const { policySlug } = useParams();

    const policy = policies[policySlug];

    const [activeSection, setActiveSection] = useState(
        policy?.sections?.[0]?.id || ""
    );

    const sectionRefs = useRef({});

    const sections = useMemo(() => {
        return policy?.sections || [];
    }, [policy]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }, [policySlug]);

    useEffect(() => {
        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top
                    );

                if (visibleEntries.length > 0) {
                    setActiveSection(visibleEntries[0].target.id);
                }
            },
            {
                rootMargin: "-120px 0px -55% 0px",
                threshold: 0.05,
            }
        );

        sections.forEach((section) => {
            const element = sectionRefs.current[section.id];

            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [sections]);

    if (!policy) {
        return (
            <main className="min-h-screen bg-white px-5 py-24">
                <div className="mx-auto max-w-[900px] text-center">
                    <h1 className="text-3xl font-bold text-slate-900">
                        Policy Not Found
                    </h1>

                    <p className="mt-3 text-slate-500">
                        The requested Shipping Guide policy could not be found.
                    </p>

                    <Link
                        to="/shipping-guides"
                        className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0d63f3] px-6 py-3 text-sm font-semibold text-white"
                    >
                        <ArrowLeft size={16} />
                        Back to Shipping Guide
                    </Link>
                </div>
            </main>
        );
    }

    const scrollToSection = (sectionId) => {
        const element = sectionRefs.current[sectionId];

        if (!element) return;

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <main className="min-h-screen bg-[#f8fbff]">
            {/* TOP HEADER */}
            <section className="border-b border-slate-100 bg-white">
                <div className="mx-auto max-w-[1180px] px-5 py-10 sm:px-8 lg:px-10">
                    <Link
                        to="/shipping-guides"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d63f3]"
                    >
                        <ArrowLeft size={16} />
                        Back to Shipping Guide
                    </Link>

                    <div className="mt-8 max-w-[850px]">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                            <span>Home</span>
                            <ChevronRight
                                size={15}
                                className="text-slate-400"
                            />
                            <span>Shipping Guide</span>
                            <ChevronRight
                                size={15}
                                className="text-slate-400"
                            />
                            <span className="text-slate-700">
                                {policy.title}
                            </span>
                        </div>

                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#07152f] sm:text-4xl lg:text-5xl">
                            {policy.title}
                        </h1>

                        <p className="mt-4 max-w-[750px] text-base leading-7 text-slate-600">
                            {policy.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-500">
                            <span className="rounded-full bg-blue-50 px-3 py-1.5">
                                Effective Date: {policy.effectiveDate}
                            </span>

                            <span className="rounded-full bg-slate-100 px-3 py-1.5">
                                Last Updated: {policy.lastUpdated}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT AREA */}
            <section className="mx-auto max-w-[1180px] px-5 py-10 sm:px-8 lg:px-10">
                <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
                    {/* LEFT — SCROLLABLE CONTENT */}
                    <article className="min-w-0 rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_35px_rgba(15,50,100,0.05)] sm:p-8 lg:p-10">
                        <div className="space-y-12">
                            {sections.map((section) => (
                                <section
                                    key={section.id}
                                    id={section.id}
                                    ref={(element) => {
                                        sectionRefs.current[section.id] = element;
                                    }}
                                    className="scroll-mt-28"
                                >
                                    {/* SECTION HEADING */}
                                    <div className="flex items-start gap-4">
                                        <span className="flex h-8 min-w-8 items-center justify-center rounded-md bg-[#0d63f3] px-2 text-xs font-bold text-white">
                                            {section.number}
                                        </span>

                                        <h2 className="text-xl font-bold leading-8 text-slate-900 sm:text-2xl">
                                            {renderInlineText(section.heading)}
                                        </h2>
                                    </div>

                                    {/* PARAGRAPHS */}
                                    {section.paragraphs?.length > 0 && (
                                        <div className="mt-5 space-y-4">
                                            {section.paragraphs.map((paragraph, index) => (
                                                <p
                                                    key={index}
                                                    className="text-[15px] leading-7 text-slate-600"
                                                >
                                                    {renderInlineText(paragraph)}
                                                </p>
                                            ))}
                                        </div>
                                    )}

                                    {/* HIGHLIGHT BOXES */}
                                    {section.highlights?.length > 0 && (
                                        <div className="mt-5 space-y-3">
                                            {section.highlights.map((highlight, index) => (
                                                <div
                                                    key={index}
                                                    className="rounded-xl border border-blue-100 bg-blue-50 px-5 py-4 text-sm font-medium leading-6 text-[#0757c9]"
                                                >
                                                    {renderInlineText(highlight)}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* BULLET LIST */}
                                    {section.points?.length > 0 && (
                                        <ul className="mt-5 space-y-3">
                                            {section.points.map((point, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start gap-3 text-[15px] leading-7 text-slate-600"
                                                >
                                                    <CheckCircle2
                                                        size={17}
                                                        className="mt-1 shrink-0 text-[#0d63f3]"
                                                    />

                                                    <span>{renderInlineText(point)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* NUMBERED STEPS */}
                                    {section.steps?.length > 0 && (
                                        <ol className="mt-5 space-y-3">
                                            {section.steps.map((step, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start gap-3"
                                                >
                                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-[#0d63f3]">
                                                        {index + 1}
                                                    </span>

                                                    <span className="pt-0.5 text-[15px] leading-6 text-slate-600">
                                                        {renderInlineText(step)}
                                                    </span>
                                                </li>
                                            ))}
                                        </ol>
                                    )}

                                    {/* DEFINITIONS */}
                                    {section.definitions?.length > 0 && (
                                        <div className="mt-5 space-y-3">
                                            {section.definitions.map((definition) => (
                                                <div
                                                    key={definition.term}
                                                    className="rounded-xl border border-slate-100 bg-slate-50/70 p-4"
                                                >
                                                    <p className="text-sm font-bold text-slate-900">
                                                        {definition.term}
                                                    </p>

                                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                                        {renderInlineText(definition.description)}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* PARAGRAPHS AFTER */}
                                    {section.paragraphsAfter?.length > 0 && (
                                        <div className="mt-5 space-y-4">
                                            {section.paragraphsAfter.map(
                                                (paragraph, index) => (
                                                    <p
                                                        key={index}
                                                        className="text-[15px] leading-7 text-slate-600"
                                                    >
                                                        {renderInlineText(paragraph)}
                                                    </p>
                                                )
                                            )}
                                        </div>
                                    )}

                                    {/* NOTE */}
                                    {section.note && (
                                        <div className="mt-5 flex gap-3 rounded-xl border border-amber-100 bg-amber-50 p-5">
                                            <Info
                                                size={20}
                                                className="mt-0.5 shrink-0 text-amber-600"
                                            />

                                            <p className="text-sm leading-6 text-amber-800">
                                                {section.note}
                                            </p>
                                        </div>
                                    )}
                                </section>
                            ))}
                        </div>
                    </article>

                    {/* RIGHT — STICKY */}
                    <aside className="lg:sticky lg:top-24">
                        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_8px_35px_rgba(15,50,100,0.06)]">
                            <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                                <FileText
                                    size={18}
                                    className="text-[#0d63f3]"
                                />

                                <h3 className="text-sm font-bold text-slate-900">
                                    Policy Contents
                                </h3>
                            </div>

                            <nav className="mt-4 max-h-[calc(100vh-190px)] overflow-y-auto pr-1">
                                <div className="space-y-1">
                                    {sections.map((section) => {
                                        const active =
                                            activeSection === section.id;

                                        return (
                                            <button
                                                key={section.id}
                                                type="button"
                                                onClick={() =>
                                                    scrollToSection(section.id)
                                                }
                                                className={`group flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left text-xs transition ${active
                                                    ? "bg-[#0d63f3] font-semibold text-white"
                                                    : "text-slate-600 hover:bg-blue-50 hover:text-[#0d63f3]"
                                                    }`}
                                            >
                                                <span
                                                    className={`shrink-0 ${active
                                                        ? "text-white"
                                                        : "text-slate-400"
                                                        }`}
                                                >
                                                    {section.number}
                                                </span>

                                                <span className="leading-5">
                                                    {section.heading}
                                                </span>

                                                {active && (
                                                    <ArrowUpRight
                                                        size={13}
                                                        className="ml-auto mt-0.5 shrink-0"
                                                    />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </nav>
                        </div>

                        {/* SUPPORT */}
                        <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0d63f3]">
                                <Info size={18} />
                            </div>

                            <h4 className="mt-4 text-sm font-bold text-slate-900">
                                Need Help?
                            </h4>

                            <p className="mt-2 text-xs leading-5 text-slate-600">
                                Our support team is here to help you with any
                                shipping related queries.
                            </p>

                            <button
                                type="button"
                                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#0d63f3]"
                            >
                                Contact Support
                                <ArrowUpRight size={14} />
                            </button>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
};

// src/pages/public/shippingGuide/ShippingGuide.jsx








import { shippingGuideData } from "./ShippingGuide.data";
import Navbar from "../../../features/landing/navbar/Navbar";
import Footer from "../../../features/landing/footer/Footer";

const ShippingGuides = () => {
    const { policySlug } = useParams();

    if (policySlug) {
        return <PolicyDetail />;
    }

    return (
        <main className="min-h-screen bg-white">
            <ShippingGuideHero data={shippingGuideData.hero} />

            <PolicyNavigation items={shippingGuideData.navigation} />

            <PolicyGrid
                data={{
                    ...shippingGuideData.section,
                    policies: shippingGuideData.policies,
                }}
            />

            <ShippingGuideCTA data={shippingGuideData.cta} />
            <Footer />
        </main>
    );
};

export default ShippingGuides;

