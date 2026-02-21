"use client";

export default function ProductSpecs() {
    return (
        <section className="py-20 bg-void text-titanium">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-oswald uppercase mb-12">
                    Technical Blueprint
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* LRPC Strands */}
                    <div className="border border-silver/20 p-8 rounded-none hover:border-molten transition-colors">
                        <h3 className="text-2xl font-oswald text-molten mb-4">LRPC Strands</h3>
                        <ul className="font-space text-silver space-y-2">
                            <li><strong className="text-titanium">Standard:</strong> IS: 14268</li>
                            <li><strong className="text-titanium">Application:</strong> Bridges, Flyovers</li>
                            <li><strong className="text-titanium">Grade:</strong> K-19 Class II</li>
                        </ul>
                    </div>

                    {/* PC Wire */}
                    <div className="border border-silver/20 p-8 rounded-none hover:border-molten transition-colors">
                        <h3 className="text-2xl font-oswald text-molten mb-4">PC Wire</h3>
                        <ul className="font-space text-silver space-y-2">
                            <li><strong className="text-titanium">Standard:</strong> IS: 6003</li>
                            <li><strong className="text-titanium">Application:</strong> Railway Sleepers</li>
                            <li><strong className="text-titanium">Raw Material:</strong> HC82A (Imported)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
