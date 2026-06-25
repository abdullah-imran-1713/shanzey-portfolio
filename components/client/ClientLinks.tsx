"use client";

import type { IconType } from "react-icons";
import { HiOutlineEnvelope } from "react-icons/hi2";
import {
  SiBehance,
  SiFiverr,
  SiInstagram,
  SiUpwork,
  SiWhatsapp,
} from "react-icons/si";
import { clientLinks, type ClientLinkId } from "@/lib/client-site";

const linkIcons: Record<ClientLinkId, IconType> = {
  behance: SiBehance,
  whatsapp: SiWhatsapp,
  upwork: SiUpwork,
  fiverr: SiFiverr,
  instagram: SiInstagram,
  email: HiOutlineEnvelope,
};

export function ClientLinks() {
  return (
    <nav className="client-links" aria-label="Connect">
      <ul className="client-links__grid">
        {clientLinks.map((link, index) => {
          const Icon = linkIcons[link.id];

          return (
            <li
              key={link.id}
              className="client-links__item"
              style={{ animationDelay: `${0.55 + index * 0.07}s` }}
            >
              <a
                href={link.href}
                className="client-link-card"
                style={
                  {
                    "--link-brand": link.brandColor,
                  } as React.CSSProperties
                }
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="client-link-card__icon" aria-hidden>
                  <Icon />
                </span>
                <span className="client-link-card__body">
                  <span className="client-link-card__title">{link.title}</span>
                  <span className="client-link-card__hint">{link.hint}</span>
                </span>
                <span className="client-link-card__arrow" aria-hidden>
                  ↗
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
