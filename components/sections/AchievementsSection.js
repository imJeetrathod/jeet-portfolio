export default function AchievementsSection() {
  return (
    <div className="rounded-2xl border border-amber-500/20 bg-neutral-900/50 p-5">
      <div className="flex items-start gap-3">
        <span className="text-lg opacity-90">🏆</span>

        <div>
          <div className="font-semibold text-neutral-100">
            Winner – TDX25 Salesforce Hackathon
          </div>

          <div className="text-sm text-neutral-400 mt-1">
            Best use of Slack award for Agentforce solution in retail industry
          </div>

          <a
            href="https://www.linkedin.com/posts/hi-jeet-rathod_tdx-slack-agentforce-activity-7325937216755527680-dqB2"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm text-amber-400 hover:text-amber-300 underline underline-offset-4"
          >
            View LinkedIn Post →
          </a>
        </div>
      </div>
    </div>
  );
}
