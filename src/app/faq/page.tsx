import type { Metadata } from 'next'
import FAQPage from '../../views/FAQPage'
import JsonLd from '../../components/JsonLd'

export const metadata: Metadata = {
  title: 'FAQ — Pricing, Process & Warranty',
  description: "Answers to the most common questions about Aarth Construction's pricing, renovation process, project timelines, and workmanship warranty.",
  alternates: { canonical: 'https://www.aarthconstruction.com/faq' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do you offer free estimates?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, absolutely. We provide free, no-obligation estimates for all residential and commercial projects. Contact us and we\'ll schedule a time to visit your space and give you a detailed, transparent quote.' } },
    { '@type': 'Question', name: 'How is pricing determined?', acceptedAnswer: { '@type': 'Answer', text: 'Pricing is based on the scope of work, materials selected, labour requirements, and project timeline. We provide detailed line-item estimates so you always know exactly what you\'re paying for — no hidden fees.' } },
    { '@type': 'Question', name: 'What is your process from start to finish?', acceptedAnswer: { '@type': 'Answer', text: 'We follow a 4-step process: (1) Free Consultation — we visit your space, listen to your vision, and assess the scope. (2) Design & Quote — we prepare a detailed proposal with materials and timeline. (3) Build — our certified team completes the work with minimal disruption. (4) Handover — we do a walkthrough, fix any punch items, and you enjoy your new space.' } },
    { '@type': 'Question', name: 'How long does a typical renovation take?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on the scope. A bathroom renovation typically takes 1–3 weeks. A kitchen renovation 2–5 weeks. A full basement 4–8 weeks. We\'ll give you a detailed timeline in your quote and keep you updated throughout.' } },
    { '@type': 'Question', name: 'Do you offer a warranty on your work?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer a workmanship warranty on all our projects. The warranty period varies by project type — typically 1 year for residential renovations. Manufacturer warranties on materials are passed through to you as well.' } },
    { '@type': 'Question', name: 'Are you licensed and insured?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Aarth Construction Inc is fully licensed to operate in Alberta, British Columbia, and Saskatchewan, and carries both general liability insurance and WCB (Workers\' Compensation Board) coverage. We\'re happy to provide proof of insurance on request.' } },
    { '@type': 'Question', name: 'How far in advance do I need to book?', acceptedAnswer: { '@type': 'Answer', text: 'Our schedule fills up, especially in spring and summer. We recommend booking 4–6 weeks in advance for smaller projects and 6–12 weeks for larger renovations to secure your preferred start date.' } },
    { '@type': 'Question', name: 'Do you handle permits?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we manage all required permits and inspections as part of the project — you don\'t have to deal with the paperwork.' } },
  ],
}

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <FAQPage />
    </>
  )
}
