"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const about = {
    title: "About Us",
    description:
        "Atrangi Productions is a premier full-service content studio and creative consultancy headquartered in Delhi-NCR. Positioned as a one-stop partner for all things content and events, we seamlessly fuse creative vision with high-production execution across digital, brand, and experiential platforms. With over a decade of industry experience, we offer a robust blend of creativity, production excellence, and strategic storytelling. Our work spans television, digital events, and social media — delivering campaigns that connect, convert, and leave a mark. Whether you're launching a new product, planning a brand film, or producing a livestreamed event, Atrangi Productions brings together a team that can handle it all: concept, script, shoot, and final delivery — under one roof.",
    shortDescription:
        "Atrangi Productions is a premier full-service content studio and creative consultancy headquartered in Delhi-NCR. Positioned as a one-stop partner for all things content and events, we seamlessly fuse creative vision with high-production execution across digital, brand, and experiential platforms.",
};

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.3,
        },
    },
};

const titleVariants = {
    hidden: {
        opacity: 0,
        y: -50,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
        },
    },
};

const textVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        filter: "blur(4px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1,
        },
    },
};

const underlineVariants = {
    hidden: {
        scaleX: 0,
        opacity: 0,
    },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: 0.5,
        },
    },
};

const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            delay: 0.2,
        },
    },
};

const expandedTextVariants = {
    hidden: {
        opacity: 0,
        y: -20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.4,
        },
    },
};

const About = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <motion.section
            id="about"
            className="bg-eerie-black text-white min-h-[80vh] flex flex-col justify-center p-6 py-12 md:p-16 max-w-screen-2xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div variants={titleVariants}>
                <motion.h2
                    className="text-3xl md:text-[5vw] font-bold md:text-center mb-6 text-left font-jost"
                    whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 },
                    }}
                >
                    {about.title}
                </motion.h2>

                {/* Animated underline */}
                <motion.div
                    className="w-24 h-1 bg-barn-red mx-auto md:mx-auto mb-8"
                    variants={underlineVariants}
                    style={{ originX: 0.5 }}
                />
            </motion.div>

            <div className="flex flex-col justify-center items-center">
                {/* Short Description */}
                <motion.p
                    className="text-lg md:text-2xl md:leading-9 lg:w-3/4 md:text-center font-open-sans"
                    variants={textVariants}
                    whileHover={{
                        scale: 1.01,
                        transition: { duration: 0.3 },
                    }}
                >
                    {about.shortDescription}
                </motion.p>

                {/* Expanded Content */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            className="lg:w-3/4 md:text-center overflow-hidden"
                            variants={expandedTextVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.p
                                className="text-lg md:text-2xl md:leading-9 font-open-sans mt-4"
                                whileHover={{
                                    scale: 1.01,
                                    transition: { duration: 0.3 },
                                }}
                            >
                                With over a decade of industry experience, we
                                offer a robust blend of creativity, production
                                excellence, and strategic storytelling. Our work
                                spans television, digital events, and social
                                media — delivering campaigns that connect,
                                convert, and leave a mark. Whether you&apos;re
                                launching a new product, planning a brand film,
                                or producing a livestreamed event, Atrangi
                                Productions brings together a team that can
                                handle it all: concept, script, shoot, and final
                                delivery — under one roof.
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Read More Button */}
                <motion.button
                    onClick={toggleExpanded}
                    className="mt-6 px-6 py-3 bg-barn-red text-white rounded-lg font-open-sans font-semibold hover:bg-barn-red/90 transition-colors duration-300 group relative overflow-hidden"
                    variants={buttonVariants}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 8px 25px rgba(122, 6, 6, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                    <motion.span
                        animate={{
                            y: isExpanded ? 0 : 0,
                            rotate: isExpanded ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {isExpanded ? "Read Less" : "Read More"}
                    </motion.span>

                    {/* Button accent line */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-white"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.button>
            </div>

            {/* Floating accent elements */}
            {/* <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="flex gap-2"
                    animate={{
                        y: [0, -5, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <div className="w-2 h-2 bg-khaki rounded-full" />
                    <div className="w-2 h-2 bg-barn-red rounded-full" />
                    <div className="w-2 h-2 bg-khaki rounded-full" />
                </motion.div>
            </motion.div> */}
        </motion.section>
    );
};

export default About;
