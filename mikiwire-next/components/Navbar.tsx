"use client";

import { useState, useEffect } from "react";
import { Menu, X, Hexagon } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Corporate Profile", href: "#profile" },
        { name: "Manufacturing", href: "#units" },
        { name: "Products", href: "#products" },
        { name: "Global Trade", href: "#supply-chain" },
        { name: "Sustainability", href: "#sustainability" },
        { name: "CSR", href: "#csr" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? "bg-midnight/90 backdrop-blur-lg border-b border-steel/30 shadow-2xl py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
                {/* Logo area */}
                <a href="#" className="flex items-center gap-3 group z-50">
                    <Hexagon className="w-9 h-9 text-gold group-hover:rotate-180 transition-transform duration-700" />
                    <div className="flex flex-col">
                        <span className="font-playfair text-xl font-bold tracking-wider text-pearl uppercase leading-none">
                            Miki Wire
                        </span>
                        <span className="font-inter text-[0.65rem] tracking-[0.25em] text-slate-400 uppercase mt-1">
                            The Miki Group
                        </span>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-inter text-sm font-medium text-slate-300 hover:text-gold transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="ml-6 px-6 py-2.5 bg-royal border border-steel/50 rounded-sm font-inter text-sm font-medium text-pearl hover:bg-gold hover:text-midnight hover:border-gold transition-all duration-300 shadow-md"
                    >
                        Get in Touch
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-pearl z-50 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Navigation Dropdown */}
                <div
                    className={`absolute top-0 left-0 w-full h-screen bg-midnight/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 transition-all duration-500 lg:hidden ${isMobileMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                        }`}
                >
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="font-playfair text-2xl font-medium text-pearl hover:text-gold transition-colors"
                            style={{
                                transitionDelay: `${index * 50}ms`,
                                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                                opacity: isMobileMenuOpen ? 1 : 0,
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}
