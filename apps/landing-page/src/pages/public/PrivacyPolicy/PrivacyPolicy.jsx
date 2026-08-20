import React from "react";
import Navbar from "../../../features/landing/navbar/Navbar";
import Footer from "../../../features/landing/footer/Footer";
import { privacyPolicyData } from "./PrivacyPolicy.data";

/* =========================================================
   SECURITY ILLUSTRATION
   Inline SVG — no external image required
========================================================= */

const SecurityIllustration = () => {
    return (
        <svg
            viewBox="0 0 520 330"
            className="h-auto w-full"
            role="img"
            aria-label="Privacy and security illustration"
        >
            <defs>
                <linearGradient
                    id="shieldGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop offset="0%" stopColor="#183A91" />
                    <stop offset="100%" stopColor="#101F67" />
                </linearGradient>

                <linearGradient
                    id="cardGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >
                    <stop offset="0%" stopColor="#F8FBFF" />
                    <stop offset="100%" stopColor="#E9EFFF" />
                </linearGradient>

                <filter id="shadow">
                    <feDropShadow
                        dx="0"
                        dy="10"
                        stdDeviation="12"
                        floodOpacity="0.12"
                    />
                </filter>
            </defs>

            {/* Background */}
            <circle
                cx="375"
                cy="145"
                r="105"
                fill="#F1F5FF"
            />

            <circle
                cx="375"
                cy="145"
                r="82"
                fill="#E7EDFF"
            />

            {/* Orbit */}
            <ellipse
                cx="280"
                cy="145"
                rx="145"
                ry="95"
                fill="none"
                stroke="#D3DCFF"
                strokeWidth="2"
                strokeDasharray="6 7"
            />

            {/* Orbit dots */}
            <circle
                cx="152"
                cy="145"
                r="5"
                fill="#FF5B1A"
            />

            <circle
                cx="285"
                cy="50"
                r="5"
                fill="#FF5B1A"
            />

            <circle
                cx="410"
                cy="235"
                r="5"
                fill="#FF5B1A"
            />

            {/* Document */}
            <g filter="url(#shadow)">
                <rect
                    x="205"
                    y="115"
                    width="260"
                    height="155"
                    rx="10"
                    fill="url(#cardGradient)"
                />

                <rect
                    x="225"
                    y="138"
                    width="150"
                    height="11"
                    rx="5"
                    fill="#C9D5FF"
                />

                <rect
                    x="225"
                    y="160"
                    width="125"
                    height="8"
                    rx="4"
                    fill="#DCE4FF"
                />

                <rect
                    x="225"
                    y="184"
                    width="180"
                    height="7"
                    rx="3"
                    fill="#DCE4FF"
                />

                <rect
                    x="225"
                    y="207"
                    width="155"
                    height="7"
                    rx="3"
                    fill="#DCE4FF"
                />

                {/* Check 1 */}
                <circle
                    cx="420"
                    cy="143"
                    r="9"
                    fill="#142D80"
                />

                <path
                    d="M416 143L419 146L425 139"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Check 2 */}
                <circle
                    cx="420"
                    cy="174"
                    r="9"
                    fill="#142D80"
                />

                <path
                    d="M416 174L419 177L425 170"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Check 3 */}
                <circle
                    cx="420"
                    cy="205"
                    r="9"
                    fill="#142D80"
                />

                <path
                    d="M416 205L419 208L425 201"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>

            {/* Shield */}
            <g filter="url(#shadow)">
                <path
                    d="
            M320 48
            C340 67 360 72 386 77
            L386 142
            C386 181 360 207 320 225
            C280 207 254 181 254 142
            L254 77
            C280 72 300 67 320 48
            Z
          "
                    fill="url(#shieldGradient)"
                />

                {/* Shield highlight */}
                <path
                    d="
            M320 62
            C338 77 353 81 374 85
            L374 140
            C374 167 354 188 320 205
          "
                    fill="none"
                    stroke="#526FC7"
                    strokeWidth="3"
                    opacity="0.5"
                />

                {/* Lock */}
                <rect
                    x="295"
                    y="123"
                    width="50"
                    height="47"
                    rx="7"
                    fill="white"
                />

                <path
                    d="
            M306 123
            V108
            C306 89 334 89 334 108
            V123
          "
                    fill="none"
                    stroke="white"
                    strokeWidth="9"
                    strokeLinecap="round"
                />

                <circle
                    cx="320"
                    cy="144"
                    r="6"
                    fill="#183A91"
                />

                <rect
                    x="317"
                    y="144"
                    width="6"
                    height="15"
                    rx="3"
                    fill="#183A91"
                />
            </g>

            {/* User */}
            <circle
                cx="440"
                cy="62"
                r="35"
                fill="white"
                stroke="#D5DDFF"
                strokeWidth="3"
            />

            <circle
                cx="440"
                cy="53"
                r="9"
                fill="#FF5B1A"
            />

            <path
                d="M422 78C424 65 431 59 440 59C449 59 456 65 458 78"
                fill="#FF5B1A"
            />

            {/* Decorative leaves */}
            <path
                d="M172 247C147 222 143 199 162 186C184 194 194 217 172 247Z"
                fill="#CFD9FF"
            />

            <path
                d="M185 252C178 216 189 195 213 191C225 211 214 237 185 252Z"
                fill="#DCE5FF"
            />

            <path
                d="M166 255C184 234 204 227 220 239C212 258 190 266 166 255Z"
                fill="#BFCBFF"
            />

            {/* Bottom line */}
            <path
                d="M120 270H455"
                stroke="#B9C8FA"
                strokeWidth="3"
                strokeLinecap="round"
            />
        </svg>
    );
};

