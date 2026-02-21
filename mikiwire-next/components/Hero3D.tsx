"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroWireScene = dynamic(() => import("./three/HeroWireScene"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function Hero3D() {
    const container = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        // Dramatic fade in for the main text
        gsap.from(textRef.current, {
            y: 100,
            opacity: 0,
            duration: 2,
            ease: "power4.out",
            delay: 0.5
        });

        // Staggered fade up for HUD Glass Cards
        gsap.from(".glass-hud", {
            y: 50,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: "power3.out",
            delay: 1.2
        });
    }, { scope: container });

    return (
        <section ref={container} className="relative h-screen min-h-[900px] w-full bg-void overflow-hidden flex flex-col justify-end">

            {/* Immersive 3D Background */}
            <div className="absolute inset-0 z-0 opacity-90">
                <HeroWireScene />
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-void via-void/30 to-transparent z-10 pointer-events-none"></div>

            <div className="relative z-20 container mx-auto px-6 lg:px-12 pb-24 lg:pb-32 flex flex-col items-start w-full">

                {/* Cinematic Main Title */}
                <h1 ref={textRef} className="text-5xl md:text-7xl lg:text-[6rem] font-inter font-black text-clean leading-[1.05] uppercase tracking-tight max-w-6xl mb-16">
                    The Backbone of <br />
                    <span className="text-molten">India&apos;s Infrastructure.</span>
                </h1>

                {/* HUD Data Cards */}
                <div className="w-full flex flex-col md:flex-row gap-6 lg:gap-8 justify-between xl:justify-start">

                    <div className="glass-hud relative flex-1 max-w-sm group border-t-2 border-void hover:border-molten transition-colors duration-500 pt-6">
                        <div className="absolute inset-0 bg-clean/5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                        <span className="block font-inter text-xs text-clean/50 tracking-[0.2em] uppercase mb-4">
                            Financial Index
                        </span>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="font-inter font-light text-5xl text-clean">₹242</span>
                            <span className="font-inter font-bold text-xl text-molten">Cr+</span>
                        </div>
                        <p className="font-inter text-sm text-clean/70">Projected Revenue</p>
                    </div>

                    <div className="glass-hud relative flex-1 max-w-sm group border-t-2 border-void hover:border-molten transition-colors duration-500 pt-6">
                        <div className="absolute inset-0 bg-clean/5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                        <span className="block font-inter text-xs text-clean/50 tracking-[0.2em] uppercase mb-4">
                            Production Scale
                        </span>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="font-inter font-light text-5xl text-clean">100,000</span>
                            <span className="font-inter font-bold text-xl text-molten">MT</span>
                        </div>
                        <p className="font-inter text-sm text-clean/70">Capacity per Annum</p>
                    </div>

                    <div className="glass-hud relative flex-1 max-w-sm group border-t-2 border-void hover:border-molten transition-colors duration-500 pt-6">
                        <div className="absolute inset-0 bg-clean/5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                        <span className="block font-inter text-xs text-clean/50 tracking-[0.2em] uppercase mb-4">
                            Domestic Dominance
                        </span>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="font-inter font-light text-5xl text-clean">~20</span>
                            <span className="font-inter font-bold text-xl text-molten">%</span>
                        </div>
                        <p className="font-inter text-sm text-clean/70">Railway Sleeper Market Share</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
