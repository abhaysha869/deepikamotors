"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";

// Dynamically import Three.js scene to avoid SSR issues
const WireScene = dynamic(() => import("./three/WireScene"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const hudRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.5
            });

            gsap.from(".hud-item", {
                x: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
                delay: 1
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-premium-gradient flex items-center pt-20">
            {/* 3D Background Container */}
            <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full z-0 opacity-80 lg:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-transparent z-10 xl:via-midnight/40 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight z-10 pointer-events-none"></div>
                <WireScene />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full px-6 lg:px-12 xl:px-24 container mx-auto pointer-events-none flex flex-col lg:flex-row justify-between items-center gap-12">

                {/* Text Content Area */}
                <div className="w-full max-w-3xl pt-20 lg:pt-0">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="h-[1px] w-16 bg-gold"></span>
                        <h5 className="text-gold font-inter uppercase tracking-[0.3em] text-xs md:text-sm font-medium">
                            Premium Steel Wire Manufacturing
                        </h5>
                    </div>

                    <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-[5.5rem] font-playfair text-pearl leading-[1.1] font-bold drop-shadow-2xl mb-8">
                        The Backbone <br />
                        Of India&apos;s <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-copper italic">
                            Infrastructure.
                        </span>
                    </h1>

                    <p className="font-inter text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 border-l-[3px] border-steel pl-6">
                        From Railway Sleepers to High-Rise Bridges — Strengthening the Nation since 1987 with world-class engineering.
                    </p>

                    <div className="pointer-events-auto flex flex-wrap gap-6 items-center">
                        <button className="group flex items-center gap-3 px-8 py-4 bg-gold text-midnight hover:bg-pearl transition-all duration-300 font-inter tracking-[0.1em] uppercase font-semibold rounded-sm">
                            Explore Legacy
                            <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </button>
                        <button className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-steel hover:border-gold hover:text-gold text-pearl transition-all duration-300 font-inter tracking-[0.1em] uppercase rounded-sm">
                            View Products
                        </button>
                    </div>
                </div>

                {/* Futuristic HUD Stats */}
                <div ref={hudRef} className="w-full lg:w-auto flex flex-row lg:flex-col gap-4 lg:gap-6 z-20 pointer-events-none justify-start lg:justify-end pb-10 lg:pb-0 hide-scrollbar overflow-x-auto">

                    <div className="hud-item relative min-w-[200px] flex-shrink-0 group">
                        <div className="absolute left-0 top-0 w-[3px] h-0 bg-gold transition-all duration-500 group-hover:h-full"></div>
                        <div className="bg-royal/40 backdrop-blur-xl border border-steel/50 p-6 hover:bg-royal/60 transition-colors rounded-r-lg shadow-xl">
                            <span className="flex items-center gap-2 text-[0.7rem] text-slate-400 tracking-[0.2em] uppercase mb-2 font-inter font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
                                Revenue
                            </span>
                            <span className="block text-4xl font-playfair text-pearl mb-1">₹242 Cr<span className="text-gold">+</span></span>
                            <span className="font-inter text-xs text-slate-400">FY2025 Projected</span>
                        </div>
                    </div>

                    <div className="hud-item relative min-w-[200px] flex-shrink-0 group">
                        <div className="absolute left-0 top-0 w-[3px] h-0 bg-pearl transition-all duration-500 group-hover:h-full"></div>
                        <div className="bg-royal/40 backdrop-blur-xl border border-steel/50 p-6 hover:bg-royal/60 transition-colors rounded-r-lg shadow-xl">
                            <span className="flex items-center gap-2 text-[0.7rem] text-slate-400 tracking-[0.2em] uppercase mb-2 font-inter font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-pearl"></span>
                                Capacity
                            </span>
                            <span className="block text-4xl font-playfair text-pearl mb-1">100k <span className="text-2xl text-slate-400">MT</span></span>
                            <span className="font-inter text-xs text-slate-400">Per Annum</span>
                        </div>
                    </div>

                    <div className="hud-item relative min-w-[200px] flex-shrink-0 group">
                        <div className="absolute left-0 top-0 w-[3px] h-0 bg-copper transition-all duration-500 group-hover:h-full"></div>
                        <div className="bg-royal/40 backdrop-blur-xl border border-steel/50 p-6 hover:bg-royal/60 transition-colors rounded-r-lg shadow-xl">
                            <span className="flex items-center gap-2 text-[0.7rem] text-slate-400 tracking-[0.2em] uppercase mb-2 font-inter font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-copper"></span>
                                Market Share
                            </span>
                            <span className="block text-4xl font-playfair text-pearl mb-1">~20%</span>
                            <span className="font-inter text-xs text-slate-400">Railways Sleepers</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
