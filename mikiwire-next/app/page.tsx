import React from 'react';
import { ArrowRight, Globe, ShieldCheck, Factory, Zap } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#ff4500] selection:text-white">

      {/* 1. HERO SECTION (Cinematic Hook) */}
      <section className="relative h-screen flex flex-col justify-center px-8 md:px-20 bg-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] z-0"></div>
        <div className="relative z-10 max-w-5xl mt-20">
          <p className="text-[#ff4500] font-mono tracking-[0.2em] mb-4 text-sm uppercase">The Miki Group • Est. 1987</p>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight mb-8">
            THE BACKBONE OF <br /> INDIA&apos;S <span className="text-gray-500">INFRASTRUCTURE.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-12">
            Pioneering the manufacturing of high-carbon steel wires and PC strands. Powering railways, bridges, and global heavy industry with zero-compromise precision.
          </p>
        </div>

        {/* Hero Data HUD */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl border-t border-gray-800 pt-8 mt-12">
          <div>
            <h3 className="text-4xl font-light mb-1">₹242 Cr+</h3>
            <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Annual Revenue (FY25)</p>
          </div>
          <div>
            <h3 className="text-4xl font-light mb-1">100k MT</h3>
            <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Manufacturing Capacity</p>
          </div>
          <div>
            <h3 className="text-4xl font-light mb-1">~20%</h3>
            <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Railway Sleeper Market Share</p>
          </div>
        </div>
      </section>

      {/* 2. LEADERSHIP & LEGACY */}
      <section className="py-32 px-8 md:px-20 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Decades of Engineering Excellence.</h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded in the late 1970s and formally incorporated in 1987, Miki Wire Works Pvt Ltd has grown from a visionary enterprise in Ranchi into a pan-India manufacturing powerhouse.
            </p>
            <div className="border-l-4 border-[#ff4500] pl-6 py-2">
              <h4 className="text-2xl font-bold">Mahesh Poddar</h4>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Founder & Director • Former Rajya Sabha MP</p>
              <p className="text-gray-700 italic">&quot;Driving the vision of a self-reliant, infrastructure-ready India.&quot;</p>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">Board of Directors: Nirmala Poddar, Pawan Kumar Pacheriwala (MD), Mrinmoy Sarkar (CEO).</p>
            </div>
          </div>
          <div className="relative h-[600px] bg-gray-100 flex items-center justify-center overflow-hidden">
            {/* Note: Ensure image_069e64.jpg is inside the public folder! */}
            <img src="/image_069e64.jpg" alt="Mahesh Poddar" className="object-cover w-full h-full grayscale hover:grayscale-0 transition duration-700" />
            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.1)]"></div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS (The Blueprint) */}
      <section className="py-32 px-8 md:px-20 bg-[#0a0a0a] border-y border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Precision Engineered Steel.</h2>
            <p className="text-gray-400">Manufactured using imported High Carbon Steel Wire Rods (Grade: HC82A, 5.5mm).</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111] p-8 border border-gray-800 hover:border-[#ff4500] transition-colors">
              <Factory className="text-[#ff4500] w-8 h-8 mb-6" />
              <h3 className="text-xl font-bold mb-2">PC Strands (Low Relaxation)</h3>
              <p className="text-[#ff4500] font-mono text-sm mb-4">Standard: IS 14268</p>
              <p className="text-gray-400 text-sm">Critical components for Metro railways, flyovers, silos, and major bridges.</p>
            </div>
            <div className="bg-[#111] p-8 border border-gray-800 hover:border-[#ff4500] transition-colors">
              <Zap className="text-[#ff4500] w-8 h-8 mb-6" />
              <h3 className="text-xl font-bold mb-2">Pre-stressed Concrete Wire</h3>
              <p className="text-[#ff4500] font-mono text-sm mb-4">Standard: IS 6003</p>
              <p className="text-gray-400 text-sm">Supplying 20% of Indian Railways&apos; sleeper wire requirements, plus electric concrete poles.</p>
            </div>
            <div className="bg-[#111] p-8 border border-gray-800 hover:border-[#ff4500] transition-colors">
              <ShieldCheck className="text-[#ff4500] w-8 h-8 mb-6" />
              <h3 className="text-xl font-bold mb-2">Spring Steel Wire</h3>
              <p className="text-[#ff4500] font-mono text-sm mb-4">Standard: IS 4454</p>
              <p className="text-gray-400 text-sm">High-grade wire (1.2mm to 11mm) utilized in automotive suspension and premium mattress springs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MANUFACTURING FOOTPRINT */}
      <section className="py-32 px-8 md:px-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Pan-India Strategic Presence.</h2>
          <div className="grid grid-cols-1 border-t border-l border-gray-800 md:grid-cols-4">

            <div className="p-8 border-b border-r border-gray-800 hover:bg-[#111] transition">
              <h4 className="text-xs text-[#ff4500] font-mono uppercase tracking-widest mb-2">HQ / North & East Hub</h4>
              <h3 className="text-xl font-bold mb-4">Miki Wire Works Pvt Ltd</h3>
              <p className="text-sm text-gray-500">Mahilong, Ranchi, Jharkhand – 835103</p>
            </div>

            <div className="p-8 border-b border-r border-gray-800 hover:bg-[#111] transition">
              <h4 className="text-xs text-[#ff4500] font-mono uppercase tracking-widest mb-2">South Hub</h4>
              <h3 className="text-xl font-bold mb-4">Miki Steel Works Pvt Ltd</h3>
              <p className="text-sm text-gray-500">KIADB Industrial Area, Attibele, Bangalore – 562107</p>
            </div>

            <div className="p-8 border-b border-r border-gray-800 hover:bg-[#111] transition">
              <h4 className="text-xs text-[#ff4500] font-mono uppercase tracking-widest mb-2">Coastal / Export Hub</h4>
              <h3 className="text-xl font-bold mb-4">Visakha Wire Ropes Ltd</h3>
              <p className="text-sm text-gray-500">Auto Nagar, Visakhapatnam, AP – 530012</p>
            </div>

            <div className="p-8 border-b border-r border-gray-800 hover:bg-[#111] transition">
              <h4 className="text-xs text-[#ff4500] font-mono uppercase tracking-widest mb-2">Central Hub</h4>
              <h3 className="text-xl font-bold mb-4">Shri Ram Wire Products Pvt Ltd</h3>
              <p className="text-sm text-gray-500">MIDC, Butibori, Nagpur, MH – 441122</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SUSTAINABILITY & GLOBAL REACH */}
      <section className="py-24 px-8 md:px-20 bg-gradient-to-br from-[#050505] to-[#0a150a] border-t border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">The Green Route.</h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-green-900/30 p-2 rounded mr-4"><Globe className="text-green-500 w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-white">Mechanical Descaling</h4>
                  <p className="text-sm text-gray-400 mt-1">Eliminating hazardous acid pickling processes entirely.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-green-900/30 p-2 rounded mr-4"><Zap className="text-green-500 w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-white">Induction Heating</h4>
                  <p className="text-sm text-gray-400 mt-1">Replacing lead and furnace oil for zero liquid discharge compliance.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Global Trade.</h2>
            <p className="text-gray-400 mb-6">Strategic exports strengthening infrastructure across continents.</p>
            <div className="flex flex-wrap gap-3">
              {['South Africa', 'Nepal', 'Philippines', 'Qatar', 'Sri Lanka'].map(country => (
                <span key={country} className="px-4 py-2 border border-gray-700 rounded-full text-sm text-gray-300 bg-black">{country}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-8 md:px-20 bg-black border-t border-gray-900 text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-white font-bold mb-2">Miki Wire Works Pvt Ltd</h4>
            <p>J.S. Lane, Gandhi Chowk, Upper Bazar, Ranchi, Jharkhand – 834001</p>
          </div>
          <div className="md:text-right">
            <p className="font-mono">CIN: U27104JH1987PTC002782</p>
            <p>Auth Capital: ₹2.25 Cr | Paid-up: ₹1.40 Cr</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
