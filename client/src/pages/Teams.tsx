import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Seo } from "@/components/Seo";

export default function Teams() {
  return (
    <div className="min-h-full antialiased">
      <Seo canonical="/teams" />
      <SiteHeader />
      <main>
        <section className="section section--white">
          <div className="site-shell">
            <h1 className="section-title">Meet The Team</h1>
            <p className="section-subtitle">Coming soon</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
