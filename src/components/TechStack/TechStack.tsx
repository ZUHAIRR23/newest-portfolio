"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/animations/presets";
import Magnetic from "@/components/Layout/Magnetic";
import {
    Code2,
    Server,
    Database,
    Wrench,
    Globe,
    Layers
} from "lucide-react";

const techStack = [
    {
        category: "Frontend",
        icon: <Globe className="text-accent" />,
        skills: ["Tailwind CSS", "React JS", "JavaScript", "Bootstrap", "Next JS"]
    },
    {
        category: "Backend",
        icon: <Server className="text-accent" />,
        skills: ["PHP", "Laravel", "Supabase"]
    },
    {
        category: "Database",
        icon: <Database className="text-accent" />,
        skills: ["MySQL", "Supabase"]
    },
    {
        category: "Tools & Workflow",
        icon: <Wrench className="text-accent" />,
        skills: ["VS Code", "Antigravity", "Figma", "Codex"]
    }
];

export default function TechStack() {
    return (
        <section id="tech-stack" className="relative w-full py-32 px-6 bg-black flex justify-center">
            <div className="max-w-7xl w-full flex flex-col gap-16">
                <div className="flex flex-col gap-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">
                        03 / TECH STACK
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter">My Toolkit</h2>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {techStack.map((stack, index) => (
                        <motion.div key={index} variants={staggerItem}>
                            <Magnetic>
                                <div className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors overflow-hidden">
                                    {/* Glow Effect */}
                                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="relative z-10 flex flex-col gap-6">
                                        <div className="p-3 w-fit rounded-xl bg-accent/10">
                                            {stack.icon}
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-xl font-bold">{stack.category}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {stack.skills.map((skill, sIdx) => (
                                                    <span
                                                        key={sIdx}
                                                        className="px-2 py-1 text-xs font-medium rounded-md bg-white/5 text-secondary border border-white/5 hover:border-accent/30 transition-colors"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Magnetic>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
