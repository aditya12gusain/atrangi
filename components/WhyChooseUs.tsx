"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import { motion } from "framer-motion";

const whyChooseUs = {
    title: "Why Choose Atrangi?",
    carousel: [
        {
            title: "Complete Ecosystem",
            description:
                "From UGC videos to broadcast-level livestreams and event fabrication.",
        },
        {
            title: "Integrated Teams",
            description:
                "Strategy, scripting, direction, filming, and editing all under one roof.",
        },
        {
            title: "Platform-Native Thinking",
            description:
                "Content made to perform on reels, shorts, YouTube, or stage.",
        },
        {
            title: "Creative + Commercial Focus",
            description: "Every output blends depth with marketing intent.",
        },
        {
            title: "Agile Turnarounds",
            description: "UGC delivery in as quick as 48–72 hours.",
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
            staggerChildren: 0.2,
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

const carouselVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: 0.4,
        },
    },
};

const controlsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 0.6,
            staggerChildren: 0.1,
        },
    },
};

// Navigation Button Components
const PrevButton = ({
    onClick,
    disabled,
}: {
    onClick: () => void;
    disabled: boolean;
}) => (
    <motion.button
        className={`embla__button embla__button--prev w-12 h-12 rounded-full bg-white border-2 border-khaki shadow-lg flex items-center justify-center transition-all ${
            disabled
                ? "opacity-40 cursor-not-allowed"
                : "opacity-100 hover:bg-barn-red hover:text-white hover:border-barn-red transform hover:scale-105"
        }`}
        onClick={onClick}
        disabled={disabled}
        whileHover={{
            scale: disabled ? 1 : 1.1,
            transition: { duration: 0.2 },
        }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
        <svg
            className="w-5 h-5 text-eerie-black hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
            />
        </svg>
    </motion.button>
);

const NextButton = ({
    onClick,
    disabled,
}: {
    onClick: () => void;
    disabled: boolean;
}) => (
    <motion.button
        className={`embla__button embla__button--next w-12 h-12 rounded-full bg-white border-2 border-khaki shadow-lg flex items-center justify-center transition-all ${
            disabled
                ? "opacity-40 cursor-not-allowed"
                : "opacity-100 hover:bg-barn-red hover:text-white hover:border-barn-red transform hover:scale-105"
        }`}
        onClick={onClick}
        disabled={disabled}
        whileHover={{
            scale: disabled ? 1 : 1.1,
            transition: { duration: 0.2 },
        }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
        <svg
            className="w-5 h-5 text-eerie-black hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
            />
        </svg>
    </motion.button>
);

const DotButton = ({
    onClick,
    className,
}: {
    onClick: () => void;
    className: string;
}) => (
    <motion.button
        className={`w-3 h-3 rounded-full transition-all duration-300 ${className}`}
        onClick={onClick}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
    />
);

const WhyChooseUs = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            slidesToScroll: 1,
            breakpoints: {
                "(min-width: 768px)": { slidesToScroll: 1 },
            },
        },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return;
            emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi
            .on("reInit", onInit)
            .on("reInit", onSelect)
            .on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    return (
        <motion.section
            id="why-choose-us"
            className="bg-bone p-6 py-16 md:p-16 md:py-20 relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Background floating diamond elements */}
            <motion.div
                className="absolute top-10 right-10 w-20 h-20 border border-khaki/20 transform rotate-45"
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
                className="absolute bottom-20 left-10 w-16 h-16 border border-barn-red/20 transform rotate-45"
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
                className="absolute top-1/2 left-5 w-12 h-12 border border-khaki/15 transform rotate-45"
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
                className="absolute top-1/3 right-5 w-10 h-10 border border-barn-red/15 transform rotate-45"
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
                    className="text-center mb-12"
                    variants={headerVariants}
                >
                    <motion.h2
                        className="text-4xl md:text-[5vw] font-bold mb-4 text-eerie-black font-jost leading-tight"
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.3 },
                        }}
                    >
                        {whyChooseUs.title}
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 bg-barn-red mx-auto"
                        variants={underlineVariants}
                        style={{ originX: 0.5 }}
                    />
                </motion.div>

                <motion.div className="embla overflow-hidden" variants={carouselVariants}>
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container flex">
                            {whyChooseUs.carousel.map((item, index) => (
                                <div
                                    key={index}
                                    className="embla__slide flex-shrink-0 w-full md:w-1/3 px-4"
                                >
                                    <motion.div className="bg-white p-8 rounded-2xl h-full flex flex-col transition-all duration-300 border border-khaki/20">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-eerie-black font-jost leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-eerie-black/80 leading-relaxed flex-grow text-lg font-open-sans">
                                            {item.description}
                                        </p>

                                        {/* Bottom accent */}
                                        <motion.div
                                            className="mt-6 w-full h-1 bg-gradient-to-r from-khaki to-barn-red rounded-full"
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 0.2,
                                            }}
                                            style={{ originX: 0 }}
                                        />
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        className="embla__controls"
                        variants={controlsVariants}
                    >
                        <motion.div className="embla__buttons flex justify-center gap-6 mt-12">
                            <PrevButton
                                onClick={onPrevButtonClick}
                                disabled={prevBtnDisabled}
                            />
                            <NextButton
                                onClick={onNextButtonClick}
                                disabled={nextBtnDisabled}
                            />
                        </motion.div>

                        <motion.div className="embla__dots flex justify-center mt-8 space-x-3">
                            {scrollSnaps.map((_, index) => (
                                <DotButton
                                    key={index}
                                    onClick={() => onDotButtonClick(index)}
                                    className={"embla__dot border-2 border-khaki".concat(
                                        index === selectedIndex
                                            ? " embla__dot--selected bg-barn-red border-barn-red scale-125"
                                            : " bg-white hover:bg-khaki hover:scale-110"
                                    )}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Floating accent dots */}
                <motion.div
                    className="flex justify-center mt-8"
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
                        <div className="w-2 h-2 bg-khaki rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default WhyChooseUs;
