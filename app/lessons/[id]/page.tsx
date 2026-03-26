"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";

const lessonData: Record<string, any> = {
  "git-basics": {
    title: "Git Basics",
    difficulty: "Beginner",
    duration: "15 min",
    coach: "Maya",
    sections: [
      {
        title: "What is Git?",
        content: "Git is a version control system that helps you track changes in your code. Think of it like a time machine for your projects — you can save snapshots and go back to any point in history.",
      },
      {
        title: "Check Your Git Status",
        content: "The first command you'll use is `git status`. This shows you what files have changed and what's ready to commit.",
        command: "git status",
      },
      {
        title: "Adding Files",
        content: "Use `git add` to stage files for commit. This tells Git which changes you want to save.",
        command: "git add .",
      },
      {
        title: "Making Your First Commit",
        content: "A commit is like taking a snapshot of your project. Use a clear message to describe what changed.",
        command: "git commit -m \"Initial commit\"",
      },
    ],
  },
  "docker-intro": {
    title: "Docker Introduction",
    difficulty: "Beginner",
    duration: "20 min",
    coach: "Kai",
    sections: [
      {
        title: "What is Docker?",
        content: "Docker lets you package your application and all its dependencies into a container. It's like shipping your app in a complete box that works anywhere.",
      },
      {
        title: "Running Your First Container",
        content: "Let's run a simple container to see Docker in action. This will download and start an nginx web server.",
        command: "docker run -d -p 8080:80 nginx",
      },
      {
        title: "Viewing Running Containers",
        content: "See what containers are currently running on your system.",
        command: "docker ps",
      },
    ],
  },
  "linux-navigation": {
    title: "Linux Navigation",
    difficulty: "Beginner",
    duration: "12 min",
    coach: "Sam",
    sections: [
      {
        title: "Understanding the File System",
        content: "Linux organizes files in a tree structure starting from the root directory (/). Every file and folder has a path.",
      },
      {
        title: "Where Am I?",
        content: "Use `pwd` (print working directory) to see your current location in the file system.",
        command: "pwd",
      },
      {
        title: "Listing Files",
        content: "The `ls` command shows files and folders in your current directory.",
        command: "ls -la",
      },
      {
        title: "Changing Directories",
        content: "Move around the file system with `cd` (change directory).",
        command: "cd /home",
      },
    ],
  },
  "ssh-basics": {
    title: "SSH Basics",
    difficulty: "Intermediate",
    duration: "18 min",
    coach: "Maya",
    sections: [
      {
        title: "What is SSH?",
        content: "SSH (Secure Shell) lets you securely connect to remote computers. It's how you access servers, VMs, and cloud machines.",
      },
      {
        title: "Connecting to a Server",
        content: "Use ssh with a username and hostname to connect to a remote machine.",
        command: "ssh username@hostname",
      },
      {
        title: "SSH Keys",
        content: "Instead of typing passwords, you can use SSH keys for secure, passwordless authentication.",
        command: "ssh-keygen -t ed25519 -C \"your_email@example.com\"",
      },
    ],
  },
  "bash-scripting": {
    title: "Bash Scripting 101",
    difficulty: "Intermediate",
    duration: "25 min",
    coach: "Kai",
    sections: [
      {
        title: "What is a Bash Script?",
        content: "A bash script is a text file containing a series of commands. It's like automating your terminal work.",
      },
      {
        title: "Creating Your First Script",
        content: "Every bash script starts with a shebang line that tells the system to use bash to execute the file.",
        command: "#!/bin/bash\necho \"Hello, World!\"",
      },
      {
        title: "Making Scripts Executable",
        content: "Before you can run a script, you need to make it executable with chmod.",
        command: "chmod +x script.sh",
      },
    ],
  },
};

const coachResponses: Record<string, string[]> = {
  Maya: [
    "Great start! You're doing really well. Take your time and try the command in the terminal below.",
    "Perfect! That's exactly right. Let's move on to the next step.",
    "Almost there! Try reading the hint again — you're very close.",
  ],
  Kai: [
    "Nice! Now let's break something and see what happens. Don't worry, that's how we learn.",
    "Boom! You got it. Ready to level up?",
    "Interesting error! This is actually a good thing — let's figure out what went wrong.",
  ],
  Sam: [
    "Correct. Moving on.",
    "Here's the command. Run it. See what happens.",
    "That works. Next step.",
  ],
  Alex: [
    "You're crushing it! Keep going!",
    "Awesome job! You're a natural at this.",
    "Yes! That's exactly what I was hoping for!",
  ],
};

