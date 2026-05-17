"use client";
import React from "react";

export default function Contact() {
    return (
        <section className="py-32 px-6 md:px-12 bg-black border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">BEGIN THE CONVERSATION</h2>
                <p className="font-sans text-gray-400">Exclusive service for exclusive individuals.</p>
            </div>

            <form className="max-w-2xl mx-auto space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative">
                        <input
                            suppressHydrationWarning
                            type="text"
                            placeholder="NAME"
                            className="w-full bg-transparent border-b border-white/20 py-4 text-white font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-gray-600"
                        />
                    </div>
                    <div className="relative">
                        <input
                            suppressHydrationWarning
                            type="email"
                            placeholder="EMAIL"
                            className="w-full bg-transparent border-b border-white/20 py-4 text-white font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-gray-600"
                        />
                    </div>
                </div>

                <div className="relative">
                    <input
                        suppressHydrationWarning
                        type="text"
                        placeholder="PHONE"
                        className="w-full bg-transparent border-b border-white/20 py-4 text-white font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-gray-600"
                    />
                </div>

                <div className="relative">
                    <textarea
                        suppressHydrationWarning
                        rows={1}
                        placeholder="INQUIRY"
                        className="w-full bg-transparent border-b border-white/20 py-4 text-white font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-gray-600 resize-none"
                    />
                </div>

                <div className="pt-8 text-center">
                    <button
                        type="button"
                        className="px-12 py-4 border border-gold text-gold font-sans tracking-[0.2em] hover:bg-gold hover:text-black transition-all duration-300"
                    >
                        SUBMIT
                    </button>
                </div>
            </form>

            <footer className="mt-32 flex flex-col md:flex-row justify-between items-center md:items-end border-t border-white/5 pt-12 text-xs text-gray-500 font-sans tracking-widest uppercase gap-y-6">
                <div className="text-center md:text-left">
                    <p className="mb-2 text-white font-bold">Sanyam Real Tech</p>
                    <p>SCO-17, Park Panorama,</p>
                    <p>Bathinda, Punjab.</p>
                    <p className="mt-4 text-gold hover:text-white transition-colors">
                        <a href="tel:9814303945">+91 98143 03945</a>
                    </p>
                </div>
                <div className="flex space-x-8">
                    <a
                        href="https://www.instagram.com/sanyamrealtech_?igsh=NXk0MHFndHlubnl1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:text-gold transition-colors"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://www.facebook.com/share/1An4sEFH1P/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:text-gold transition-colors"
                    >
                        Facebook
                    </a>
                </div>
            </footer>
        </section>
    );
}
