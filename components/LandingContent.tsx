"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function LandingContent() {
  return (
    <div className="relative z-20 bg-[#050505] text-[#ededed]">
      {/* Decorative Top Border to separate canvas area */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00F2FF]/50 to-transparent" />
      
      {/* SECTION 1: ABOUT / THE MISSION */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-24 mx-auto max-w-7xl overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 sm:left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#00F2FF]/5 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h2 className="text-[10px] sm:text-sm font-mono tracking-widest text-[#FF8C00] mb-4 uppercase">
              // Core Precept 01
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-4 sm:mb-6 leading-tight">
              A NEXUS FOR <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FF] to-[#00A3FF]">
                STUDENT INNOVATORS
              </span>
            </h3>
            <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
              GEEKROOM JIMSEMTC is the premier technology society dedicated to fostering a culture of innovation, coding, and collaboration. We bridge the gap between academic theory and real-world tech through hackathons, workshops, and open-source contributions.
            </p>
            <div className="flex flex-row justify-center lg:justify-start gap-4">
              <div className="border border-white/10 p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm w-[120px] sm:w-[150px]">
                <div className="text-xl sm:text-2xl font-bold text-[#00F2FF] mb-1">500+</div>
                <div className="text-[9px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest">Active Members</div>
              </div>
              <div className="border border-white/10 p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm w-[120px] sm:w-[150px]">
                <div className="text-xl sm:text-2xl font-bold text-[#FF8C00] mb-1">20+</div>
                <div className="text-[9px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest">Hackathons </div>
              </div>
            </div>
          </motion.div>

          {/* Abstract visualizer card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[300px] sm:h-[400px] rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden group w-full max-w-md mx-auto lg:max-w-none"
          >
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:40px_40px]" />
            
            {/* Animated gradient orbs */}
            <div className="absolute -top-16 -right-16 sm:-top-24 sm:-right-24 w-48 h-48 sm:w-64 sm:h-64 bg-[#00F2FF]/20 blur-[60px] sm:blur-[80px] rounded-full group-hover:bg-[#00F2FF]/30 transition-colors duration-700" />
            <div className="absolute -bottom-16 -left-16 sm:-bottom-24 sm:-left-24 w-48 h-48 sm:w-64 sm:h-64 bg-[#FF8C00]/20 blur-[60px] sm:blur-[80px] rounded-full group-hover:bg-[#FF8C00]/30 transition-colors duration-700" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 text-center border border-white/5 m-4 rounded-xl backdrop-blur-md">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border border-[#00F2FF]/50 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-[0_0_15px_rgba(0,242,255,0.2)]">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#00F2FF] rounded-full animate-pulse" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Network Online</h4>
              <p className="font-mono text-[10px] sm:text-xs text-gray-500">Preparing for next Hackathon...</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: EXPERIENCES */}
      <section className="relative py-20 sm:py-24 bg-[#0A0A0A] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-24">
          <div className="text-center mb-12 sm:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter mb-4 uppercase"
            >
              Our Initiatives
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 font-mono text-xs sm:text-sm max-w-sm sm:max-w-2xl mx-auto px-4"
            >
              We drive technological excellence through hands-on learning, 
              competitive coding, and collaborative projects.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Hackathons",
                desc: "24-48 hour intensive coding competitions to solve real-world problems and build amazing products fast.",
                color: "from-[#00F2FF]/20 to-transparent",
                border: "hover:border-[#00F2FF]/50 focus:border-[#00F2FF]/50"
              },
              {
                title: "Workshops & Tech Talks",
                desc: "Expert-led sessions diving deep into Web3, AI/ML, Cloud Architecture, and advanced algorithms.",
                color: "from-[#FF8C00]/20 to-transparent",
                border: "hover:border-[#FF8C00]/50 focus:border-[#FF8C00]/50"
              },
              {
                title: "Open Source Projects",
                desc: "Collaborate on large-scale college projects, build your portfolio, and contribute to the community.",
                color: "from-[#B026FF]/20 to-transparent",
                border: "hover:border-[#B026FF]/50 focus:border-[#B026FF]/50"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#050505] overflow-hidden transition-all duration-300 ${feature.border}`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-bl ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full`} />
                
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 relative z-10">{feature.title}</h3>
                <p className="text-[13px] sm:text-sm text-gray-500 leading-relaxed relative z-10">
                  {feature.desc}
                </p>
                
                <div className="mt-6 sm:mt-8 relative z-10 flex items-center text-[10px] sm:text-xs font-mono text-gray-600 group-hover:text-white transition-colors cursor-pointer w-fit uppercase">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden px-4">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] border border-[#00F2FF]/30 rounded-full" />
          <div className="absolute w-[200px] h-[200px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] border border-[#FF8C00]/30 rounded-full" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 px-2 leading-tight uppercase">
            Become a part <br/> of Geekroom
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-10 max-w-sm sm:max-w-xl md:max-w-2xl mx-auto">
            Ready to push your limits? Join our community of student developers. Participate in hackathons, build massive projects, and learn together.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-black text-[13px] sm:text-base font-bold tracking-wide rounded-full hover:scale-105 hover:bg-[#00F2FF] hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all duration-300 w-full max-w-[280px] sm:w-auto uppercase"
          >
            Apply Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
