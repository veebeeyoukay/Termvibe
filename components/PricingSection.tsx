import Link from "next/link";

export default function PricingSection() {
  const tiers = [
    {
      name: "FREE",
      subtitle: "Open Source",
      price: "$0",
      period: "forever",
      features: [
        "20 core terminal lessons",
        "Browser-based terminal simulator",
        "Terminal bridge (localhost/Tailscale)",
        "Community lesson contributions",
        "3 free AI coaching sessions",
        "Basic progress tracking",
      ],
      cta: "Get Started Free",
      ctaLink: "/lessons",
      highlight: false,
    },
    {
      name: "PRO",
      subtitle: "The Vibe Coder's Edge",
      price: "$14.99",
      period: "month",
      features: [
        "Everything in Free, plus:",
        "Advanced Vibe Coding Lessons",
        "One-click deployment guides (Vercel/Railway)",
        "Unlimited AI persona coaching",
        "4 AI coaches (Maya, Kai, Alex, Sam)",
        "Custom environment variables guide",
        "Priority support for your AI apps",
      ],
      cta: "Level Up Your Vibe — $14.99",
      ctaLink: "/lessons",
      highlight: true,
    },
    {
      name: "MAX",
      subtitle: "Best for Teams",
      price: "$29.99",
      period: "month",
      features: [
        "Everything in Pro, plus:",
        "Team features (up to 5 learners)",
        "Shared progress dashboard",
        "Custom lesson builder",
        "White-label option",
        "Bootcamp/LMS integrations",
        "Advanced analytics (heatmaps, time tracking)",
      ],
      cta: "Start Free Trial — 14 Days",
      ctaLink: "/lessons",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Scale Your Vibe. Ship Your Vision.
        </h2>
        <p className="section-subheading text-center mb-16">
          Simple pricing for the next generation of AI-first builders.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg p-8 ${
                tier.highlight
                  ? "bg-primary text-white shadow-2xl scale-105 border-4 border-blue-600"
                  : "bg-white border-2 border-gray-200"
              }`}
            >
              {tier.highlight && (
                <div className="text-center mb-4">
                  <span className="bg-yellow-400 text-primary px-4 py-1 rounded-full text-sm font-bold">
                    ⭐ {tier.subtitle}
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-center mb-2">
                {tier.name}
              </h3>
              {!tier.highlight && (
                <p className="text-center text-sm text-neutral mb-4">
                  {tier.subtitle}
                </p>
              )}
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className={tier.highlight ? "text-blue-100" : "text-neutral"}>
                  /{tier.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className={tier.highlight ? "text-yellow-300" : "text-success"}>
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={tier.ctaLink}
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  tier.highlight
                    ? "bg-white text-primary hover:bg-gray-100"
                    : "bg-primary text-white hover:bg-blue-600"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-neutral">
          AI helps you code. TermVibe helps you ship.<br />
          Join 500+ vibe coders who stopped hitting the 'Deployment Wall'.
        </p>
      </div>
    </section>
  );
}
