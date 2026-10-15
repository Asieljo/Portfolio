import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ContactModal from '../../components/ContactModal/ContactModal';
import PageIntro from '../../components/PageIntro/PageIntro';
import FactsStrip from '../../components/FactsStrip/FactsStrip';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ContactCta from '../../components/ContactCta/ContactCta';
import userflow from '../../assets/images/userflow.webp';
import sitemap from '../../assets/images/sitemap.webp';
import catalogMockup from '../../assets/images/mockups/Mockup_1.webp';
import productMockup from '../../assets/images/mockups/Mockup_2.webp';
import photosMockup from '../../assets/images/mockups/Mockup_3.webp';
import templateMockup from '../../assets/images/mockups/Mockup_4.webp';
import './CaseStudy.styles.scss';

const figmaUrl =
  'https://www.figma.com/design/XSbLEijNlwoFpVmjLSmgoF/App-de-canto?node-id=40-2&t=xBVgm2YFKeWqJBxT-1';

const facts = [
  { id: 'role', label: 'Role', value: 'UX/UI Designer' },
  { id: 'client', label: 'Client', value: 'Gates & ironwork business' },
  { id: 'year', label: 'Year', value: '2024' },
  { id: 'tools', label: 'Tools', value: 'Figma' },
  { id: 'status', label: 'Status', value: 'Halted' },
];

const overview = [
  {
    id: 'challenge',
    title: 'The challenge',
    text: 'Every quote required the owner to visit the client’s home, take measurements, find the materials and estimate materials and labor by hand. It cost him time, fuel and effort, and clients had no quick way to get a price.',
  },
  {
    id: 'solution',
    title: 'The solution',
    text: 'A digital catalog where clients browse installations, configure them with their own measurements and get an itemized quote with materials and labor included, ready to download as a PDF.',
  },
  {
    id: 'role',
    title: 'My role',
    text: 'End to end: client interview, user segmentation, sketching, user flow and sitemap, components and variants, interactive wireframes, high-fidelity design and prototypes.',
  },
];

const phases = [
  { id: 'discover', name: 'Discover', topic: 'Meeting the client' },
  { id: 'define', name: 'Define', topic: 'Users & needs' },
  { id: 'ideate', name: 'Ideate', topic: 'Sketching the concept' },
  { id: 'structure', name: 'Structure', topic: 'User flow & sitemap' },
  { id: 'design', name: 'Design', topic: 'Wireframes to high fidelity' },
  { id: 'outcome', name: 'Outcome', topic: 'Results & learnings' },
];

const painPoints = [
  'A home visit to measure every quote',
  'Materials and labor priced by hand',
  'Time, fuel and effort for an elderly owner',
];

const userTypes = [
  {
    id: 'owner',
    label: 'Primary user',
    title: 'The company owner',
    text: 'Runs the business and gives every quote. He also keeps the catalog up to date from a members-only edit view.',
  },
  {
    id: 'workers',
    label: 'Secondary users',
    title: 'Installation workers',
    text: 'Help with the installations and need to stay informed about each job.',
  },
  {
    id: 'clients',
    label: 'Clients',
    title: 'People who need an installation',
    text: 'Want to check the prices of installations, materials and labor, and get a quote quickly.',
  },
];

const userNeeds = [
  {
    id: 'business',
    label: 'The business',
    title: 'Efficient & affordable',
    text: 'A small company without a high budget that needs an efficient solution.',
  },
  {
    id: 'clients',
    label: 'The clients',
    title: 'Fast & all-inclusive',
    text: 'People who want a quick way to get a quote with everything included.',
  },
];

const concept = [
  {
    id: 'browse',
    title: 'Browse by category',
    text: 'Products organized in the business’s real categories: gates, windows, partitions, bars, screens, locks and more.',
  },
  {
    id: 'configure',
    title: 'Configure the product',
    text: 'Clients choose the material, color, thickness, accessories and quantity of what they need.',
  },
  {
    id: 'measure',
    title: 'Measure it yourself',
    text: 'Clients enter the width and height of their own space, so the owner no longer has to visit just to measure.',
  },
  {
    id: 'quote',
    title: 'All-inclusive quote',
    text: 'An itemized quote with each cost and the final total, materials and labor included, downloadable as a PDF.',
  },
];

