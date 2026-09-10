'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Certificate } from '@/data/certifications';
import { Award, Calendar, ExternalLink, Download, Maximize2 } from 'lucide-react';
import { Modal } from './Modal';
import { Button } from './Button';

interface CertificateCardProps {
  certificate: Certificate;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="bg-surface-light dark:bg-surface-dark border border-borderSubtle-light dark:border-borderSubtle-dark rounded-card p-5 shadow-subtle hover:shadow-hover hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between cursor-pointer group"
      >
        <div>
          {/* Certificate Thumbnail Preview if available */}
          {certificate.imageUrl ? (
            <div className="relative w-full aspect-[4/3] rounded-tag overflow-hidden mb-4 bg-secondarySurface-light dark:bg-secondarySurface-dark border border-borderSubtle-light dark:border-borderSubtle-dark">
              <Image
                src={certificate.imageUrl}
                alt={certificate.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3 py-1 text-xs font-semibold text-white bg-black/60 backdrop-blur-sm rounded-tag flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5" />
                  View Certificate
                </span>
              </div>
            </div>
          ) : null}

          <div className="flex items-center justify-between gap-2 mb-3">
            <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-tag border ${certificate.badgeColor || 'bg-secondarySurface-light text-secondaryText-light'}`}>
              {certificate.type.toUpperCase()}
            </span>
            <div className="flex items-center text-xs text-secondaryText-light dark:text-secondaryText-dark gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {certificate.date}
            </div>
          </div>

          <h4 className="font-bold text-base text-primaryText-light dark:text-primaryText-dark mb-1 line-clamp-2 group-hover:text-brand transition-colors">
            {certificate.title}
          </h4>

          <p className="text-xs text-secondaryText-light dark:text-secondaryText-dark">
            {certificate.issuer}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-borderSubtle-light dark:border-borderSubtle-dark flex items-center justify-between">
          <span className="text-xs font-medium text-brand flex items-center gap-1">
            <Award className="w-3.5 h-3.5" />
            Verified Credential
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
            className="text-xs font-semibold text-secondaryText-light dark:text-secondaryText-dark group-hover:text-brand flex items-center gap-1 transition-colors"
          >
            View Certificate
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* High-Resolution Modal Preview Window */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={certificate.title}
      >
        <div className="space-y-5">
          {/* Certificate Image View */}
          {certificate.imageUrl ? (
            <div className="relative w-full rounded-card overflow-hidden border border-borderSubtle-light dark:border-borderSubtle-dark bg-black/5 dark:bg-black/40">
              <img
                src={certificate.imageUrl}
                alt={certificate.title}
                className="w-full max-h-[60vh] object-contain mx-auto"
              />
            </div>
          ) : null}

          {/* Details Card */}
          <div className="p-4 rounded-card bg-secondarySurface-light dark:bg-secondarySurface-dark border border-borderSubtle-light dark:border-borderSubtle-dark space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-brand">
                <Award className="w-5 h-5" />
                <span className="font-semibold text-sm">{certificate.issuer}</span>
              </div>
              <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-tag border ${certificate.badgeColor}`}>
                {certificate.type.toUpperCase()} ({certificate.category})
              </span>
            </div>

            <p className="text-xs text-secondaryText-light dark:text-secondaryText-dark">
              Issued / Completed: <span className="font-medium text-primaryText-light dark:text-primaryText-dark">{certificate.date}</span>
            </p>

            {certificate.description && (
              <p className="text-xs text-secondaryText-light dark:text-secondaryText-dark pt-1 leading-relaxed border-t border-borderSubtle-light/60 dark:border-borderSubtle-dark/60 mt-2">
                {certificate.description}
              </p>
            )}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-2 flex-wrap">
            {certificate.imageUrl && (
              <Button size="sm" variant="primary" asLink href={certificate.imageUrl} target="_blank">
                <ExternalLink className="w-4 h-4" />
                Open Full Size Image
              </Button>
            )}

            {certificate.pdfUrl && (
              <Button size="sm" variant="secondary" asLink href={certificate.pdfUrl} target="_blank">
                <Download className="w-4 h-4" />
                Download PDF Certificate
              </Button>
            )}

            {certificate.credentialUrl && (
              <Button size="sm" variant="outline" asLink href={certificate.credentialUrl} target="_blank">
                Verify Credential URL
              </Button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};
