/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { MenuIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const companyName = "Atrangi";

const navigation = [
    { name: "About Us", href: "#about" },
    { name: "Why Choose Atrangi?", href: "#why-choose-us" },
    { name: "Core Offerings", href: "#core-offerings" },
    { name: "Signature Work", href: "#signature-work" },
    { name: "Let's Collaborate", href: "#lets-collaborate" },
];

// Animation variants
const headerVariants = {
    top: {
        background: "rgba(31, 32, 30, 1)",
        backdropFilter: "blur(0px)",
        borderRadius: "0px",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        border: "none",
    },
    floating: {
        background: "rgba(31, 32, 30, 0.8)",
        backdropFilter: "blur(20px)",
        borderRadius: "10px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        border: "1px solid rgba(255,255,255,0.1)",
    },
};

const logoVariants = {
    initial: { opacity: 0, scale: 0.8, rotate: -5 },
    animate: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { duration: 0.6, delay: 0.1 },
    },
    hover: {
        scale: 1.05,
        rotate: 5,
        transition: { duration: 0.3 },
    },
};

const navItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.2 + index * 0.1,
        },
    }),
    hover: {
        y: -2,
        scale: 1.05,
        transition: { duration: 0.2 },
    },
};

const mobileMenuVariants = {
    closed: {
        opacity: 0,
        x: "100%",
        scale: 0.95,
    },
    open: {
        opacity: 1,
        x: "0%",
        scale: 1,
        transition: {
            duration: 0.3,
        },
    },
};

const mobileNavItemVariants = {
    closed: { opacity: 0, x: 50 },
    open: (index: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            delay: 0.1 + index * 0.1,
        },
    }),
};

const menuButtonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: 0.3 },
    },
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.95 },
};

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll detection for glassmorphism effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll to section
    const scrollToSection = (sectionId: string) => {
        const element = document.querySelector(sectionId);
        if (element) {
            const headerHeight = 80; // Account for fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - headerHeight;

            // Close mobile menu immediately to prevent UI blocking
            if (mobileMenuOpen) {
                setMobileMenuOpen(false);
            }

            // Start scroll after a brief delay to allow menu to close
            setTimeout(() => {
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }, 500);
        }
    };

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-10 font-open-sans text-white transition-all duration-300"
            animate={isScrolled ? "floating" : "top"}
            variants={headerVariants}
            initial="top"
            style={{
                margin: isScrolled ? "10px" : "0px",
                transition: "all 0.3s ease-out",
            }}
        >
            <motion.nav
                aria-label="Global"
                className="flex items-center justify-between px-4 py-2 md:p-6 lg:px-8 lg:py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex lg:flex-1">
                    <motion.a
                        href="#"
                        className="-m-1.5 p-1.5"
                        variants={logoVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                    >
                        <span className="sr-only">{companyName}</span>
                        <motion.img
                            alt=""
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-8 w-auto"
                            whileHover={{
                                filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))",
                            }}
                        />
                    </motion.a>
                </div>

                <div className="flex lg:hidden">
                    <motion.button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        variants={menuButtonVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon aria-hidden="true" className="size-6" />
                    </motion.button>
                </div>

                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item, index) => (
                        <motion.button
                            key={item.name}
                            onClick={() => scrollToSection(item.href)}
                            className="text-sm/6 font-semibold font-open-sans text-white relative cursor-pointer"
                            variants={navItemVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            custom={index}
                        >
                            {item.name}
                            {/* Hover underline effect */}
                            <motion.div
                                className="absolute bottom-0 left-0 h-0.5 bg-white"
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    ))}
                </div>
            </motion.nav>

            {/* Enhanced Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <Dialog
                        open={mobileMenuOpen}
                        onClose={setMobileMenuOpen}
                        className="lg:hidden"
                        static
                    >
                        <motion.div
                            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        />
                        <DialogPanel>
                            <motion.div
                                className="fixed inset-y-0  overflow-hidden right-0 z-50 w-full overflow-y-auto p-6 sm:max-w-sm"
                                style={{
                                    background: "rgba(31, 32, 30, 0.95)",
                                    backdropFilter: "blur(20px)",
                                    borderLeft:
                                        "1px solid rgba(255,255,255,0.1)",
                                }}
                                variants={mobileMenuVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                            >
                                <div className="flex items-center justify-between">
                                    <motion.a
                                        href="#"
                                        className="-m-1.5 p-1.5"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <span className="sr-only">
                                            {companyName}
                                        </span>
                                        <img
                                            alt=""
                                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                            className="h-8 w-auto"
                                        />
                                    </motion.a>
                                    <motion.button
                                        type="button"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="-m-2.5 rounded-md p-2.5 text-white"
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XIcon
                                            aria-hidden="true"
                                            className="size-6"
                                        />
                                    </motion.button>
                                </div>
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/10">
                                        <div className="space-y-2 py-6">
                                            {navigation.map((item, index) => (
                                                <motion.button
                                                    key={item.name}
                                                    onClick={() =>
                                                        scrollToSection(
                                                            item.href
                                                        )
                                                    }
                                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white relative overflow-hidden w-full text-left cursor-pointer"
                                                    variants={
                                                        mobileNavItemVariants
                                                    }
                                                    custom={index}
                                                    whileHover={{
                                                        x: 10,
                                                        background:
                                                            "rgba(255,255,255,0.1)",
                                                        transition: {
                                                            duration: 0.2,
                                                        },
                                                    }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    {item.name}
                                                    {/* Mobile nav accent */}
                                                    <motion.div
                                                        className="absolute left-0 top-0 bottom-0 w-1 bg-white"
                                                        initial={{ scaleY: 0 }}
                                                        whileHover={{
                                                            scaleY: 1,
                                                        }}
                                                        style={{ originY: 0.5 }}
                                                    />
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile menu decoration */}
                                <motion.div
                                    className="absolute bottom-10 left-6 right-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    <div className="flex justify-center gap-2">
                                        <motion.div
                                            className="w-2 h-2 bg-white/30 rounded-full"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: 0,
                                            }}
                                        />
                                        <motion.div
                                            className="w-2 h-2 bg-white/30 rounded-full"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: 0.3,
                                            }}
                                        />
                                        <motion.div
                                            className="w-2 h-2 bg-white/30 rounded-full"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: 0.6,
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </DialogPanel>
                    </Dialog>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
