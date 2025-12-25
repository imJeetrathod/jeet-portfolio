import ProjectCard from '../ProjectCard';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Sales and Quote Management',
      subtitle: 'Custom Quote UI (LWC + Apex)',
      description:
        'Built interactive quote management components for product selection, pricing, and quote creation with real-time data from Opportunities and Accounts.',
      tags: ['LWC', 'Apex', 'SOQL', 'UI/UX'],
    },
    {
      title: 'Digital Signature',
      subtitle: 'LWC + Agentforce Solution',
      description:
        'Integrated digital signature flows with secure document validation, user verification, and real-time data sync between Salesforce and external systems.',
      tags: ['Integration', 'REST APIs', 'Security'],
    },
    {
      title: 'AI-Driven Customer Engagement Solution',
      subtitle: 'Agentforce Developer (Company Website Bot)',
      description:
        'Developed an AI-powered chatbot using Agentforce to improve how customers interact with the company website. The solution allows users to ask questions, explore services, schedule meetings, and generate leads directly through chat. Built custom actions using Flows and API integrations to automate meeting scheduling, send email invitations, and capture lead information in real time.',
      tags: ['Agentforce', 'AI', 'Flows', 'Apex' ],
    },
    {
      title: 'Healthcare Solutions',
      subtitle: 'Experience Cloud Case Management',
      description:
        'Implemented case management on Experience Cloud with roles, permission sets, page layouts, and reporting/dashboards for a partner portal.',
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