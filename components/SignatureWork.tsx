"use client";
import React from "react";
import { motion } from "framer-motion";

const signatureWork = {
    title: "Signature Work",
    categories: [
        {
            category: "Major Events & Livestreams",
            works: [
                "Google for India (2022,23,24) – Multicam livestreams + branded content",
                "Amazon Sambhav Summit – Live event AV production + stream",
            ],
        },
        {
            category: "Government Collaborations",
            works: [
                "Swachh Bharat Mission – 5 TVCs featuring Hon'ble PM Narendra Modi, Sonu Nigam & Sanjeev Kapoor.",
                "IOCL Olympic Campaign - AVs featuring Sachin Tendulkar, Abhinav Bindra, Saina Nehwal, Geeta Phogat, Nita Ambani & Anurag Thakur.",
                "Ghaziabad Development Documentary – Commissioned for Hon'ble PM Narendra Modi (Government of India).",
                "Ministry of Health, GoI – 2 TVCs on old-age health care programs.",
                "Ministry of Education (HRD) – 4 short films for National Teacher Awards.",
                "Ministry of Women & Child Development – AVs on 32 Nari Shakti Puraskar awardees.",
            ],
        },
        {
            category: "Brand Campaigns & Digital Ads",
            works: [
                "Alcis Sportswear – 3 digital ads featuring Shikhar Dhawan.",
                "Oppo F19 Series – Digital launch & music event featuring Ravi Dubey, Kusha Kapila & Nucleya.",
                "Samsung Galaxy – Unboxings of S21 Ultra & F62 Pro with Technical Guruji.",
                "Hyundai 'Be The Better Guy'– 3-part digital safety campaign.",
            ],
        },
        {
            category: "Automotive Launches",
            works: [
                "Premium & Luxury Vehicles – Launch events for BMW X3, Jeep Compass, and Honda City.",
                "Mass Market & Compact Cars – Launch campaigns for Volkswagen Virtus, Breeza, Grand Vitara, Alto K10, and Alcazar.",
            ],
        },
        {
            category: "Finance & Investment Content",
            works: [
                "Octafx: Ask to Bid – Investment quiz show hosted by Ravi Dubey, featuring Sania Mirza, Rannvijay Singha, Tulsi Kumar, Himanshi Khurana, Jay Bhanushali.",
                "Octafx: Learn to Trade – 5-episode finance series with Mohit Chikara, Nia Sharma, Karan Wahi & Krystal D'Souza.",
            ],
        },
        {
            category: "Corporate Films & AVs",
            works: [
                "Energy & Industrial Sector – Corporate films for HPCL (Hindustan Petroleum Corporation Limited), IOCL (Indian Oil Corporation Limited), JSPL (Jindal Steel and Power Limited), and Cairn Energy (Cairn Oil & Gas, a Vedanta Limited company).",
                "Educational & Security Services – Corporate AVs for NIET (Noida Institute of Engineering and Technology) and Securitas India (Securitas Security Services India Pvt. Ltd.).",
                "Hospitality & Tourism – Corporate films for Swosti Chilika Resort (Odisha), The Windsor Lodge (Ranikhet), and Taj Rambagh Palace (Jaipur).",
                "Retail & Commercial – Corporate AV for Unity One Shopping Mall (Unity Group).",
            ],
        },
    ],
};

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.15,
        },
    },
};

const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
        },
    },
};

const underlineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: 0.3,
        },
    },
};

const categoryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
        },
    },
};

const workItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const SignatureWork = () => {
    return (
        <motion.section
            id="signature-work"
            className="bg-bone p-6 py-16 md:p-16 md:py-20 relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {/* Background floating circle elements for uniqueness */}
            <motion.div
                className="absolute top-16 right-8 w-24 h-24 border border-eerie-black/15 rounded-full"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                }}
            />

            <motion.div
                className="absolute bottom-24 left-8 w-16 h-16 border border-barn-red/20 rounded-full"
                animate={{
                    scale: [1, 0.8, 1],
                    rotate: [0, -180, -360],
                }}
                transition={{
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                }}
            />

            {/* Additional circular accents */}
            <motion.div
                className="absolute top-1/3 left-12 w-12 h-12 border border-eerie-black/10 rounded-full"
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 360],
                }}
                transition={{
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                }}
            />

            <motion.div
                className="absolute top-2/3 right-12 w-8 h-8 border border-barn-red/15 rounded-full"
                animate={{
                    scale: [1, 0.9, 1],
                    rotate: [0, -360],
                }}
                transition={{
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                }}
            />

            <div className="max-w-screen-2xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={headerVariants}
                >
                    <motion.h2
                        className="text-4xl md:text-[5vw] font-bold mb-4 text-eerie-black font-jost leading-tight"
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.3 },
                        }}
                    >
                        {signatureWork.title}
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 bg-eerie-black mx-auto"
                        variants={underlineVariants}
                        style={{ originX: 0.5 }}
                    />
                </motion.div>

                {/* Timeline-style Categories */}
                <div className="space-y-12">
                    {signatureWork.categories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            className="relative"
                            variants={categoryVariants}
                        >
                            {/* Category Header with Timeline Dot */}
                            <motion.div
                                className="flex items-center mb-8 group"
                                whileHover={{ x: 8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="w-6 h-6 bg-barn-red rounded-full mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                                    whileHover={{ scale: 1.2 }}
                                />
                                <motion.h3
                                    className="text-2xl md:text-3xl font-bold text-eerie-black font-jost group-hover:text-barn-red transition-colors duration-300"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {category.category}
                                </motion.h3>
                            </motion.div>

                            {/* Timeline Line (except for last category) */}
                            {categoryIndex <
                                signatureWork.categories.length - 1 && (
                                <motion.div
                                    className="absolute left-3 top-12 w-0.5 h-full bg-gradient-to-b from-barn-red"
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    style={{ originY: 0 }}
                                />
                            )}

                            {/* Work Items Grid */}
                            <motion.div className="ml-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {category.works.map((work, workIndex) => (
                                    <motion.div
                                        key={workIndex}
                                        className="relative bg-white backdrop-blur-sm p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300 group border border-eerie-black/10"
                                        variants={workItemVariants}
                                        whileHover={{
                                            scale: 1.02,
                                            backgroundColor:
                                                "rgba(255, 255, 255, 0.95)",
                                            boxShadow:
                                                "0 20px 40px rgba(31, 32, 30, 0.15)",
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {/* Animated border progress bar */}
                                        <svg
                                            className="absolute inset-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <motion.rect
                                                x="1"
                                                y="1"
                                                width="calc(100% - 2px)"
                                                height="calc(100% - 2px)"
                                                fill="none"
                                                stroke="#dc2626"
                                                strokeWidth="2"
                                                rx="11"
                                                ry="11"
                                                strokeDasharray="100%"
                                                strokeDashoffset="100%"
                                                animate={{
                                                    strokeDashoffset: [
                                                        "100%",
                                                        "0%",
                                                        "-100%",
                                                    ],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                            />
                                        </svg>

                                        <motion.p
                                            className="relative z-10 text-eerie-black/90 leading-relaxed font-open-sans group-hover:text-eerie-black transition-colors duration-300"
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {work}
                                        </motion.p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Accent - Triangle pattern for uniqueness */}
                <motion.div
                    className="flex justify-center mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="flex gap-3 items-center"
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-barn-red" />
                        <div className="w-3 h-3 bg-eerie-black rounded-full" />
                        <div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-eerie-black" />
                        <div className="w-3 h-3 bg-barn-red rounded-full" />
                        <div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-barn-red" />
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default SignatureWork;
