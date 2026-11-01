"use client";

import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.5) 0%, transparent 50%)`,
          }}
        />
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[48px_48px]"
          style={{
            transform: `translate(${mousePosition.x / 10}px, ${mousePosition.y / 10}px)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <span className="text-sm font-semibold text-blue-300 bg-blue-900/50 px-3 py-1 rounded-full backdrop-blur-sm border border-blue-700/50">
              Sábado 29 de Noviembre, 2025 • Santiago, Chile
            </span>
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="block bg-linear-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              DevFest
            </span>{' '}
            <span className="block text-white">
              Santiago 2025
            </span>
          </h1>
          <p className="text-lg text-gray-300 sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            El evento de tecnología más grande de la comunidad. Únete a expertos de la industria para charlas, talleres y networking en un día lleno de innovación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#agenda"
              className="group relative flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10">Ver Agenda</span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity" />
            </a>
            {/* <a
              href="#sponsors"
              className="flex items-center justify-center px-8 py-4 border-2 border-blue-400 text-base font-semibold rounded-lg text-blue-300 bg-white/10 backdrop-blur-sm hover:bg-white/20 transform hover:scale-105 transition-all duration-300 hover:border-blue-300 hover:text-white"
            >
              Ser Sponsor
            </a> */}
          </div>
        </div>
      </div>

      {/* Animated corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-purple-500/30 rounded-tr-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-green-500/30 rounded-bl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-yellow-500/30 rounded-br-3xl" />
    </div>
  );
}
