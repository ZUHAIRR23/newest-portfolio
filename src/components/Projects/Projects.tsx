"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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

interface ProjectCardProps {
    project: Project;
    i: number;
    progress: any;
    targetScale: number;
    range: [number, number];
}

function ProjectCard({ project, i, progress, targetScale, range }: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(min-width: 768px)");
        setIsDesktop(media.matches);
        const listener = () => setIsDesktop(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, []);

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

    const isMobile = meta.category === "mobile";
    const extraImages = mobileExtraImages[project.name];

    // Localized useScroll target ref
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: cardProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    });

    // Image transitions on desktop scroll
    const imageScale = useTransform(cardProgress, [0, 1], [1.8, 1]);
    const phoneY1 = useTransform(cardProgress, [0, 1], [60, 0]);
    const phoneY2 = useTransform(cardProgress, [0, 1], [120, 0]);
    const phoneY3 = useTransform(cardProgress, [0, 1], [180, 0]);

    // Card scale transform only active on desktop
    const scale = useTransform(progress, range, [1, isDesktop ? targetScale : 1]);

    return (
        <div ref={containerRef} className="w-full md:h-screen md:sticky md:top-0 flex items-start justify-center pt-8 md:pt-[15vh]">
            <motion.div
                ref={cardRef}
                style={{
                    scale,
                    top: isDesktop ? `calc(${i * 24}px)` : "auto",
                    transformOrigin: "top",
                    "--mouse-x": `${coords.x}px`,
                    "--mouse-y": `${coords.y}px`,
                } as any}
                onMouseMove={handleMouseMove}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-neutral-950/80 backdrop-blur-md transition-all duration-300 ease-out hover:border-white/10 ${meta.hoverGlow} w-full md:h-[480px] flex flex-col md:flex-row justify-between gap-8 p-6 md:p-8 cursor-default`}
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

                {/* Left Column - Info Details */}
                <div className="w-full md:w-1/2 flex flex-col justify-between h-full py-1 z-20 relative">
                    <div>
                        <div className="flex items-center gap-3 text-neutral-400 text-xs font-semibold tracking-widest uppercase mb-4">
                            <span className="text-white/60">{project.year}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                            <span className={`bg-gradient-to-r ${meta.color} bg-clip-text text-transparent`}>
                                {project.client}
                            </span>
                        </div>

                        <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-4 transition-transform duration-300 group-hover:translate-x-1">
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

                    <div className="mt-auto">
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

                {/* Right Column - Showcase image / mockup */}
                <div className="w-full md:w-1/2 h-52 md:h-full relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-neutral-900 to-neutral-950 flex items-center justify-center p-4 z-20">
                    {isMobile && extraImages ? (
                        <div className="flex items-center justify-center gap-4 w-full h-full overflow-hidden">
                            {extraImages.map((img, idxImage) => {
                                const yTransform = idxImage === 0 ? phoneY1 : idxImage === 1 ? phoneY2 : phoneY3;
                                return (
                                    <motion.div
                                        key={idxImage}
                                        className="relative h-full w-[110px] md:w-[130px] transition-transform duration-500 ease-out group-hover:scale-105"
                                        style={{
                                            y: isDesktop ? yTransform : 0,
                                            transitionDelay: `${idxImage * 60}ms`
                                        } as any}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${project.name} screen ${idxImage + 1}`}
                                            fill
                                            className="object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
                                            sizes="(max-width: 768px) 110px, 130px"
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="relative w-full h-full overflow-hidden rounded-xl border border-white/5 bg-neutral-950">
                            <motion.div
                                className="relative w-full h-full"
                                style={{ scale: isDesktop ? imageScale : 1 }}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </motion.div>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState<"all" | "web" | "mobile">("all");
    const containerRef = useRef<HTMLDivElement>(null);

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

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section id="projects" className="relative w-full bg-black overflow-x-clip py-32">
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

            {/* Stacked Parallax Scroll Cards */}
            <div
                ref={containerRef}
                className="flex flex-col gap-12 md:gap-0 px-6 md:px-12 max-w-5xl mx-auto relative z-30 pb-[10vh]"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, idx) => {
                        const targetScale = 1 - ((filteredProjects.length - idx) * 0.05);
                        return (
                            <ProjectCard
                                key={project.name}
                                project={project}
                                i={idx}
                                progress={scrollYProgress}
                                targetScale={targetScale}
                                range={[idx * (1 / filteredProjects.length), 1]}
                            />
                        );
                    })}
                </AnimatePresence>
            </div>
        </section>
    );
}
