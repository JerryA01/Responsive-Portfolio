"use client";

import { useEffect, useRef, ReactNode } from "react";
import * as THREE from "three";

interface LayoutProps {
  children: ReactNode;
}

interface VantaInstance {
  destroy: () => void;
}

export default function Layout({ children }: LayoutProps) {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<VantaInstance | null>(null);

  useEffect(() => {
    const el = vantaRef.current;

    if (!vantaEffect.current && typeof window !== "undefined" && el) {
      import("vanta/src/vanta.fog").then((FOG) => {
        vantaEffect.current = FOG.default({
          el,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          highlightColor: 0xc084fc,
          midtoneColor: 0xa855f7,
          lowlightColor: 0x4c1d95,
          baseColor: 0x0f172a,
          speed: 3.3,
        }) as VantaInstance;
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