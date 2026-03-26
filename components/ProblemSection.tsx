export default function ProblemSection() {
  const problems = [
    {
      emoji: "😰",
      stat: "70% of developers struggle to remember commands",
      quote: "Is it `git pull origin main` or `git pull main origin`? I Google this every time.",
    },
    {
      emoji: "🔥",
      stat: "Bootcamp grads face 37% skills gap in CLI/DevOps",
      quote: "My bootcamp taught me React. My job expects me to SSH into servers and debug Docker.",
    },
    {
      emoji: "📱",
      stat: "Mobile-first devs hit a wall when learning backend",
      quote: "Xcode hides everything. When I started learning Docker, I realized I had zero terminal skills.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">
          Terminal Shouldn&apos;t Feel Like a 90s Hacker Movie
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
