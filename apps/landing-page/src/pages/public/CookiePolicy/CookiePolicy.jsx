import React, { useState } from "react";

import {
    Home,
    ChevronRight,
    CalendarDays,
    Clock3,
    ShieldCheck,
    SlidersHorizontal,
    BarChart3,
    Gauge,
    Megaphone,
    Users,
    Search,
    Puzzle,
    Smartphone,
    Settings,
    MinusCircle,
    UserRound,
    Info,
    LockKeyhole,
    Check,
} from "lucide-react";

import CookiePolicyHero from "./CookiePolicyHero";
import { cookiePolicyData as data } from "./CookiePolicy.data";

/* ============================================================
   ICON MAP
============================================================ */

const iconMap = {
    shield: ShieldCheck,
    sliders: SlidersHorizontal,
    chart: BarChart3,
    gauge: Gauge,
    megaphone: Megaphone,
    users: Users,
    search: Search,
    puzzle: Puzzle,
    mobile: Smartphone,
    settings: Settings,
    minus: MinusCircle,
    user: UserRound,
};

/* ============================================================
   SECTION HEADING
============================================================ */

const SectionHeading = ({ children }) => {
    return (
        <h2 className="mb-2 text-[21px] font-bold tracking-[-0.02em] text-[#071456] sm:text-[24px]">
            {children}
        </h2>
    );
};

/* ============================================================
   BODY TEXT
============================================================ */

const BodyText = ({ children }) => {
    return (
        <p className="mb-3 text-[12px] leading-[1.75] text-[#10194a] sm:text-[13px]">
            {children}
        </p>
    );
};

/* ============================================================
   BULLET LIST
============================================================ */

