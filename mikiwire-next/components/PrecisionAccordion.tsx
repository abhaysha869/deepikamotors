"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const products = [
    {
        title: "PC Strands (Low Relaxation)",
        code: "IS: 14268",
        raw: "Grade HC82A, 5.5mm High Carbon Steel Wire Rod",
        desc: "The critical reinforcement for Metro rails, Flyovers, Silos, and Bridges.",
        sourcing: "Imported from globally trusted leaders like B&L International."
    },
    {
        title: "PC Wire",
        code: "IS: 6003",
        raw: "Grade HC82A, High Carbon Steel Wire Rod",
        desc: "The fundamental strength component for Railway Sleepers and Electric Poles.",
        sourcing: "Sourced through ultra-refined supply chains."
    },
    {
        title: "Spring Steel Wire",
        code: "IS: 4454",
        raw: "1.2mm to 11mm diameter (Grade 2 & 3)",
        desc: "Precision calibration for Automotive springs and Mattress springs.",
        sourcing: "Manufactured with advanced induction heating."
    }
];

export default function PrecisionAccordion() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [openIndex, setOpenIndex] = useState<number>(0);

    useGSAP(() => {
        gsap.from(".accordion-item", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            },
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
        });

        gsap.from(".heading-text", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="products" className="bg-clean text-void w-full py-24 lg:py-40">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">

                {/* Left: Section Info */}
                <div className="w-full lg:w-1/3 flex flex-col justify-start heading-text">
                    <span className="block h-1 w-12 bg-molten mb-6"></span>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-inter font-black uppercase tracking-tight leading-[1.1] mb-6 max-w-sm">
                        Precision <br />
                        <span className="text-void/40">Engineered Steel.</span>
                    </h2>
                    <p className="font-inter text-lg text-void/80 leading-relaxed mb-6 border-l-4 border-molten pl-4">
                        We manufacture the blueprint of modernity. Built with uncompromising strictness against international IS Codes and high-grade raw carbon sourcing.
                    </p>
                    <div className="p-4 border border-void/10 bg-void/5 inline-block">
                        <span className="font-inter text-xs tracking-widest text-molten uppercase block mb-1">Trusted Raw Sourcing</span>
                        <strong className="font-inter font-bold text-void">Grade HC82A</strong>
                    </div>
                </div>

                {/* Right: The Accordion */}
                <div className="w-full lg:w-2/3 flex flex-col gap-[1px] bg-void/20">
                    {products.map((product, idx) => (
                        <div
                            key={product.code}
                            className="accordion-item bg-clean border border-void/10 flex flex-col overflow-hidden transition-all duration-500 hover:bg-void/5"
                        >
                            {/* Accordion Header */}
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                className="w-full text-left px-8 py-8 md:py-10 flex items-center justify-between group focus:outline-none"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                                    <span className="font-inter font-bold text-molten tracking-widest uppercase md:w-32">
                                        {product.code}
                                    </span>
                                    <h3 className="font-inter text-2xl md:text-3xl font-black uppercase tracking-wide group-hover:pl-2 transition-all duration-300">
                                        {product.title}
                                    </h3>
                                </div>
                                <div className="text-void border border-void/20 p-2 rounded-full group-hover:bg-void group-hover:text-clean transition-colors">
                                    {openIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                                </div>
                            </button>

                            {/* Accordion Body */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out`}
                                style={{ maxHeight: openIndex === idx ? "400px" : "0", opacity: openIndex === idx ? 1 : 0 }}
                            >
                                <div className="px-8 pb-10 pt-2 flex flex-col md:flex-row gap-8 md:gap-12 border-t border-void/5 mx-8">
                                    <div className="flex-1">
                                        <h4 className="font-inter text-xs tracking-[0.2em] uppercase text-void/50 mb-2">Raw Material</h4>
                                        <p className="font-inter font-bold text-lg text-void border-l-2 border-molten pl-3">
                                            {product.raw}
                                        </p>
                                    </div>
                                    <div className="flex-[2]">
                                        <h4 className="font-inter text-xs tracking-[0.2em] uppercase text-void/50 mb-2">Application & Sourcing</h4>
                                        <p className="font-inter text-void/80 leading-relaxed mb-2">
                                            {product.desc}
                                        </p>
                                        <p className="font-inter text-sm text-molten font-medium italic">
                                            {product.sourcing}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