const diagrams = [
  {
    id: 'userflow',
    label: 'User flow',
    image: userflow,
    width: 1381,
    height: 1121,
    alt: 'User flow for making a quote, from the catalog home to the product page, the quote page and a PDF',
    caption:
      'Making a quote. Clients start on the catalog, open a product, configure it and get an itemized quote they can download as a PDF. Search and categories lead to the same product page.',
  },
  {
    id: 'sitemap',
    label: 'Sitemap',
    image: sitemap,
    width: 1158,
    height: 1010,
    alt: 'Sitemap with the Home, Search results, Product, More categories, Make a quote, Log in and Edit screens',
    caption:
      'Seven screens: Home, Search results, More categories, Product, Make a quote and Log in, plus a members-only Edit view where the business manages its products.',
  },
];

const screens = [
  {
    id: 'configurator',
    title: 'Product configurator',
    image: productMockup,
    alt: 'Product page of an artistic ironwork gate with material, color, measurement, thickness, accessory and quantity fields',
    text: 'The heart of the catalog. Clients choose the material and color, enter the width and height of their space, the thickness, accessories and quantity, then request their quote. Installation specs and manufacturing and delivery times sit right below.',
  },
  {
    id: 'photos',
    title: 'Photo viewer',
    image: photosMockup,
    alt: 'Enlarged photo of an ironwork gate in a modal with its available colors and photo thumbnails',
    text: 'Clients can zoom into each product’s photos and switch between colors, and the photos update to match.',
  },
  {
    id: 'template',
    title: 'One template, every product',
    image: templateMockup,
    alt: 'Product page of a vintage wooden gate with copper handles using the same configurator layout',
    text: 'The same product template adapts to any item in the catalog, from an artistic ironwork gate to a vintage wooden gate with copper handles.',
  },
];

const learnings = [
  {
    id: 'request',
    title: 'Look past the request',
    text: 'The client asked for a quote app, but the real problem was the home visits. Questioning the request led to a more useful solution.',
  },
  {
    id: 'clients',
    title: 'Engage with real clients',
    text: 'Working with a real client taught me how to engage with them and translate business needs into a user-centric product.',
  },
  {
    id: 'process',
    title: 'Practice the full process',
    text: 'From the first interview to interactive prototypes, I applied everything I had learned in a real context.',
  },
];

// Intrinsic size shared by the four laptop mockups, so the browser reserves
// their space before the lazy images load.
const mockupSize = { width: 1874, height: 1275 };

const formatIndex = (index) => String(index + 1).padStart(2, '0');

const Phase = ({ index, intro, children }) => {
  const phase = phases[index];

  return (
    <section id={phase.id} className="case-study__phase" aria-labelledby={`${phase.id}-title`}>
      <div className="case-study__container case-study__container--phase">
        <div className="case-study__phase-header">
          <div className="case-study__phase-heading">
            <span className="case-study__phase-number" aria-hidden="true">
              {formatIndex(index)}
            </span>
            <div className="case-study__phase-titles">
              <h2 id={`${phase.id}-title`} className="case-study__phase-title">
                {phase.name}
              </h2>
              <p className="case-study__phase-topic">{phase.topic}</p>
            </div>
          </div>
          <p className="case-study__text case-study__phase-intro">{intro}</p>
        </div>

        {children}
      </div>
    </section>
  );
};

const Card = ({ label, title, text, inverse }) => (
  <li className={`case-study__card${inverse ? ' case-study__card--inverse' : ''}`}>
    {label && <span className="case-study__label">{label}</span>}
    <h4 className="case-study__card-title">{title}</h4>
    {text && <p className="case-study__text">{text}</p>}
  </li>
);

