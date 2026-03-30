import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Learn Terminal with an AI Coach That Actually Gets You
            </h1>
            <h2 className="text-xl md:text-2xl text-neutral mb-8">
              No more cryptic error messages. No more Googling the same commands.
              Just you, your AI persona, and a terminal that finally makes sense.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link href="/lessons" className="btn-primary text-center">
                Join Beta (Free)
              </Link>
              <a
                href="https://github.com/veebeeyoukay/Termvibe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                Star on GitHub ⭐
              </a>
            </div>
            <p className="text-sm text-neutral mb-2">
              Free forever for 20 core lessons • Open source terminal bridge
            </p>
            <p className="text-sm text-neutral flex items-center gap-2">
              <span className="text-lg">✨</span>
              Powered by Claude AI • Built by developers, for developers
            </p>
          </div>

          {/* Right side - Terminal Demo */}
          <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm ml-2">terminal</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="mb-4">
                <span className="text-green-400">you@laptop</span>
                <span className="text-gray-400">:</span>
                <span className="text-blue-400">~/project</span>
                <span className="text-gray-400">$</span>
                <span className="text-white ml-2">git status</span>
              </div>
              <div className="text-gray-300 mb-6 text-xs">
                <div>On branch main</div>
                <div>Your branch is up to date with &apos;origin/main&apos;.</div>
              </div>
              <div className="bg-blue-900/30 border border-blue-500/50 rounded p-4 mb-4">
                <div className="flex items-start gap-2">
                  <span className="text-blue-300 text-lg">🌸</span>
                  <div>
                    <div className="text-blue-200 font-semibold text-xs mb-1">Maya (Your AI Coach):</div>
                    <div className="text-gray-200 text-xs">
                      Great job! You&apos;re on the main branch. Since everything is clean,
                      you&apos;re ready to start working. Try creating a new file with
                      <span className="text-yellow-300"> touch newfile.txt</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-green-400">you@laptop</span>
                <span className="text-gray-400">:</span>
                <span className="text-blue-400">~/project</span>
                <span className="text-gray-400">$</span>
                <span className="text-white ml-2 animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
