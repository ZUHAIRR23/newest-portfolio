"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import { Monitor, Smartphone, Layers } from "lucide-react";

interface Project {
    name: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    results: string;
    size: string;
    image: string;
    year: string;
    client: string;
}

interface GridConfig {
    colSpan: string;
    height: string;
}

// Additional images for mobile projects that have multiple screenshots
const mobileExtraImages: Record<string, string[]> = {
    "Attendance App": ["/images/projects/attendance_1.png", "/images/projects/attendance_2.png", "/images/projects/attendance_3.png"],
    "Movie App": ["/images/projects/movie_1.png", "/images/projects/movie_2.png"],
    "Schedule Generator": ["/images/projects/schedule_1.png", "/images/projects/schedule_2.png"],
};

const projectMeta: Record<string, { category: "web" | "mobile"; glow: string; color: string; hoverGlow: string }> = {
    "Athir TPQ": {
        category: "web",
        glow: "rgba(249, 115, 22, 0.12)",
        color: "from-orange-500 to-amber-500",
        hoverGlow: "hover:shadow-[0_0_35px_-5px_rgba(249,115,22,0.25)]",
    },
    "Tandain": {
        category: "web",
        glow: "rgba(6, 182, 212, 0.12)",
        color: "from-cyan-500 to-blue-500",
        hoverGlow: "hover:shadow-[0_0_35px_-5px_rgba(6,182,212,0.25)]",
    },
    "BLM Koperasi": {
        category: "web",
        glow: "rgba(99, 102, 241, 0.12)",
        color: "from-indigo-500 to-purple-500",
        hoverGlow: "hover:shadow-[0_0_35px_-5px_rgba(99,102,241,0.25)]",
    },
    "Agustian Coach": {
        category: "web",
        glow: "rgba(139, 92, 246, 0.12)",
        color: "from-violet-500 to-fuchsia-500",
        hoverGlow: "hover:shadow-[0_0_35px_-5px_rgba(139,92,246,0.25)]",
    },
    "Attendance App": {
        category: "mobile",
        glow: "rgba(14, 165, 233, 0.12)",
        color: "from-sky-500 to-emerald-500",
        hoverGlow: "hover:shadow-[0_0_35px_-5px_rgba(14,165,233,0.25)]",
    },
    "Movie App": {
        category: "mobile",
        glow: "rgba(244, 63, 94, 0.12)",
        color: "from-rose-500 to-orange-500",
        hoverGlow: "hover:shadow-[0_0_35px_-5px_rgba(244,63,94,0.25)]",
    },
    "Schedule Generator": {
        category: "mobile",
        glow: "rgba(245, 158, 11, 0.12)",
        color: "from-amber-500 to-yellow-500",
        hoverGlow: "hover:shadow-[0_0_35px_-5px_rgba(245,158,11,0.25)]",
    }
};

const getGridConfig = (index: number) => {
    const configs = [
        { colSpan: "md:col-span-8", height: "min-h-[440px] md:h-[450px]" },
        { colSpan: "md:col-span-4", height: "min-h-[445px] md:h-[450px]" },
        { colSpan: "md:col-span-4", height: "min-h-[445px] md:h-[440px]" },
        { colSpan: "md:col-span-4", height: "min-h-[445px] md:h-[440px]" },
        { colSpan: "md:col-span-4", height: "min-h-[445px] md:h-[440px]" },
        { colSpan: "md:col-span-6", height: "min-h-[440px] md:h-[420px]" },
        { colSpan: "md:col-span-6", height: "min-h-[440px] md:h-[420px]" },
    ];
    return configs[index % configs.length];
};

