"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const signatureWork = {
    title: "Signature Work",
    categories: [
        {
            category: "Major Events & Livestreams",
            works: [
                "Google for India (2022/23/24) – Multicam livestreams + branded content",
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

const accordionContentVariants = {
    hidden: {
        height: 0,
        opacity: 0,
    },
    visible: {
        height: "auto",
        opacity: 1,
    },
};

const arrowVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
};

const SignatureWork = () => {
    const [openAccordions, setOpenAccordions] = useState<Set<number>>(
        new Set()
    );

    const toggleAccordion = (index: number) => {
        setOpenAccordions((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    return (
        <motion.section
            id="signature-work"
            className="bg-bone p-6 py-16 md:p-16 md:py-20 relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="max-w-screen-2xl mx-auto relative">
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

                {/* Accordion Categories */}
                <div className="space-y-0 border-y border-eerie-black/20">
                    {signatureWork.categories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            className="relative border-b border-eerie-black/20 last:border-b-0"
                            variants={categoryVariants}
                        >
                            {/* Accordion Header */}
                            <motion.button
                                className={`w-full flex items-center justify-between py-8 px-4 group cursor-pointer bg-transparent transition-colors duration-300 ${
                                    openAccordions.has(categoryIndex)
                                        ? "bg-white/50"
                                        : "hover:bg-white/50"
                                }`}
                                onClick={() => toggleAccordion(categoryIndex)}
                                animate={{
                                    x: openAccordions.has(categoryIndex)
                                        ? 8
                                        : 0,
                                }}
                                whileHover={{ x: 8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center">
                                    <motion.div
                                        className={`w-6 h-6 bg-barn-red rounded-full mr-6 shadow-lg transition-transform duration-300 ${
                                            openAccordions.has(categoryIndex)
                                                ? "scale-110"
                                                : "group-hover:scale-110"
                                        }`}
                                        animate={{
                                            scale: openAccordions.has(
                                                categoryIndex
                                            )
                                                ? 1.1
                                                : 1,
                                        }}
                                        whileHover={{ scale: 1.2 }}
                                    />
                                    <motion.h3
                                        className={`text-2xl md:text-3xl font-bold font-jost transition-colors duration-300 text-left ${
                                            openAccordions.has(categoryIndex)
                                                ? "text-barn-red"
                                                : "text-eerie-black group-hover:text-barn-red"
                                        }`}
                                        animate={{
                                            color: openAccordions.has(
                                                categoryIndex
                                            )
                                                ? "#dc2626"
                                                : "#1f201e",
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        {category.category}
                                    </motion.h3>
                                </div>

                                {/* Animated Arrow */}
                                <motion.div
                                    className={`transition-opacity duration-300 ${
                                        openAccordions.has(categoryIndex)
                                            ? "opacity-100"
                                            : "opacity-0 group-hover:opacity-100"
                                    }`}
                                    variants={arrowVariants}
                                    animate={
                                        openAccordions.has(categoryIndex)
                                            ? "open"
                                            : "closed"
                                    }
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-6 h-6 text-barn-red" />
                                </motion.div>
                            </motion.button>

                            {/* Accordion Content */}
                            <AnimatePresence>
                                {openAccordions.has(categoryIndex) && (
                                    <motion.div
                                        variants={accordionContentVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeInOut",
                                        }}
                                        className="overflow-hidden"
                                    >
                                        {/* Work Items List */}
                                        <motion.div className="pl-12 pr-4 py-8">
                                            <div className="space-y-4">
                                                {category.works.map(
                                                    (work, workIndex) => (
                                                        <motion.div
                                                            key={workIndex}
                                                            className="relative group"
                                                            variants={
                                                                workItemVariants
                                                            }
                                                            initial="hidden"
                                                            animate="visible"
                                                            transition={{
                                                                delay:
                                                                    workIndex *
                                                                    0.1,
                                                            }}
                                                        >
                                                            {/* Work Item Card */}
                                                            <motion.div
                                                                className="relative bg-gradient-to-r from-bone to-khaki/20 p-6 transition-all duration-300 group border-l-4 border-barn-red/40 hover:border-barn-red"
                                                                whileHover={{
                                                                    scale: 1.01,
                                                                    backgroundColor:
                                                                        "rgba(226, 221, 206, 0.95)",
                                                                    boxShadow:
                                                                        "0 8px 32px rgba(122, 6, 6, 0.15)",
                                                                }}
                                                                whileTap={{
                                                                    scale: 0.99,
                                                                }}
                                                            >
                                                                {/* Content Container */}
                                                                <div className="flex items-start space-x-4">
                                                                    {/* Number Badge */}
                                                                    <motion.div
                                                                        className="flex-shrink-0 w-8 h-8 bg-barn-red text-bone rounded-full flex items-center justify-center text-sm font-bold font-jost"
                                                                        whileHover={{
                                                                            scale: 1.1,
                                                                            backgroundColor:
                                                                                "#7a0606",
                                                                        }}
                                                                    >
                                                                        {workIndex +
                                                                            1}
                                                                    </motion.div>

                                                                    {/* Work Content */}
                                                                    <div className="flex-1 min-w-0">
                                                                        <motion.div
                                                                            className="text-eerie-black leading-relaxed font-open-sans text-sm md:text-base group-hover:text-eerie-black/90 transition-colors duration-300"
                                                                            whileHover={{
                                                                                x: 2,
                                                                            }}
                                                                            transition={{
                                                                                duration: 0.2,
                                                                            }}
                                                                        >
                                                                            {/* Parse work content for better formatting */}
                                                                            {(() => {
                                                                                const parts =
                                                                                    work.split(
                                                                                        " – "
                                                                                    );
                                                                                if (
                                                                                    parts.length >
                                                                                    1
                                                                                ) {
                                                                                    return (
                                                                                        <>
                                                                                            <div className="font-semibold text-barn-red font-jost mb-1">
                                                                                                {
                                                                                                    parts[0]
                                                                                                }
                                                                                            </div>
                                                                                            <div className="text-eerie-black/80">
                                                                                                {parts
                                                                                                    .slice(
                                                                                                        1
                                                                                                    )
                                                                                                    .join(
                                                                                                        " – "
                                                                                                    )}
                                                                                            </div>
                                                                                        </>
                                                                                    );
                                                                                } else {
                                                                                    return (
                                                                                        <div>
                                                                                            {
                                                                                                work
                                                                                            }
                                                                                        </div>
                                                                                    );
                                                                                }
                                                                            })()}
                                                                        </motion.div>
                                                                    </div>
                                                                </div>

                                                                {/* Subtle accent line */}
                                                                <motion.div
                                                                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-barn-red via-khaki to-transparent w-0 group-hover:w-full transition-all duration-500"
                                                                    initial={{
                                                                        width: 0,
                                                                    }}
                                                                    whileHover={{
                                                                        width: "100%",
                                                                    }}
                                                                />
                                                            </motion.div>
                                                        </motion.div>
                                                    )
                                                )}
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default SignatureWork;
