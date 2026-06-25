"use client";

import { useEffect, useRef } from "react";

const LERP = 0.22;
const GRID_SNAP = 8;

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label, .client-link-card";

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest(INTERACTIVE_SELECTOR));
}

function snapToGrid(value: number, step: number) {
  return Math.round(value / step) * step;
}

export function ClientCursor() {
  const enabledRef = useRef(false);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);
  const visible = useRef(false);
  const frameId = useRef(0);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const canEnable = () => finePointer.matches && !reducedMotion.matches;

    const applyEnabled = (enabled: boolean) => {
      enabledRef.current = enabled;
      document.body.classList.toggle("client-cursor-active", enabled);

      if (!enabled) {
        ringRef.current?.classList.remove("is-visible", "is-hovering");
        dotRef.current?.classList.remove("is-visible", "is-hovering");
      }
    };

    applyEnabled(canEnable());

    const onFineChange = () => applyEnabled(canEnable());
    const onMotionChange = () => applyEnabled(canEnable());

    finePointer.addEventListener("change", onFineChange);
    reducedMotion.addEventListener("change", onMotionChange);

    const onMove = (event: MouseEvent) => {
      if (!enabledRef.current) return;

      target.current.x = snapToGrid(event.clientX, GRID_SNAP);
      target.current.y = snapToGrid(event.clientY, GRID_SNAP);

      const nextHover = isInteractiveTarget(event.target);
      if (nextHover !== hovering.current) {
        hovering.current = nextHover;
        ringRef.current?.classList.toggle("is-hovering", nextHover);
        dotRef.current?.classList.toggle("is-hovering", nextHover);
      }

      if (!visible.current) {
        visible.current = true;
        current.current.x = target.current.x;
        current.current.y = target.current.y;
        ringRef.current?.classList.add("is-visible");
        dotRef.current?.classList.add("is-visible");
      }
    };

    const onLeave = () => {
      visible.current = false;
      ringRef.current?.classList.remove("is-visible", "is-hovering");
      dotRef.current?.classList.remove("is-visible", "is-hovering");
    };

    const tick = () => {
      if (enabledRef.current && visible.current) {
        current.current.x += (target.current.x - current.current.x) * LERP;
        current.current.y += (target.current.y - current.current.y) * LERP;

        const transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;

        if (ringRef.current) {
          ringRef.current.style.transform = transform;
        }
        if (dotRef.current) {
          dotRef.current.style.transform = transform;
        }
      }

      frameId.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    frameId.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId.current);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      finePointer.removeEventListener("change", onFineChange);
      reducedMotion.removeEventListener("change", onMotionChange);
      document.body.classList.remove("client-cursor-active");
    };
  }, []);

  return (
    <div className="client-cursor" aria-hidden>
      <div ref={ringRef} className="client-cursor__ring" />
      <div ref={dotRef} className="client-cursor__dot" />
    </div>
  );
}
