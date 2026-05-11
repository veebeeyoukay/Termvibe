import Link from "next/link";

export default function PersonasSection() {
  const personas = [
    {
      name: "Maya",
      title: "The Patient Teacher",
      emoji: "🌸",
      quote: "No question is too basic. Let's break this down together.",
      bestFor: "Vibe coders, bootcamp grads, career switchers",
      personality: "Encouraging, thorough, perfect for Cursor beginners",
      color: "from-pink-100 to-purple-100",
      borderColor: "border-pink-300",
    },
    {
      name: "Kai",
      title: "The Hacker",
      emoji: "⚡",
      quote: "Let's break stuff and see what happens. That's how you learn.",
      bestFor: "Experimental learners, tinkerers, Replit power users",
      personality: "Bold, playful, embraces mistakes",
      color: "from-yellow-100 to-orange-100",
      borderColor: "border-orange-300",
    },
    {
      name: "Alex",
      title: "The Cheerleader",
      emoji: "🎉",
      quote: "You're doing great! One more command and you've got it.",
      bestFor: "AI-first devs, CS students, confidence builders",
      personality: "Positive, motivating, celebrates every 'git push'",
      color: "from-green-100 to-emerald-100",
      borderColor: "border-green-300",
    },
    {
      name: "Sam",
      title: "The Straight Shooter",
      emoji: "🎯",
      quote: "Here's the command. Here's why it works. Now try it.",
      bestFor: "Efficient learners, devs moving from No-Code to AI",
      personality: "Direct, no fluff, zero-nonsense CLI guidance",
      color: "from-blue-100 to-indigo-100",
      borderColor: "border-blue-300",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-4">
          Your AI Coach, Your Vibe
        </h2>
        <p className="section-subheading text-center mb-16">
          Choose the personality that matches your learning style
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {personas.map((persona) => (
            <div
              key={persona.name}
              className={`bg-gradient-to-br ${persona.color} border-2 ${persona.borderColor} rounded-lg p-6 hover:shadow-lg transition-shadow`}
            >
              <div className="text-5xl mb-4 text-center">{persona.emoji}</div>
              <h3 className="text-2xl font-bold mb-2 text-center">
                {persona.name}
              </h3>
              <p className="text-center text-sm font-semibold text-neutral mb-4">
                {persona.title}
              </p>
              <p className="text-sm italic mb-4 text-center">
                &quot;{persona.quote}&quot;
              </p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold">Best for:</span>
                  <p className="text-neutral">{persona.bestFor}</p>
                </div>
                <div>
                  <span className="font-semibold">Personality:</span>
                  <p className="text-neutral">{persona.personality}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/choose-coach" className="btn-primary inline-block">
            Try All 4 Coaches Free
          </Link>
        </div>
      </div>
    </section>
  );
}
