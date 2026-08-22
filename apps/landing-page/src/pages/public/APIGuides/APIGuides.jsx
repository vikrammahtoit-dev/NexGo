import React from "react";
import { apiTerms } from "./APITerms";
import Navbar from "../../../features/landing/navbar/Navbar";
import Footer from "../../../features/landing/footer/Footer";

const HIGHLIGHT_CLASS =
    "rounded-[3px] bg-[#FF7518] px-[3px] py-[1px] text-slate-950";

function RichText({ parts }) {
    return (
        <>
            {parts.map((part, index) => {
                if (part.highlight) {
                    return (
                        <span key={index} className={HIGHLIGHT_CLASS}>
                            {part.text}
                        </span>
                    );
                }

                if (part.bold) {
                    return (
                        <strong
                            key={index}
                            className="font-semibold text-slate-900"
                        >
                            {part.text}
                        </strong>
                    );
                }

                return <React.Fragment key={index}>{part.text}</React.Fragment>;
            })}
        </>
    );
}

function Paragraphs({ paragraphs = [] }) {
    return (
        <div className="space-y-5">
            {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
}

function Bullets({ items = [] }) {
    if (!items.length) return null;

    return (
        <ul className="my-5 list-disc space-y-2.5 pl-6 marker:text-slate-400">
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

function Section({ section }) {
    return (
        <section
            id={section.id}
            className="scroll-mt-8"
        >
            <h2 className="text-[20px] font-semibold leading-7 tracking-[-0.015em] text-slate-950 sm:text-[22px]">
                {section.title}
            </h2>

            <div className="mt-5 text-[15px] leading-[1.85] text-slate-600">
                <Paragraphs paragraphs={section.paragraphs} />

                {section.introList && (
                    <p className="mt-5">
                        {section.introList}
                    </p>
                )}

                <Bullets items={section.bullets} />

                {section.secondIntroList && (
                    <p className="mt-6">
                        {section.secondIntroList}
                    </p>
                )}

                <Bullets items={section.secondBullets} />

                {section.subsections?.map((subsection) => (
                    <div
                        key={subsection.title}
                        className="mt-8"
                    >
                        <h3 className="font-semibold text-slate-900">
                            {subsection.title}
                        </h3>

                        {subsection.intro && (
                            <p className="mt-3">
                                {subsection.intro}
                            </p>
                        )}

                        <Paragraphs
                            paragraphs={subsection.paragraphs}
                        />

                        <Bullets items={subsection.bullets} />

                        <Paragraphs
                            paragraphs={subsection.after}
                        />
                    </div>
                ))}

                {section.versions && (
                    <div className="my-6 space-y-1">
                        {section.versions.map((version) => (
                            <p
                                key={version}
                                className="font-semibold text-slate-900"
                            >
                                {version}
                            </p>
                        ))}
                    </div>
                )}

                {section.special?.map((item) => (
                    <p
                        key={item.label}
                        className="mt-5"
                    >
                        <strong className="font-semibold text-slate-900">
                            {item.label}
                        </strong>{" "}
                        {item.value}
                    </p>
                ))}

                {section.highlightedBlock && (
                    <div className="my-6">
                        <span className={HIGHLIGHT_CLASS}>
                            {section.highlightedBlock}
                        </span>
                    </div>
                )}

                {section.details && (
                    <div className="my-6 space-y-2">
                        {section.details.map(([label, value]) => (
                            <p key={label}>
                                <strong className="font-semibold text-slate-900">
                                    {label}
                                </strong>{" "}
                                {value}
                            </p>
                        ))}
                    </div>
                )}

                <Paragraphs paragraphs={section.after} />

                {section.brand && (
                    <div className="mt-10">
                        <p className="font-bold text-slate-950">
                            {section.brand}
                        </p>

                        <p className="mt-1 font-semibold text-slate-900">
                            {section.tagline}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

function Sidebar() {
    return (
        <aside className="hidden w-[260px] shrink-0 lg:block">
            <div className="sticky top-8">
                <p className="mb-4 px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    API Terms of Use
                </p>

                <nav className="max-h-[calc(100vh-80px)] overflow-y-auto pr-2">
                    <div className="space-y-0.5">
                        {apiTerms.sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="
                  block rounded-lg px-3 py-2
                  text-[12px] leading-5 text-slate-500
                  transition-colors
                  hover:bg-slate-100
                  hover:text-slate-950
                "
                            >
                                {section.title}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </aside>
    );
}

function DeveloperPortal() {
    const portal = apiTerms.developerPortal;

    return (
        <section className="mt-20 border-t border-slate-200 pt-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600">
                {portal.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                {portal.heading}
            </h2>

            <p className="mt-4 whitespace-pre-line text-[15px] leading-7 text-slate-600">
                {portal.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
                {portal.actions.map((action, index) => (
                    <button
                        key={action}
                        type="button"
                        className={
                            index === 0
                                ? "rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                                : "rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                        }
                    >
                        {action}
                    </button>
                ))}
            </div>

            <div className="my-10 h-px bg-slate-200" />

            <div className="grid gap-10 sm:grid-cols-2">
                <div>
                    <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        API
                    </p>

                    <ul className="space-y-2.5">
                        {portal.api.map((item) => (
                            <li
                                key={item}
                                className="text-sm text-slate-600"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        DEVELOPERS
                    </p>

                    <ul className="space-y-2.5">
                        {portal.developers.map((item) => (
                            <li
                                key={item}
                                className="text-sm text-slate-600"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default function APIGuides() {
    return (
        <main className="min-h-screen bg-[#f7f9fc]">
            {/* HERO SECTION — intentionally left for you */}
            <Navbar />

            <div className="mx-auto max-w-[1280px] px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <div className="px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
                        {/* PAGE HEADER */}
                        <header className="max-w-4xl border-b border-slate-200 pb-9">
                            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                                {apiTerms.title}
                            </h1>

                            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-500">
                                <span>
                                    <strong className="font-medium text-slate-700">
                                        Effective Date:
                                    </strong>{" "}
                                    {apiTerms.effectiveDate}
                                </span>

                                <span>
                                    <strong className="font-medium text-slate-700">
                                        Last Updated:
                                    </strong>{" "}
                                    {apiTerms.lastUpdated}
                                </span>
                            </div>
                        </header>

                        {/* CONTENT + SIDEBAR */}
                        <div className="mt-10 flex items-start gap-10 xl:gap-16">
                            <Sidebar />

                            <div className="min-w-0 max-w-4xl flex-1">
                                {/* INTRO */}
                                <section className="border-b border-slate-200 pb-10">
                                    <div className="space-y-5 text-[15px] leading-[1.85] text-slate-600">
                                        {apiTerms.intro.map(
                                            (paragraph, index) => (
                                                <p key={index}>
                                                    <RichText
                                                        parts={paragraph.parts}
                                                    />
                                                </p>
                                            )
                                        )}
                                    </div>
                                </section>

                                {/* ALL 42 SECTIONS */}
                                <div className="space-y-14 pt-10">
                                    {apiTerms.sections.map(
                                        (section) => (
                                            <Section
                                                key={section.id}
                                                section={section}
                                            />
                                        )
                                    )}
                                </div>

                                {/* RECOMMENDED DEVELOPER PORTAL */}
                                <DeveloperPortal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </main>
    );
};