function ProjectCard({ project, config }: { project: Project; config: GridConfig }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const meta = projectMeta[project.name] || {
        category: "web",
        glow: "rgba(99, 102, 241, 0.12)",
        color: "from-indigo-500 to-purple-500",
        hoverGlow: "hover:shadow-[0_0_35px_-5px_rgba(99,102,241,0.25)]",
    };

    const isFeatured = config.colSpan === "md:col-span-8";
    const isMobile = meta.category === "mobile";
    const extraImages = mobileExtraImages[project.name];

    return (
        <motion.div
            ref={cardRef}
            layout
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            }}
            onMouseMove={handleMouseMove}
            className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-neutral-900/20 backdrop-blur-md transition-all duration-500 ease-out hover:border-white/10 ${meta.hoverGlow} ${config.colSpan} ${config.height}`}
            style={{
                "--mouse-x": `${coords.x}px`,
                "--mouse-y": `${coords.y}px`,
            } as React.CSSProperties}
        >
            {/* Custom Mouse Spotlight Background Glow */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                style={{
                    background: `radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), ${meta.glow}, transparent 80%)`,
                }}
            />

            {/* Glowing spot pointer tracking border gradient */}
            <div
                className="pointer-events-none absolute -inset-[1px] rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                    background: `radial-gradient(120px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15), transparent 70%), 
                                radial-gradient(280px circle at var(--mouse-x) var(--mouse-y), ${meta.glow.replace("0.12", "0.4")}, transparent 85%)`,
                    padding: "1px",
                }}
            >
                <div className="w-full h-full rounded-[31px] bg-neutral-950/90" />
            </div>

            {/* Interior Container */}
            <div className="relative w-full h-full p-6 md:p-8 flex flex-col z-20 justify-between">
                {isFeatured ? (
                    /* Horizontally Split Card for Desktop Featured Item */
                    <div className="flex flex-col md:flex-row gap-8 w-full h-full items-center">
                        {/* Info details (Left column) */}
                        <div className="w-full md:w-1/2 flex flex-col justify-between h-full py-1">
                            <div>
                                <div className="flex items-center gap-3 text-neutral-400 text-xs font-semibold tracking-widest uppercase mb-4">
                                    <span className="text-white/60">{project.year}</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                                    <span className={`bg-gradient-to-r ${meta.color} bg-clip-text text-transparent`}>
                                        {project.client}
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight uppercase mb-4 transition-transform duration-300 group-hover:translate-x-1">
                                    {project.name}
                                </h3>

                                <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="border-t border-white/5 pt-4 mb-6">
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 block mb-1.5">Key Outcome</span>
                                    <p className="text-white/90 text-sm italic">“{project.results}”</p>
                                </div>
                            </div>

                            <div>
                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider rounded-lg bg-neutral-950/80 text-white/70 border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Showcase mockup image (Right column) */}
                        {isMobile && extraImages ? (
                            <div className="w-full md:w-1/2 h-52 md:h-full relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-neutral-900 to-neutral-950 flex items-center justify-center gap-3 p-4">
                                {extraImages.slice(0, 3).map((img, i) => (
                                    <div key={i} className="relative h-full flex-1 max-w-[130px] transition-transform duration-500 ease-out group-hover:scale-105" style={{ transitionDelay: `${i * 60}ms` }}>
                                        <Image
                                            src={img}
                                            alt={`${project.name} screen ${i + 1}`}
                                            fill
                                            className="object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                                            sizes="130px"
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="w-full md:w-1/2 h-52 md:h-full relative overflow-hidden rounded-2xl border border-white/5">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        )}
                    </div>
                ) : (
                    /* Vertically Stacked Card for Medium/Small Bento items */
                    <div className="flex flex-col h-full justify-between">
                        {isMobile && extraImages ? (
                            <div className="relative w-full h-48 overflow-hidden rounded-2xl border border-white/5 mb-6 flex-shrink-0 bg-gradient-to-br from-neutral-900 to-neutral-950 flex items-center justify-center gap-2 p-3">
                                {extraImages.slice(0, 2).map((img, i) => (
                                    <div key={i} className="relative h-full flex-1 max-w-[100px] transition-transform duration-500 ease-out group-hover:scale-105" style={{ transitionDelay: `${i * 60}ms` }}>
                                        <Image
                                            src={img}
                                            alt={`${project.name} screen ${i + 1}`}
                                            fill
                                            className="object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                                            sizes="100px"
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="relative w-full h-48 overflow-hidden rounded-2xl border border-white/5 mb-6 flex-shrink-0">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 30vw"
                                />
                            </div>
                        )}

                        <div className="flex-grow flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 text-neutral-400 text-[10px] font-bold tracking-widest uppercase mb-3">
                                    <span>{project.year}</span>
                                    <span className="w-1 h-1 rounded-full bg-neutral-700" />
                                    <span className={`bg-gradient-to-r ${meta.color} bg-clip-text text-transparent`}>
                                        {project.client}
                                    </span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide mb-2.5 transition-transform duration-300 group-hover:translate-x-1">
                                    {project.name}
                                </h3>
                                <p className="text-neutral-400 text-xs md:text-sm line-clamp-3 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-2.5 py-0.5 text-[9px] uppercase font-bold tracking-widest rounded-md bg-neutral-950/80 text-white/70 border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState<"all" | "web" | "mobile">("all");

    const categories = [
        { id: "all", label: "All Projects", icon: Layers },
        { id: "web", label: "Web Apps", icon: Monitor },
        { id: "mobile", label: "Mobile Apps", icon: Smartphone }
    ] as const;

    const filteredProjects = portfolioData.projects.filter((project) => {
        const meta = projectMeta[project.name] || { category: "web" };
        if (activeCategory === "all") return true;
        return meta.category === activeCategory;
    });

    return (
        <section id="projects" className="relative w-full bg-black overflow-hidden py-32">
            {/* Soft Ambient Background Light */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/3 w-[455px] h-[455px] rounded-full bg-cyan-600/5 blur-[100px] pointer-events-none" />

            {/* Section Header */}
            <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-30">
                <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent px-3.5 py-1.5 bg-accent/10 w-fit rounded-full mb-5 inline-block">
                        04 / PROJECTS
                    </span>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter italic uppercase text-white">
                        Featured Work
                    </h2>
                    <p className="text-neutral-400 max-w-xl text-base md:text-lg mt-4 leading-relaxed">
                        A selection of digital platforms and mobile applications crafted with a focus on details, speed, and premium user experience.
                    </p>
                </div>
            </div>

            {/* Premium Category Filter Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 px-6 mb-16 relative z-30">
                <div className="flex bg-neutral-900/30 p-1.5 rounded-full border border-white/5 backdrop-blur-md shadow-2xl relative">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = activeCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 z-10 cursor-pointer ${isActive ? "text-black font-extrabold" : "text-neutral-400 hover:text-neutral-200"
                                    }`}
                            >
                                <Icon className="w-3.5 h-3.5" />
                                <span>{cat.label}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-white rounded-full -z-10 shadow-lg"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Bento Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 md:px-12 max-w-7xl mx-auto relative z-30"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, idx) => {
                        const config = getGridConfig(idx);
                        return (
                            <ProjectCard
                                key={project.name}
                                project={project}
                                config={config}
                            />
                        );
                    })}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
