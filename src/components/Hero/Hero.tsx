"use client";

import { motion } from "framer-motion";
import { fadeUp, textReveal } from "@/animations/presets";
import { MoveDown, MapPin, Circle } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 blur-[120px] rounded-full" />

            {/* Header Info */}
            <div className="absolute top-32 w-full max-w-7xl flex justify-between items-center px-6 text-[10px] uppercase tracking-[0.2em] font-medium text-secondary">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="flex items-center gap-2"
                >
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </div>
                    Available for new projects
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="flex items-center gap-2 group cursor-pointer"
                >
                    <MapPin size={12} className="group-hover:text-accent transition-colors" />
                    <span className="group-hover:text-accent transition-colors">Batam, Indonesia</span>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="relative z-30 w-full max-w-7xl flex flex-col items-center text-center">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    className="text-[clamp(48px,12vw,180px)] font-black leading-[0.85] tracking-tighter text-white flex flex-col"
                >
                    <motion.span variants={textReveal} className="block">SOFTWARE</motion.span>
                    <motion.span variants={textReveal} className="block text-accent">ENGINEER</motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-8 text-lg md:text-xl text-secondary max-w-2xl font-inter font-light"
                >
                    Building scalable digital products and high-end experiences with a focus on performance and motion design.
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-secondary/40"
            >
                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll down</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <MoveDown size={20} strokeWidth={1.5} />
                </motion.div>
            </motion.div>
        </section>
    );
}
