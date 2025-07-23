"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUp } from "lucide-react";

const footerData = {
    companyName: "Atrangi Productions",
    tagline: "From Ideas to Impact, On Stage or Screen",
    contact: {
        email: "hello@atrangiproductions.com",
        office: "123 Sample St, Delhi NCR 110001, India",
    },
    navigation: [
        { name: "About Us", href: "#about" },
        { name: "Why Choose Atrangi?", href: "#why-choose-us" },
        { name: "Core Offerings", href: "#core-offerings" },
        { name: "Signature Work", href: "#signature-work" },
        { name: "Let's Collaborate", href: "#lets-collaborate" },
    ],
    services: [
        "Ad Films & Digital Ads",
        "Fiction & Narrative Content",
        "Explainer & Corporate AVs",
        "Live Event Coverage",
        "Event Fabrication",
        "UGC Content",
    ],
};

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
        },
    },
};

const Footer = () => {
    // Smooth scroll to section
    const scrollToSection = (sectionId: string) => {
        const element = document.querySelector(sectionId);
        if (element) {
            const headerHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <motion.footer
            className="bg-eerie-black text-bone py-16 px-6 md:px-16 relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Background decorative elements */}
            <motion.div
                className="absolute top-10 right-10 w-20 h-20 border border-khaki/10 rounded-full"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                }}
                transition={{
                    scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                }}
            />

            <motion.div
                className="absolute bottom-20 left-10 w-16 h-16 border border-bone/20 transform rotate-45"
                animate={{
                    rotate: [45, 405],
                    scale: [1, 0.8, 1],
                }}
                transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
            />

            <div className="max-w-screen-2xl mx-auto relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <motion.div
                        className="lg:col-span-1"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="mb-6"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                alt={footerData.companyName}
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-10 w-auto mb-4"
                                whileHover={{
                                    filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))",
                                }}
                            />
                            <h3 className="text-2xl font-bold font-jost text-white mb-2">
                                {footerData.companyName}
                            </h3>
                            <p className="text-bone/80 font-open-sans leading-relaxed">
                                {footerData.tagline}
                            </p>
                        </motion.div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <motion.div
                                className="flex items-start gap-3 group"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.div
                                    className="mt-1"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                >
                                    <Mail className="w-4 h-4 text-bone" />
                                </motion.div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider font-open-sans text-bone/60 mb-1">
                                        Email
                                    </p>
                                    <motion.a
                                        href={`mailto:${footerData.contact.email}`}
                                        className="text-bone hover:text-white hover:underline font-open-sans text-sm"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {footerData.contact.email}
                                    </motion.a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-3 group"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.div
                                    className="mt-1"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                >
                                    <MapPin className="w-4 h-4 text-bone" />
                                </motion.div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider font-open-sans text-bone/60 mb-1">
                                        Office
                                    </p>
                                    <p className="font-open-sans text-bone/80 text-sm">
                                        {footerData.contact.office}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold font-jost text-white mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {footerData.navigation.map((item, index) => (
                                <motion.li
                                    key={item.name}
                                    variants={linkVariants}
                                    custom={index}
                                >
                                    <motion.button
                                        onClick={() =>
                                            scrollToSection(item.href)
                                        }
                                        className="text-bone/80 hover:text-white font-open-sans text-sm transition-colors duration-300 cursor-pointer group flex items-center"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="group-hover:underline">
                                            {item.name}
                                        </span>
                                        <motion.span
                                            className="ml-2 opacity-0 group-hover:opacity-100"
                                            initial={{ x: -5 }}
                                            whileHover={{ x: 0 }}
                                        >
                                            →
                                        </motion.span>
                                    </motion.button>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold font-jost text-white mb-6">
                            Our Services
                        </h4>
                        <ul className="space-y-3">
                            {footerData.services.map((service, index) => (
                                <motion.li
                                    key={service}
                                    variants={linkVariants}
                                    custom={index}
                                >
                                    <motion.button
                                        onClick={() =>
                                            scrollToSection("#core-offerings")
                                        }
                                        className="text-bone/80 hover:text-white font-open-sans text-sm transition-colors duration-300 cursor-pointer group flex items-center"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="group-hover:underline">
                                            {service}
                                        </span>
                                        <motion.span
                                            className="ml-2 opacity-0 group-hover:opacity-100"
                                            initial={{ x: -5 }}
                                            whileHover={{ x: 0 }}
                                        >
                                            →
                                        </motion.span>
                                    </motion.button>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Back to Top */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold font-jost text-white mb-6">
                            Let's Connect
                        </h4>
                        <motion.button
                            onClick={() => scrollToSection("#lets-collaborate")}
                            className="bg-bone text-eerie-black px-6 py-3 rounded-lg font-open-sans font-semibold mb-6 hover:bg-bone/90 transition-colors duration-300 w-full"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 8px 25px rgba(226, 221, 206, 0.3)",
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Start Your Project
                        </motion.button>

                        <motion.button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 text-bone/80 hover:text-white font-open-sans text-sm transition-colors duration-300 group"
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.span
                                whileHover={{ rotate: -45 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ArrowUp className="w-4 h-4" />
                            </motion.span>
                            Back to Top
                        </motion.button>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    className="border-t border-bone/20 pt-8"
                    variants={itemVariants}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <motion.p
                            className="text-bone/60 font-open-sans text-sm"
                            whileHover={{ color: "rgba(226, 221, 206, 0.8)" }}
                        >
                            © {new Date().getFullYear()}{" "}
                            {footerData.companyName}. All rights reserved.
                        </motion.p>

                        <motion.div className="flex items-center gap-6">
                            <motion.button
                                onClick={() => scrollToSection("#about")}
                                className="text-bone/60 hover:text-bone/80 font-open-sans text-sm transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                Privacy Policy
                            </motion.button>
                            <motion.button
                                onClick={() => scrollToSection("#about")}
                                className="text-bone/60 hover:text-bone/80 font-open-sans text-sm transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                Terms of Service
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
