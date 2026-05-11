export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      emoji: "🎭",
      title: "Select Your AI Persona",
      description: "Pick a coach that matches your energy. Whether you want a patient guide or a direct straight-shooter, we've got you covered.",
    },
    {
      number: 2,
      emoji: "🚀",
      title: "AI-First Lessons",
      description: "Focused on what vibe coders actually need: npm, env vars, git flows, and cloud deployments. No fluff.",
    },
    {
      number: 3,
      emoji: "💻",
      title: "Interactive Sandbox",
      description: "Practice in our secure browser terminal or connect to your own environment via our bridge.",
    },
    {
      number: 4,
      emoji: "✨",
      title: "Ship With Confidence",
      description: "Go from 'I hope this works' to 'I know why this works'. Master the CLI to support your AI-assisted builds.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">
          How to Master the Vibe
        </h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                {step.number}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{step.emoji}</span>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>
                <p className="text-neutral text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
