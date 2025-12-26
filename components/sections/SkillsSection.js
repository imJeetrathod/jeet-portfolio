export default function SkillsSection() {
  const skillGroups = [
    {
      title: 'Development',
      skills: [
        'Apex',
        'Lightning Web Components (LWC)',
        'SOQL & SOSL',
        'Testing & Debugging',
      ],
    },
    {
      title: 'Automation & Logic',
      skills: [
        'Flows & Automation',
        'Validation Rules',
        'n8n (Salesforce Automation)',
        'Zapier (Salesforce Automation)',
      ],
    },
    {
      title: 'Clouds & Platforms',
      skills: [
        'Sales Cloud',
        'Service Cloud',
        'Experience Cloud',
        'Revenue Cloud',
      ],
    },
    {
      title: 'Integrations',
      skills: [
        'REST API',
        'SOAP API',
        'OpenAI Agent SDK',
        'ChatGPT',
        'Gemini',
        'Google Docs API',
        'eMudhra / eSigner',
        'Razorpay',
        'External Systems',
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {skillGroups.map((group) => (
        <div key={group.title}>
         <div className="mb-2 text-xs font-normal  tracking-wide text-neutral-500/70">

            {group.title}
          </div>

          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-sm text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
