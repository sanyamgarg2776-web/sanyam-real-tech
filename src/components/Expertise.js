"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home, Building2, Factory, Scale, LineChart, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Updated Icons: changed base color to text-[#D4AF37] (Gold)
const services = [
    { id: 1, title: "Residential", icon: <Home className="w-16 h-16 text-[#D4AF37]" />, desc: "Curated luxury living spaces." },
    { id: 2, title: "Commercial", icon: <Building2 className="w-16 h-16 text-[#D4AF37]" />, desc: "High-yield asset acquisition." },
    { id: 3, title: "Industrial", icon: <Factory className="w-16 h-16 text-[#D4AF37]" />, desc: "Strategic logistics hubs." },
    { id: 4, title: "Legal Advisory", icon: <Scale className="w-16 h-16 text-[#D4AF37]" />, desc: "Seamless compliance & documentation." },
    { id: 5, title: "Market Analysis", icon: <LineChart className="w-16 h-16 text-[#D4AF37]" />, desc: "Data-driven investment insights." },
    { id: 6, title: "Legacy Protection", icon: <ShieldCheck className="w-16 h-16 text-[#D4AF37]" />, desc: "Securing wealth for generations." },
];

export default function Expertise() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".expert-card", {
                y: 50,
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, [])

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-12 bg-background relative z-10">
            <div className="mb-16">
                <h2 className="font-serif text-5xl md:text-6xl text-white mb-4">OUR EXPERTISE</h2>
                <div className="w-24 h-[1px] bg-gold" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="expert-card group relative p-12 bg-[#111] border border-white/5 h-full flex flex-col items-center text-center justify-center space-y-6
                       transition-all duration-500 cursor-pointer
                       hover:border-[#D4AF37] hover:bg-[#151515] hover:-translate-y-2 hover:shadow-[0_0_30px_-10px_rgba(212,175,55,0.3)]"
                    >
                        {/* Large Centered Icon - Gold by default now */}
                        <div className="mb-2">
                            {service.icon}
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                            <p className="font-sans text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
