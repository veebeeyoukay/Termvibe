import Link from "next/link";
import Footer from "@/components/Footer";

const lessons = [
  {
    id: "git-basics",
    title: "Git Basics",
    description: "Learn essential Git commands for version control",
    difficulty: "Beginner",
    duration: "15 min",
    progress: 0,
    topics: ["git status", "git add", "git commit", "git push"],
  },
  {
    id: "docker-intro",
    title: "Docker Introduction",
    description: "Get started with containers and Docker basics",
    difficulty: "Beginner",
    duration: "20 min",
    progress: 0,
    topics: ["docker run", "docker ps", "docker images", "docker stop"],
  },
  {
    id: "linux-navigation",
    title: "Linux Navigation",
    description: "Master file system navigation and basic commands",
    difficulty: "Beginner",
    duration: "12 min",
    progress: 0,
    topics: ["cd", "ls", "pwd", "mkdir", "rm"],
  },
  {
    id: "ssh-basics",
    title: "SSH Basics",
    description: "Connect to remote servers securely",
    difficulty: "Intermediate",
    duration: "18 min",
    progress: 0,
    topics: ["ssh", "ssh-keygen", "scp", "ssh config"],
  },
  {
    id: "bash-scripting",
    title: "Bash Scripting 101",
    description: "Write your first shell scripts",
    difficulty: "Intermediate",
    duration: "25 min",
    progress: 0,
    topics: ["variables", "loops", "conditionals", "functions"],
  },
];

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            TermVibe
          </Link>
          <nav className="flex gap-4">
            <Link href="/choose-coach" className="btn-secondary text-sm py-2">
              Choose Coach
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Lesson Library</h1>
          <p className="text-xl text-neutral mb-8">
            Start your terminal learning journey with our foundational lessons
          </p>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="font-bold text-lg mb-2">🎉 Welcome to TermVibe Beta!</h2>
            <p className="text-neutral mb-4">
              All 20 core lessons are free forever. Choose an AI coach to get personalized guidance as you learn.
            </p>
            <Link href="/choose-coach" className="btn-primary inline-block text-sm">
              Choose Your AI Coach
            </Link>
          </div>

          <div className="space-y-4">
            {lessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/lessons/${lesson.id}`}
                className="block bg-white rounded-lg shadow-sm border-2 border-gray-200 hover:border-primary hover:shadow-md transition-all p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">{lesson.title}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          lesson.difficulty === "Beginner"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {lesson.difficulty}
                      </span>
                    </div>
                    <p className="text-neutral mb-3">{lesson.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {lesson.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-mono"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-neutral">
                      <span>⏱️ {lesson.duration}</span>
                      <span>
                        Progress: {lesson.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full border-4 border-gray-200 flex items-center justify-center">
                      <span className="text-2xl">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Want More Lessons?</h2>
            <p className="text-neutral mb-6">
              Upgrade to Pro for 100+ advanced lessons on Docker, Kubernetes, AWS CLI, and more.
            </p>
            <Link href="/#pricing" className="btn-primary inline-block">
              View Pricing
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
