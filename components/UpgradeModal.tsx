"use client";

import Link from "next/link";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgrade: () => void;
}

export default function UpgradeModal({ isOpen, onClose, onUpgrade }: UpgradeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-center text-white">
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-2xl font-bold mb-2">Unlock Pro Lessons</h2>
          <p className="text-blue-100">
            Get unlimited access to advanced Vibe Coding lessons, AI coaching, and more.
          </p>
        </div>

        <div className="p-8">
          <ul className="space-y-4 mb-8">
            {[
              "100+ Advanced CLI Lessons",
              "Unlimited AI Coach Sessions",
              "Exclusive 'Vibe Coder' Content",
              "Priority Discord Support",
              "Downloadable Cheat Sheets",
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <button
              onClick={onUpgrade}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200"
            >
              Upgrade Now — $14.99/mo
            </button>
            <button
              onClick={onClose}
              className="w-full bg-gray-100 text-gray-600 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Maybe Later
            </button>
          </div>

          <p className="text-center text-xs text-neutral mt-6">
            14-day money-back guarantee. Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
