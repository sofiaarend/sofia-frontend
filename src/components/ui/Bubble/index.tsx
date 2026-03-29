'use client';

import { useEffect, useRef } from 'react';

interface BubbleProps {
  size?: number;
  lerp?: number;
  baseX?: number;
  baseY?: number;
  color?: string;
  isButton?: boolean;
  children?: React.ReactNode;
}

export default function Bubble({
  size = 109,
  lerp = 0.06,
  baseX = 0,
  baseY = 0,
  color = 'bg-primary/50',
  isButton = false,
  children,
}: BubbleProps) {
  const ref = useRef<HTMLDivElement>(null);

  const base = useRef({ x: baseX, y: baseY });
  const trail = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const personality = useRef({ x: 0, y: 0, strength: 0, phase: 0 });
  const hovered = useRef(false);

  useEffect(() => {
    personality.current = {
      x: (Math.random() - 0.5) * 2, // -1 to 1, direction multiplier for X
      y: (Math.random() - 0.5) * 2, // -1 to 1, direction multiplier for Y
      strength: Math.random() * 100 + 40, // how far it moves
      phase: Math.random() * Math.PI * 2, // offset in a subtle idle float
    };

    const onMove = (e: MouseEvent) => {
      // mouse relative to viewport, normalized to -1..1 range
      mouse.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    const currentEl = ref.current;
    const parentEl = currentEl?.parentElement;
    parentEl?.addEventListener('mousemove', onMove);

    const onEnter = () => {
      hovered.current = true;
    };
    const onLeave = () => {
      hovered.current = false;
    };
    if (isButton) {
      currentEl?.addEventListener('mouseenter', onEnter);
      currentEl?.addEventListener('mouseleave', onLeave);
    }

    let raf: number;
    const animate = () => {
      const p = personality.current;
      const t = trail.current;

      // slow down lerp on hover so it eases to a stop
      const currentLerp = hovered.current ? lerp * 0.05 : lerp;
      const targetX = hovered.current ? 0 : mouse.current.x;
      const targetY = hovered.current ? 0 : mouse.current.y;

      t.x += (targetX - t.x) * currentLerp;
      t.y += (targetY - t.y) * currentLerp;

      // idle float: a slow wave that runs independently
      const idleX = hovered.current ? 0 : Math.sin(Date.now() * 0.0008 + p.phase) * 25;
      const idleY = hovered.current ? 0 : Math.cos(Date.now() * 0.0006 + p.phase) * 20;

      if (ref.current) {
        // base position in %, plus a small offset driven by mouse
        const offsetX = t.x * p.strength * p.x + idleX;
        const offsetY = t.y * p.strength * p.y + idleY;
        ref.current.style.left = `calc(${base.current.x}% + ${offsetX}px)`;
        ref.current.style.top = `calc(${base.current.y}% + ${offsetY}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      parentEl?.removeEventListener('mousemove', onMove);
      currentEl?.removeEventListener('mouseenter', onEnter);
      currentEl?.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [lerp, size, isButton]);

  return (
    <div
      ref={ref}
      className={`border-background/25 absolute z-1 rounded-full border shadow-md ${
        isButton ? 'bg-secondary/90 text-on-secondary hover:bg-secondary/100 cursor-pointer' : color
      }`}
      style={{
        width: size,
        height: size,
        willChange: 'left, top',
        pointerEvents: isButton ? 'auto' : 'none',
      }}
      aria-hidden={isButton ? 'false' : 'true'}
    >
      {children}
    </div>
  );
}
