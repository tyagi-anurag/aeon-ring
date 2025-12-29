'use client';

import { useState } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });

export default function Home() {
  const [activeColor, setActiveColor] = useState("#e0e7ff");

  const colors = [
    { name: "QUANTUM", hex: "#e0e7ff", bg: "bg-blue-100" },
    { name: "MIDNIGHT", hex: "#312e81", bg: "bg-indigo-900" },
    { name: "EMBER",    hex: "#d97706", bg: "bg-amber-600" },
  ];

  return (
    <SmoothScroll>
      <main className="relative z-10 w-full overflow-hidden bg-transparent pointer-events-none text-white selection:bg-blue-500 selection:text-white">
        
        <Scene color={activeColor} />

        {/* --- SECTION 1: HERO --- */}
        <section className="relative h-screen w-full flex flex-col justify-between p-6 md:p-20 select-none">
          <div className="flex justify-between items-start pointer-events-auto">
            <h1 className="text-2xl md:text-4xl font-[family-name:var(--font-orbitron)] font-bold tracking-tighter cursor-pointer transition-colors duration-300 hover:text-blue-400">
              AEON
            </h1>
            <div className="text-[10px] md:text-xs font-mono text-right opacity-60">
              SYSTEM: ONLINE<br/>BATTERY: 100%
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] mix-blend-overlay opacity-50">
            <h1 className="text-[20vw] font-bold leading-none tracking-tighter text-center">RING</h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-6 md:gap-10 pb-10">
            <div className="pointer-events-auto w-full md:w-auto">
              <p className="text-[10px] md:text-xs font-mono mb-4 opacity-50 tracking-widest uppercase">Select Finish</p>
              <div className="flex gap-4">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setActiveColor(c.hex)}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 transition-all duration-300 hover:scale-125 hover:border-white flex items-center justify-center group ${
                      activeColor === c.hex ? 'ring-2 ring-white scale-110' : ''
                    }`}
                  >
                    <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${c.bg} blur-[2px] group-hover:blur-0 transition-all`} />
                  </button>
                ))}
              </div>
            </div>
            <div className="text-left md:text-right max-w-md pointer-events-auto">
              <p className="text-lg md:text-2xl font-light leading-snug hover:text-blue-200 transition-colors duration-300 cursor-default">
                The first wearable forged from <span className="text-blue-300 font-bold">liquid sapphire</span>.
              </p>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: MATERIAL (FIXED RESPONSIVENESS) --- */}
        <section className="relative min-h-screen w-full flex flex-col md:flex-row">
          
          {/* Spacer: Reduced height on mobile, Proper width on desktop */}
          <div className="w-full h-[30vh] md:h-auto md:w-1/2"></div>
          
          {/* Content Side: Adjusted padding and font sizes for tablets */}
          <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-24 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 backdrop-blur-sm bg-black/20">
            <div className="mb-8 md:mb-10 pointer-events-auto">
              <span className="text-xs font-mono border border-white/30 px-3 py-1 rounded-full hover:bg-white hover:text-black transition-colors cursor-default">
                MATERIALITY
              </span>
            </div>
            
            {/* FIXED TEXT SIZE: text-5xl on mobile, text-6xl on tablet, text-8xl on desktop */}
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-[family-name:var(--font-orbitron)] mb-6 md:mb-10 leading-[0.9] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 transition-all duration-500 cursor-default pointer-events-auto">
              ZERO<br/>GRAVITY
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-md hover:text-white transition-colors duration-300 pointer-events-auto">
              The AEON ring is crafted from a proprietary glass-ceramic composite that feels weightless.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 group pointer-events-auto">
              <div className="transition-all duration-300 hover:translate-x-2 cursor-crosshair">
                <h3 className="text-3xl font-bold group-hover:text-blue-400 transition-colors">4g</h3>
                <p className="text-xs font-mono opacity-50 mt-1">TOTAL WEIGHT</p>
              </div>
              <div className="transition-all duration-300 hover:translate-x-2 cursor-crosshair delay-75">
                <h3 className="text-3xl font-bold group-hover:text-blue-400 transition-colors">9.5</h3>
                <p className="text-xs font-mono opacity-50 mt-1">MOHS HARDNESS</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: SENSORS --- */}
        <section className="relative h-screen w-full flex items-center justify-center text-center pointer-events-none overflow-hidden">
          <h2 className="text-[18vw] font-bold font-[family-name:var(--font-orbitron)] text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto hover:text-white/10 transition-colors duration-500">
            SENSE
          </h2>
          <div className="absolute top-1/3 left-10 md:left-1/4 text-xs font-mono text-blue-300 animate-pulse">[ SCANNING ]</div>
          
          <div className="max-w-xl z-20 mt-[20vh] md:mt-[40vh] p-6 pointer-events-auto">
            <p className="text-2xl md:text-4xl font-light leading-tight hover:text-blue-300 transition-colors duration-500">
              "It knows you better than you know yourself."
            </p>
          </div>
        </section>

        {/* --- SECTION 4: SECURITY --- */}
        <section className="relative min-h-screen w-full p-6 md:p-12 lg:p-24 flex flex-col justify-center">
          <div className="border-t border-white/20 pt-10 mb-10 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-orbitron)] hover:text-blue-400 transition-colors duration-500 pointer-events-auto inline-block">
              ACCESS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pointer-events-auto">
            {[
              { title: "NFC PAYMENT", desc: "Worldwide Accepted" },
              { title: "TESLA KEY", desc: "Native Car Support" },
              { title: "SMART LOCK", desc: "Auto-Unlock Home" }
            ].map((item, i) => (
              <div key={i} className="group aspect-video bg-white/5 border border-white/10 p-8 flex flex-col justify-end transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-8 h-8 border border-white/30 rounded-full mb-auto group-hover:bg-white group-hover:scale-110 transition-all duration-300 z-10" />
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-blue-300 transition-colors z-10">{item.title}</h3>
                <p className="text-sm font-mono opacity-50 z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- FOOTER --- */}
        <section className="relative h-[80vh] w-full flex flex-col items-center justify-center text-center border-t border-white/10 bg-gradient-to-b from-transparent to-black/80">
          <div className="pointer-events-auto z-20 p-6">
            <p className="text-xs font-mono mb-6 tracking-[0.5em] text-blue-400 hover:text-white transition-colors duration-300">LIMITED RELEASE</p>
            <h2 className="text-6xl md:text-[12vw] font-bold font-[family-name:var(--font-orbitron)] leading-none mb-10 mix-blend-overlay hover:mix-blend-normal hover:text-white transition-all duration-700 cursor-default">
              AEON
            </h2>
            
            <button className="px-12 py-5 md:px-16 md:py-6 bg-white text-black font-bold text-lg md:text-xl rounded-full transition-all duration-500 hover:scale-110 hover:shadow-[0_0_50px_rgba(255,255,255,0.8)] hover:tracking-widest">
              PRE-ORDER NOW
            </button>
          </div>
          
          <div className="absolute bottom-10 w-full px-10 flex justify-between text-[10px] md:text-xs font-mono opacity-40">
            <span>© 2030 AEON LABS</span>
            <span>DESIGNED IN TOKYO</span>
          </div>
        </section>

      </main>
    </SmoothScroll>
  );
}