export default function LessonDetailPage() {
  const params = useParams();
  const lessonId = params.id as string;
  const lesson = lessonData[lessonId] || lessonData["git-basics"];

  const [currentSection, setCurrentSection] = useState(0);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const command = terminalInput.trim();
    const coachResponse =
      coachResponses[lesson.coach][Math.floor(Math.random() * coachResponses[lesson.coach].length)];

    setTerminalHistory([
      ...terminalHistory,
      `$ ${command}`,
      lesson.sections[currentSection].command === command
        ? `✓ Correct! ${coachResponse}`
        : `Command executed. ${coachResponse}`,
    ]);
    setTerminalInput("");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/lessons" className="text-primary hover:underline">
            ← Back to Lessons
          </Link>
          <div className="text-sm text-neutral">
            Section {currentSection + 1} of {lesson.sections.length}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border-2 border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <h1 className="text-3xl font-bold">{lesson.title}</h1>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                  {lesson.difficulty}
                </span>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  {lesson.sections[currentSection].title}
                </h2>
                <p className="text-neutral text-lg leading-relaxed">
                  {lesson.sections[currentSection].content}
                </p>
                {lesson.sections[currentSection].command && (
                  <div className="mt-6 bg-gray-900 rounded-lg p-4 font-mono text-sm text-white">
                    {lesson.sections[currentSection].command}
                  </div>
                )}
              </div>

              {/* Terminal Simulator */}
              <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-sm ml-2">terminal simulator</span>
                </div>
                <div className="p-4 font-mono text-sm min-h-[200px]">
                  <div className="space-y-2 mb-4">
                    {terminalHistory.map((line, index) => (
                      <div
                        key={index}
                        className={line.startsWith("$") ? "text-white" : "text-green-300"}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleTerminalSubmit} className="flex items-center">
                    <span className="text-green-400">you@laptop</span>
                    <span className="text-gray-400">:</span>
                    <span className="text-blue-400">~/project</span>
                    <span className="text-gray-400">$ </span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      className="flex-1 bg-transparent text-white outline-none ml-2"
                      placeholder="Type a command..."
                      autoFocus
                    />
                  </form>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                  disabled={currentSection === 0}
                  className="px-6 py-3 rounded-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="px-6 py-3 rounded-lg font-semibold text-primary hover:bg-blue-50"
                >
                  {showHint ? "Hide Hint" : "Show Hint"}
                </button>
                <button
                  onClick={() =>
                    setCurrentSection(Math.min(lesson.sections.length - 1, currentSection + 1))
                  }
                  disabled={currentSection === lesson.sections.length - 1}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>

              {showHint && lesson.sections[currentSection].command && (
                <div className="mt-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>Hint:</strong> Try typing exactly: <code className="bg-yellow-200 px-2 py-1 rounded">{lesson.sections[currentSection].command}</code>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* AI Coach Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border-2 border-purple-200 p-6 sticky top-24">
              <div className="text-center mb-4">
                <div className="text-5xl mb-2">
                  {lesson.coach === "Maya" && "🌸"}
                  {lesson.coach === "Kai" && "⚡"}
                  {lesson.coach === "Sam" && "🎯"}
                  {lesson.coach === "Alex" && "🎉"}
                </div>
                <h3 className="text-xl font-bold">{lesson.coach}</h3>
                <p className="text-sm text-neutral">Your AI Coach</p>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm">
                  {lesson.coach === "Maya" &&
                    "Take your time with this section. There's no rush — let's make sure you understand each step."}
                  {lesson.coach === "Kai" &&
                    "Ready to experiment? Try the command and see what happens. Breaking things is part of learning!"}
                  {lesson.coach === "Sam" &&
                    "Read the content. Try the command. Move to the next section. Simple."}
                  {lesson.coach === "Alex" &&
                    "You're doing amazing! This lesson is a great choice for building your terminal skills."}
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral">Progress:</span>
                  <span className="font-semibold">
                    {Math.round(((currentSection + 1) / lesson.sections.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2 transition-all"
                    style={{
                      width: `${((currentSection + 1) / lesson.sections.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-purple-200">
                <p className="text-xs text-neutral mb-2">Want unlimited coaching?</p>
                <Link
                  href="/#pricing"
                  className="block text-center bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors"
                >
                  Upgrade to Pro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
