"use client";

import { useEffect, useState } from "react";

export default function GlobalLoader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 4500); // start fade
    const remove = setTimeout(() => setLoading(false), 5000); // fully remove

    return () => {
      clearTimeout(timer);
      clearTimeout(remove);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500
      ${fade ? "opacity-0" : "opacity-100"}`}
      style={{
        backgroundColor: "#0F0019",
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* LOGO */}
        <img
          src="/logo/expo_logo.png"
          alt="CS Expo Loader"
          className="w-72 h-72 object-contain spin-3d neon-glow"
        />
      </div>

      {/* Extra glow spread */}
      <div className="absolute w-[300px] h-[300px] bg-purple-500 blur-[80px] opacity-30 rounded-full"></div>
    </div>
  );
}
