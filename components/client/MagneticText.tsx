"use client";

import {
  useEffect,
  useId,
  useRef,
  type ElementType,
  type HTMLAttributes,
} from "react";

type MagneticTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  magnetic?: boolean;
} & HTMLAttributes<HTMLElement>;

export function MagneticText({
  text,
  as: Tag = "span",
  className = "",
  magnetic = true,
  ...rest
}: MagneticTextProps) {
  const rootRef = useRef<HTMLElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const frameId = useRef(0);
  const instanceId = useId();

  useEffect(() => {
    if (!magnetic) return;

    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    const tick = () => {
      const radius = 88;
      const maxScale = 1.38;

      for (const char of charsRef.current) {
        const rect = char.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = mouse.current.x - cx;
        const dy = mouse.current.y - cy;
        const distance = Math.hypot(dx, dy);
        const t = Math.max(0, 1 - distance / radius);
        const scale = 1 + (maxScale - 1) * t * t;
        const accentMix = t * 0.85;

        char.style.transform = `scale(${scale.toFixed(3)})`;
        char.style.color =
          accentMix > 0.08
            ? `color-mix(in srgb, #ffffff ${Math.round((1 - accentMix) * 100)}%, var(--client-lime) ${Math.round(accentMix * 100)}%)`
            : "";
      }

      frameId.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frameId.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId.current);
      window.removeEventListener("mousemove", onMove);
    };
  }, [magnetic]);

  const chars = Array.from(text);

  return (
    <Tag ref={rootRef} className={`magnetic-text ${className}`} {...rest}>
      {chars.map((char, index) => {
        const key = `${instanceId}-${index}-${char === " " ? "space" : char}`;
        if (char === " ") {
          return (
            <span
              key={key}
              ref={(node) => {
                if (node) charsRef.current[index] = node;
              }}
              className="magnetic-text__char magnetic-text__char--space"
              aria-hidden
            >
              &nbsp;
            </span>
          );
        }

        return (
          <span
            key={key}
            ref={(node) => {
              if (node) charsRef.current[index] = node;
            }}
            className="magnetic-text__char"
          >
            {char}
          </span>
        );
      })}
    </Tag>
  );
}
