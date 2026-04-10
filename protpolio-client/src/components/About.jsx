import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTypescript } from 'react-icons/si';

const About = () => {
  // আইকনগুলোর ডেটা এবং তাদের শুরুর পজিশন (ডিগ্রি হিসেবে)
  const circularIcons = [
    { icon: <SiReact className="text-[#61DAFB] text-3xl" />, bg: "#1a1a1a", delay: 0, degree: 0 },
    { icon: <SiNextdotjs className="text-black text-3xl" />, bg: "white", delay: 0, degree: 90 },
    { icon: <SiTypescript className="text-[#3178C6] text-3xl" />, bg: "#00273f", delay: 0, degree: 180 },
    { icon: <span className="font-serif font-bold text-2xl text-white">AI</span>, bg: "#f29111", delay: 0, degree: 270 },
  ];

  return (
    <section className="min-h-screen bg-[#070b15] text-white py-20 px-6 relative overflow-hidden font-sans">
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT SIDE: Circular Motion Visuals */}
        <div className="relative flex justify-center items-center h-[500px]">
          
          {/* Main Orbit Path (Invisible Circle) */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-80 h-80 rounded-full border border-dashed border-white/5 flex items-center justify-center"
          >
            {circularIcons.map((item, index) => (
              <div
                key={index}
                className="absolute"
                style={{
                  transform: `rotate(${item.degree}deg) translateX(160px)`, // 160px হলো কক্ষপথের দূরত্ব
                }}
              >
                {/* আইকনগুলো যাতে নিজের জায়গায় উল্টো না হয়ে যায় তাই বিপরীত দিকে ঘুরানো হয়েছে */}
                <motion.div 
                   animate={{ rotate: -360 }} 
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="p-4 rounded-xl border border-white/10 shadow-2xl flex items-center justify-center"
                   style={{ background: item.bg, width: '60px', height: '60px' }}
                >
                  {item.icon}
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Center Content (Static) */}
          <div className="absolute z-20">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-56 h-56 rounded-full flex flex-col items-center justify-center shadow-[0_0_60px_rgba(139,92,246,0.4)]"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                border: '4px solid rgba(255,255,255,0.1)'
              }}
            >
              <h2 className="text-5xl font-bold tracking-tighter">03+</h2>
              <p className="text-[10px] uppercase tracking-[0.3em] font-semibold opacity-90 mt-1">
                Years Active
              </p>
            </motion.div>
          </div>

          {/* Glowing Background Glows */}
          <div className="absolute w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
        </div>

        {/* RIGHT SIDE: Content */}
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-cyan-400"></span>
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em]">Full Stack Developer</p>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              AKHI AKTER <br />
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent italic">
                RUHI.
              </span>
            </h1>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
             I am <span className="text-white font-bold italic">Akhi Akter Ruhi</span>, a passionate Full Stack Developer specializing in building scalable web applications. With 3+ years of experience, I blend code and creativity to deliver seamless digital experiences.
          </p>

          <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/10">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Core Skills</p>
              <p className="text-sm text-slate-200">Next.js, React, Node.js, MongoDB, TypeScript, Tailwind CSS.</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Location</p>
              <p className="text-sm text-slate-200">Raipur, Lakshmipur, Bangladesh — Working Worldwide.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-8 py-4 rounded-full font-bold text-sm shadow-[0_10px_20px_rgba(124,58,237,0.3)]"
            >
              CONNECT WITH ME
            </motion.button>

            <button className="group flex items-center gap-3">
              <div className="p-3 border border-white/20 rounded-full group-hover:border-cyan-400 transition-colors">
                <FaDownload className="text-white group-hover:text-cyan-400 transition-colors" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase text-slate-500 font-bold">Download</p>
                <p className="text-sm font-bold border-b border-transparent group-hover:border-white transition-all">AKHI_AKTER_RESUME.PDF</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;