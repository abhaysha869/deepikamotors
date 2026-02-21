"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const plants = [
    {
        city: "Ranchi (HQ)",
        company: "Miki Wire Works Pvt Ltd",
        type: "North/East Hub",
        desc: "The headquarters. The central nervous system of our operations, driving nationwide scale."
    },
    {
        city: "Bangalore",
        company: "Miki Steel Works Pvt Ltd",
        type: "South Hub",
        desc: "Dominating the Southern peninsula with precision-engineered output for rapid infrastructure demands."
    },
    {
        city: "Visakhapatnam",
        company: "Visakha Wire Ropes Ltd",
        type: "Coastal/Export Hub",
        desc: "Our gateway to the world. Strategic coastal positioning ensures seamless global trade logistics."
    },
    {
        city: "Nagpur",
        company: "Shri Ram Wire Products Pvt Ltd",
        type: "Central Hub",
        desc: "The heart of India. Empowering rapid distribution networks across the central corridor."
    }
];

export default function ManufacturingScroll() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const panels = gsap.utils.toArray(".factory-panel") as HTMLElement[];

        // Create horizontal scroll animation
        gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                scrub: 1, // Smooth scrubbing
                snap: 1 / (panels.length - 1), // Snap to closest panel
                end: () => "+=" + (scrollContainerRef.current?.offsetWidth || window.innerWidth), // Total scrolling distance
            }
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="manufacturing" className="relative w-full h-screen bg-void text-clean overflow-hidden block">

            {/* Massive Background Typography */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-5 pointer-events-none whitespace-nowrap z-0">
                <span className="text-[20vw] font-inter font-black uppercase tracking-tight leading-none text-clean">FOOTPRINT</span>
            </div>

            <div className="absolute top-12 left-12 z-20 pointer-events-none">
                <h2 className="text-sm font-inter uppercase tracking-[0.4em] text-molten">
                    Manufacturing Footprint
                </h2>
                <span className="block mt-2 font-inter font-bold text-3xl uppercase tracking-wider text-clean/90">
                    Industrial Scale
                </span>
            </div>

            {/* Horizontal Scroll Container */}
            <div ref={scrollContainerRef} className="absolute top-0 left-0 w-[400vw] h-full flex flex-row flex-nowrap z-10">

                {plants.map((plant, idx) => (
                    <div key={plant.city} className="factory-panel relative w-screen h-full flex items-center justify-center p-6 lg:p-24 flex-shrink-0">
                        {/* Dark industrial gradient stand-in for image */}
                        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-[#111] -z-10"></div>

                        <div className="w-full max-w-7xl h-full max-h-[70vh] border border-clean/10 bg-clean/5 backdrop-blur-sm shadow-2xl flex flex-col justify-end p-12 lg:p-20 relative overflow-hidden group">

                            {/* Hover effect highlight */}
                            <div className="absolute bottom-0 left-0 w-full h-2 bg-clean/20 group-hover:bg-molten transition-colors duration-500"></div>

                            {/* Massive City Number Index */}
                            <div className="absolute top-8 right-12 text-6xl md:text-[8rem] font-inter font-black text-clean/5 leading-none group-hover:text-molten/10 transition-colors duration-500">
                                0{idx + 1}
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12 w-full">
                                <div className="flex flex-col">
                                    <span className="font-inter text-xs tracking-[0.3em] uppercase text-molten mb-4">
                                        {plant.type}
                                    </span>
                                    <h3 className="font-inter text-5xl md:text-7xl font-black uppercase text-clean leading-none mb-4">
                                        {plant.city.split(' ')[0]}
                                    </h3>
                                    <h4 className="font-inter text-lg md:text-2xl font-bold uppercase tracking-widest text-clean/70 pr-4">
                                        {plant.company}
                                    </h4>
                                </div>
                                <div className="max-w-md pb-2 border-l border-molten pl-6">
                                    <p className="font-inter text-clean/60 text-lg leading-relaxed">
                                        {plant.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-50">
                <span className="text-[0.6rem] font-inter tracking-[0.4em] uppercase mb-4 text-clean">Scroll to explore</span>
                <div className="w-[1px] h-12 bg-molten"></div>
            </div>
        </section>
    );
}
