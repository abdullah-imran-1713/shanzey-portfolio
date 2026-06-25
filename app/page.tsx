import { ClientHero } from "@/components/client/ClientHero";
import { ClientLinks } from "@/components/client/ClientLinks";
import { FloatingTools } from "@/components/client/FloatingTools";
import { GridBackground } from "@/components/client/GridBackground";
import { clientSite } from "@/lib/client-site";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <GridBackground />
      <FloatingTools />

      <main className="client-page">
        <div className="client-layout">
          <ClientHero />

          <section className="client-connect client-rise client-rise-5">
            <div className="client-connect__header">
              <span className="client-connect__line" aria-hidden />
              <div>
                <h2 className="client-connect__title">
                  {clientSite.connectHeading}
                </h2>
                <p className="client-connect__sub">
                  {clientSite.connectSubheading}
                </p>
              </div>
            </div>

            <ClientLinks />
          </section>
        </div>

        <footer className="client-footer client-rise client-rise-6">
          © {year} {clientSite.name}
        </footer>
      </main>
    </>
  );
}
