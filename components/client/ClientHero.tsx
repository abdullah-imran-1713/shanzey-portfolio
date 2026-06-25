"use client";

import { clientSite } from "@/lib/client-site";
import { MagneticText } from "./MagneticText";
import { RoleRotator } from "./RoleRotator";

export function ClientHero() {
  return (
    <header className="client-hero">
      <div className="client-hero__badge client-rise client-rise-1">
        <span className="client-hero__badge-dot" aria-hidden />
        {clientSite.availability}
      </div>

      <p className="client-hero__tagline client-rise client-rise-2">
        {clientSite.tagline}
      </p>

      <div className="client-hero__role-wrap client-rise client-rise-3">
        <span className="client-hero__role-label">Currently</span>
        <RoleRotator roles={clientSite.roles} />
      </div>

      <h1 className="client-name client-rise client-rise-4">
        <span className="client-name__glow" aria-hidden />
        <MagneticText
          as="span"
          text={clientSite.firstName}
          className="client-name__line"
          magnetic
        />
        <MagneticText
          as="span"
          text={clientSite.lastName}
          className="client-name__line client-name__line--accent"
          magnetic
        />
      </h1>

      <p className="client-meta client-rise client-rise-5">
        <span className="client-meta__pin" aria-hidden>
          ◎
        </span>
        {clientSite.location}
      </p>
    </header>
  );
}
