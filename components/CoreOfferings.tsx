"use client";
import React from "react";
import { motion } from "framer-motion";

const coreOfferings = {
    title: "Core Offerings",
    offerings: [
        {
            title: "Ad Films & Digital Ads",
            description:
                "We create high-end brand films and digital reels that deliver impact. From ideation to scripting, shoot to post-production, we handle the A to Z of digital storytelling. Whether it's a launch film, explainer, or seasonal campaign — our ads are built to convert attention into action. Every piece is crafted keeping in mind platforms like Instagram, YouTube, and Meta Ads.",
            offerings:
                "Product launches, VO explainers, campaign films, testimonial ads.",
            notableWork:
                "Hyundai Be The Better Guy, Samsung Galaxy, Alcis Sportswear.",
        },
        {
            title: "Fiction & Narrative Content",
            description:
                "We specialize in emotionally resonant fiction formats — ideal for brands that want to tell stories, not just slogans. Whether it's a slice-of-life short film, a comedic sketch, or a reel with satirical edge, our fiction content is concept-led and character-driven. These are narratives that entertain and engage.",
            offerings:
                "Branded fiction shorts, social stories, episodic reels.",
            note: "More than 200+ videos for India's top Social Media Content Creator- Nazarbattu.",
        },
        {
            title: "Explainer & Corporate AVs",
            description:
                "From investor decks to employee onboarding and corporate showcases — we translate complexity into clarity. Our AVs mix storytelling with structure to convey your vision, process, or culture with finesse. Whether animated, VO-led, or shot on location, we customize tone and treatment for every brand.",
            offerings:
                "Corporate overviews, onboarding AVs, VO explainers, hybrid formats.",
            formats: "Live shoot, voiceover, animation or hybrid.",
        },
        {
            title: "Live Event Coverage & Webcast",
            description:
                "We bring high-production value to live and hybrid events — with multicam direction, broadcast-grade streaming, and post-event edits tailored for reels or recap videos. Our coverage ensures your brand's presence isn't just experienced — it's remembered and shareable.",
            coverage:
                "Direction, real-time switching, live streaming, highlight edits.",
            pastEvents:
                "Google for India (2022–2024), Amazon Sambhav, Maruti Launches.",
        },
        {
            title: "Event Fabrication & Consultancy",
            description:
                "Atrangi offers turnkey event consultancy with a focus on content, spatial storytelling, and creative QC. Whether it's the layout of a flagship launch event or fabrication of booths and experiential setups — we guide execution with a brand lens. Combine that with our AV expertise, and your events are fully backed by story-led content.",
            services:
                "Fabrication design, QC, AV planning, scripting for show-flow.",
            applications:
                "Auto expos, installations, partner events, exhibitions.",
        },
        {
            title: "UGC Content",
            description:
                "We create authentic, performance-based UGC videos for social-first brands. From skincare demos to fashion reels and astrology walkthroughs — our content looks native, sounds real, and converts fast. Perfect for D2C, app-first, or influencer-aligned campaigns.",
            niches: "Skincare, wellness, astrology, fashion, home.",
            formats: "Talking head, VO+B-roll, app demos, testimonial reels.",
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

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

const CoreOfferings = () => {
    return (
        <motion.section
            id="core-offerings"
            className="bg-eerie-black p-6 py-16 md:p-16 md:py-20 relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {/* Background floating diamond elements */}
            <motion.div
                className="absolute top-10 right-10 w-20 h-20 border border-bone/10 transform rotate-45"
                animate={{
                    rotate: [45, 405],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
            />

            <motion.div
                className="absolute bottom-20 left-10 w-16 h-16 border border-khaki/20 transform rotate-45"
                animate={{
                    rotate: [45, -315],
                    scale: [1, 0.8, 1],
                }}
                transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
            />

            {/* Additional diamond accents */}
            <motion.div
                className="absolute top-1/2 left-5 w-12 h-12 border border-bone/15 transform rotate-45"
                animate={{
                    rotate: [45, 405],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                    scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
            />

            <motion.div
                className="absolute top-1/3 right-5 w-10 h-10 border border-khaki/15 transform rotate-45"
                animate={{
                    rotate: [45, -315],
                    scale: [1, 0.9, 1],
                }}
                transition={{
                    rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                    scale: {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
            />

            <div className="max-w-screen-2xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={headerVariants}
                >
                    <motion.h2
                        className="text-4xl md:text-[5vw] font-bold mb-4 text-bone font-jost leading-tight"
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.3 },
                        }}
                    >
                        {coreOfferings.title}
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 bg-bone mx-auto"
                        variants={underlineVariants}
                        style={{ originX: 0.5 }}
                    />
                </motion.div>

                {/* Offerings Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {coreOfferings.offerings.map((offering, index) => {
                        const isLeftColumn = index % 2 === 0;
                        const isLastRow =
                            index >= coreOfferings.offerings.length - 2;

                        return (
                            <motion.div
                                key={index}
                                className={`
                                    bg-transparent p-8 hover:bg-bone/5 transition-all duration-500 group relative
                                    ${
                                        !isLastRow
                                            ? "border-b border-bone/20"
                                            : ""
                                    }
                                    ${
                                        isLeftColumn &&
                                        coreOfferings.offerings.length > 1
                                            ? "lg:border-r border-bone/20"
                                            : ""
                                    }
                                `}
                                variants={cardVariants}
                                whileHover={{
                                    backgroundColor:
                                        "rgba(226, 221, 206, 0.08)",
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeOut",
                                    },
                                }}
                                whileTap={{ scale: 0.99 }}
                            >
                                <motion.h3
                                    className="text-2xl md:text-3xl font-bold mb-6 text-bone font-jost leading-tight group-hover:text-white transition-colors duration-300"
                                    whileHover={{ x: 4 }}
                                >
                                    {offering.title}
                                </motion.h3>

                                <p className="text-bone/95 leading-relaxed mb-6 text-lg font-open-sans group-hover:text-bone transition-colors duration-300">
                                    {offering.description}
                                </p>

                                <div className="space-y-4">
                                    {offering.offerings && (
                                        <motion.div
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span className="text-khaki font-semibold group-hover:text-white transition-colors duration-300">
                                                Offerings:{" "}
                                            </span>
                                            <span className="text-bone/90 group-hover:text-bone transition-colors duration-300">
                                                {offering.offerings}
                                            </span>
                                        </motion.div>
                                    )}

                                    {offering.notableWork && (
                                        <motion.div
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span className="text-khaki font-semibold group-hover:text-white transition-colors duration-300">
                                                Notable Work:{" "}
                                            </span>
                                            <span className="text-bone/90 group-hover:text-bone transition-colors duration-300">
                                                {offering.notableWork}
                                            </span>
                                        </motion.div>
                                    )}

                                    {offering.note && (
                                        <motion.div
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span className="text-khaki font-semibold group-hover:text-white transition-colors duration-300">
                                                Note:{" "}
                                            </span>
                                            <span className="text-bone/90 group-hover:text-bone transition-colors duration-300">
                                                {offering.note}
                                            </span>
                                        </motion.div>
                                    )}

                                    {offering.formats && (
                                        <motion.div
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span className="text-khaki font-semibold group-hover:text-white transition-colors duration-300">
                                                Formats:{" "}
                                            </span>
                                            <span className="text-bone/90 group-hover:text-bone transition-colors duration-300">
                                                {offering.formats}
                                            </span>
                                        </motion.div>
                                    )}

                                    {offering.coverage && (
                                        <motion.div
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span className="text-khaki font-semibold group-hover:text-white transition-colors duration-300">
                                                Coverage:{" "}
                                            </span>
                                            <span className="text-bone/90 group-hover:text-bone transition-colors duration-300">
                                                {offering.coverage}
                                            </span>
                                        </motion.div>
                                    )}

                                    {offering.pastEvents && (
                                        <motion.div
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span className="text-khaki font-semibold group-hover:text-white transition-colors duration-300">
                                                Past Events:{" "}
                                            </span>
                                            <span className="text-bone/90 group-hover:text-bone transition-colors duration-300">
                                                {offering.pastEvents}
                                            </span>
                                        </motion.div>
                                    )}

                                    {offering.services && (
                                        <motion.div
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span className="text-khaki font-semibold group-hover:text-white transition-colors duration-300">
                                                Services:{" "}
                                            </span>
                                            <span className="text-bone/90 group-hover:text-bone transition-colors duration-300">
                                                {offering.services}
                                            </span>
                                        </motion.div>
                                    )}

                                    {offering.applications && (
                                        <motion.div
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span className="text-khaki font-semibold group-hover:text-white transition-colors duration-300">
                                                Applications:{" "}
                                            </span>
                                            <span className="text-bone/90 group-hover:text-bone transition-colors duration-300">
                                                {offering.applications}
                                            </span>
                                        </motion.div>
                                    )}

                                    {offering.niches && (
                                        <motion.div
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span className="text-khaki font-semibold group-hover:text-white transition-colors duration-300">
                                                Niches:{" "}
                                            </span>
                                            <span className="text-bone/90 group-hover:text-bone transition-colors duration-300">
                                                {offering.niches}
                                            </span>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Bottom accent */}
                                <motion.div
                                    className="mt-6 w-full h-1 bg-gradient-to-r from-khaki to-barn-red rounded-full group-hover:from-barn-red group-hover:to-white transition-all duration-500"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.2,
                                    }}
                                    style={{ originX: 0 }}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Floating accent dots */}
                <motion.div
                    className="flex justify-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="flex gap-2"
                        animate={{
                            y: [0, -6, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="w-2 h-2 bg-khaki rounded-full" />
                        <div className="w-2 h-2 bg-barn-red rounded-full" />
                        <div className="w-2 h-2 bg-bone rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default CoreOfferings;
