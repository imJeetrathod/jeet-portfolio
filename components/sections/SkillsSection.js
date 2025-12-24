export default function SkillsSection() {
  const skills = [
    'Apex',
    'Lightning Web Components (LWC)',
    'SOQL',
    'Flows & Automation',
    'REST API Integrations',
    'Sales Cloud & Service Cloud',
    'Experience Cloud',
    'Testing & Debugging',
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((s) => (
        <span key={s} className="rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-sm text-neutral-200">
          {s}
        </span>
      ))}
    </div>
  );
}