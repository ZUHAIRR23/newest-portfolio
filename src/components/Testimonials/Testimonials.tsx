"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Product Manager at TechFlow",
        text: "Working with Abdurrahman was a game-changer. His attention to detail in motion design is unparalleled."
    },
    {
        name: "James Wilson",
        role: "CEO at Pixel Perfect",
        text: "A true professional who understands both the technical and aesthetic sides of modern web development."
    },
    {
        name: "Elena Rodriguez",
        role: "Design Lead at Innovate AI",
        text: "The performance optimizations he implemented significantly improved our user retention metrics."
    },
    {
        name: "Marcus Thorne",
        role: "Senior Architect",
        text: "Clean code, brilliant animations, and a solid understanding of system architecture. Highly recommended."
    }
];

export default function Testimonials() {
    return (
        <section className="relative w-full py-32 bg-black overflow-hidden border-y border-white/5">
            <div className="flex flex-col gap-16 mb-16 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col gap-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">
                        05 / TESTIMONIALS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Client Stories</h2>
                </div>
            </div>

            <div className="flex relative items-center">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex gap-8 px-4"
                >
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="w-[350px] md:w-[450px] flex-shrink-0 p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col gap-6"
                        >
                            <p className="text-lg text-secondary font-inter leading-relaxed italic">
                                "{t.text}"
                            </p>
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-white">{t.name}</span>
                                <span className="text-xs text-accent uppercase tracking-widest font-bold">{t.role}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient overlays for the marquee */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            </div>
        </section>
    );
}
