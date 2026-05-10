"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

const coaches = [
  {
    name: "Maya",
    title: "The Patient Teacher",
    emoji: "🌸",
    quote: "No question is too basic. Let's break this down together.",
    bestFor: "Vibe coders, bootcamp grads, career switchers",
    personality: "Encouraging, thorough, perfect for Cursor beginners",
    color: "from-pink-100 to-purple-100",
    borderColor: "border-pink-300",
    sampleSession: [
      { type: "user", text: "$ git status" },
      {
        type: "coach",
        text: "Great start! This command shows you the current state of your Git repository. Let's look at what it's telling us...",
      },
      { type: "user", text: "I'm not sure what 'untracked files' means" },
      {
        type: "coach",
        text: "No worries! That's a great question. Untracked files are files that Git doesn't know about yet. They exist in your project folder, but Git isn't watching them for changes. Would you like to add them?",
      },
    ],
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
    sampleSession: [
      { type: "user", text: "$ docker run -d nginx" },
      {
        type: "coach",
        text: "Boom! Container is running. Now let's poke at it. Try `docker ps` and see what's happening under the hood.",
      },
      { type: "user", text: "What if I delete the container while it's running?" },
      {
        type: "coach",
        text: "Love the experimental energy! Let's try it. Worst case? You restart it. Best case? You learn exactly how Docker handles running containers. Go for it!",
      },
    ],
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
    sampleSession: [
      { type: "user", text: "$ cd projects" },
      {
        type: "coach",
        text: "Yes! You just navigated to the projects directory. You're getting really good at this!",
      },
      { type: "user", text: "$ ls" },
      {
        type: "coach",
        text: "Perfect! Look at you, listing files like a pro. You're building such solid terminal fundamentals!",
      },
    ],
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
    sampleSession: [
      { type: "user", text: "$ ssh user@server" },
      {
        type: "coach",
        text: "Connecting via SSH. Port 22, default. If this fails, check: 1) Server is running, 2) Firewall allows port 22, 3) Credentials are correct.",
      },
      { type: "user", text: "It's asking for a password" },
      {
        type: "coach",
        text: "Expected. Enter password. For future: set up SSH keys for passwordless auth. More secure, more efficient.",
      },
    ],
  },
];

export default function ChooseCoachPage() {
  const [selectedCoach, setSelectedCoach] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            TermVibe
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Choose Your AI Coach
          </h1>
          <p className="text-xl text-neutral text-center mb-12">
            Every learner is different. Pick the coaching style that fits your vibe.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {coaches.map((coach, index) => (
              <div
                key={coach.name}
                className={`bg-gradient-to-br ${coach.color} border-2 ${coach.borderColor} rounded-lg p-8 cursor-pointer transition-all ${
                  selectedCoach === index ? "ring-4 ring-primary shadow-xl scale-105" : "hover:shadow-lg"
                }`}
                onClick={() => setSelectedCoach(selectedCoach === index ? null : index)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-5xl mb-3">{coach.emoji}</div>
                    <h3 className="text-2xl font-bold mb-1">{coach.name}</h3>
                    <p className="text-sm font-semibold text-neutral">{coach.title}</p>
                  </div>
                  {selectedCoach === index && (
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                      ✓
                    </div>
                  )}
                </div>

                <p className="text-sm italic mb-4">&quot;{coach.quote}&quot;</p>

                <div className="space-y-3 mb-6">
                  <div>
                    <span className="font-semibold text-sm">Best for:</span>
                    <p className="text-neutral text-sm">{coach.bestFor}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Personality:</span>
                    <p className="text-neutral text-sm">{coach.personality}</p>
                  </div>
                </div>

                {selectedCoach === index && (
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <h4 className="font-bold text-sm mb-3">Sample Coaching Session:</h4>
                    <div className="space-y-2 text-xs font-mono">
                      {coach.sampleSession.map((message, msgIndex) => (
                        <div key={msgIndex}>
                          {message.type === "user" ? (
                            <div className="text-gray-700">{message.text}</div>
                          ) : (
                            <div className="bg-blue-50 border-l-4 border-blue-400 pl-3 py-2 my-2">
                              <span className="font-bold text-blue-700">{coach.name}:</span>{" "}
                              <span className="text-gray-700">{message.text}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setSelectedCoach(index)}
                  className="w-full bg-white border-2 border-gray-800 text-gray-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors text-sm"
                >
                  {selectedCoach === index ? "Sample Session Above ↑" : "Try Sample Session"}
                </button>
              </div>
            ))}
          </div>

          {selectedCoach !== null && (
            <div className="bg-primary text-white rounded-lg p-8 text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Learning with {coaches[selectedCoach].name}?
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                Jump into your first lesson and get personalized coaching right away.
              </p>
              <Link
                href="/lessons"
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Start First Lesson with {coaches[selectedCoach].name}
              </Link>
            </div>
          )}

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Not Sure Which Coach to Pick?</h2>
            <p className="text-neutral mb-6">
              No worries! You can switch coaches anytime. Start with Maya (beginner-friendly) or try them all during your free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lessons" className="btn-primary">
                Start with Maya
              </Link>
              <Link href="/#pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
