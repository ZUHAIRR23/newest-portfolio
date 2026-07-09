"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/animations/presets";
import { Mail, Globe, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/components/Layout/Magnetic";

export default function Contact() {
    return (
        <section id="contact" className="relative w-full py-32 px-6 bg-black flex justify-center overflow-hidden">
            <div className="max-w-7xl w-full flex flex-col items-center text-center gap-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex flex-col gap-8"
                >
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">
                        06 / CONTACT
                    </span>
                    <h2 className="text-[clamp(40px,8vw,120px)] font-black tracking-tighter leading-[0.9] text-white">
                        LET'S BUILD<br />SOMETHING GREAT.
                    </h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex flex-wrap justify-center gap-6"
                >
                    {[
                        { name: "Email", icon: <Mail size={20} />, href: "mailto:abdurrahman.zuh@gmail.com" },
                        { name: "WhatsApp", icon: <Globe size={20} />, href: "https://wa.me/6282173642609" },
                        { name: "GitHub", icon: <Github size={20} />, href: "https://github.com/ZUHAIRR23" }
                    ].map((link, i) => (
                        <Magnetic key={i}>
                            <Link
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
                            >
                                {link.icon}
                                <span className="font-bold text-sm uppercase tracking-widest">{link.name}</span>
                                <ArrowUpRight size={16} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        </Magnetic>
                    ))}
                </motion.div>

                <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 pt-12 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-8 text-secondary/40 text-[10px] uppercase tracking-[0.2em] font-bold"
                >
                    <div>© 2026 ABDURRAHMAN ZUHAIR</div>
                    <div>DEVELOPED WITH NEXT.JS 15</div>
                </motion.footer>
            </div>

            {/* Background decoration */}
            <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-accent/5 blur-[120px] rounded-full -z-10" />
        </section>
    );
}
