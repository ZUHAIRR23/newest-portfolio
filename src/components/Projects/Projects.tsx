"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

const gridItems = [
    // Row 1: 3 columns — tall left, medium center, wide right
    { colSpan: "md:col-span-3", rowSpan: "md:row-span-2", aspect: "aspect-[3/4]", speed: 0.15 },
    { colSpan: "md:col-span-4", rowSpan: "", aspect: "aspect-[4/3]", speed: -0.1 },
    { colSpan: "md:col-span-5", rowSpan: "", aspect: "aspect-[16/9]", speed: 0.08 },
    // Row 2: fills under center+right
    { colSpan: "md:col-span-3", rowSpan: "", aspect: "aspect-[4/3]", speed: -0.12 },
    { colSpan: "md:col-span-4", rowSpan: "", aspect: "aspect-[4/3]", speed: 0.1 },
    { colSpan: "md:col-span-2", rowSpan: "", aspect: "aspect-[3/4]", speed: -0.08 },
    // Row 3: bottom row
    { colSpan: "md:col-span-4", rowSpan: "", aspect: "aspect-[16/9]", speed: 0.06 },
];

function ProjectCard({ project, index, grid }: { project: any; index: number; grid: typeof gridItems[0] }) {
    const cardRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    // Each card moves at a different speed based on its `speed` value
    // This creates the staggered parallax depth effect
    const y = useTransform(scrollYProgress, [0, 1], [grid.speed * -200, grid.speed * 200]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={`group relative overflow-hidden cursor-pointer ${grid.colSpan} ${grid.rowSpan}`}
        >
            <motion.div style={{ y }} className="relative w-full h-full">
                <Link href={project.demo} target="_blank" className="block relative w-full h-full">
                    {/* Image */}
                    <div className={`relative w-full ${grid.aspect} overflow-hidden`}>
                        <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                    </div>

                    {/* Bottom gradient for text readability */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex items-end justify-between z-10">
                        {/* Left: Project Name */}
                        <h3 className="text-white font-black text-sm md:text-lg lg:text-xl uppercase tracking-wide leading-tight max-w-[60%]">
                            {project.name}
                        </h3>

                        {/* Right: Year + Client */}
                        <div className="text-right flex-shrink-0">
                            <span className="block text-white/80 text-[10px] md:text-xs font-medium">
                                {project.year}
                            </span>
                            <span className="block text-white/60 text-[9px] md:text-[10px] uppercase tracking-wider font-medium">
                                {project.client}
                            </span>
                        </div>
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="relative w-full bg-black overflow-hidden">
            {/* Section Header */}
            <div className="px-6 md:px-12 pt-32 pb-16">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent px-3 py-1 bg-accent/10 w-fit rounded-full mb-4 inline-block">
                    04 / PROJECTS
                </span>
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter italic">Featured Work</h2>
                <p className="text-secondary max-w-2xl text-lg mt-4">A selection of digital platforms and applications crafted with a focus on impact and user experience.</p>
            </div>

            {/* Masonry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[2px] bg-black">
                {portfolioData.projects.map((project: any, index: number) => {
                    const grid = gridItems[index] || gridItems[0];
                    return (
                        <ProjectCard key={index} project={project} index={index} grid={grid} />
                    );
                })}
            </div>
        </section>
    );
}