/* =========================================================
   BULLET LIST
========================================================= */

const BulletList = ({ items = [] }) => {
    if (!items.length) return null;

    return (
        <ul className="mt-4 space-y-2.5">
            {items.map((item, index) => (
                <li
                    key={index}
                    className="flex items-start gap-3 text-[13px] leading-6 text-[#435175]"
                >
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF5B1A]" />

                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
};

/* =========================================================
   BULLET COLUMNS
========================================================= */

const BulletColumns = ({ columns = [] }) => {
    if (!columns.length) return null;

    return (
        <div
            className={`
        mt-5 grid gap-x-8 gap-y-5
        ${columns.length === 1
                    ? "grid-cols-1"
                    : columns.length === 2
                        ? "grid-cols-1 md:grid-cols-2"
                        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }
      `}
        >
            {columns.map((column, index) => (
                <div
                    key={index}
                    className={`
            ${index > 0
                            ? "lg:border-l lg:border-[#E6EAF3] lg:pl-8"
                            : ""
                        }
          `}
                >
                    <BulletList items={column} />
                </div>
            ))}
        </div>
    );
};

/* =========================================================
   INFORMATION GROUP
========================================================= */

const InformationGroup = ({ group }) => {
    return (
        <div>
            <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF3ED]">
                    {group.icon === "box" ? (
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FF5B1A"
                            strokeWidth="1.8"
                        >
                            <path d="M21 8L12 3L3 8L12 13L21 8Z" />
                            <path d="M3 8V17L12 22L21 17V8" />
                            <path d="M12 13V22" />
                        </svg>
                    ) : (
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FF5B1A"
                            strokeWidth="1.8"
                        >
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 21C4 16.8 7.6 14 12 14C16.4 14 20 16.8 20 21" />
                        </svg>
                    )}
                </div>

                <h4 className="text-[14px] font-semibold text-[#10275F]">
                    {group.title}
                </h4>
            </div>

            {group.columns ? (
                <BulletColumns columns={group.columns} />
            ) : (
                <BulletList items={group.items} />
            )}
        </div>
    );
};

/* =========================================================
   CONTENT GROUP
========================================================= */

const ContentGroup = ({ group }) => {
    return (
        <div className="mt-7">
            <h4 className="text-[15px] font-bold text-[#122963]">
                {group.title}
            </h4>

            {group.intro && (
                <p className="mt-3 text-[13px] leading-6 text-[#435175]">
                    {group.intro}
                </p>
            )}

            {group.bullets && (
                <BulletList items={group.bullets} />
            )}

            {group.paragraphs?.map((paragraph, index) => (
                <p
                    key={index}
                    className="mt-4 text-[13px] leading-6 text-[#435175]"
                >
                    {paragraph}
                </p>
            ))}
        </div>
    );
};

/* =========================================================
   POLICY SECTION
========================================================= */

const PolicySection = ({ section }) => {
    return (
        <section
            id={section.id}
            className="
        scroll-mt-8
        border-b
        border-[#E8EBF2]
        py-8
        first:pt-8
        last:border-b-0
      "
        >
            {/* Heading */}
            <div className="flex items-start gap-4">
                {/* <span className="w-6 shrink-0 text-[15px] font-bold text-[#10275F]">
                    {section.number}.
                </span> */}

                <div className="min-w-0 flex-1">
                    <h2 className="text-[17px] font-bold tracking-[-0.01em] text-[#10275F]">
                        {section.title}
                    </h2>

                    {section.intro && (
                        <p className="mt-3 text-[13px] leading-6 text-[#435175]">
                            {section.intro}
                        </p>
                    )}
                </div>
            </div>

            {/* Standard bullets */}
            {section.bullets && (
                <div className="ml-10">
                    <BulletList items={section.bullets} />
                </div>
            )}

            {/* Secondary intro */}
            {section.secondaryIntro && (
                <p className="ml-10 mt-5 text-[13px] font-medium leading-6 text-[#33436F]">
                    {section.secondaryIntro}
                </p>
            )}

            {/* Secondary bullets */}
            {section.secondaryBullets && (
                <div className="ml-10">
                    <BulletList items={section.secondaryBullets} />
                </div>
            )}

            {/* Bullet columns */}
            {section.bulletColumns && (
                <div className="ml-10">
                    <BulletColumns
                        columns={section.bulletColumns}
                    />
                </div>
            )}

            {/* Subsections */}
            {section.subsections && (
                <div className="ml-10 mt-7 space-y-8">
                    {section.subsections.map((subsection) => (
                        <div key={subsection.number}>
                            <h3 className="text-[14px] font-bold text-[#17306D]">
                                {subsection.number} {subsection.title}
                            </h3>

                            {subsection.intro && (
                                <p className="mt-3 text-[13px] leading-6 text-[#435175]">
                                    {subsection.intro}
                                </p>
                            )}

                            {subsection.bullets && (
                                <BulletList
                                    items={subsection.bullets}
                                />
                            )}

                            {subsection.bulletColumns && (
                                <BulletColumns
                                    columns={subsection.bulletColumns}
                                />
                            )}

                            {subsection.paragraphs?.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className="mt-4 text-[13px] leading-6 text-[#435175]"
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Information groups */}
            {section.informationGroups && (
                <div className="ml-10 mt-7 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {section.informationGroups.map(
                        (group, index) => (
                            <InformationGroup
                                key={index}
                                group={group}
                            />
                        )
                    )}
                </div>
            )}

            {/* Content groups */}
            {section.contentGroups && (
                <div className="ml-10">
                    {section.contentGroups.map(
                        (group, index) => (
                            <ContentGroup
                                key={index}
                                group={group}
                            />
                        )
                    )}
                </div>
            )}

            {/* Contact */}
            {section.contact && (
                <div className="ml-10 mt-6 rounded-xl border border-[#E6EAF3] bg-[#FAFBFE] p-5">
                    <h4 className="text-[14px] font-bold text-[#10275F]">
                        {section.contact.title}
                    </h4>

                    <div className="mt-4 space-y-3">
                        {section.contact.fields.map(
                            (field, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-[80px_1fr] gap-3 text-[13px]"
                                >
                                    <span className="font-semibold text-[#33436F]">
                                        {field.label}
                                    </span>

                                    <span className="text-[#435175]">
                                        {field.value}
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                </div>
            )}

            {/* Registered office */}
            {section.office && (
                <div className="ml-10 mt-5 rounded-xl border border-[#E6EAF3] bg-white p-5">
                    <h4 className="text-[14px] font-bold text-[#10275F]">
                        {section.office.title}
                    </h4>

                    <div className="mt-3 space-y-1 text-[13px] leading-6 text-[#435175]">
                        {section.office.lines.map(
                            (line, index) => (
                                <p key={index}>{line}</p>
                            )
                        )}
                    </div>
                </div>
            )}

            {/* Paragraphs */}
            {section.paragraphs?.map(
                (paragraph, index) => (
                    <p
                        key={index}
                        className="ml-10 mt-5 text-[13px] leading-6 text-[#435175]"
                    >
                        {paragraph}
                    </p>
                )
            )}

            {/* Privacy flow */}
            {section.privacyFlow && (
                <div className="ml-10 mt-7 flex flex-wrap items-center gap-3">
                    {section.privacyFlow.map(
                        (item, index) => (
                            <React.Fragment key={item}>
                                <div className="rounded-lg border border-[#DCE3F5] bg-[#F7F9FF] px-5 py-3 text-[13px] font-bold text-[#17306D]">
                                    {item}
                                </div>

                                {index <
                                    section.privacyFlow.length - 1 && (
                                        <span className="font-bold text-[#FF5B1A]">
                                            →
                                        </span>
                                    )}
                            </React.Fragment>
                        )
                    )}
                </div>
            )}

            {/* Closing brand */}
            {section.closingBrand && (
                <div className="ml-10 mt-8">
                    <div className="text-[21px] font-extrabold italic tracking-tight text-[#173A91]">
                        {section.closingBrand}
                    </div>

                    <div className="mt-1 text-[13px] font-medium text-[#53617F]">
                        {section.closingTagline}
                    </div>
                </div>
            )}
        </section>
    );
};

/* =========================================================
   TABLE OF CONTENTS
========================================================= */

const TableOfContents = () => {
    const handleScroll = (id) => {
        const element =
            document.getElementById(id);

        if (!element) return;

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <aside className="hidden xl:block">
            <div className="sticky top-8 overflow-hidden rounded-xl border border-[#E6EAF3] bg-white shadow-[0_8px_30px_rgba(25,45,90,0.06)]">
                {/* Header */}
                <div className="border-b border-[#EDF0F5] px-5 py-4">
                    <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#10275F]">
                        On This Page
                    </h3>
                </div>

                {/* Navigation */}
                <div className="max-h-[calc(100vh-130px)] overflow-y-auto py-1">
                    {privacyPolicyData.sections.map(
                        (section) => (
                            <button
                                key={section.id}
                                type="button"
                                onClick={() =>
                                    handleScroll(section.id)
                                }
                                className="
                  group
                  flex
                  w-full
                  items-start
                  gap-3
                  border-l-2
                  border-transparent
                  px-5
                  py-3
                  text-left
                  text-[12px]
                  font-medium
                  leading-5
                  text-[#30426F]
                  transition-all
                  duration-200
                  hover:border-[#FF5B1A]
                  hover:bg-[#FFF7F3]
                  hover:text-[#10275F]
                "
                            >
                                {/* <span className="w-5 shrink-0 text-[#8A95AE]">
                                    {section.number}
                                </span> */}

                                <span>
                                    {section.title}
                                </span>
                            </button>
                        )
                    )}
                </div>
            </div>
        </aside>
    );
};

/* =========================================================
   PRIVACY POLICY PAGE
========================================================= */

const PrivacyPolicy = () => {
    return (
        <>
            {/* Existing Navbar */}
            <Navbar />

            <main className="min-h-screen bg-white text-[#10275F]">
                <div className="mx-auto max-w-[1320px] px-5 py-8 sm:px-8 lg:px-10">

                    {/* =================================================
              BREADCRUMB
          ================================================= */}
                    <div className="mb-7 flex items-center gap-2 text-[12px]">
                        <span className="font-medium text-[#35456D]">
                            {privacyPolicyData.breadcrumb[0]}
                        </span>

                        <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#8994AC"
                            strokeWidth="2"
                        >
                            <path d="M9 18L15 12L9 6" />
                        </svg>

                        <span className="font-medium text-[#FF5B1A]">
                            {privacyPolicyData.breadcrumb[1]}
                        </span>
                    </div>

                    {/* Hero Section not scrollable */}
                    <section
                        className="
                                 border-b
                                 border-[#E8EBF2]
                                 pb-8
                               "
                    >

                        <div
                            className="
                                   grid
                                   items-center
                                   gap-8
                                   lg:grid-cols-[1.05fr_0.95fr]
                                 "
                        >

                            {/* Hero content */}

                            <div>

                                <h1
                                    className="
                                       text-[34px]
                                       font-bold
                                       tracking-[-0.03em]
                                       text-[#10275F]
                                       sm:text-[40px]
                                     "
                                >
                                    {
                                        privacyPolicyData
                                            .title
                                    }
                                </h1>


                                {/* Dates */}

                                <div
                                    className="
                                       mt-4
                                       flex
                                       flex-wrap
                                       gap-x-6
                                       gap-y-2
                                       text-[11px]
                                       font-medium
                                       text-[#5D6987]
                                     "
                                >

                                    <span>
                                        Effective Date:{" "}

                                        <strong
                                            className="
                                           text-[#263866]
                                         "
                                        >
                                            {
                                                privacyPolicyData
                                                    .effectiveDate
                                            }
                                        </strong>
                                    </span>

                                    <span>
                                        Last Updated:{" "}

                                        <strong
                                            className="
                                           text-[#263866]
                                         "
                                        >
                                            {
                                                privacyPolicyData
                                                    .lastUpdated
                                            }
                                        </strong>
                                    </span>

                                </div>


                                {/* Intro */}

                                <div
                                    className="
                                       mt-6
                                       space-y-4
                                     "
                                >

                                    {
                                        privacyPolicyData
                                            .intro?.map(
                                                (
                                                    paragraph,
                                                    index
                                                ) => (
                                                    <p
                                                        key={index}
                                                        className="
                                                 text-[13px]
                                                 leading-6
                                                 text-[#435175]
                                               "
                                                    >
                                                        {paragraph}
                                                    </p>
                                                )
                                            )
                                    }

                                </div>

                            </div>


                            {/* Security illustration */}

                            <div
                                className="
                                     flex
                                     justify-center
                                     lg:justify-end
                                   "
                            >

                                <div
                                    className="
                                       w-full
                                       max-w-[430px]
                                     "
                                >
                                    <SecurityIllustration />
                                </div>

                            </div>

                        </div>

                    </section>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_280px]">

                        {/* =================================================
                LEFT SCROLLABLE CONTENT
            ================================================= */}
                        <div
                            className="
                min-w-0
                max-h-[calc(100vh-150px)]
                overflow-y-auto
                pr-4
                [scrollbar-width:thin]
                [scrollbar-color:#D8DEEB_transparent]
              "
                        >

                            {/* =================================================
                  HERO
              ================================================= */}


                            {/* =================================================
                  ALL POLICY SECTIONS
              ================================================= */}
                            <div>
                                {privacyPolicyData.sections.map(
                                    (section) => (
                                        <PolicySection
                                            key={section.id}
                                            section={section}
                                        />
                                    )
                                )}
                            </div>
                        </div>

                        {/* =================================================
                RIGHT SIDE
                ON THIS PAGE
            ================================================= */}
                        <TableOfContents />
                    </div>
                </div>
            </main>

            {/* Existing Footer */}
            <Footer />
        </>
    );
};

export default PrivacyPolicy;