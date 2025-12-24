import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

import { lazy, Suspense } from 'react';

const AboutSection = lazy(() => import('../components/sections/AboutSection'));
const ExperienceSection = lazy(() => import('../components/sections/ExperienceSection'));
const AchievementsSection = lazy(() => import('../components/sections/AchievementsSection'));
const ProjectsSection = lazy(() => import('../components/sections/ProjectsSection'));
const SkillsSection = lazy(() => import('../components/sections/SkillsSection'));
const CertificationsSection = lazy(() => import('../components/sections/CertificationsSection'));

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

export default function Home() {
  return (
    <main className="min-h-screen animate-fade-in-blur">
      <Header profile={profile} />
      <Hero profile={profile} />

      <div className="mx-auto w-full max-w-6xl px-5 pb-16">
        <Section id="about" title="About" className="animate-fade-in-up">
          <Suspense fallback={<div className="h-16 bg-neutral-800/20 rounded animate-pulse"></div>}>
            <AboutSection />
          </Suspense>
        </Section>

        <Section id="experience" title="Experience" className="animate-fade-in-up">
          <Suspense fallback={<div className="h-32 bg-neutral-800/20 rounded animate-pulse"></div>}>
            <ExperienceSection />
          </Suspense>
        </Section>

        <Section id="achievements" title="Achievements" className="animate-fade-in-up">
          <Suspense fallback={<div className="h-24 bg-neutral-800/20 rounded animate-pulse"></div>}>
            <AchievementsSection />
          </Suspense>
        </Section>

        <Section id="projects" title="Projects" className="animate-fade-in-up">
          <Suspense fallback={<div className="h-64 bg-neutral-800/20 rounded animate-pulse"></div>}>
            <ProjectsSection />
          </Suspense>
        </Section>

        <Section id="skills" title="Skills" className="animate-fade-in-up">
          <Suspense fallback={<div className="h-16 bg-neutral-800/20 rounded animate-pulse"></div>}>
            <SkillsSection />
          </Suspense>
        </Section>

        <Section id="certifications" title="Certifications" className="animate-fade-in-up">
          <Suspense fallback={<div className="h-32 bg-neutral-800/20 rounded animate-pulse"></div>}>
            <CertificationsSection />
          </Suspense>
        </Section>

        <ContactSection profile={profile} />
      </div>

      <Footer />
    </main>
  );
}
