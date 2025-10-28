import { useState } from "react";
import { Mail, X } from "lucide-react";

export function NewsletterCTA() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isExpanded ? (
        // Collapsed state - just the button
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-deep-blue text-white hover:bg-deep-blue/90 shadow-lg h-14 px-6 gap-2 rounded-md font-semibold flex items-center transition"
        >
          <Mail className="w-5 h-5" />
          Subscribe
        </button>
      ) : (
        // Expanded state - form card
        <div className="bg-white border-2 border-deep-blue shadow-xl p-6 w-80 rounded-lg relative">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-3 right-3 text-slate-400 hover:text-charcoal transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <Mail className="w-5 h-5 text-deep-blue" />
            <h3 className="text-lg font-bold text-charcoal">Stay Connected</h3>
          </div>

          <p className="text-sm text-charcoal mb-4">
            Get monthly updates on events, programs, and Jewish community news
          </p>

          <div className="space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue text-charcoal placeholder-slate-500"
            />
            <button className="w-full px-4 py-2 bg-deep-blue text-white rounded-md hover:bg-deep-blue/90 transition font-semibold">
              Subscribe
            </button>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="text-xs text-slate-500 hover:text-charcoal mt-3 underline transition"
          >
            No thanks, don't show again
          </button>
        </div>
      )}
    </div>
  );
}
