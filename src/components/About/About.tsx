"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { fadeUp } from "@/animations/presets";
import { ArrowUpRight } from "lucide-react";

export default function About() {
    const { about } = portfolioData;

    return (
        <section id="about" className="relative w-full py-32 md:py-40 px-6 bg-black flex justify-center overflow-visible">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl w-full relative z-10">
                {/* 3-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-16 items-start">

                    {/* Left Column — "Hey!" + Short Intro */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="flex flex-col gap-6 lg:pt-20"
                    >
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic text-white">
                            Hey!
                        </h2>
                        <p className="text-lg md:text-xl text-secondary font-inter leading-relaxed max-w-md">
                            I&apos;m {about.name}, a builder based in Batam, currently working on
                            building impactful digital products and high-quality web experiences.
                        </p>
                    </motion.div>

                    {/* Center Column — Card Landing Zone (placeholder for the sticky card) */}
                    <div
                        id="card-landing"
                        className="hidden lg:flex items-start justify-center pt-0"
                    >
                        {/* This is the placeholder space where the spinning card lands */}
                        <div className="w-[320px] h-[420px]" />
                    </div>

                    {/* Right Column — Description + CTA */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="flex flex-col gap-8 lg:pt-20"
                    >
                        <p className="text-base md:text-lg text-secondary font-inter leading-relaxed">
                            {about.description}
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                {about.expertise.map((item, index) => (
                                    <span key={index} className="text-sm text-white/70 font-medium">
                                        • {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <a
                            href="#contact"
                            className="group flex items-center gap-2 text-white font-semibold text-base hover:text-accent transition-colors w-fit mt-4"
                        >
                            Get Started
                            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* Education Section Below */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="mt-32 flex flex-col gap-8"
                >
                    <span className="text-[10px] text-accent font-bold uppercase tracking-widest px-3 py-1 bg-accent/10 w-fit rounded-full">
                        Education
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {portfolioData.education.map((edu, index) => (
                            <div key={index} className="flex flex-col gap-1 border-l-2 border-accent/20 pl-6 hover:border-accent transition-colors duration-500">
                                <span className="text-lg font-bold">{edu.school}</span>
                                <span className="text-sm text-secondary">{edu.major} • {edu.year}</span>
                                <span className="text-xs text-muted/60">{edu.location}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
