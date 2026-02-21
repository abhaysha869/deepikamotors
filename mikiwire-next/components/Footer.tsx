"use client";

import { Hexagon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-void text-clean py-16 border-t border-void/10 relative z-20 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start gap-12">

                {/* Brand & Address */}
                <div className="w-full md:w-1/3 flex flex-col items-start gap-4">
                    <a href="#" className="flex items-center gap-3">
                        <Hexagon className="w-8 h-8 text-molten" />
                        <span className="font-inter text-xl font-black uppercase tracking-widest text-clean">Miki Group</span>
                    </a>

                    <div className="mt-4 font-inter text-sm text-clean/50 leading-loose">
                        <p className="font-bold text-clean mb-2 uppercase tracking-widest">Registered Office</p>
                        <p>Miki Wire Works Pvt Ltd</p>
                        <p>J.S. Lane, Gandhi Chowk,</p>
                        <p>Upper Bazar, Ranchi, Jharkhand – 834001</p>
                    </div>
                </div>

                {/* Legal / Corporate Info */}
                <div className="w-full md:w-1/3 flex flex-col items-start gap-4">
                    <div className="font-inter text-sm text-clean/50 leading-loose">
                        <p className="font-bold text-clean mb-2 uppercase tracking-widest">Corporate Profile</p>
                        <p className="text-molten tracking-wide">CIN: U27104JH1987PTC002782</p>
                        <p>Authorized Capital: ₹2.25 Cr</p>
                        <p>Paid-up Capital: ₹1.40 Cr</p>
                    </div>
                </div>

                {/* Contact */}
                <div className="w-full md:w-1/3 flex flex-col items-start gap-4">
                    <div className="font-inter text-sm text-clean/50 leading-loose">
                        <p className="font-bold text-clean mb-2 uppercase tracking-widest">Connect</p>
                        <p>contact@mikiwire.com</p>
                        <p>sales@mikiwire.com</p>
                    </div>
                </div>

            </div>

            <div className="container mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-clean/10 flex justify-between items-center text-xs font-inter text-clean/30 uppercase tracking-widest">
                <p>&copy; 2026 Miki Wire Works Pvt Ltd. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-molten transition-colors">Privacy</a>
                    <a href="#" className="hover:text-molten transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    );
}
