"use client";

import { SiCanva, SiFigma } from "react-icons/si";
import {
  TbBrandAdobeIllustrator,
  TbBrandAdobeIndesign,
  TbBrandAdobePhotoshop,
} from "react-icons/tb";

const tools = [
  {
    Icon: TbBrandAdobePhotoshop,
    className: "client-tool client-tool--1",
    color: "#31A8FF",
  },
  {
    Icon: TbBrandAdobeIllustrator,
    className: "client-tool client-tool--2",
    color: "#FF9A00",
  },
  {
    Icon: SiFigma,
    className: "client-tool client-tool--3",
    color: "#F24E1E",
  },
  {
    Icon: TbBrandAdobeIndesign,
    className: "client-tool client-tool--4",
    color: "#FF3366",
  },
  {
    Icon: SiCanva,
    className: "client-tool client-tool--5",
    color: "#00C4CC",
  },
] as const;

export function FloatingTools() {
  return (
    <div className="client-tools" aria-hidden>
      {tools.map(({ Icon, className, color }) => (
        <div
          key={className}
          className={className}
          style={
            {
              "--tool-color": color,
            } as React.CSSProperties
          }
        >
          <Icon />
        </div>
      ))}
    </div>
  );
}
