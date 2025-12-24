export default function AchievementsSection() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 shadow-soft">
      <ul className="space-y-3 text-neutral-300">
        <li className="flex items-start gap-3">
          <span className="text-lg">🏆</span>
          <div>
            <div className="font-semibold">Winner - TDX25 Salesforce Hackathon</div>
            <div className="text-sm text-neutral-400 mb-2">Best use of Slack award for Agentforce solution in retail industry</div>
            <a
              href="https://www.linkedin.com/posts/hi-jeet-rathod_tdx-slack-agentforce-activity-7325937216755527680-dqB2?utm_source=share&utm_medium=member_ios&rcm=ACoAADYNqOgBZHkGPo7VI_0tPO6jtJGZUxQyQgU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-neutral-200 underline"
            >
              View LinkedIn Post →
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}