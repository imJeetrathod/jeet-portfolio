export default function CertificationsSection() {
  const certifications = [
    {
      title: 'Salesforce Certified Platform Administrator',
      subtitle: 'Core Salesforce configuration & data management',
    },
    {
      title: 'Salesforce Certified Platform Developer',
      subtitle: 'Apex, LWC, integrations, and custom logic',
    },
    {
      title: 'Salesforce Certified AI Associate',
      subtitle: 'AI concepts, Agentforce, and Salesforce AI use cases',
    },
  ];

  return (
    <div className="space-y-3">
      {certifications.map((cert) => (
        <div
          key={cert.title}
          className="rounded-2xl border border-amber-500/20 bg-neutral-900/50 p-5"
        >
          <div className="flex items-start gap-3">
            <span className="text-lg opacity-90">🎓</span>

            <div>
              <div className="font-semibold text-neutral-100">
                {cert.title}
              </div>

              <div className="text-sm text-neutral-400 mt-1">
                {cert.subtitle}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
