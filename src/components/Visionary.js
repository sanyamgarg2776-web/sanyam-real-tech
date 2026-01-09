"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Visionary() {
    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                imgRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                        end: "bottom bottom",
                        scrub: 1,
                    },
                }
            );

            gsap.fromTo(
                contentRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-background"
        >
            {/* Left: Image & Name Block */}
            <div className="flex flex-col space-y-6">
                <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
                    <div ref={imgRef} className="w-full h-full relative">
                        <img
                            src="/director.jpg"
                            alt="The Visionary"
                            className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 border border-gold/20" />
                    </div>
                </div>

                {/* Director's Name Block - CENTERED */}
                <div className="text-center w-full pt-2">
                    <h3 className="font-serif text-white text-xl md:text-2xl leading-none mb-2">
                        Suresh Kumar
                    </h3>
                    <p className="font-sans text-gold text-xs tracking-[0.3em] uppercase inline-block border-t border-gold/30 pt-2">
                        Managing Director
                    </p>
                </div>
            </div>

            {/* Right: Text */}
            <div ref={contentRef} className="flex flex-col justify-center space-y-8">
                <h2 className="font-serif text-5xl md:text-7xl text-gold">
                    THE VISIONARY
                </h2>
                <blockquote className="font-serif text-2xl md:text-4xl text-white leading-tight font-bold uppercase tracking-wide">
                    &quot;Curating Wealth. Defining Skylines.&quot;
                </blockquote>
                <div className="font-sans text-gray-400 text-lg leading-relaxed max-w-xl space-y-6">
                    <p>
                        Our foundation is built on over 20 years of unwavering trust. Originating as &apos;Garg Properties&apos;, we have long been the silent force behind some of Bathinda&apos;s most significant land acquisitions. Today, we evolve into <span className="text-white font-bold">Sanyam Real Tech</span>—carrying forward a legacy of two decades while embracing a new era of premium wealth management. We are not new to this industry; we are the veterans redefining it.
                    </p>
                    <p>
                        Our expertise now spans across high-value residential townships, commercial hubs, and strategic industrial corridors. We do not just facilitate transactions; we provide deep-market analysis and legal clarity to ensure your investments yield generational returns. In a market often driven by speculation, Sanyam Real Tech stands as a fortress of certainty, transparency, and high growth.
                    </p>
                </div>
                <div className="w-24 h-[1px] bg-white/20" />
            </div>
        </section>
    );
}
