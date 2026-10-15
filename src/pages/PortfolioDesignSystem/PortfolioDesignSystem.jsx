import { Fragment, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ContactModal from '../../components/ContactModal/ContactModal';
import PageIntro from '../../components/PageIntro/PageIntro';
import FactsStrip from '../../components/FactsStrip/FactsStrip';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ContactCta from '../../components/ContactCta/ContactCta';
import { scrollToSection } from '../../utils/scrollToSection';
import themePrimary from '../../assets/images/design-system/theme-primary.webp';
import themeSecondary from '../../assets/images/design-system/theme-secondary.webp';
import themeComplementary from '../../assets/images/design-system/theme-complementary.webp';
import breakpointTablet from '../../assets/images/design-system/breakpoint-tablet.webp';
import breakpointMobile from '../../assets/images/design-system/breakpoint-mobile.webp';
import './PortfolioDesignSystem.styles.scss';

const links = {
  mindmap:
    'https://www.figma.com/board/c6vGEkyD35ADGml2HOkTlj/Design-System?node-id=0-1&t=5i62mAMgfOItmm6z-1',
  figma:
    'https://www.figma.com/design/fsQ6j0z0YWdlgu4XQ7L5Id/Portfolio?node-id=107-254&t=J7e8VJ7LVB76JPXN-1',
  github: 'https://github.com/Asieljo/Portfolio',
  // Static file in public/, served outside the React app.
  library: `${import.meta.env.BASE_URL}design-system-library.html`,
};

const facts = [
  { id: 'role', label: 'Role', value: 'Designer & developer' },
  { id: 'year', label: 'Year', value: '2026' },
  { id: 'design', label: 'Design', value: 'FigJam & Figma' },
  { id: 'code', label: 'Code', value: 'React & Sass' },
  { id: 'ai', label: 'AI', value: 'Claude Code' },
];

const overview = [
  {
    id: 'challenge',
    title: 'The challenge',
    text: 'My previous portfolio was built with plain HTML and CSS and no longer reflected my work. It needed a stronger visual design, a better distribution of elements and a structure that could grow with me.',
  },
  {
    id: 'approach',
    title: 'The approach',
    text: 'Treat the portfolio like a product: a design system as the single source of truth, shared by Figma and the code, so every color, size and space is decided once and reused everywhere.',
  },
  {
    id: 'role',
    title: 'My role',
    text: 'End to end: design system architecture, primitive and semantic tokens, high-fidelity design with components, breakpoints and themes, and the React implementation guided through Claude Code.',
  },
];

const phases = [
  { id: 'mindmap', name: 'Mindmap', topic: 'Structuring the system' },
  { id: 'json', name: 'JSON', topic: 'From map to data' },
  { id: 'tokens-studio', name: 'Tokens Studio', topic: 'Tokens into Figma' },
  { id: 'figma', name: 'Figma', topic: 'Designing on tokens' },
  { id: 'claude-code', name: 'Claude Code', topic: 'From design to code' },
  { id: 'iterations', name: 'Iterations', topic: 'Refining every detail' },
  { id: 'result', name: 'Final result', topic: 'A system you can browse' },
];

const layers = [
  {
    id: 'primitives',
    label: 'Layer 01',
    title: 'Primitives',
    text: 'Raw values with no meaning attached: the palette, the type scale, the spacing steps.',
    token: { name: 'color.brand.primary', value: '#FF6B1A' },
  },
  {
    id: 'semantic',
    label: 'Layer 02',
    title: 'Semantic',
    text: 'Names that describe a purpose and point to a primitive: what a value is for, not what it looks like.',
    token: { name: 'color.text.brand-primary', value: '{color.brand.primary}' },
  },
];

const pipeline = ['FigJam mindmap', 'DTCG JSON', 'Tokens Studio', 'Figma variables'];

const stats = [
  { id: 'primitives', value: '131', label: 'Primitive tokens' },
  { id: 'semantic', value: '215', label: 'Semantic tokens' },
  { id: 'categories', value: '13', label: 'Categories' },
];

const themes = [
  {
    id: 'primary',
    label: 'Primary theme',
    name: 'Orange',
    image: themePrimary,
    tokens: [
      { role: 'Surface', name: 'background-brand-primary' },
      { role: 'Content', name: 'text-brand-complementary' },
    ],
  },
  {
    id: 'secondary',
    label: 'Secondary theme',
    name: 'Beige',
    image: themeSecondary,
    tokens: [
      { role: 'Surface', name: 'background-brand-secondary' },
      { role: 'Content', name: 'text-brand-complementary' },
    ],
  },
  {
    id: 'complementary',
    label: 'Complementary theme',
    name: 'Black',
    image: themeComplementary,
    tokens: [
      { role: 'Surface', name: 'background-brand-complementary' },
      { role: 'Content', name: 'text-inverse' },
    ],
  },
];

// Intrinsic sizes of the landing crops, so the browser reserves their space
// before the lazy images load.
const devices = [
  {
    id: 'mobile',
    label: 'Mobile',
    range: '320–767px',
    image: breakpointMobile,
    width: 400,
    height: 711,
    alt: 'Landing of the portfolio on mobile, with the title stacked above the hero image and full-width buttons',
  },
  {
    id: 'tablet',
    label: 'Tablet',
    range: '768–1279px',
    image: breakpointTablet,
    width: 960,
    height: 720,
    alt: 'Landing of the portfolio on tablet, with the title beside a narrower hero image',
  },
  {
    id: 'desktop',
    label: 'Desktop',
    range: '1280px and up',
    image: themePrimary,
    width: 1280,
    height: 720,
    alt: 'Landing of the portfolio on desktop, with the title on the left and the hero image on the right',
  },
];

const breakpoints = [
  { id: 'mobile-sm', label: 'Mobile S', range: '320–479px' },
  { id: 'mobile-md', label: 'Mobile M', range: '480–767px' },
  { id: 'tablet', label: 'Tablet', range: '768–1279px' },
  { id: 'desktop', label: 'Desktop', range: '1280–1419px' },
  { id: 'desktop-lg', label: 'Desktop L', range: '1420–1919px' },
];

const briefing = [
  {
    id: 'specifications',
    label: 'Specifications',
    title: 'How to build it',
    text: 'React and Vite, React Router, Sass with strict BEM, co-located styles and the folder structure of the project.',
  },
  {
    id: 'requirements',
    label: 'Requirements',
    title: 'What it must achieve',
    text: 'High fidelity to the Figma mockups at every breakpoint and theme, responsive layouts and accessible interactions.',
  },
  {
    id: 'constraints',
    label: 'Constraints',
    title: 'What it must never do',
    text: 'No hardcoded values: every color, space and size comes from the tokens, and every task ends with a clean build and lint.',
  },
];

const reviewLoop = [
  {
    id: 'compare',
    title: 'Compare',
    text: 'Put the implementation next to the Figma mockup, breakpoint by breakpoint and theme by theme.',
  },
  {
    id: 'specify',
    title: 'Specify',
    text: 'Describe the exact difference and the token that should solve it, instead of a vague “make it look better”.',
  },
  {
    id: 'verify',
    title: 'Verify',
    text: 'Review the change, check the build and the linter, and move on to the next detail.',
  },
];

const learnings = [
  {
    id: 'structure',
    title: 'Structure before style',
    text: 'Mapping the system first made every later decision faster, from the Figma components to the Sass files.',
  },
  {
    id: 'language',
    title: 'One language for design and code',
    text: 'Sharing the same token names in Figma and Sass removed the guesswork from the handoff.',
  },
  {
    id: 'ai',
    title: 'AI needs direction',
    text: 'Claude Code delivered its best work when the specifications, constraints and design references were precise.',
  },
];

const tokensJson = `{
  "color": {
    "brand": {
      "primary": { "$type": "color", "$value": "#FF6B1A" }
    },
    "text": {
      "brand-primary": { "$type": "color", "$value": "{color.brand.primary}" }
    }
  },
  "spacing": {
    "lg": { "$type": "dimension", "$value": "24px" }
  }
}`;

const tokensScss = `// _primitives.scss
$color-brand-primary: #FF6B1A;
$spacing-lg: 24px;

// _semantic.scss
$color-text-brand-primary: p.$color-brand-primary;
$spacing-component-lg: p.$spacing-lg;`;

// Token names (JSON keys and Sass declarations) take the accent color and
// comments are dimmed: a light syntax highlight without a library. `split`
// with a capturing group puts the matches on the odd indexes.
const CODE_PATTERN = /("[^"\n]+"(?=:)|\$[\w-]+(?=:)|\/\/[^\n]*)/g;

const highlight = (code) =>
  code.split(CODE_PATTERN).map((part, index) => {
    if (index % 2 === 0) return part;
    const modifier = part.startsWith('//') ? 'comment' : 'name';
    return (
      <span key={index} className={`portfolio-ds__code-${modifier}`}>
        {part}
      </span>
    );
  });

const formatIndex = (index) => String(index + 1).padStart(2, '0');

// The phase index scrolls to each phase without adding a hash to the URL.
const handleStepClick = (event, id) => {
  event.preventDefault();
  scrollToSection(id);
};

const Phase = ({ index, intro, children }) => {
  const phase = phases[index];

  return (
    <section id={phase.id} className="portfolio-ds__phase" aria-labelledby={`${phase.id}-title`}>
      <div className="portfolio-ds__container portfolio-ds__container--phase">
        <div className="portfolio-ds__phase-header">
          <div className="portfolio-ds__phase-heading">
            <span className="portfolio-ds__phase-number" aria-hidden="true">
              {formatIndex(index)}
            </span>
            <div className="portfolio-ds__phase-titles">
              <h2 id={`${phase.id}-title`} className="portfolio-ds__phase-title">
                {phase.name}
              </h2>
              <p className="portfolio-ds__phase-topic">{phase.topic}</p>
            </div>
          </div>
          <p className="portfolio-ds__text portfolio-ds__phase-intro">{intro}</p>
        </div>

        {children}
      </div>
    </section>
  );
};

const Card = ({ label, title, text, inverse }) => (
  <li className={`portfolio-ds__card${inverse ? ' portfolio-ds__card--inverse' : ''}`}>
    {label && <span className="portfolio-ds__label">{label}</span>}
    <h4 className="portfolio-ds__card-title">{title}</h4>
    {text && <p className="portfolio-ds__text">{text}</p>}
  </li>
);

const CodeBlock = ({ file, code }) => (
  <figure className="portfolio-ds__code">
    <figcaption className="portfolio-ds__code-file">{file}</figcaption>
    <pre className="portfolio-ds__code-body">
      <code>{highlight(code)}</code>
    </pre>
  </figure>
);

// External material of a phase: text beside its button from tablet up.
const Resource = ({ type, title, text, href, action }) => (
  <div className="portfolio-ds__resource">
    <div className="portfolio-ds__resource-body">
      <span className="portfolio-ds__label">{type}</span>
      <h3 className="portfolio-ds__resource-title">{title}</h3>
      <p className="portfolio-ds__text">{text}</p>
    </div>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-ds__resource-link"
      aria-label={`${action}: ${title} (opens in a new tab)`}
    >
      {action}
    </a>
  </div>
);

/**
 * Design system page (`/design-system`): how this portfolio was designed and
 * built on its own token-based design system.
 *
 * Opens with `PageIntro` and `FactsStrip`, then an overview and a phase
 * navigation that scrolls to each of the seven steps: Mindmap, JSON, Tokens
 * Studio, Figma, Claude Code, Iterations and Final result.
 * Ends with links to GitHub and Figma, `ContactCta`, the `Footer` and the
 * `ContactModal`.
 */
const PortfolioDesignSystem = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="portfolio-ds">
      <Header onContactClick={openContact} />
      <main>
        <PageIntro
          title="Portfolio with design system"
          lead="Designing and building my own portfolio like a product: one design system, from the first token to the last component."
          text="For the redesign of my portfolio I started from the foundations. I structured a design system in FigJam, turned it into primitive and semantic tokens, designed every breakpoint and theme in Figma and implemented it in React with Claude Code, guiding the AI with precise specifications until the code matched the design."
          action={{
            label: 'View on GitHub',
            href: links.github,
            ariaLabel: 'View on GitHub: portfolio source code (opens in a new tab)',
          }}
          media={
            <figure className="portfolio-ds__hero">
              <ul className="portfolio-ds__themes">
                {themes.map((theme) => (
                  <li key={theme.id} className="portfolio-ds__theme">
                    <img
                      className="portfolio-ds__shot"
                      src={theme.image}
                      width={1280}
                      height={720}
                      alt={`Portfolio landing on the ${theme.name.toLowerCase()} theme`}
                    />
                    <span className="portfolio-ds__label">{theme.name}</span>
                  </li>
                ))}
              </ul>
              <figcaption className="portfolio-ds__caption">
                <span className="portfolio-ds__label">One design, three themes</span>
                The same landing built from the same semantic tokens on the orange, beige and black
                themes.
              </figcaption>
            </figure>
          }
        />

        <FactsStrip facts={facts} />

        <section aria-labelledby="portfolio-ds-overview-title">
          <div className="portfolio-ds__container">
            <SectionHeader id="portfolio-ds-overview-title" title="Overview" />

            <div className="portfolio-ds__overview">
              {overview.map((item) => (
                <div key={item.id} className="portfolio-ds__overview-item">
                  <h3 className="portfolio-ds__overview-title">{item.title}</h3>
                  <p className="portfolio-ds__text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="portfolio-ds-process-title">
          <div className="portfolio-ds__container">
            <SectionHeader
              id="portfolio-ds-process-title"
              title="The process"
              subtitle="Seven steps, from a mindmap of the system to the site you are browsing. Jump to any of them."
            />

            <nav className="portfolio-ds__process" aria-label="Project phases">
              {phases.map((phase, index) => (
                <a
                  key={phase.id}
                  href={`#${phase.id}`}
                  className={`portfolio-ds__step${index === phases.length - 1 ? ' portfolio-ds__step--result' : ''}`}
                  onClick={(event) => handleStepClick(event, phase.id)}
                >
                  <span className="portfolio-ds__step-number">{formatIndex(index)}</span>
                  <span className="portfolio-ds__step-text">
                    <span className="portfolio-ds__step-name">{phase.name}</span>
                    <span className="portfolio-ds__step-topic">{phase.topic}</span>
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        <Phase
          index={0}
          intro="Every system starts with a structure. Before choosing a single color, I mapped the whole design system in a FigJam mindmap: the categories it needed, the tokens inside each one and how they would relate to each other."
        >
          <div className="portfolio-ds__block">
            <h3 className="portfolio-ds__block-title">Two layers of tokens</h3>
            <div className="portfolio-ds__layers">
              {layers.map((layer, index) => (
                <Fragment key={layer.id}>
                  {index > 0 && (
                    <span className="portfolio-ds__arrow portfolio-ds__arrow--layers" aria-hidden="true">
                      →
                    </span>
                  )}
                  <div className="portfolio-ds__card">
                    <span className="portfolio-ds__label">{layer.label}</span>
                    <h4 className="portfolio-ds__card-title">{layer.title}</h4>
                    <p className="portfolio-ds__text">{layer.text}</p>
                    <p className="portfolio-ds__token">
                      <span>{layer.token.name}</span>
                      <span className="portfolio-ds__token-value">{layer.token.value}</span>
                    </p>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          <Resource
            type="FigJam board"
            title="Design system mindmap"
            text="The map where the system took shape: categories, primitives, semantic tokens and their relationships."
            href={links.mindmap}
            action="Open in FigJam"
          />
        </Phase>

        <Phase
          index={1}
          intro="A mindmap is great for thinking, but tools need data. I converted the map into JSON following the DTCG format (Design Tokens Community Group): every token got a type and a value, and semantic tokens reference primitives instead of repeating raw values."
        >
          <div className="portfolio-ds__split">
            <CodeBlock file="tokens.json · DTCG structure, simplified" code={tokensJson} />

            <div className="portfolio-ds__block">
              <h3 className="portfolio-ds__block-title">Why references matter</h3>
              <p className="portfolio-ds__text">
                Because semantic tokens point to primitives, changing the brand orange once updates
                every text, border, background and button state that uses it. The structure stays
                readable for people and parseable for tools.
              </p>
            </div>
          </div>

          <Resource
            type="HTML token library"
            title="The system at a glance"
            text="Before taking the tokens to Figma, I reviewed them in an HTML token library to check every color, scale and value visually. It was only a viewer for the design system, not part of the final product."
            href={links.library}
            action="View the library"
          />
        </Phase>

        <Phase
          index={2}
          intro="With the JSON ready, I imported it into Tokens Studio, the Figma plugin that turns token files into Figma variables and styles. From that moment, design and code shared one source of truth and the same vocabulary."
        >
          <div className="portfolio-ds__block">
            <h3 className="portfolio-ds__block-title">The pipeline so far</h3>
            <ol className="portfolio-ds__pipeline">
              {pipeline.map((step, index) => (
                <li key={step} className="portfolio-ds__pipeline-item">
                  <span
                    className={`portfolio-ds__pipeline-step${index === pipeline.length - 1 ? ' portfolio-ds__pipeline-step--current' : ''}`}
                  >
                    {step}
                  </span>
                  {index < pipeline.length - 1 && (
                    <span className="portfolio-ds__arrow" aria-hidden="true">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <div className="portfolio-ds__block">
            <h3 className="portfolio-ds__block-title">The system in numbers</h3>
            <ul className="portfolio-ds__stats">
              {stats.map((stat) => (
                <li key={stat.id} className="portfolio-ds__stat">
                  <span className="portfolio-ds__stat-value">{stat.value}</span>
                  <span className="portfolio-ds__label">{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Phase>

        <Phase
          index={3}
          intro="Then came the design. I built the high-fidelity portfolio in Figma using only the token variables: components with their states, layouts for five breakpoints and three themes that swap the same semantic tokens."
        >
          <div className="portfolio-ds__block">
            <h3 className="portfolio-ds__block-title">Five breakpoints</h3>
            <div className="portfolio-ds__devices">
              {devices.map((device) => (
                <figure
                  key={device.id}
                  className={`portfolio-ds__device portfolio-ds__device--${device.id}`}
                >
                  <img
                    className="portfolio-ds__shot"
                    src={device.image}
                    width={device.width}
                    height={device.height}
                    alt={device.alt}
                    loading="lazy"
                  />
                  <figcaption className="portfolio-ds__label">
                    {device.label} · {device.range}
                  </figcaption>
                </figure>
              ))}
            </div>

            <dl className="portfolio-ds__breakpoints">
              {breakpoints.map((breakpoint) => (
                <div key={breakpoint.id} className="portfolio-ds__breakpoint">
                  <dt className="portfolio-ds__label">{breakpoint.label}</dt>
                  <dd className="portfolio-ds__breakpoint-range">{breakpoint.range}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="portfolio-ds__block">
            <h3 className="portfolio-ds__block-title">Three themes</h3>
            <ul className="portfolio-ds__swatches">
              {themes.map((theme) => (
                <li key={theme.id} className={`portfolio-ds__swatch portfolio-ds__swatch--${theme.id}`}>
                  <span className="portfolio-ds__label">{theme.label}</span>
                  <h4 className="portfolio-ds__swatch-name">{theme.name}</h4>
                  <dl className="portfolio-ds__swatch-tokens">
                    {theme.tokens.map((token) => (
                      <div key={token.role} className="portfolio-ds__swatch-token">
                        <dt className="portfolio-ds__label">{token.role}</dt>
                        <dd className="portfolio-ds__swatch-value">{token.name}</dd>
                      </div>
                    ))}
                  </dl>
                </li>
              ))}
            </ul>
          </div>

          <Resource
            type="Figma file"
            title="Portfolio design"
            text="The high-fidelity design with its components, breakpoints and themes, all built on the token variables."
            href={links.figma}
            action="Open in Figma"
          />
        </Phase>

        <Phase
          index={4}
          intro="I took the high-fidelity designs to Claude Code to build the site in React. Instead of asking for “a portfolio”, I guided the AI rigorously: I wrote the AGENTS.md and CLAUDE.md files with the specifications, requirements and constraints, and handed over the design system as SCSS variables."
        >
          <div className="portfolio-ds__split">
            <CodeBlock file="src/design-system · SCSS variables" code={tokensScss} />

            <figure className="portfolio-ds__quote">
              <figcaption className="portfolio-ds__label">The golden rule, from CLAUDE.md</figcaption>
              <blockquote>
                <p className="portfolio-ds__quote-text">
                  Never use hardcoded values. Always use design tokens.
                </p>
              </blockquote>
            </figure>
          </div>

          <div className="portfolio-ds__block">
            <h3 className="portfolio-ds__block-title">What the AI received</h3>
            <ul className="portfolio-ds__cards portfolio-ds__cards--3">
              {briefing.map((item) => (
                <Card key={item.id} label={item.label} title={item.title} text={item.text} />
              ))}
            </ul>
          </div>
        </Phase>

        <Phase
          index={5}
          intro="The first build was a starting point, not the finish line. I compared every section with the mockups and turned each difference into a precise instruction, iteration after iteration, until the implementation matched the design."
        >
          <div className="portfolio-ds__block">
            <h3 className="portfolio-ds__block-title">The review loop</h3>
            <ul className="portfolio-ds__cards portfolio-ds__cards--3">
              {reviewLoop.map((step, index) => (
                <Card
                  key={step.id}
                  label={formatIndex(index)}
                  title={step.title}
                  text={step.text}
                  inverse={index === reviewLoop.length - 1}
                />
              ))}
            </ul>
          </div>
        </Phase>
        <Phase
          index={6}
          intro="The result is the site you are browsing right now: a React application with three themes and five responsive layouts, where every color, size and space comes from the design system. Switch the theme from the header to see the tokens at work."
        >
          <div className="portfolio-ds__block">
            <h3 className="portfolio-ds__block-title">What I learned</h3>
            <ul className="portfolio-ds__cards portfolio-ds__cards--3">
              {learnings.map((item) => (
                <Card key={item.id} title={item.title} text={item.text} />
              ))}
            </ul>
          </div>

          <div className="portfolio-ds__actions">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-ds__button portfolio-ds__button--solid"
              aria-label="Explore the code on GitHub (opens in a new tab)"
            >
              Explore the code on GitHub
            </a>
            <a
              href={links.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-ds__button portfolio-ds__button--outline"
              aria-label="Open the design in Figma (opens in a new tab)"
            >
              Open the design in Figma
            </a>
          </div>
        </Phase>

        <ContactCta onContactClick={openContact} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

export default PortfolioDesignSystem;
