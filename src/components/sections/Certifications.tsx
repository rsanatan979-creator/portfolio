import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { technicalCertifications, activitiesAndParticipation } from '@/data/certifications';
import { CertificateCard } from '../ui/CertificateCard';
import { Award, Trophy } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-background-light dark:bg-background-dark transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          eyebrow="Certifications & Learning"
          title="Verified certifications & workshop training"
          subtitle="Specialized developer credentials and technical workshops in blockchain technology, AI tools, and cybersecurity."
        />

        {/* Technical Certifications Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-lg font-bold text-primaryText-light dark:text-primaryText-dark">
            <Award className="w-5 h-5 text-brand" />
            <h3>Technical Certifications & Workshops</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalCertifications.map((cert) => (
              <CertificateCard key={cert.id} certificate={cert} />
            ))}
          </div>
        </div>

        {/* Activities & Participation Grid (Differentiated per TRD/PRD rules) */}
        <div className="pt-8 border-t border-borderSubtle-light dark:border-borderSubtle-dark space-y-6">
          <div className="flex items-center gap-2 text-lg font-bold text-primaryText-light dark:text-primaryText-dark">
            <Trophy className="w-5 h-5 text-amber-500" />
            <h3>Activities & Participation</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activitiesAndParticipation.map((act) => (
              <CertificateCard key={act.id} certificate={act} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
