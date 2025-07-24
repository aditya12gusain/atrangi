"use client";
import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const coreOfferings = {
    title: "Core Offerings",
    offerings: [
        {
            title: "Ad Films & Digital Ads",
            image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop&crop=center",
            description:
                "We create high-end brand films and digital reels that deliver impact. From ideation to scripting, shoot to post-production, we handle the A to Z of digital storytelling. Whether it's a launch film, explainer, or seasonal campaign — our ads are built to convert attention into action. Every piece is crafted keeping in mind platforms like Instagram, YouTube, and Meta Ads.",
            offerings:
                "Product launches, VO explainers, campaign films, testimonial ads.",
            notableWork:
                "Hyundai Be The Better Guy, Samsung Galaxy, Alcis Sportswear.",
        },
        {
            title: "Fiction & Narrative Content",
            image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=600&h=400&fit=crop&crop=",
            description:
                "We specialize in emotionally resonant fiction formats — ideal for brands that want to tell stories, not just slogans. Whether it's a slice-of-life short film, a comedic sketch, or a reel with satirical edge, our fiction content is concept-led and character-driven. These are narratives that entertain and engage.",
            offerings:
                "Branded fiction shorts, social stories, episodic reels.",
            note: "More than 200+ videos for India's top Social Media Content Creator- Nazarbattu.",
        },
        {
            title: "Explainer & Corporate AVs",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&crop=center",
            description:
                "From investor decks to employee onboarding and corporate showcases — we translate complexity into clarity. Our AVs mix storytelling with structure to convey your vision, process, or culture with finesse. Whether animated, VO-led, or shot on location, we customize tone and treatment for every brand.",
            offerings:
                "Corporate overviews, onboarding AVs, VO explainers, hybrid formats.",
            formats: "Live shoot, voiceover, animation or hybrid.",
        },
        {
            title: "Live Event Coverage & Webcast",
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=center",
            description:
                "We bring high-production value to live and hybrid events — with multicam direction, broadcast-grade streaming, and post-event edits tailored for reels or recap videos. Our coverage ensures your brand's presence isn't just experienced — it's remembered and shareable.",
            coverage:
                "Direction, real-time switching, live streaming, highlight edits.",
            pastEvents:
                "Google for India (2022–2024), Amazon Sambhav, Maruti Launches.",
        },
        {
            title: "Event Fabrication & Consultancy",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=center",
            description:
                "Atrangi offers turnkey event consultancy with a focus on content, spatial storytelling, and creative QC. Whether it's the layout of a flagship launch event or fabrication of booths and experiential setups — we guide execution with a brand lens. Combine that with our AV expertise, and your events are fully backed by story-led content.",
            services:
                "Fabrication design, QC, AV planning, scripting for show-flow.",
            applications:
                "Auto expos, installations, partner events, exhibitions.",
        },
        {
            title: "UGC Content",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
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

const expandedContentVariants = {
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

// Navigation Button Components
const PrevButton = ({
    onClick,
    disabled,
}: {
    onClick: () => void;
    disabled: boolean;
}) => (
    <motion.button
        className={`w-12 h-12 rounded-full bg-bone border-2 border-khaki shadow-lg flex items-center justify-center transition-all ${
            disabled
                ? "opacity-40 cursor-not-allowed"
                : "opacity-100 hover:bg-barn-red text-eerie-black hover:text-white hover:border-barn-red"
        }`}
        onClick={onClick}
        disabled={disabled}
        whileHover={{
            scale: disabled ? 1 : 1.1,
            transition: { duration: 0.2 },
        }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
        <ChevronLeft className="w-6 h-6" />
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
        className={`w-12 h-12 rounded-full bg-bone border-2 border-khaki shadow-lg flex items-center justify-center transition-all ${
            disabled
                ? "opacity-40 cursor-not-allowed"
                : "opacity-100 hover:bg-barn-red text-eerie-black hover:text-white hover:border-barn-red"
        }`}
        onClick={onClick}
        disabled={disabled}
        whileHover={{
            scale: disabled ? 1 : 1.1,
            transition: { duration: 0.2 },
        }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
        <ChevronRight className="w-6 h-6" />
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

const CoreOfferings = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
    const autoplayPlugin = React.useMemo(
        () => Autoplay({ delay: 4000, stopOnInteraction: false }),
        []
    );

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            slidesToScroll: 1,
            breakpoints: {
                "(min-width: 768px)": { slidesToScroll: 1 },
            },
        },
        [autoplayPlugin]
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

    // Stop/start autoplay based on expanded state
    useEffect(() => {
        if (!autoplayPlugin || !emblaApi) return;

        if (expandedIndex !== null) {
            autoplayPlugin?.stop();
        } else {
            autoplayPlugin?.play();
        }
    }, [expandedIndex, autoplayPlugin, emblaApi]);

    const handleCardClick = (index: number, event: React.MouseEvent) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        setClickPosition({ x: centerX, y: centerY });
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleCloseExpanded = () => {
        setExpandedIndex(null);
    };

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

                {/* Carousel */}
                <motion.div className="embla" variants={cardVariants}>
                    <div
                        className="embla__viewport overflow-hidden"
                        ref={emblaRef}
                    >
                        <div className="embla__container flex">
                            {coreOfferings.offerings.map((offering, index) => (
                                <div
                                    key={index}
                                    className="embla__slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
                                >
                                    <motion.div
                                        className="relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 group"
                                        whileHover={{
                                            y: -5,
                                            transition: { duration: 0.3 },
                                        }}
                                        onClick={(e) =>
                                            handleCardClick(index, e)
                                        }
                                        initial={{
                                            opacity: 0,
                                            scale: 0.9,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1,
                                        }}
                                    >
                                        {/* Background Image */}
                                        <motion.img
                                            src={offering.image}
                                            alt={offering.title}
                                            className="w-full h-full object-cover"
                                            whileHover={{
                                                scale: 1.05,
                                                transition: { duration: 0.3 },
                                            }}
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                        {/* Title Overlay at Bottom */}
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <motion.h3
                                                className="text-2xl font-bold text-white font-jost leading-tight mb-2"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: index * 0.1 + 0.2,
                                                }}
                                            >
                                                {offering.title}
                                            </motion.h3>
                                        </div>

                                        {/* Hover Overlay - View More */}
                                        <motion.div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <motion.div
                                                className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/30"
                                                whileHover={{ scale: 1.05 }}
                                                initial={{ y: 10, opacity: 0 }}
                                                whileInView={{
                                                    y: 0,
                                                    opacity: 1,
                                                }}
                                                transition={{ delay: 0.1 }}
                                            >
                                                <span className="text-white font-semibold font-open-sans">
                                                    View Details →
                                                </span>
                                            </motion.div>
                                        </motion.div>

                                        {/* Bottom accent line */}
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-khaki to-barn-red"
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            transition={{
                                                duration: 0.8,
                                                delay: index * 0.1 + 0.4,
                                            }}
                                            style={{ originX: 0 }}
                                        />
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-between items-center gap-6 mt-12">
                        {/* Carousel Controls */}
                        <motion.div
                            className="flex justify-center gap-6 mt-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <PrevButton
                                onClick={onPrevButtonClick}
                                disabled={prevBtnDisabled}
                            />
                            <NextButton
                                onClick={onNextButtonClick}
                                disabled={nextBtnDisabled}
                            />
                        </motion.div>

                        {/* Dot indicators */}
                        <motion.div
                            className="hidden md:flex justify-center mt-8 space-x-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            {scrollSnaps.map((_, index) => (
                                <DotButton
                                    key={index}
                                    onClick={() => onDotButtonClick(index)}
                                    className={"border-2 border-bone".concat(
                                        index === selectedIndex
                                            ? "  bg-bone border-bone scale-125"
                                            : " bg-bone/30 hover:bg-bone/60 hover:scale-110"
                                    )}
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Modal Popup */}
                <AnimatePresence>
                    {expandedIndex !== null && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setExpandedIndex(null)}
                        >
                            {/* Backdrop */}
                            <motion.div
                                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />

                            {/* Modal Content */}
                            <motion.div
                                className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                                initial={{
                                    scale: 0.3,
                                    opacity: 0,
                                    x:
                                        typeof window !== "undefined"
                                            ? clickPosition.x -
                                              window.innerWidth / 2
                                            : 0,
                                    y:
                                        typeof window !== "undefined"
                                            ? clickPosition.y -
                                              window.innerHeight / 2
                                            : 0,
                                }}
                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                    x: 0,
                                    y: 0,
                                }}
                                exit={{
                                    scale: 0.3,
                                    opacity: 0,
                                    x:
                                        typeof window !== "undefined"
                                            ? clickPosition.x -
                                              window.innerWidth / 2
                                            : 0,
                                    y:
                                        typeof window !== "undefined"
                                            ? clickPosition.y -
                                              window.innerHeight / 2
                                            : 0,
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {expandedIndex !== null && (
                                    <>
                                        {/* Close Button */}
                                        <motion.button
                                            onClick={() =>
                                                setExpandedIndex(null)
                                            }
                                            className="absolute top-4 right-4 w-10 h-10 bg-eerie-black rounded-full shadow-lg flex items-center justify-center hover:bg-barn-red hover:text-white transition-colors duration-300 z-10"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <X className="w-5 h-5" />
                                        </motion.button>

                                        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                                            {/* Image Section */}
                                            <div className="relative h-64 lg:h-full">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={
                                                        coreOfferings.offerings[
                                                            expandedIndex
                                                        ].image
                                                    }
                                                    alt={
                                                        coreOfferings.offerings[
                                                            expandedIndex
                                                        ].title
                                                    }
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                                {/* Title Overlay */}
                                                <div className="absolute bottom-6 left-6 right-6">
                                                    <h2 className="text-3xl font-bold text-white font-jost leading-tight">
                                                        {
                                                            coreOfferings
                                                                .offerings[
                                                                expandedIndex
                                                            ].title
                                                        }
                                                    </h2>
                                                </div>
                                            </div>

                                            {/* Content Section */}
                                            <div className="p-8 overflow-y-auto max-h-[90vh] lg:max-h-full">
                                                <div className="space-y-6">
                                                    {/* Description */}
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-eerie-black font-jost mb-3">
                                                            About This Service
                                                        </h3>
                                                        <p className="text-eerie-black/80 leading-relaxed font-open-sans">
                                                            {
                                                                coreOfferings
                                                                    .offerings[
                                                                    expandedIndex
                                                                ].description
                                                            }
                                                        </p>
                                                    </div>

                                                    {/* Offerings */}
                                                    {coreOfferings.offerings[
                                                        expandedIndex
                                                    ].offerings && (
                                                        <div>
                                                            <h4 className="text-barn-red font-semibold font-jost mb-2">
                                                                What We Offer
                                                            </h4>
                                                            <p className="text-eerie-black/90 font-open-sans">
                                                                {
                                                                    coreOfferings
                                                                        .offerings[
                                                                        expandedIndex
                                                                    ].offerings
                                                                }
                                                            </p>
                                                        </div>
                                                    )}

                                                    {/* Notable Work */}
                                                    {coreOfferings.offerings[
                                                        expandedIndex
                                                    ].notableWork && (
                                                        <div>
                                                            <h4 className="text-barn-red font-semibold font-jost mb-2">
                                                                Notable Work
                                                            </h4>
                                                            <p className="text-eerie-black/90 font-open-sans">
                                                                {
                                                                    coreOfferings
                                                                        .offerings[
                                                                        expandedIndex
                                                                    ]
                                                                        .notableWork
                                                                }
                                                            </p>
                                                        </div>
                                                    )}

                                                    {/* Note */}
                                                    {coreOfferings.offerings[
                                                        expandedIndex
                                                    ].note && (
                                                        <div className="bg-khaki/10 p-4 rounded-lg">
                                                            <h4 className="text-barn-red font-semibold font-jost mb-2">
                                                                Special Note
                                                            </h4>
                                                            <p className="text-eerie-black/90 font-open-sans">
                                                                {
                                                                    coreOfferings
                                                                        .offerings[
                                                                        expandedIndex
                                                                    ].note
                                                                }
                                                            </p>
                                                        </div>
                                                    )}

                                                    {/* Formats */}
                                                    {coreOfferings.offerings[
                                                        expandedIndex
                                                    ].formats && (
                                                        <div>
                                                            <h4 className="text-barn-red font-semibold font-jost mb-2">
                                                                Available
                                                                Formats
                                                            </h4>
                                                            <p className="text-eerie-black/90 font-open-sans">
                                                                {
                                                                    coreOfferings
                                                                        .offerings[
                                                                        expandedIndex
                                                                    ].formats
                                                                }
                                                            </p>
                                                        </div>
                                                    )}

                                                    {/* Coverage */}
                                                    {coreOfferings.offerings[
                                                        expandedIndex
                                                    ].coverage && (
                                                        <div>
                                                            <h4 className="text-barn-red font-semibold font-jost mb-2">
                                                                Our Coverage
                                                            </h4>
                                                            <p className="text-eerie-black/90 font-open-sans">
                                                                {
                                                                    coreOfferings
                                                                        .offerings[
                                                                        expandedIndex
                                                                    ].coverage
                                                                }
                                                            </p>
                                                        </div>
                                                    )}

                                                    {/* Past Events */}
                                                    {coreOfferings.offerings[
                                                        expandedIndex
                                                    ].pastEvents && (
                                                        <div>
                                                            <h4 className="text-barn-red font-semibold font-jost mb-2">
                                                                Past Events
                                                            </h4>
                                                            <p className="text-eerie-black/90 font-open-sans">
                                                                {
                                                                    coreOfferings
                                                                        .offerings[
                                                                        expandedIndex
                                                                    ].pastEvents
                                                                }
                                                            </p>
                                                        </div>
                                                    )}

                                                    {/* Services */}
                                                    {coreOfferings.offerings[
                                                        expandedIndex
                                                    ].services && (
                                                        <div>
                                                            <h4 className="text-barn-red font-semibold font-jost mb-2">
                                                                Our Services
                                                            </h4>
                                                            <p className="text-eerie-black/90 font-open-sans">
                                                                {
                                                                    coreOfferings
                                                                        .offerings[
                                                                        expandedIndex
                                                                    ].services
                                                                }
                                                            </p>
                                                        </div>
                                                    )}

                                                    {/* Applications */}
                                                    {coreOfferings.offerings[
                                                        expandedIndex
                                                    ].applications && (
                                                        <div>
                                                            <h4 className="text-barn-red font-semibold font-jost mb-2">
                                                                Applications
                                                            </h4>
                                                            <p className="text-eerie-black/90 font-open-sans">
                                                                {
                                                                    coreOfferings
                                                                        .offerings[
                                                                        expandedIndex
                                                                    ]
                                                                        .applications
                                                                }
                                                            </p>
                                                        </div>
                                                    )}

                                                    {/* Niches */}
                                                    {coreOfferings.offerings[
                                                        expandedIndex
                                                    ].niches && (
                                                        <div>
                                                            <h4 className="text-barn-red font-semibold font-jost mb-2">
                                                                Specialized
                                                                Niches
                                                            </h4>
                                                            <p className="text-eerie-black/90 font-open-sans">
                                                                {
                                                                    coreOfferings
                                                                        .offerings[
                                                                        expandedIndex
                                                                    ].niches
                                                                }
                                                            </p>
                                                        </div>
                                                    )}

                                                    {/* CTA Button */}
                                                    <div className="pt-6 border-t border-khaki/20">
                                                        <motion.button
                                                            className="w-full bg-barn-red text-white py-3 px-6 rounded-lg font-semibold font-open-sans hover:bg-barn-red/90 transition-colors duration-300"
                                                            whileHover={{
                                                                scale: 1.02,
                                                            }}
                                                            whileTap={{
                                                                scale: 0.98,
                                                            }}
                                                            onClick={() => {
                                                                // Navigate to contact section
                                                                setExpandedIndex(
                                                                    null
                                                                );
                                                                const element =
                                                                    document.querySelector(
                                                                        "#lets-collaborate"
                                                                    );
                                                                if (element) {
                                                                    const headerHeight = 80;
                                                                    const elementPosition =
                                                                        element.getBoundingClientRect()
                                                                            .top;
                                                                    const offsetPosition =
                                                                        elementPosition +
                                                                        window.pageYOffset -
                                                                        headerHeight;
                                                                    window.scrollTo(
                                                                        {
                                                                            top: offsetPosition,
                                                                            behavior:
                                                                                "smooth",
                                                                        }
                                                                    );
                                                                }
                                                            }}
                                                        >
                                                            Get Started with
                                                            This Service
                                                        </motion.button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.section>
    );
};

export default CoreOfferings;
