import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Highlights } from "@/components/highlights";
import { ModulesGrid } from "@/components/modules-grid";
import { Navbar } from "@/components/navbar";
import { Process } from "@/components/process";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <ModulesGrid />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
