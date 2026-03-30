"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is TermVibe really free?",
      answer: "Yes. The core 20 lessons, terminal bridge, and browser simulator are 100% free and open source. You only pay if you want unlimited AI coaching and advanced lessons.",
    },
    {
      question: "How does the AI coach work?",
      answer: "As you type commands, the AI watches your terminal session and provides real-time guidance. Think of it like Copilot for terminal — it suggests next steps, explains errors, and encourages you when you're stuck.",
    },
    {
      question: "Can I use TermVibe on my phone?",
      answer: "Absolutely. TermVibe is a PWA (progressive web app), so it installs on iOS and Android like a native app. You can learn on your commute, practice on your laptop.",
    },
    {
      question: "What's the terminal bridge?",
      answer: "It's an open-source tool that connects the TermVibe PWA to your local machine or Tailscale network. You can practice on a real terminal (not just a simulator) while still getting AI coaching.",
    },
    {
      question: "Do I need to know how to code to use TermVibe?",
      answer: "Nope. TermVibe starts with absolute basics (what is a terminal? how do you navigate folders?). If you've never opened Terminal.app or Command Prompt, you're in the right place.",
    },
    {
      question: "Is my terminal session private?",
      answer: "Yes. When using the terminal bridge, all commands run locally on your machine or Tailscale network. The AI coach only sees what you explicitly share for coaching. We don't log your commands or files.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">
          Common Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span className="text-2xl text-primary">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                  <p className="text-neutral">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
