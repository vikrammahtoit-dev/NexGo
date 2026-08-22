import { useState } from "react";
import faqData from "./FAQ";
import faqsIllustration from "../../../assets/images/faqs-illustration.png"

const QuestionIcon = () => {
    return (
        <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#0969D8] text-white">
            <span className="text-[25px] font-semibold leading-none">?</span>
        </div>
    );
};

const ChevronIcon = ({ open }) => {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""
                }`}
        >
            <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleFAQ = (index) => {
        setOpenIndex((currentIndex) =>
            currentIndex === index ? -1 : index
        );
    };

    return (
        <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-12 xl:px-16 ">
            <div className="mx-auto max-w-[1220px]">
                {/* Hero */}
                <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-20">
                    {/* Left Content */}
                    <div className="max-w-[680px]">
                        <h1 className="font-sans text-[52px] font-bold leading-[1.05] tracking-[-2px] text-[#071B41] sm:text-[62px] lg:text-[68px] xl:text-[76px]">
                            FAQs
                        </h1>
                        <h2 className="mt-9 font-sans text-[25px] font-medium leading-[1.05] tracking-[-1.5px] text-[#071B41] sm:text-[28px] lg:text-[30px]">
                            Find quick answers to common questions
                        </h2>

                        <div className="mt-3 h-[3px] w-[118px] rounded-full bg-[#071B41]" />
                        <p className="mt-9 max-w-[570px] font-sans text-[18px] leading-[1.35] text-[#253553] sm:text-[20px]">
                            Everything you need to know bout Nexgo services,
                            shipments, tracking, payments and more.
                        </p>
                    </div>

                    {/* Right Illustration */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-[610px]">
                            <img
                                src={faqsIllustration}
                                alt="faqs-illustration"
                                className="h-auto w-full object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* FAQ List  */}
                <div className="mt-4 space-y-4 sm:mt-16 lg:mt-20">
                    {faqData.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={faq.question}
                                className={`overflow-hidden rounded-[14px] border bg-white transition-all duration-300 ${isOpen
                                    ? "border-slate-200 shadow-[0_4px_20px_rgba(8,105, 216, 0.04)]"
                                    : "border-[#D8E1EC]"
                                    }`}
                            >
                                {/* Question */}
                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={open}
                                    className="flex w-full items-center gap-5 px-3 py-3 text-left sm:px-4 sm:py-3 lg:px-8"
                                >
                                    <QuestionIcon />
                                    <span className="flex-1 font-sans text-[18px] font-medium leading-[1.4] text-[#071B41] sm:text-[20px] lg:text-[21px]">
                                        {faq.question}
                                    </span>

                                    <span className="flex shrink-0 items-center text-[#071B41]">
                                        <ChevronIcon open={isOpen} />
                                    </span>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="border-t border-[#E7EDF5] px-7 pb-7 pt-6 sm:px-9 lg:px-[104px] lg:pb-8">
                                            <p className="font-sans text-[16px] leading-[1.8] text-[#34445F] sm:text-[17px]">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQs;