"use client";
import React from "react";
import { motion } from "framer-motion";

const about = {
    title: "About Us",
    description:
        "Atrangi Productions is a premier full-service content studio and creative consultancy headquartered in Delhi-NCR. Positioned as a one-stop partner for all things content and events, we seamlessly fuse creative vision with high-production execution across digital, brand, and experiential platforms. With over a decade of industry experience, we offer a robust blend of creativity, production excellence, and strategic storytelling. Our work spans television, digital events, and social media — delivering campaigns that connect, convert, and leave a mark. Whether you're launching a new product, planning a brand film, or producing a livestreamed event, Atrangi Productions brings together a team that can handle it all: concept, script, shoot, and final delivery — under one roof.",
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

const About = () => {
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

            <div className="flex justify-center items-center">
                <motion.p
                    className="text-lg md:text-2xl md:leading-9 lg:w-3/4 md:text-center font-open-sans"
                    variants={textVariants}
                    whileHover={{
                        scale: 1.01,
                        transition: { duration: 0.3 },
                    }}
                >
                    {about.description}
                </motion.p>
            </div>

            {/* Floating accent elements */}
            <motion.div
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
            </motion.div>
        </motion.section>
    );
};

export default About;
