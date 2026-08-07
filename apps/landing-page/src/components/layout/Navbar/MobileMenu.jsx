import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function MobileMenu({
    open,
    onClose,
    navLinks,
}) {
    const [expanded, setExpanded] = useState(null);

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Drawer */}
                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="
              fixed
              right-0
              top-0
              z-50
              h-screen
              w-[320px]
              bg-white
              shadow-2xl
              p-6
              overflow-y-auto
            "
                    >
                        <div className="space-y-2 mt-10">
                            {navLinks.map((item) => {
                                const hasDropdown = item.dropdown?.length > 0;

                                return (
                                    <div key={item.label}>
                                        <button
                                            onClick={() =>
                                                setExpanded(
                                                    expanded === item.label ? null : item.label
                                                )
                                            }
                                            className="
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3
                        text-left
                        font-medium
                        hover:bg-slate-100
                      "
                                        >
                                            {item.label}

                                            {hasDropdown && (
                                                <ChevronDown
                                                    className={`transition ${expanded === item.label
                                                            ? "rotate-180"
                                                            : ""
                                                        }`}
                                                    size={18}
                                                />
                                            )}
                                        </button>

                                        {hasDropdown &&
                                            expanded === item.label && (
                                                <div className="ml-5 mt-2 space-y-2">
                                                    {item.dropdown.map((child) => (
                                                        <Link
                                                            key={child.label}
                                                            to={child.href}
                                                            onClick={onClose}
                                                            className="
                                block
                                rounded-lg
                                px-4
                                py-2
                                text-sm
                                text-slate-600
                                hover:bg-orange-50
                              "
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-10 space-y-3">
                            <Link
                                to="/login"
                                onClick={onClose}
                                className="
                  block
                  rounded-xl
                  border
                  border-slate-300
                  py-3
                  text-center
                  font-semibold
                "
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                onClick={onClose}
                                className="
                  block
                  rounded-xl
                  bg-orange-500
                  py-3
                  text-center
                  font-semibold
                  text-white
                  hover:bg-orange-600
                  transition
                "
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}