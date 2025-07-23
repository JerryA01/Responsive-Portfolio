"use client";

import { useEffect, useRef, ReactNode } from "react";
import * as THREE from "three";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && typeof window !== "undefined" && vantaRef.current) {
      import("vanta/src/vanta.fog").then((FOG) => {
        vantaEffect.current = FOG.default({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0x87ceeb,   // Light Sky Blue
          midtoneColor: 0x00aaff,     // Strong Sky Blue
          lowlightColor: 0x005f99,    // Deep Blue
          baseColor: 0xcce7ff,        // Very light sky blue (almost white)
          speed: 3.30
        });
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="min-h-screen w-full relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <div className="absolute inset-0 z-0" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
