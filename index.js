import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Play, MessageCircle, 
  Settings, HardHat, Pickaxe, ChevronRight, ShoppingCart, Globe
} from 'lucide-react';

export default function NammaWebProject() {
  const [isHovered, setIsHovered] = useState(false);
  
  const whatsappNumber = "919241527429";
  const mainMessage = encodeURIComponent("Hi Namma Web! I'm interested in a website like C.R Technolagies. What is the cost for an interactive e-commerce website?");
  const waUrl = `https://wa.me/${whatsappNumber}?text=${mainMessage}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
      <Head>
        <title>C.R TECHNOLAGIES | Engineering Excellence</title>
        <meta name="description" content="Structural Fabrication and Maintenance in Bangalore" />
      </Head>

      {/* --- DEMO HEADER --- */}
      <div className="bg-indigo-600 text-white text-[10px] uppercase tracking-[0.3em] py-2 text-center font-bold">
        Live Demo Developed by Namma Web LLP • Nagasandra
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0f172a] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px]"
          />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border border-blue-400/30 rounded-full text-blue-400 text-sm mb-6 bg-blue-400/10"
          >
            ISO Standards Maintenance & Fabrication
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter"
          >
            C.R <span className="text-blue-500">TECHNOLAGIES</span>
          </motion.h1>
          <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            Specializing in Structural Fabrication, Erection, Pipelines, and Industrial Maintenance Works.
          </p>
          
          <motion.div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href="#services" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2">
              View Services <ChevronRight size={18} />
            </a>
            <a href={waUrl} className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md border border-white/20 transition-all">
              Request Quote
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Expertise</h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-slate-500 max-w-md">Delivering high-precision engineering solutions for industrial infrastructure across Bangalore.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <HardHat className="text-blue-600" />, title: "Structural Fabrication", desc: "Heavy-duty steel structures built to exact technical specifications." },
            { icon: <Pickaxe className="text-blue-600" />, title: "Pipeline & Erection", desc: "Expert pipeline layout and site-level erection for industrial units." },
            { icon: <Settings className="text-blue-600" />, title: "General Maintenance", desc: "Comprehensive non-routine and routine maintenance for all plant types." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 transition-all"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- YOUTUBE GALLERY --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 italic">Work In Action</h2>
          <p className="text-slate-400">Watch our fabrication and engineering process videos</p>
        </div>
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="aspect-video rounded-3xl overflow-hidden border-4 border-white/5 shadow-2xl">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/vS-5D6Ym660" title="Fabrication" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="aspect-video rounded-3xl overflow-hidden border-4 border-white/5 shadow-2xl">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/3f3_pC8kP2M" title="Welding" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      {/* --- CONTACT & NAMMA WEB AD SECTION --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-[3rem] p-12 text-white flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-2">Praveen C.R (Unni)</h2>
            <p className="text-blue-200 mb-8 tracking-widest uppercase text-sm font-semibold">Proprietor • C.R Technolagies</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-xl">
                <Phone className="opacity-70" /> <span>+91 74835 17455 / 97436 70521</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <Mail className="opacity-70" /> <span>technolagies@gmail.com</span>
              </div>
              <div className="flex items-start gap-4 text-lg">
                <MapPin className="opacity-70 mt-1" /> 
                <span># 2, Rangaswamy Building, Nethaji Nagar, Bangalore - 560057</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 text-center">
            <ShoppingCart className="mx-auto mb-4 text-blue-300" size={48} />
            <h3 className="text-2xl font-bold mb-4">Want an E-commerce Website?</h3>
            <p className="text-blue-100 mb-6">Get a fully interactive store like this demo with payment integration.</p>
            <a href={waUrl} className="block w-full py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors">
              Ask About Cost & Features
            </a>
          </div>
        </div>
      </section>

      {/* --- WHATSAPP FLOATING BUTTON --- */}
      <motion.div 
        className="fixed bottom-8 right-8 z-[1000]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
              className="absolute bottom-20 right-0 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 w-64 text-sm"
            >
              <p className="font-bold text-slate-800 mb-1">Build your own website! 🚀</p>
              <p className="text-slate-500">Message <strong>9241527429</strong> to discuss e-commerce pricing and designs.</p>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.a
          href={waUrl}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="bg-green-500 text-white w-16 h-16 rounded-full shadow-[0_10px_40px_rgba(34,197,94,0.5)] flex items-center justify-center hover:bg-green-600 transition-colors"
        >
          <MessageCircle size={32} fill="white" />
        </motion.a>
      </motion.div>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm mb-2 font-medium tracking-widest">© {new Date().getFullYear()} C.R TECHNOLAGIES</p>
          <p className="text-slate-600 font-bold uppercase text-xs">
            Copyrights reserved by <span className="text-blue-600 italic">Namma Web LLP, Nagasandra, Bangalore</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
