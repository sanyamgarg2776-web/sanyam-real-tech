"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, History, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const standards = [
    {
        id: 1,
        title: "Zero-Litigation Promise",
        desc: "We only deal in clean, legally verified assets. Your peace of mind is our non-negotiable priority.",
        icon: <ShieldCheck className="w-12 h-12 text-gold mb-4 mx-auto" />
    },
    {
        id: 2,
        title: "20-Year Legacy",
        desc: "Born from Garg Properties, we bring two decades of market dominance and deep local authority.",
        icon: <History className="w-12 h-12 text-gold mb-4 mx-auto" />
    },
    {
        id: 3,
        title: "High-Yield Strategy",
        desc: "We don't just sell plots; we structure investments designed for exponential appreciation.",
        icon: <TrendingUp className="w-12 h-12 text-gold mb-4 mx-auto" />
    }
];

export default function Standard() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".standard-card", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-gold mb-4">THE SANYAM STANDARD</h2>
                    <div className="w-24 h-[1px] bg-white/20 mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {standards.map((item) => (
                        <div key={item.id} className="standard-card p-8 border border-white/10 bg-black text-center hover:border-gold/50 transition-colors duration-500">
                            {item.icon}
                            <h3 className="font-serif text-2xl text-white mb-4">{item.title}</h3>
                            <p className="font-sans text-gray-400 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
