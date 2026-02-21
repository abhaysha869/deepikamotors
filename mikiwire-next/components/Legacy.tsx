"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Legacy() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".legacy-text", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
        });

        gsap.from(".leader-card", {
            scrollTrigger: {
                trigger: ".leader-grid",
                start: "top 80%",
            },
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="legacy" className="bg-clean text-void w-full py-24 lg:py-40">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between gap-20">

                {/* Left Side: Legacy Statement */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <span className="block h-1 w-16 bg-molten mb-8 legacy-text"></span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-black uppercase tracking-tight leading-[1.1] mb-8 legacy-text max-w-lg">
                        Decades of <span className="text-molten">Engineering</span> Excellence <br />
                        <span className="text-2xl lg:text-4xl text-void/50 mt-4 block">(Est. 1987)</span>
                    </h2>
                    <p className="legacy-text font-inter text-lg lg:text-xl text-void/80 leading-relaxed max-w-xl border-l-4 border-void/20 pl-6">
                        Founded in the late 1970s and formally incorporated in 1987, the Miki Group has scaled to become an industrial juggernaut. We operate with singular precision: engineering the highest grade steel wire to support India&apos;s most critical infrastructure projects.
                    </p>
                </div>

                {/* Right Side: Leadership */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8 leader-grid">

                    {/* Primary Focus: Mahesh Poddar */}
                    <div className="leader-card group relative w-full overflow-hidden bg-void text-clean p-8 lg:p-12 mb-4 border border-void/10 shadow-2xl transition-all duration-500 hover:shadow-molten/20 flex flex-col sm:flex-row gap-8 items-center">
                        <div className="w-48 h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-clean/20 group-hover:border-molten transition-colors duration-500">
                            <img
                                src="/image_069e64.jpg"
                                alt="Mahesh Poddar"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-3xl font-inter font-black uppercase tracking-wider mb-2">Mahesh Poddar</h3>
                            <span className="text-molten font-inter font-bold tracking-[0.2em] text-sm uppercase mb-1">Founder & Director</span>
                            <span className="text-clean/50 font-inter text-xs tracking-widest uppercase block mb-4">Former Rajya Sabha MP</span>
                            <p className="text-clean/80 font-inter text-sm leading-relaxed">
                                The visionary architect behind the Miki Group. His dedication to industrial self-reliance paved the way for decades of expansion across the subcontinent.
                            </p>
                        </div>
                    </div>

                    {/* Board Mentions */}
                    <div className="leader-card w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="p-6 border border-void/10 bg-void/5 hover:bg-void hover:text-clean transition-colors duration-300 group">
                            <h4 className="font-inter font-bold text-lg mb-1 group-hover:text-molten transition-colors">Nirmala Poddar</h4>
                            <span className="font-inter text-xs tracking-[0.1em] uppercase opacity-70">Director</span>
                        </div>
                        <div className="p-6 border border-void/10 bg-void/5 hover:bg-void hover:text-clean transition-colors duration-300 group">
                            <h4 className="font-inter font-bold text-lg mb-1 group-hover:text-molten transition-colors">Pawan K. Pacheriwala</h4>
                            <span className="font-inter text-xs tracking-[0.1em] uppercase opacity-70">Managing Director</span>
                        </div>
                        <div className="p-6 border border-void/10 bg-void/5 hover:bg-void hover:text-clean transition-colors duration-300 group">
                            <h4 className="font-inter font-bold text-lg mb-1 group-hover:text-molten transition-colors">Mrinmoy Sarkar</h4>
                            <span className="font-inter text-xs tracking-[0.1em] uppercase opacity-70">CEO</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
