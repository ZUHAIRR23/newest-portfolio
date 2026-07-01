"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { fadeUp } from "@/animations/presets";

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <section id="experience" className="relative w-full py-32 px-6 bg-black flex justify-center overflow-hidden">
            <div className="max-w-4xl w-full flex flex-col gap-16 relative" ref={containerRef}>
                <div className="flex flex-col gap-4 text-center items-center mb-16">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">
                        02 / EXPERIENCE
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Professional Journey</h2>
                </div>

                {/* Vertical Progress Line */}
                <div className="absolute left-0 md:left-1/2 top-48 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block">
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute top-0 left-0 w-full h-full bg-accent"
                    />
                </div>

                <div className="flex flex-col gap-24 relative z-10">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUp}
                            className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            <div className="flex-1 flex flex-col gap-2 md:text-right">
                                <span className="text-accent font-black text-2xl tracking-tighter">{exp.year}</span>
                                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                            </div>

                            <div className="hidden md:flex relative h-12 w-12 items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-black border-2 border-accent z-10" />
                            </div>

                            <div className="flex-1 flex flex-col gap-4">
                                <h4 className="text-lg font-bold uppercase tracking-widest text-secondary">{exp.position}</h4>
                                <p className="text-secondary/80 font-inter leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