const BulletList = ({ items }) => {
    return (
        <ul className="mb-4 grid gap-2 sm:grid-cols-2">
            {items.map((item, index) => (
                <li
                    key={index}
                    className="flex items-start gap-2 text-[12px] leading-[1.55] text-[#17204c]"
                >
                    <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5a00]" />

                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
};

/* ============================================================
   PURPOSE CARD
============================================================ */

const PurposeCard = ({ number, text }) => {
    return (
        <div className="min-h-[78px] rounded-[7px] border border-[#dfe7f8] bg-white px-2 py-3 text-center">
            <div className="mx-auto mb-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#092e9f] text-[9px] font-bold text-white">
                {number}
            </div>

            <p className="text-[10px] font-medium leading-[1.45] text-[#10194a]">
                {text}
            </p>
        </div>
    );
};

/* ============================================================
   COOKIE TYPE CARD
============================================================ */

const CookieTypeCard = ({ item }) => {
    const Icon = iconMap[item.icon] || ShieldCheck;

    return (
        <div className="group rounded-[7px] border border-[#dfe7f8] bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(13,52,150,0.08)]">
            <div className="mb-3 flex items-start gap-3">
                <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.color === "orange"
                        ? "bg-orange-50"
                        : "bg-blue-50"
                        }`}
                >
                    <Icon
                        size={25}
                        strokeWidth={1.8}
                        className={
                            item.color === "orange"
                                ? "text-[#ff5a00]"
                                : "text-[#0b35a5]"
                        }
                    />
                </div>

                <h3 className="pt-1 text-[12px] font-bold leading-[1.4] text-[#08257f]">
                    {item.title}
                </h3>
            </div>

            <p className="mb-3 text-[11px] leading-[1.65] text-[#18204c]">
                {item.description}
            </p>

            <p className="mb-3 text-[11px] leading-[1.65] text-[#18204c]">
                {item.note}
            </p>


        </div>
    );
};

/* ============================================================
   CHOICE CARD
============================================================ */

const ChoiceCard = ({ item }) => {
    const Icon = iconMap[item.icon] || ShieldCheck;

    return (
        <div className="flex gap-4 rounded-[7px] border border-[#dfe7f8] bg-white p-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <Icon
                    size={25}
                    className="text-[#0b35a5]"
                    strokeWidth={1.8}
                />
            </div>

            <div>
                <h3 className="mb-1 text-[12px] font-bold text-[#08257f]">
                    {item.title}
                </h3>

                <p className="text-[11px] leading-[1.65] text-[#18204c]">
                    {item.description}
                </p>
            </div>
        </div>
    );
};

/* ============================================================
   POLICY SECTION
============================================================ */

const PolicySection = ({ section }) => {
    return (
        <section className="mb-10">
            <SectionHeading>
                {section.number}. {section.title}
            </SectionHeading>

            {section.paragraphs?.map((paragraph, index) => (
                <BodyText key={index}>{paragraph}</BodyText>
            ))}

            {section.bullets && (
                <BulletList items={section.bullets} />
            )}

            {section.additionalTitle && (
                <p className="mb-3 text-[12px] font-semibold text-[#10194a]">
                    {section.additionalTitle}
                </p>
            )}

            {section.additionalBullets && (
                <BulletList items={section.additionalBullets} />
            )}

            {section.emphasis && (
                <div className="mb-5 grid gap-3 sm:grid-cols-3">
                    {section.emphasis.map((item) => (
                        <div
                            key={item}
                            className="rounded-lg border border-[#dfe7f8] bg-blue-50/50 px-4 py-3 text-center text-[11px] font-bold text-[#08257f]"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}

            {section.subsections?.map((subsection) => (
                <div
                    key={subsection.title}
                    className="mb-4 rounded-lg border-l-4 border-[#ff5a00] bg-[#fff8f4] px-5 py-4"
                >
                    <h3 className="mb-1 text-[13px] font-bold text-[#08257f]">
                        {subsection.title}
                    </h3>

                    <p className="text-[12px] leading-[1.7] text-[#18204c]">
                        {subsection.text}
                    </p>
                </div>
            ))}

            {section.categoryTable && (
                <div className="mb-4 overflow-hidden rounded-lg border border-[#dfe7f8]">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="bg-[#ff5a00] text-white">
                                <th className="px-4 py-2 text-[11px] font-bold">
                                    Category
                                </th>

                                <th className="px-4 py-2 text-[11px] font-bold">
                                    Purpose
                                </th>

                                <th className="px-4 py-2 text-[11px] font-bold">
                                    Optional?
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {section.categoryTable.map(
                                (row, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-[#edf1f8] last:border-0"
                                    >
                                        {row.map((cell, cellIndex) => (
                                            <td
                                                key={cellIndex}
                                                className="px-4 py-2 text-[11px] leading-[1.5] text-[#17204c]"
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {section.ending && (
                <BodyText>{section.ending}</BodyText>
            )}
        </section>
    );
};

/* ============================================================
   COOKIE SETTINGS
============================================================ */

const CookieSettings = () => {
    const [settings, setSettings] = useState(
        data.cookieSettings.options.map(
            (option) =>
                option.locked
                    ? true
                    : option.status
        )
    );

    const toggleSetting = (index) => {
        if (data.cookieSettings.options[index].locked) {
            return;
        }

        setSettings((previous) =>
            previous.map((value, i) =>
                i === index ? !value : value
            )
        );
    };

    return (
        <section className="mb-12">
            <SectionHeading>
                26. Cookie Settings
            </SectionHeading>

            <p className="mb-5 text-[12px] leading-[1.7] text-[#17204c]">
                You can manage your optional Cookie preferences using:
            </p>

            <div className="overflow-hidden rounded-[10px] border border-[#dfe7f8] bg-white shadow-[0_10px_35px_rgba(12,50,140,0.05)]">
                <div className="bg-[#092e9f] px-5 py-4 text-sm font-bold text-white">
                    {data.cookieSettings.title}
                </div>

                <div>
                    {data.cookieSettings.options.map(
                        (option, index) => (
                            <div
                                key={option.title}
                                className="flex items-center gap-4 border-b border-[#edf1f8] px-5 py-4 last:border-0"
                            >
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                                    {option.locked ? (
                                        <LockKeyhole
                                            size={19}
                                            className="text-[#0b35a5]"
                                        />
                                    ) : (
                                        <Settings
                                            size={19}
                                            className="text-[#ff5a00]"
                                        />
                                    )}
                                </div>

                                <div className="flex-1">
                                    <p className="text-[12px] font-bold text-[#10194a]">
                                        {option.title}
                                    </p>

                                    {option.locked && (
                                        <p className="mt-1 text-[10px] text-[#ff5a00]">
                                            Always Active
                                        </p>
                                    )}
                                </div>

                                {option.locked ? (
                                    <span className="rounded-full bg-orange-50 px-3 py-1 text-[10px] font-bold text-[#ff5a00]">
                                        Always Active
                                    </span>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            toggleSetting(index)
                                        }
                                        aria-label={`Toggle ${option.title}`}
                                        className={`relative h-6 w-11 rounded-full transition ${settings[index]
                                            ? "bg-[#ff5a00]"
                                            : "bg-slate-300"
                                            }`}
                                    >
                                        <span
                                            className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition ${settings[index]
                                                ? "left-6"
                                                : "left-1"
                                                }`}
                                        />
                                    </button>
                                )}
                            </div>
                        )
                    )}
                </div>

                <div className="border-t border-[#edf1f8] bg-[#fafcff] px-5 py-4">
                    <button
                        type="button"
                        className="rounded-md bg-[#ff5a00] px-5 py-2.5 text-[11px] font-bold text-white shadow-sm transition hover:bg-[#e95000]"
                    >
                        Save Preferences
                    </button>
                </div>
            </div>
        </section>
    );
};

