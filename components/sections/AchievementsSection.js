export default function AchievementsSection() {
  return (
    <div
      className="rounded-2xl border border-amber-500/15 bg-neutral-900/50 p-6"
      style={{
        // 🎨 MAIN CONTROLS (change only these)
        '--title-base-color': '255, 255, 255',     // white
        '--title-base-opacity': 0.75,
        '--title-shine-opacity': 1,

        '--desc-base-color': '163, 163, 163',      // neutral-400
        '--desc-base-opacity': 0.65,
        '--desc-shine-color': '251, 191, 36',      // amber-400
        '--desc-shine-opacity': 0.9,
      }}
    >
      <style>{`
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        /* ================= TITLE ================= */
        .shine-text {
          background: linear-gradient(
            90deg,
            rgba(var(--title-base-color), var(--title-base-opacity)) 0%,
            rgba(var(--title-base-color), var(--title-base-opacity)) 40%,
            rgba(var(--title-base-color), var(--title-shine-opacity)) 50%,
            rgba(var(--title-base-color), var(--title-base-opacity)) 60%,
            rgba(var(--title-base-color), var(--title-base-opacity)) 100%
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 9s linear infinite;
        }

        /* ================= DESCRIPTION ================= */
        .shine-text-description {
          background: linear-gradient(
            90deg,
            rgba(var(--desc-base-color), var(--desc-base-opacity)) 0%,
            rgba(var(--desc-base-color), var(--desc-base-opacity)) 40%,
            rgba(var(--desc-shine-color), var(--desc-shine-opacity)) 50%,
            rgba(var(--desc-base-color), var(--desc-base-opacity)) 60%,
            rgba(var(--desc-base-color), var(--desc-base-opacity)) 100%
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 9s linear infinite;
        }
      `}</style>

      <div className="flex items-start gap-3">
        <span className="text-lg opacity-90">🏆</span>

        <div className="flex-1">
          <div className="font-semibold shine-text">
            Winner – #TDX25 Hackathon
          </div>

          <div className="mt-2 max-w-3xl text-sm leading-relaxed shine-text-description">
            Awarded for building an Agentforce + Slack solution that improved retail workflow automation and decision-making.
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="https://www.linkedin.com/posts/hi-jeet-rathod_tdx-slack-agentforce-activity-7325937216755527680-dqB2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              View LinkedIn Post →
            </a>

            <a
              href="https://www.salesforce.com/in/news/stories/agentforce-hackathon-tdx-ai-innovation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              Featured on Salesforce →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
