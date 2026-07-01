"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-all duration-300",
                scrolled ? "pt-4" : "pt-8"
            )}
        >
            <nav
                className={cn(
                    "flex items-center px-6 py-3 rounded-full border border-white/5 transition-all duration-500",
                    scrolled
                        ? "bg-black/40 backdrop-blur-md scale-100"
                        : "bg-transparent scale-105"
                )}
            >
                <div className="flex items-center gap-8">
                    <Link href="/" className="text-white font-bold tracking-tighter text-xl mr-4">
                        AZ.
                    </Link>
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-secondary hover:text-white transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="#contact"
                        className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
                    >
                        Hire Me
                    </Link>
                </div>
            </nav>
        </header>
    );
}