/* ============================================================
   MAIN PAGE
============================================================ */

export default function CookiePolicy() {
    return (
        <main className="min-h-screen bg-white text-[#10194a]">

            {/* ======================================================
          HERO
      ====================================================== */}

            <section className="relative overflow-hidden bg-[linear-gradient(110deg,#f5f8ff_0%,#eef4ff_55%,#f8fbff_100%)]">
                <div className="mx-auto max-w-[1440px] px-6 pb-8 pt-5 sm:px-10 lg:px-12">

                    {/* Breadcrumb */}

                    <div className="mb-8 flex items-center gap-2 text-[10px] font-medium text-[#0c267f] sm:text-xs">
                        <Home
                            size={14}
                            fill="currentColor"
                        />

                        <span>Home</span>

                        <ChevronRight size={13} />





                        <span className="text-orange-600">Cookie Policy</span>
                    </div>

                    <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">

                        {/* Hero Content */}

                        <div className="max-w-[620px]">
                            <h1 className="mb-7 text-[48px] font-extrabold leading-[0.98] tracking-[-0.045em] text-[#080f49] sm:text-[60px] lg:text-[68px]">
                                {data.title}
                            </h1>

                            <div className="mb-7 flex flex-wrap gap-x-8 gap-y-3">

                                <div className="flex items-center gap-2 text-[11px] font-semibold text-[#10194a] sm:text-xs">
                                    <CalendarDays
                                        size={17}
                                        className="text-[#071d80]"
                                    />

                                    <span>
                                        Effective Date:{" "}
                                        <strong>
                                            {data.effectiveDate}
                                        </strong>
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-[11px] font-semibold text-[#10194a] sm:text-xs">
                                    <Clock3
                                        size={17}
                                        className="text-[#071d80]"
                                    />

                                    <span>
                                        Last Updated:{" "}
                                        <strong>
                                            {data.lastUpdated}
                                        </strong>
                                    </span>
                                </div>
                            </div>

                            {data.intro.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className="mb-5 max-w-[600px] text-[12px] font-medium leading-[1.75] text-[#10194a] sm:text-[13px]"
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>

                        {/* Hero Illustration */}

                        <CookiePolicyHero />

                    </div>
                </div>
            </section>

            {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

            <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-10 lg:px-12">

                {/* ====================================================
            WHAT ARE COOKIES
        ==================================================== */}

                <section className="mb-12">
                    <div className="grid gap-8 lg:grid-cols-[1fr_255px]">

                        <div>
                            <SectionHeading>
                                {data.whatAreCookies.title}
                            </SectionHeading>

                            <BodyText>
                                {data.whatAreCookies.description}
                            </BodyText>

                            <p className="mb-4 text-[12px] font-medium text-[#17204c]">
                                Cookies allow websites to:
                            </p>

                            <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">

                                {data.whatAreCookies.cookiesAllow.map(
                                    (item, index) => {

                                        const icons = [
                                            Users,
                                            LockKeyhole,
                                            ShieldCheck,
                                            Search,
                                            Gauge,
                                            BarChart3,
                                            Megaphone,
                                            ShieldCheck,
                                        ];

                                        const Icon =
                                            icons[index] || Check;

                                        return (
                                            <div
                                                key={item}
                                                className="flex items-start gap-3"
                                            >
                                                <Icon
                                                    size={18}
                                                    className="mt-0.5 shrink-0 text-[#082fa2]"
                                                    strokeWidth={1.8}
                                                />

                                                <span className="text-[11px] leading-[1.5] text-[#17204c]">
                                                    {item}
                                                </span>
                                            </div>
                                        );
                                    }
                                )}

                            </div>
                        </div>

                        {/* Similar Technologies */}

                        <aside className="rounded-[8px] bg-[#f0f5ff] p-5">

                            <h3 className="mb-3 text-[13px] font-bold leading-[1.45] text-[#08257f]">
                                Nexgo may also use similar technologies such as:
                            </h3>

                            <div className="space-y-2">
                                {data.whatAreCookies.similarTechnologies.map(
                                    (item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-2 text-[11px] text-[#17204c]"
                                        >
                                            <span className="h-1.5 w-1.5 rounded-full bg-[#0b35a5]" />

                                            {item}
                                        </div>
                                    )
                                )}
                            </div>

                            <p className="mt-5 text-[11px] leading-[1.6] text-[#17204c]">
                                For simplicity, we refer to these
                                technologies collectively as{" "}
                                <strong>“Cookies.”</strong>
                            </p>

                        </aside>

                    </div>
                </section>

                {/* ====================================================
            WHY NEXGO USES COOKIES
        ==================================================== */}

                <section className="mb-12">

                    <SectionHeading>
                        Why Nexgo Uses Cookies
                    </SectionHeading>

                    <BodyText>
                        Nexgo uses Cookies to operate, secure and
                        improve the Platform. Depending on your choices
                        and applicable law, Cookies may be used to:
                    </BodyText>

                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">

                        {data.whyNexgoUsesCookies.map(
                            (item, index) => (
                                <PurposeCard
                                    key={item}
                                    number={index + 1}
                                    text={item}
                                />
                            )
                        )}

                    </div>
                </section>

                {/* ====================================================
            TYPES OF COOKIES
        ==================================================== */}

                <section className="mb-12">

                    <SectionHeading>
                        Types of Cookies We Use
                    </SectionHeading>

                    <BodyText>
                        Nexgo generally categorizes Cookies into the
                        following categories:
                    </BodyText>

                    {/* First Strictly Necessary category */}

                    <div className="mb-3 rounded-[7px] border border-[#dfe7f8] bg-white p-4">

                        <div className="mb-3 flex items-start gap-3">

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                                <ShieldCheck
                                    size={25}
                                    strokeWidth={1.8}
                                    className="text-[#0b35a5]"
                                />
                            </div>

                            <h3 className="pt-1 text-[12px] font-bold leading-[1.4] text-[#08257f]">
                                {data.strictlyNecessary.title}
                            </h3>

                        </div>

                        <p className="mb-3 text-[11px] leading-[1.65] text-[#18204c]">
                            {data.strictlyNecessary.description}
                        </p>

                        <p className="mb-3 text-[11px] font-semibold text-[#17204c]">
                            They may be used for:
                        </p>

                        <ul className="mb-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                            {data.strictlyNecessary.usedFor.map(
                                (item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-2 text-[11px] leading-[1.5] text-[#17204c]"
                                    >
                                        <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5a00]" />

                                        {item}
                                    </li>
                                )
                            )}
                        </ul>

                        <p className="mb-4 text-[11px] leading-[1.65] text-[#18204c]">
                            {data.strictlyNecessary.note}
                        </p>

                        {/* MISSING SECTION NOW INCLUDED */}

                        <div className="overflow-hidden rounded-lg border border-[#dfe7f8]">

                            <table className="w-full border-collapse">

                                <thead>
                                    <tr className="bg-[#092e9f] text-white">

                                        <th className="px-4 py-2 text-left text-[10px] font-bold">
                                            Cookie Purpose
                                        </th>

                                        <th className="px-4 py-2 text-left text-[10px] font-bold">
                                            Function
                                        </th>

                                    </tr>
                                </thead>

                                <tbody>

                                    {data.strictlyNecessary.examples.map(
                                        (item) => (
                                            <tr
                                                key={item.purpose}
                                                className="border-b border-[#edf1f8] last:border-0"
                                            >

                                                <td className="px-4 py-2 text-[10px] font-semibold text-[#17204c]">
                                                    {item.purpose}
                                                </td>

                                                <td className="px-4 py-2 text-[10px] text-[#17204c]">
                                                    {item.function}
                                                </td>

                                            </tr>
                                        )
                                    )}

                                </tbody>

                            </table>

                        </div>

                    </div>

                    {/* Remaining Cookie Cards */}

                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {data.cookieTypes
                            .filter(
                                (item) =>
                                    item.title !==
                                    "Strictly Necessary Cookies"
                            )
                            .map((item) => (
                                <CookieTypeCard
                                    key={item.title}
                                    item={item}
                                />
                            ))}

                    </div>

                </section>

                {/* ====================================================
            COOKIE DETAILS
        ==================================================== */}

                <section className="mb-12">

                    <SectionHeading>
                        Cookie Details
                    </SectionHeading>

                    <BodyText>
                        The following table provides examples of Cookies
                        that may be used on the Nexgo Platform.
                    </BodyText>

                    <div className="overflow-x-auto rounded-lg border border-[#dfe7f8]">

                        <table className="min-w-[900px] w-full border-collapse">

                            <thead>

                                <tr className="bg-[#ff5a00] text-white">

                                    <th className="px-3 py-2 text-left text-[10px] font-bold">
                                        Cookie Name
                                    </th>

                                    <th className="px-3 py-2 text-left text-[10px] font-bold">
                                        Category
                                    </th>

                                    <th className="px-3 py-2 text-left text-[10px] font-bold">
                                        Purpose
                                    </th>

                                    <th className="px-3 py-2 text-left text-[10px] font-bold">
                                        Duration
                                    </th>

                                    <th className="px-3 py-2 text-left text-[10px] font-bold">
                                        Managed By
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {data.cookieDetails.map(
                                    (cookie) => (
                                        <tr
                                            key={cookie.name}
                                            className="border-b border-[#edf1f8] last:border-0"
                                        >

                                            <td className="px-3 py-2 text-[10px] text-[#17204c]">
                                                {cookie.name}
                                            </td>

                                            <td className="px-3 py-2 text-[10px] text-[#17204c]">
                                                {cookie.category}
                                            </td>

                                            <td className="px-3 py-2 text-[10px] text-[#17204c]">
                                                {cookie.purpose}
                                            </td>

                                            <td className="px-3 py-2 text-[10px] text-[#17204c]">
                                                {cookie.duration}
                                            </td>

                                            <td className="px-3 py-2 text-[10px] text-[#17204c]">
                                                {cookie.managedBy}
                                            </td>

                                        </tr>
                                    )
                                )}

                            </tbody>

                        </table>

                    </div>

                    <div className="mt-3 flex items-start gap-2 text-[10px] leading-[1.5] text-[#24305a]">

                        <Info
                            size={14}
                            className="mt-0.5 shrink-0 text-[#0b35a5]"
                        />

                        <span>
                            Please note: The above are examples and actual
                            Cookies used may change from time to time.
                        </span>

                    </div>

                </section>

                {/* ====================================================
            SECTIONS 4 - 25
        ==================================================== */}

                <div className="max-w-[1050px]">

                    {data.sections.map((section) => (
                        <PolicySection
                            key={section.number}
                            section={section}
                        />
                    ))}

                    {/* ==================================================
              YOUR CHOICES AND CONTROL
          ================================================== */}

                    <section className="mb-12">

                        <SectionHeading>
                            Your Choices and Control
                        </SectionHeading>

                        <BodyText>
                            You have control over the Cookies used on the
                            Nexgo Platform.
                        </BodyText>

                        <div className="grid gap-3 sm:grid-cols-2">

                            {data.choices.map((item) => (
                                <ChoiceCard
                                    key={item.title}
                                    item={item}
                                />
                            ))}

                        </div>

                    </section>

                    {/* ==================================================
              26. COOKIE SETTINGS
          ================================================== */}

                    <CookieSettings />

                    {/* ==================================================
              YOUR CHOICE MATTERS
          ================================================== */}

                    <section className="mb-8 overflow-hidden rounded-[12px] bg-[linear-gradient(135deg,#f2f6ff,#ffffff)] px-6 py-8 text-center sm:px-10">

                        <div className="mx-auto max-w-[750px]">

                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                                <ShieldCheck
                                    size={25}
                                    className="text-[#0b35a5]"
                                />
                            </div>

                            <h2 className="mb-3 text-[23px] font-extrabold text-[#071456]">
                                {data.closing.title}
                            </h2>

                            <p className="mb-3 text-[12px] leading-[1.7] text-[#17204c]">
                                {data.closing.text}
                            </p>

                            <p className="mb-6 text-[12px] leading-[1.7] text-[#17204c]">
                                {data.closing.secondary}
                            </p>

                            <div className="text-[18px] font-extrabold text-[#092e9f]">
                                <span className="text-[#ff5a00]">
                                    »
                                </span>

                                {data.closing.brand}
                            </div>

                            <p className="mt-1 text-[10px] font-medium tracking-wide text-[#17204c]">
                                {data.closing.tagline}
                            </p>

                        </div>

                    </section>

                    {/* ==================================================
              IMPLEMENTATION RECOMMENDATION
          ================================================== */}

                    <section className="mt-8 rounded-[10px] border border-[#dfe7f8] bg-[#f7f9ff] p-6 sm:p-8">

                        <div className="mb-5 flex items-start gap-3">

                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                                <Info
                                    size={20}
                                    className="text-[#0b35a5]"
                                    strokeWidth={1.8}
                                />
                            </div>

                            <div>

                                <h2 className="text-[16px] font-bold text-[#071456] sm:text-[18px]">
                                    {data.implementationRecommendation.title}
                                </h2>

                                <p className="mt-1 text-[10px] text-[#64709a]">
                                    Cookie consent implementation guidance
                                </p>

                            </div>

                        </div>

                        {data.implementationRecommendation.paragraphs.map(
                            (paragraph, index) => (
                                <p
                                    key={index}
                                    className="mb-4 text-[12px] leading-[1.8] text-[#17204c] sm:text-[13px]"
                                >
                                    {paragraph}
                                </p>
                            )
                        )}

                        <div className="mb-5 flex flex-wrap gap-2">

                            <button
                                type="button"
                                className="rounded-md bg-[#092e9f] px-4 py-2 text-[10px] font-bold text-white"
                            >
                                Accept All
                            </button>

                            <button
                                type="button"
                                className="rounded-md border border-[#092e9f] bg-white px-4 py-2 text-[10px] font-bold text-[#092e9f]"
                            >
                                Reject Optional
                            </button>

                            <button
                                type="button"
                                className="rounded-md border border-[#ff5a00] bg-white px-4 py-2 text-[10px] font-bold text-[#ff5a00]"
                            >
                                Manage Preferences
                            </button>

                        </div>

                        <div className="border-t border-[#dfe7f8] pt-5">

                            <p className="text-[12px] leading-[1.8] text-[#17204c] sm:text-[13px]">
                                {data.implementationRecommendation.finalNote}
                            </p>

                        </div>

                    </section>

                </div>
            </div>
        </main>
    );
}