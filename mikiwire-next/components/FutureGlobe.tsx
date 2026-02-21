"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Factory, Droplets, Leaf } from "lucide-react";

const GlobeScene = dynamic(() => import("./three/GlobeScene"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function FutureGlobe() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Stagger badges
        gsap.from(".sustainability-badge", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            },
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "back.out(1.5)",
        });

        gsap.from(".global-text", {
            scrollTrigger: {
                trigger: ".globe-container",
                start: "top 80%",
            },
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="future" className="bg-void text-clean w-full py-24 lg:py-40 relative overflow-hidden">

            <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">

                {/* Globe Overview */}
                <div className="globe-container w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 mb-24">

                    <div className="w-full lg:w-1/2 flex flex-col global-text z-20">
                        <span className="block h-1 w-12 bg-molten mb-6"></span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-black uppercase tracking-tight leading-[1.05] mb-8">
                            Global Reach. <br />
                            <span className="text-void text-transparent" style={{ WebkitTextStroke: "1px #FFFFFF" }}>Future Ready.</span>
                        </h2>
                        <p className="font-inter text-lg text-clean/70 leading-relaxed mb-6 border-l-4 border-clean/20 pl-4">
                            We command an ever-expanding global export footprint, actively supplying high-tension steel infrastructure to <strong className="text-molten">South Africa, Nepal, Philippines, Qatar, and Sri Lanka.</strong>
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 relative flex justify-center items-center z-10 scale-125 lg:scale-150">
                        <GlobeScene />
                    </div>
                </div>

                {/* Sustainability Badges */}
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">

                    {/* Badge 1 */}
                    <div className="sustainability-badge flex flex-col items-center justify-center p-12 lg:p-16 border-2 border-void bg-clean/5 hover:bg-clean/10 transition-colors backdrop-blur-xl group">
                        <Factory className="w-16 h-16 text-molten mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                        <h3 className="font-inter font-black text-2xl uppercase tracking-widest text-center mb-2">Mechanical</h3>
                        <span className="font-inter text-sm tracking-[0.2em] text-clean/50 uppercase text-center block">Descaling</span>
                    </div>

                    {/* Badge 2 */}
                    <div className="sustainability-badge flex flex-col items-center justify-center p-12 lg:p-16 border-2 border-void bg-clean/5 hover:bg-clean/10 transition-colors backdrop-blur-xl group">
                        <Leaf className="w-16 h-16 text-molten mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                        <h3 className="font-inter font-black text-2xl uppercase tracking-widest text-center mb-2">Induction</h3>
                        <span className="font-inter text-sm tracking-[0.2em] text-clean/50 uppercase text-center block">Heating</span>
                    </div>

                    {/* Badge 3 */}
                    <div className="sustainability-badge flex flex-col items-center justify-center p-12 lg:p-16 border-2 border-molten bg-clean/5 hover:bg-molten/10 transition-colors backdrop-blur-xl group">
                        <Droplets className="w-16 h-16 text-molten mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                        <h3 className="font-inter font-black text-2xl uppercase tracking-widest text-center mb-2">Zero Liquid</h3>
                        <span className="font-inter text-sm tracking-[0.2em] text-clean/80 uppercase text-center block">Discharge</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
