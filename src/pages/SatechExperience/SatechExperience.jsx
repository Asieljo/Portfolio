import { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ContactModal from '../../components/ContactModal/ContactModal';
import PageIntro from '../../components/PageIntro/PageIntro';
import FactsStrip from '../../components/FactsStrip/FactsStrip';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ContactCta from '../../components/ContactCta/ContactCta';
import demoReel from '../../assets/videos/Demo Reel.mp4';
import demoReelPoster from '../../assets/images/demo-reel-poster.webp';
import './SatechExperience.styles.scss';

const facts = [
  { id: 'role', label: 'Role', value: 'Design & Marketing Intern' },
  { id: 'industry', label: 'Industry', value: 'Satellite tracking' },
  { id: 'location', label: 'Location', value: 'León, Guanajuato' },
  { id: 'period', label: 'Period', value: 'Mar – Sep 2025' },
];

const designFiles = [
  {
    id: 'landing',
    title: 'Landing Page Redesign',
    description:
      'Redesign of a corporate landing page: style guide with typography, color palette and logos, reusable components and high-fidelity designs with prototypes for desktop, tablet and mobile.',
    tags: ['Landing Page', 'Components', 'Prototyping'],
    href: 'https://www.figma.com/design/heGIniVHjxOldwxdVNGZBF/SATECH-Design?node-id=229-1746&t=Fn4bdpNlB9GIjlHy-1',
  },
  {
    id: 'website',
    title: 'GPS Tracking Website',
    description:
      'Website design for a GPS tracking brand: visual research, style guide, components such as navigation, menus and FAQs, and responsive designs with prototypes for desktop, tablet and mobile.',
    tags: ['Web Design', 'Style Guide', 'Prototyping'],
    href: 'https://www.figma.com/design/h0MkjUS4UhlbKAO77n5jgC/NOVA-GPS-design?node-id=0-1&t=2Ert70UIhDUZ9N1u-1',
  },
  {
    id: 'blogs',
    title: 'Corporate Blogs',
    description:
      'Blog experience for both websites: a blog home with category navigation and an individual post layout with reactions, designed and prototyped for desktop, tablet and mobile.',
    tags: ['Blog Design', 'UI Components', 'Prototyping'],
    href: 'https://www.figma.com/design/VIGladFp4KBllHB2FpdoKq/Blogs-NOVA-y-SATECH?node-id=0-1&t=KC4pJm8H7hHOMlfr-1',
  },
];

const SatechExperience = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="satech-experience">
      <Header onContactClick={openContact} />
      <main>
        <PageIntro
          label="Work experience"
          title="Design & Marketing Intern"
          lead="Designing responsive websites, blogs and HTML email signatures for a satellite tracking company."
          text="Between March and September 2025 I took corporate websites and blogs from user research and benchmarking to wireframes, reusable components and responsive high-fidelity prototypes in Figma. I also designed and coded HTML email signatures, tested them across email clients and coordinated every deliverable with the design and marketing teams."
        />

        <FactsStrip facts={facts} />

        <section aria-labelledby="satech-reel-title">
          <div className="satech-experience__container">
            <div className="satech-experience__reel">
              <SectionHeader
                id="satech-reel-title"
                title="Demo reel"
                subtitle="A look at my design work in 90 seconds."
                className="satech-experience__reel-header"
              />

              <video
                className="satech-experience__video"
                src={demoReel}
                poster={demoReelPoster}
                controls
                playsInline
                preload="metadata"
                aria-labelledby="satech-reel-title"
              >
                Your browser does not support embedded videos.
              </video>
            </div>
          </div>
        </section>

        <section aria-labelledby="satech-files-title">
          <div className="satech-experience__container">
            <SectionHeader
              id="satech-files-title"
              title="Design files"
              subtitle="The complete work lives in Figma. Open each file to explore the designs, prototypes and components."
            />

            <div className="satech-experience__files">
              {designFiles.map((file) => (
                <article key={file.id} className="satech-experience__file">
                  <span className="satech-experience__type">Figma file</span>
                  <h3 className="satech-experience__file-title">{file.title}</h3>
                  <p className="satech-experience__file-text">{file.description}</p>
                  <ul className="satech-experience__tags">
                    {file.tags.map((tag) => (
                      <li key={tag} className="satech-experience__tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={file.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="satech-experience__file-link"
                    aria-label={`Open in Figma: ${file.title} (opens in a new tab)`}
                  >
                    Open in Figma
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactCta onContactClick={openContact} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

export default SatechExperience;
