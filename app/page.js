import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const profile = {
  name: 'Jeet Rathod',
  title: 'Salesforce Developer',
  location: 'India',
  phone: '+91 91066 04262',
  email: 'work.jeetrathod@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/hi-jeet-rathod',
    trailhead: 'https://www.salesforce.com/trailblazer/imjeetrathod',
  },
  summary:
    'Salesforce Developer with 2 years of hands-on experience designing, developing, and optimizing scalable Salesforce solutions. Skilled in Apex, LWC, SOQL, Flows, and integrations. Focused on clean UX, performance, and reliable delivery.',
};

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
    subtitle: 'Emsigner Integration',
    description:
      'Integrated digital signature flows with secure document validation, user verification, and real-time data sync between Salesforce and external systems.',
    tags: ['Integration', 'REST APIs', 'Security'],
  },
  {
    title: 'AI-Driven Customer Engagement Solution',
    subtitle: 'Agentforce Developer (Company Website Bot)',
    description:
      'Developed an AI-powered chatbot using Agentforce to improve how customers interact with the company website. The solution allows users to ask questions, explore services, schedule meetings, and generate leads directly through chat. Built custom actions using Flows, Data Cloud, and API integrations to automate meeting scheduling, send email invitations, and capture lead information in real time.',
    tags: ['Agentforce', 'AI', 'Flows', 'Data Cloud', 'API Integrations'],
  },
  {
    title: 'Healthcare Solutions',
    subtitle: 'Experience Cloud Case Management',
    description:
      'Implemented case management on Experience Cloud with roles, permission sets, page layouts, and reporting/dashboards for a partner portal.',
    tags: ['Experience Cloud', 'Service Cloud', 'Reports'],
  },
];

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

const certifications = [
  'Salesforce Certified Platform Administrator',
  'Salesforce Certified Platform Developer',
  'Salesforce Certified AI Associate',
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header profile={profile} />
      <Hero profile={profile} />

      <div className="mx-auto w-full max-w-6xl px-5 pb-16">
        <Section id="about" title="About">
          <p className="text-neutral-300 leading-relaxed">{profile.summary}</p>
        </Section>

        <Section id="experience" title="Experience">
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
        </Section>

        <Section id="achievements" title="Achievements">
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
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-sm text-neutral-200">
                {s}
              </span>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <ul className="grid gap-2 text-neutral-300">
            {certifications.map((c) => (
              <li key={c} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
                ✅ {c}
              </li>
            ))}
          </ul>
        </Section>

        <ContactSection profile={profile} />
      </div>

      <Footer />
    </main>
  );
}
