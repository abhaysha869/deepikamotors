"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Sustainability() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom center",
                onEnter: () => gsap.to("body", { backgroundColor: "#064e3b", duration: 1 }), // Forest Green
                onLeaveBack: () => gsap.to("body", { backgroundColor: "#0a0a0a", duration: 1 }) // Back to Void
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 text-titanium relative transition-colors duration-1000">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-oswald uppercase mb-12">
                    The Green Mode
                </h2>

                <div className="flex flex-wrap justify-center gap-10">
                    <div className="bg-white/5 p-8 backdrop-blur-sm rounded-xl">
                        <h3 className="text-2xl font-oswald mb-2 text-emerald-400">Mechanical Descaling</h3>
                        <p className="font-space opacity-80">Zero Acid Use. 100% Eco-friendly.</p>
                    </div>

                    <div className="bg-white/5 p-8 backdrop-blur-sm rounded-xl">
                        <h3 className="text-2xl font-oswald mb-2 text-emerald-400">Zero Liquid Discharge</h3>
                        <p className="font-space opacity-80">Complete water recycling system.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
