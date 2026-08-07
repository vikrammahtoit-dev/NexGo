import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function NavLinkItem({ item }) {
    const [open, setOpen] = useState(false);

    const hasDropdown = item.dropdown?.length > 0;

    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <Link
                to={item.href}
                className="
          flex
          items-center
          gap-1
          py-8
          text-[15px]
          font-medium
          text-slate-700
          transition-colors
          duration-300
          hover:text-orange-500
        "
            >
                {item.label}

                {hasDropdown && (
                    <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${open ? "rotate-180" : ""
                            }`}
                    />
                )}
            </Link>

            {hasDropdown && (
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 12 }}
                            transition={{ duration: 0.22 }}
                            className="
                absolute
                left-1/2
                top-full
                w-72
                -translate-x-1/2
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-3
                shadow-xl
              "
                        >
                            <div className="space-y-1">
                                {item.dropdown.map((menu) => (
                                    <Link
                                        key={menu.label}
                                        to={menu.href}
                                        className="
                      block
                      rounded-xl
                      px-4
                      py-3
                      transition
                      hover:bg-orange-50
                    "
                                    >
                                        <div className="font-medium text-slate-800">
                                            {menu.label}
                                        </div>

                                        <div className="mt-1 text-sm text-slate-500">
                                            Learn more about {menu.label}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </div>
    );
}