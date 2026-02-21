"use client";

export default function ManufacturingMap() {
    return (
        <section className="py-20 bg-gunmetal text-titanium relative">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-oswald uppercase mb-8">
                    Manufacturing Matrix
                </h2>
                <p className="font-space text-silver mb-12 max-w-2xl mx-auto">
                    Strategic units across India ensuring rapid delivery and localized support.
                </p>

                <div className="relative w-full h-[600px] bg-void/50 rounded-xl border border-silver/10 flex items-center justify-center">
                    <span className="text-molten font-oswald text-xl animate-pulse">
                        [ Interactive 3D Map Loading... ]
                    </span>
                    {/* Placeholder for India Map */}
                </div>
            </div>
        </section>
    );
}
