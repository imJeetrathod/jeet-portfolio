export default function CertificationsSection() {
  const certifications = [
    'Salesforce Certified Platform Administrator',
    'Salesforce Certified Platform Developer',
    'Salesforce Certified AI Associate',
  ];

  return (
    <ul className="grid gap-2 text-neutral-300">
      {certifications.map((c) => (
        <li key={c} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
          ⭐ {c}
        </li>
      ))}
    </ul>
  );
}