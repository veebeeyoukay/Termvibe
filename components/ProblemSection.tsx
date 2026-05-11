export default function ProblemSection() {
  const problems = [
    {
      emoji: "🚧",
      stat: "The Deployment Wall",
      quote: "Cursor built my app in 5 minutes, but I spent 2 hours trying to figure out how to set an environment variable in the terminal.",
    },
    {
      emoji: "🤖",
      stat: "AI Tooling Friction",
      quote: "I can prompt anything, but when Replit asks me to 'check the logs in the console', I have no idea what commands to run.",
    },
    {
      emoji: "🚢",
      stat: "The 'Localhost' Trap",
      quote: "My app works on my machine, but 'just deploy it to Railway/Vercel' involves CLI steps that feel like a foreign language.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
          The Last Barrier to Shipping Your AI Apps
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{problem.emoji}</div>
              <h3 className="font-bold text-lg mb-3">{problem.stat}</h3>
              <p className="text-neutral italic text-sm">
                &quot;{problem.quote}&quot;
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-xl text-neutral max-w-3xl mx-auto">
          TermVibe makes terminal learning feel like Duolingo, not a CS lecture.
        </p>
      </div>
    </section>
  );
}
