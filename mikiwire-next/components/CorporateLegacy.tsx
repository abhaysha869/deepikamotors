"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CorporateLegacy() {
    const sectionRef = useRef(null);

    useEffect(() => {
        // Placeholder for GSAP Parallax Logic
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-void text-titanium overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-oswald uppercase mb-12 text-center">
                    Corporate Legacy <span className="text-molten">.</span>
                </h2>
                {/* Placeholder Content */}
                <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-10">
                    {/* Timeline Cards will go here */}
                    <div className="min-w-[300px] h-[400px] bg-gunmetal/50 border border-silver/10 p-6 rounded-lg backdrop-blur-sm">
                        <h3 className="text-2xl font-oswald text-molten">1970s</h3>
                        <p className="mt-4 font-space text-silver">Foundations laid for industrial excellence.</p>
                    </div>
                    <div className="min-w-[300px] h-[400px] bg-gunmetal/50 border border-silver/10 p-6 rounded-lg backdrop-blur-sm">
                        <h3 className="text-2xl font-oswald text-molten">1987</h3>
                        <p className="mt-4 font-space text-silver">Incorporation of Miki Wire Works Pvt Ltd.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
