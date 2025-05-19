"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleRedirect = () => {
    window.location.href = "https://sacraltrack.space";
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background gradient effect that follows mouse */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, var(--accent-light) 0%, transparent 60%)`,
          zIndex: -1,
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-[-1]">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, var(--accent-dark), var(--accent-purple))`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              transform: `translateY(${Math.random() * 100 - 50}px)`,
            }}
          />
        ))}
      </div>
      
      <main className={`flex flex-col items-center max-w-3xl w-full transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Logo Area */}
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center gradient-text">
            SACRAL TRACK
          </h1>
          <div className="h-[2px] w-40 bg-gradient-to-r from-purple-800 to-purple-400 mb-6"></div>
          <p className="text-xl text-center text-gray-300 mb-4 font-light">
            Music Store & Social Network for Artists
          </p>
          <p className="text-center text-gray-400 max-w-md mb-10">
            Connect with music artists, discover exclusive tracks, and join a community of sound producers, musicians, bands, DJs, and music lovers.
          </p>
        </div>

        {/* Audio wave visualization effect */}
        <div className="flex justify-center space-x-1 mb-12">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-purple-500 rounded-full"
              style={{
                height: `${Math.sin(i * 0.5) * 20 + 30}px`,
                animation: `eq ${Math.random() * 1 + 0.5}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.05}s`,
                opacity: 0.7,
              }}
            />
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={handleRedirect}
          className="gradient-bg text-white font-medium py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:glow focus:outline-none pulse"
        >
          Enter Sacral Track
        </button>
        
        <p className="mt-6 text-sm text-gray-500">
          You will be redirected to sacraltrack.space
        </p>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-4 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Sacral Track. All rights reserved.
      </footer>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes eq {
          0% { height: 5px; }
          100% { height: 50px; }
        }
      `}</style>
    </div>
  );
}
