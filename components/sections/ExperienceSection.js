export default function ExperienceSection() {
  const experience = [
    {
      company: 'GetOnCRM Solutions',
      role: 'Associate Software Engineer (Salesforce Developer)',
      period: 'Jan 2024 — Present',
      highlights: [
        'Led work across Sales Cloud and Service Cloud to deliver client-focused solutions.',
        'Built scalable automations, integrations, and custom components using Apex, LWC, Flows, and REST APIs.',
      ],
    },
  ];

  return (
    <div className="grid gap-4">
      {experience.map((item) => (
        <div key={item.company} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 shadow-soft">
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold">{item.role}</div>
              <div className="text-neutral-300">{item.company}</div>
            </div>
            <div className="text-sm text-neutral-400">{item.period}</div>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            {item.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}