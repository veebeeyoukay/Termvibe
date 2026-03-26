import Link from "next/link";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import PersonasSection from "@/components/PersonasSection";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <PersonasSection />
      <PricingSection />
      <FAQ />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-heading">Terminal Doesn&apos;t Have to Be Scary</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Join 1,000+ developers learning terminal the TermVibe way.
            Start free. No credit card. No intimidation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/lessons" className="btn-primary w-full sm:w-auto">
              Join Beta — Free Forever
            </Link>
            <a
              href="https://github.com/veebeeyoukay/Termvibe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              Star on GitHub ⭐
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left text-sm text-neutral">
            <div className="flex items-start gap-2">
              <span className="text-success">✓</span>
              <span>20 free lessons, forever</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-success">✓</span>
              <span>Open source terminal bridge</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-success">✓</span>
              <span>AI coaching (3 free sessions to try)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-success">✓</span>
              <span>Works on Mac, Linux, Windows, iOS, Android</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