/**
 * Case study page (`/case-study`): the UX process behind a digital catalog for
 * a small gates and ironwork business.
 *
 * Opens with `PageIntro` and `FactsStrip`, then an overview and a phase
 * navigation that jumps to each of the six phases (Discover, Define, Ideate,
 * Structure, Design and Outcome) through in-page anchors. Ends with
 * `ContactCta`, the `Footer` and the `ContactModal`.
 */
const CaseStudy = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="case-study">
      <Header onContactClick={openContact} />
      <main>
        <PageIntro
          title="Digital catalog for a small Mexican business"
          lead="Turning a slow, in-person quoting process into a self-service catalog where clients configure a product and get an instant quote."
          text="A real client, the owner of a small business that makes and installs gates, windows and ironwork, asked me for a quote app. By digging into how his quotes actually worked, I found the real bottleneck: home visits. I designed a digital catalog instead and took it from the first interview to user segmentation, information architecture, wireframes and high-fidelity interactive prototypes in Figma."
          action={{
            label: 'Open in Figma',
            href: figmaUrl,
            ariaLabel: 'Open in Figma: digital catalog design (opens in a new tab)',
          }}
          media={
            <figure className="case-study__hero">
              <img
                className="case-study__hero-image"
                src={catalogMockup}
                width={mockupSize.width}
                height={mockupSize.height}
                alt="Catalog home of the digital catalog on a laptop, showing gates with a quote button on each product"
              />
              <figcaption className="case-study__caption case-study__hero-caption">
                <span className="case-study__label">Catalog home</span>
                Products organized by category, a search bar and a quote button on every product.
              </figcaption>
            </figure>
          }
        />

        <FactsStrip facts={facts} />

        <section aria-labelledby="case-study-overview-title">
          <div className="case-study__container">
            <SectionHeader id="case-study-overview-title" title="Overview" />

            <div className="case-study__overview">
              {overview.map((item) => (
                <div key={item.id} className="case-study__overview-item">
                  <h3 className="case-study__overview-title">{item.title}</h3>
                  <p className="case-study__text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="case-study-process-title">
          <div className="case-study__container">
            <SectionHeader
              id="case-study-process-title"
              title="The process"
              subtitle="Six phases, from the first conversation with the client to high-fidelity prototypes. Jump to any of them."
            />

            <nav className="case-study__process" aria-label="Case study phases">
              {phases.map((phase, index) => (
                <Link key={phase.id} to={`#${phase.id}`} className="case-study__step">
                  <span className="case-study__step-number">{formatIndex(index)}</span>
                  <span className="case-study__step-text">
                    <span className="case-study__step-name">{phase.name}</span>
                    <span className="case-study__step-topic">{phase.topic}</span>
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <Phase
          index={0}
          intro="The client runs a small business that makes and installs gates, windows and ironwork. In our first meeting he explained how he gave quotes: for every request he visited the client’s home, took measurements, looked for the materials and only then estimated the cost of materials and labor. For an elderly owner, every quote meant time, fuel and physical effort."
        >
          <div className="case-study__block">
            <h3 className="case-study__block-title">Pain points</h3>
            <ul className="case-study__cards case-study__cards--3">
              {painPoints.map((point, index) => (
                <Card key={point} label={`Pain point ${formatIndex(index)}`} title={point} />
              ))}
            </ul>
          </div>

          <div className="case-study__block">
            <h3 className="case-study__block-title">The request vs. the real problem</h3>
            <ul className="case-study__cards">
              <Card
                label="What he asked for"
                title="A quote app with all the information his clients need to order an installation."
              />
              <Card
                label="What he needed"
                title="To stop depending on home visits to give a quote."
                inverse
              />
            </ul>
          </div>

          <div className="case-study__question">
            <span className="case-study__label">How might we</span>
            <p className="case-study__question-text">
              How might we let clients get an accurate quote, with materials and labor included,
              without a home visit?
            </p>
          </div>
        </Phase>

        <Phase
          index={1}
          intro="Before designing anything, I segmented the people involved. Each group relates to a quote differently, so the catalog had to serve all of them without adding work for the business."
        >
          <div className="case-study__block">
            <h3 className="case-study__block-title">User types</h3>
            <ul className="case-study__cards case-study__cards--3">
              {userTypes.map((user) => (
                <Card key={user.id} label={user.label} title={user.title} text={user.text} />
              ))}
            </ul>
          </div>

          <div className="case-study__block">
            <h3 className="case-study__block-title">User characteristics</h3>
            <ul className="case-study__cards">
              {userNeeds.map((need) => (
                <Card key={need.id} label={need.label} title={need.title} text={need.text} />
              ))}
            </ul>
          </div>
        </Phase>

        <Phase
          index={2}
          intro="With the problem and the users defined, I started sketching the structure, the visual style and the user flow. I explored many directions and discarded most of them until one concept fit both the owner and his clients: a catalog that does the quoting for him."
        >
          <div className="case-study__block">
            <h3 className="case-study__block-title">The concept</h3>
            <ul className="case-study__cards case-study__cards--4">
              {concept.map((item, index) => (
                <Card
                  key={item.id}
                  label={formatIndex(index)}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </ul>
          </div>
        </Phase>

        <Phase
          index={3}
          intro="I moved the concept into Figma and mapped it before designing any screen: the main user flow to get a quote, and a sitemap showing how every screen connects."
        >
          <div className="case-study__figures">
            {diagrams.map((diagram) => (
              <figure key={diagram.id} className="case-study__figure">
                <a
                  href={diagram.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-study__figure-link"
                  aria-label={`Open the ${diagram.label.toLowerCase()} at full size (opens in a new tab)`}
                >
                  <img
                    className="case-study__figure-image"
                    src={diagram.image}
                    alt={diagram.alt}
                    width={diagram.width}
                    height={diagram.height}
                    loading="lazy"
                  />
                </a>
                <figcaption className="case-study__caption">
                  <span className="case-study__label">{diagram.label}</span>
                  {diagram.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Phase>

        <Phase
          index={4}
          intro="This is my favorite part. I built components, interactive components, variants and assets, with the help of some Figma plugins, and used them to design interactive wireframes. Once every interaction worked as intended, I turned the wireframes into a realistic, high-fidelity design and interactive prototypes."
        >
          <div className="case-study__block">
            <h3 className="case-study__block-title">Key screens</h3>
            <div className="case-study__screens">
              {screens.map((screen, index) => (
                <figure
                  key={screen.id}
                  className={`case-study__screen${index % 2 ? ' case-study__screen--reverse' : ''}`}
                >
                  <img
                    className="case-study__screen-image"
                    src={screen.image}
                    alt={screen.alt}
                    width={mockupSize.width}
                    height={mockupSize.height}
                    loading="lazy"
                  />
                  <figcaption className="case-study__screen-body">
                    <span className="case-study__label">Key screen {formatIndex(index)}</span>
                    <h4 className="case-study__card-title">{screen.title}</h4>
                    <p className="case-study__text">{screen.text}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <a
            href={figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="case-study__button"
            aria-label="Explore the full design in Figma (opens in a new tab)"
          >
            Explore the full design in Figma
          </a>
        </Phase>

        <Phase
          index={5}
          intro="The project stopped after the high-fidelity prototypes: the client didn’t meet with me again to review the next steps, so the designs were never tested with users or developed. Even so, I value this experience: it taught me how to engage with a real client and let me put everything I had learned into practice."
        >
          <div className="case-study__block">
            <h3 className="case-study__block-title">What I learned</h3>
            <ul className="case-study__cards case-study__cards--3">
              {learnings.map((item) => (
                <Card key={item.id} title={item.title} text={item.text} />
              ))}
            </ul>
          </div>
        </Phase>

        <ContactCta onContactClick={openContact} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

export default CaseStudy;
