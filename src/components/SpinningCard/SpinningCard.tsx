"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function SpinningCard() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [landingY, setLandingY] = useState(0);

    // Find the card-landing placeholder position to align the sticky endpoint
    useEffect(() => {
        const updateLandingPosition = () => {
            const landing = document.getElementById("card-landing");
            if (landing) {
                const rect = landing.getBoundingClientRect();
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                setLandingY(rect.top + scrollTop);
            }
        };

        updateLandingPosition();
        window.addEventListener("resize", updateLandingPosition);
        return () => window.removeEventListener("resize", updateLandingPosition);
    }, []);

    const { scrollYProgress } = useScroll({
        target: trackRef,
        offset: ["start start", "end end"],
    });

    // Rotation: fast spin completing 180° by midway
    const rotateY = useTransform(scrollYProgress, [0.1, 0.55], [0, 180]);
    // Scale: breathing effect
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1.1, 1.05, 1]);

    return (
        <>
            {/* Scroll track: tall div that drives the animation */}
            <div
                ref={trackRef}
                className="relative z-20 pointer-events-none"
                style={{ height: "200vh", marginTop: "-100vh", marginBottom: "-100vh" }}
            >
                {/* Sticky container: card stays centered while scrolling */}
                <div className="sticky top-0 h-screen w-full flex items-center justify-center">
                    <div className="w-[280px] h-[350px] md:w-[320px] md:h-[420px] perspective-2000">
                        <motion.div
                            style={{
                                rotateY,
                                scale,
                                transformStyle: "preserve-3d",
                            }}
                            className="relative w-full h-full rounded-2xl"
                        >
                            {/* Front Face — Greyscale */}
                            <div
                                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(14,165,233,0.15)]"
                                style={{ backfaceVisibility: "hidden" }}
                            >
                                <Image
                                    src="/images/blackwhite.jpeg"
                                    alt="Front Portrait"
                                    fill
                                    className="object-cover grayscale"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>

                            {/* Back Face — Colored */}
                            <div
                                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-accent/30 shadow-[0_20px_60px_rgba(14,165,233,0.25)]"
                                style={{
                                    backfaceVisibility: "hidden",
                                    transform: "rotateY(180deg)",
                                }}
                            >
                                <Image
                                    src="/images/color.jpeg"
                                    alt="Back Portrait"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-accent/30 via-transparent to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
