"use client";

export default function GlobalGlobe() {
    return (
        <section className="h-screen bg-void text-titanium flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('/globe-grid.png')] bg-cover"></div>

            <div className="z-10 text-center">
                <h2 className="text-4xl md:text-7xl font-oswald uppercase mb-4">
                    Global Trade
                </h2>
                <p className="font-space text-molten text-lg tracking-widest uppercase">
                    India • Nepal • Qatar • Philippines • Sri Lanka
                </p>
            </div>

            <div className="mt-12 w-64 h-64 md:w-96 md:h-96 rounded-full border border-molten/30 flex items-center justify-center animate-spin-slow">
                <span className="text-silver/50 font-oswald">[ 3D Globe Visualization ]</span>
            </div>
        </section>
    );
}
