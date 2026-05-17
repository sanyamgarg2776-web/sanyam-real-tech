"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);



// Map colonies to objects with their specific images from public folder
const partners = [
    { name: "KANHIYA'S GREEN CITY (PHASE-III & IV)", img: "/KANHIYA'S GREEN CITY (PHASE-III & IV).png" },
    { name: "KANHIYA'S LEO'Z GREEN CITY", img: "/KANHIYA'S LEO'Z GREEN CITY.png" },
    { name: "KANHIYA'S WAZIR-E-BAGH", img: "/KANHIYA'S WAZIR-E-BAGH.jpeg" },
    { name: "KANHIYA'S AASHIANA GREEN CITY", img: "/KANHIYA'S AASHIANA GREEN CITY.png" },
    { name: "KANHIYA'S GREEN CITY SQUARE", img: "/KANHIYA'S GREEN CITY SQUARE.jpg" },
    { name: "KANHIYA'S GREEN CITY (PHASE-I & II)", img: "/KANHIYA'S GREEN CITY (PHASE-I & II).png" },
    { name: "PEE JAY PANORAMA", img: "/PEE JAY PANORAMA.jpg" },
    { name: "PEE JAY PINNACLE 54", img: "/PEE JAY PINNACLE 54.jpg" },
    { name: "PEE JAY PARK PANORAMA", img: "/PEE JAY PARK PANORAMA.jpeg" },
    { name: "AMOHA LEAF", img: "/AMOHA LEAF.jpg" },
    { name: "AMOHA GARDENS", img: "/AMOHA GARDENS.jpg" },
    { name: "URBAN GREEN", img: "/URBAN GREEN.jpg" },
    { name: "HYDE PARK", img: "/HYDE PARK.png" },
    { name: "ALVISTA MART", img: "/ALVISTA MART.jpeg" },
    { name: "ALVISTA TECHPARK", img: "/ALVISTA TECHPARK.jpeg" },
    { name: "ALVISTA BALAJI ENCLAVE PHASE-II", img: "/ALVISTA BALAJI ENCLAVE PHASE-II.jpeg" },
    { name: "ALVISTA TIME SQUARE", img: "/ALVISTA TIME SQUARE.jpeg" },
    { name: "ANANDA CITY", img: "/ANANDA CITY.jpg" },
    { name: "ANANDAM ESTATES", img: "/ANANDAM ESTATES.jpg" },
    { name: "DREAM VALLEY", img: "/DREAM VALLEY.jpg" },
    { name: "PARIS CITY", img: "/PARIS CITY.jpg" },
    { name: "RICHMOND ESTATE", img: "/RICHMOND ESTATE.jpg" },
    { name: "PUNJABI BAGH", img: "/PUNJABI BAGH.jpg" },
    { name: "SURYA ENCLAVE", img: "/SURYA ENCLAVE.jpg" },
    { name: "SHEESH MAHAL HOMES", img: "/SHEESH MAHAL HOMES.jpg" },
    { name: "SHRI MANOHAR ENCLAVE", img: "/SHRI MANOHAR ENCLAVE.jpg" },
];

// Double for seamless loop
const marqueeItems = [...partners, ...partners];

export default function Portfolio() {
    const wrapperRef = useRef(null);
    const marqueeRef = useRef(null);

    useEffect(() => {
        let marqueeCtx = gsap.context(() => {
            gsap.to(marqueeRef.current, {
                xPercent: -50,
                ease: "none",
                duration: 60,
                repeat: -1,
            });
        }, wrapperRef);

        return () => marqueeCtx.revert();
    }, []);

    return (
        <section ref={wrapperRef} className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
                <h2 className="font-serif text-4xl md:text-5xl text-white">
                    Key <span className="italic text-gray-500">Collaborations</span>
                </h2>
                <div className="hidden md:block w-32 h-[1px] bg-gold mb-4" />
            </div>

            {/* Marquee Container */}
            <div className="w-full overflow-hidden">
                <div ref={marqueeRef} className="flex space-x-8 w-max pl-6">
                    {marqueeItems.map((item, index) => (
                        <div key={index} className="relative w-[300px] md:w-[400px] h-[250px] md:h-[300px] bg-[#111] flex-shrink-0 border border-white/5 group">
                            <Image
                                src={item.img}
                                alt={item.name}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                                <h3 className="text-white font-serif text-xl md:text-2xl text-center tracking-wider uppercase border border-white px-4 py-2 bg-black/50 backdrop-blur-sm max-w-[90%]">
                                    {item.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
