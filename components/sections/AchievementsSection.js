export default function AchievementsSection() {
  return (
    <div className="rounded-2xl border border-amber-500/15 bg-neutral-900/50 p-6">
      <div className="flex items-start gap-3">
        <span className="text-lg opacity-90">🏆</span>

        <div className="flex-1">
          <div className="font-semibold text-neutral-100">
            Winner – #TDX25 Hackathon
          </div>

          <div className="mt-2 max-w-3xl text-sm text-neutral-400 leading-relaxed">
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
