export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      emoji: "🎭",
      title: "Choose Your Coach",
      description: "Pick from 4 AI personas: Maya (patient teacher), Kai (hacker energy), Alex (encouraging), Sam (direct)",
    },
    {
      number: 2,
      emoji: "📚",
      title: "Start With Basics (Or Skip Ahead)",
      description: "20 free lessons: Git, Docker, Linux, SSH, Bash scripting",
    },
    {
      number: 3,
      emoji: "⚡",
      title: "Practice in Real Terminal",
      description: "Connect to your Mac, Tailscale machine, or use our browser simulator",
    },
    {
      number: 4,
      emoji: "🤖",
      title: "Get Real-Time AI Coaching",
      description: "Your coach watches, guides, encourages — like pair programming for terminal",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">
          Meet Your AI Terminal Coach
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
