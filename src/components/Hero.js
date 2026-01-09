"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const subTextRef = useRef(null);
    const lineRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Staggered heavy reveal
            tl.fromTo(
                logoRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 1, delay: 0.5 }
            )
                .fromTo(
                    textRef.current,
                    { y: 100, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.5 },
                    "-=0.5"
                )
                .fromTo(
                    subTextRef.current,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.5 },
                    "-=1.2"
                )
                .fromTo(
                    lineRef.current,
                    { scaleX: 0, opacity: 0 },
                    { scaleX: 1, opacity: 1, duration: 1.5 },
                    "-=1"
                );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black"
        >
            {/* Background Image with Heavy Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg.avif"
                    alt="Luxury Architecture"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Top Left Logo - GIANT SIZE UPDATE */}
            <div className="absolute top-8 left-8 z-20">
                {/* Increased width to 80 (20rem/320px) and removed strict height constraint for natural scaling */}
                <div ref={logoRef} className="relative w-80 h-32">
                    <img
                        src="/logo.png"
                        alt="Sanyam Real Tech"
                        className="h-full w-full object-contain object-left"
                    />
                </div>
            </div>

            {/* Center Content */}
            <div className="relative z-10 text-center flex flex-col items-center px-4">
                <h1
                    ref={textRef}
                    className="font-serif text-5xl md:text-7xl lg:text-9xl text-white tracking-tighter leading-none mb-4"
                >
                    SANYAM REAL TECH
                </h1>
                <p
                    ref={subTextRef}
                    className="font-sans text-gray-400 text-sm md:text-xl tracking-[0.3em] uppercase mb-12"
                >
                    Premium Wealth Management
                </p>

                {/* Gold Line */}
                <div
                    ref={lineRef}
                    className="w-24 md:w-48 h-[1px] bg-gold"
                />
            </div>
        </section>
    );
}
