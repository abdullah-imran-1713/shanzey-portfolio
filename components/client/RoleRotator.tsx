"use client";

import { useEffect, useState } from "react";

type RoleRotatorProps = {
  roles: readonly string[];
  intervalMs?: number;
};

export function RoleRotator({ roles, intervalMs = 3200 }: RoleRotatorProps) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || roles.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setPhase("out");
      window.setTimeout(() => {
        setIndex((current) => (current + 1) % roles.length);
        setPhase("in");
      }, 360);
    }, intervalMs);

    return () => window.clearInterval(intervalId);
  }, [roles, intervalMs]);

  return (
    <div className="client-role" aria-live="polite">
      <p className={`client-role__text client-role__text--${phase}`}>
        {roles[index]}
      </p>
    </div>
  );
}
