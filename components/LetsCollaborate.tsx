"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, QrCode } from "lucide-react";

const collaborateContent = {
    subtitle: "Let's Collaborate",
    mainText:
        "If you're looking for a creative partner who understands storytelling, speed, scale, and structure. Atrangi Productions is ready.",
    poem: [
        "One team, all formats, all you need,",
        "From ideas to edit — with lightning speed.",
        "On every platform, we plant the seed,",
        "Atrangi delivers. Watch us lead.",
    ],
    tagline: [
        "Crafted With Heart, Delivered on Time,",
        "Your Story, our rhythm, the perfect rhyme.",
    ],
    contact: {
        email: "hello@atrangiproductions.com",
        office: "123 Sample St, Delhi NCR 110001, India",
    },
};

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

const qrCodeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            delay: 0.3,
        },
    },
};

const LetsCollaborate = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.section
            id="lets-collaborate"
            className="bg-barn-red text-white p-6 py-16 md:p-16 md:py-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Header */}
                        <motion.div variants={itemVariants}>
                            <motion.p
                                className="text-sm uppercase tracking-wider font-open-sans mb-2 opacity-90"
                                whileHover={{ opacity: 1 }}
                            >
                                Connect
                            </motion.p>
                            <motion.h2
                                className="text-4xl md:text-5xl font-bold font-jost mb-6"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                {collaborateContent.subtitle}
                            </motion.h2>
                            <motion.p
                                className="text-lg font-open-sans leading-relaxed opacity-95"
                                whileHover={{ opacity: 1 }}
                            >
                                {collaborateContent.mainText}
                            </motion.p>
                        </motion.div>

                        {/* Poem Section */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-3"
                        >
                            {collaborateContent.poem.map((line, index) => (
                                <motion.p
                                    key={index}
                                    className="text-lg font-open-sans italic opacity-90"
                                    whileHover={{
                                        opacity: 1,
                                        x: 10,
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    {line}
                                </motion.p>
                            ))}
                        </motion.div>

                        {/* Tagline */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-2"
                        >
                            {collaborateContent.tagline.map((line, index) => (
                                <motion.p
                                    key={index}
                                    className="text-xl font-jost font-semibold opacity-95"
                                    whileHover={{
                                        opacity: 1,
                                        scale: 1.02,
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    {line}
                                </motion.p>
                            ))}
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-6 pt-8"
                        >
                            {/* Email */}
                            <motion.div
                                className="flex items-start gap-4 group"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.div
                                    className="mt-1"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                >
                                    <Mail className="w-5 h-5" />
                                </motion.div>
                                <div>
                                    <h3 className="font-semibold font-open-sans mb-1 uppercase text-sm tracking-wider">
                                        EMAIL
                                    </h3>
                                    <p className="text-sm opacity-90 font-open-sans mb-1">
                                        Drop us a line
                                    </p>
                                    <motion.a
                                        href={`mailto:${collaborateContent.contact.email}`}
                                        className="text-white hover:underline font-open-sans"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {collaborateContent.contact.email}
                                    </motion.a>
                                </div>
                            </motion.div>

                            {/* Office */}
                            <motion.div
                                className="flex items-start gap-4 group"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.div
                                    className="mt-1"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                >
                                    <MapPin className="w-5 h-5" />
                                </motion.div>
                                <div>
                                    <h3 className="font-semibold font-open-sans mb-1 uppercase text-sm tracking-wider">
                                        OFFICE
                                    </h3>
                                    <p className="font-open-sans opacity-90">
                                        {collaborateContent.contact.office}
                                    </p>
                                    <motion.button
                                        className="text-sm mt-2 underline hover:no-underline font-open-sans opacity-90 hover:opacity-100"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Get Directions →
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Content - QR Code */}
                    <motion.div
                        className="flex items-center justify-center"
                        variants={qrCodeVariants}
                    >
                        <motion.div
                            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20 shadow-2xl"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255, 255, 255, 0.15)",
                                transition: { duration: 0.3 },
                            }}
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                        >
                            {/* QR Code Placeholder */}
                            <motion.div
                                className="w-64 h-64 lg:w-80 lg:h-80 bg-white rounded-xl flex items-center justify-center relative overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                            >
                                <motion.div
                                    animate={!isHovered ? {
                                        scale: [1, 1.1, 1],
                                        rotate: [0, 5, -5, 0],
                                    } : {
                                        scale: 1,
                                        rotate: 0,
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: !isHovered ? Infinity : 0,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <QrCode className="w-24 h-24 lg:w-32 lg:h-32 text-barn-red" />
                                </motion.div>

                                {/* QR Code placeholder text */}
                                <motion.div
                                    className="absolute bottom-4 left-4 right-4 text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.7 }}
                                    transition={{ delay: 1 }}
                                >
                                    <p className="text-xs text-barn-red font-open-sans">
                                        Scan to Connect
                                    </p>
                                </motion.div>
                            </motion.div>

                            <motion.p
                                className="text-center mt-4 text-sm font-open-sans opacity-90"
                                whileHover={{ opacity: 1 }}
                            >
                                Quick Connect via QR
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default LetsCollaborate;
