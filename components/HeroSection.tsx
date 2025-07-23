"use client";
import React from "react";
import { motion } from "framer-motion";

const heroSection = {
    title: "Atrangi Productions",
    description:
        "From Ideas to Impact, On Stage or Screen - We Create, Curate & Convene.",
};

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.4,
        },
    },
};

const imageVariants = {
    hidden: {
        opacity: 0,
        scale: 1.1,
        filter: "blur(10px)",
    },
    visible: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 1.2,
        },
    },
};

const contentVariants = {
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
        y: 60,
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

const descriptionVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        filter: "blur(4px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.9,
        },
    },
};

const HeroSection = () => {
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden"
        >
            {/* Animated Hero Image */}
            <motion.div
                variants={imageVariants}
                className="relative overflow-hidden"
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <motion.img
                    src="/hero-section.png"
                    alt="Hero Section"
                    className="object-cover object-center h-[50vh] w-full"
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.6 },
                    }}
                />

                {/* Overlay gradient for better text readability */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-barn-red/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                />
            </motion.div>

            {/* Animated Content Section */}
            <motion.div
                className="md:min-h-[30vh] p-6 py-12 md:p-16 bg-barn-red text-white flex justify-center items-center relative overflow-hidden"
                variants={contentVariants}
            >
                {/* Background accent elements */}
                <motion.div
                    className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full"
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        rotate: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        },
                        scale: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                />

                <motion.div
                    className="absolute bottom-4 left-4 w-12 h-12 border border-white/20 rounded-full"
                    animate={{
                        rotate: -360,
                        scale: [1, 0.8, 1],
                    }}
                    transition={{
                        rotate: {
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                        },
                        scale: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                />

                <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center relative z-10">
                    <motion.h1
                        className="text-3xl md:text-[5vw] font-extrabold font-jost"
                        variants={titleVariants}
                        whileHover={{
                            scale: 1.02,
                            textShadow: "0 4px 12px rgba(0,0,0,0.4)",
                            transition: { duration: 0.3 },
                        }}
                    >
                        {heroSection.title.toLocaleUpperCase()}
                    </motion.h1>

                    <div className="flex justify-center items-center">
                        <motion.p
                            className="text-lg md:text-2xl md:w-2/3 font-open-sans"
                            variants={descriptionVariants}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.3 },
                            }}
                        >
                            {heroSection.description}
                        </motion.p>
                    </div>
                </div>

                {/* Floating accent dots */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                >
                    <motion.div
                        className="flex gap-3"
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="w-2 h-2 bg-white rounded-full opacity-80" />
                        <div className="w-2 h-2 bg-white rounded-full opacity-60" />
                        <div className="w-2 h-2 bg-white rounded-full opacity-80" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default HeroSection;
