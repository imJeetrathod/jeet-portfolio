import ProjectCard from '../ProjectCard';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Sales & Quote Management',
      subtitle: 'Custom Quote UI (LWC + Apex)',
      description:
        'Built a custom quote management experience in Salesforce that allows sales teams to select products, calculate pricing, and generate quotes directly from Opportunities. Implemented real-time data handling, pricing logic, and a clean multi-step UI to reduce manual effort and improve quoting speed.',
      tags: ['LWC', 'Apex', 'SOQL', 'UI/UX'],
    },
    {
      title: 'Digital Signature Integration',
      subtitle: 'LWC + Agentforce Solution',
      description:
        'Implemented a secure digital signature workflow integrated with Salesforce. Enabled document validation, user verification, and real-time status updates while syncing signed documents and metadata back into Salesforce using REST APIs.',
      tags: ['Integration', 'REST APIs', 'Security'],
    },
    {
      title: 'AI-Driven Customer Engagement',
      subtitle: 'Agentforce Website Chatbot',
      description:
        'Developed an AI-powered chatbot using Agentforce to enhance customer engagement on the company website. The solution allows users to ask questions, explore services, schedule meetings, and generate leads. Automated meeting scheduling, email notifications, and real-time lead creation using Flows and API integrations.',
      tags: ['Agentforce', 'AI', 'Flows', 'Apex'],
    },
    {
      title: 'Healthcare Partner Portal',
      subtitle: 'Experience Cloud Case Management',
      description:
        'Built a healthcare partner portal using Experience Cloud with structured case management. Configured roles, permission sets, page layouts, and reports to enable secure collaboration, efficient case tracking, and actionable insights through dashboards.',
      tags: ['Experience Cloud', 'Service Cloud', 'Reports'],
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </div>
  );
}
