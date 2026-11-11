import { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ContactModal from '../../components/ContactModal/ContactModal';
import PageIntro from '../../components/PageIntro/PageIntro';
import FactsStrip from '../../components/FactsStrip/FactsStrip';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ContactCta from '../../components/ContactCta/ContactCta';
import { scrollToSection } from '../../utils/scrollToSection';
import oldHero from '../../assets/images/church/old-hero.webp';
import oldLive from '../../assets/images/church/old-live.webp';
import oldCommunity from '../../assets/images/church/old-community.webp';
import oldDonate from '../../assets/images/church/old-donate.webp';
import newHero from '../../assets/images/church/new-hero.webp';
import newSermons from '../../assets/images/church/new-sermons.webp';
import newCommunity from '../../assets/images/church/new-community.webp';
import newDonate from '../../assets/images/church/new-donate.webp';
import newMenu from '../../assets/images/church/new-menu.webp';
import sitemap from '../../assets/images/church/sitemap.webp';
import flows from '../../assets/images/church/flows.webp';
// The storytelling blocks (phases, cards, figures) are shared with the
// catalog case study, so this page reuses its stylesheet.
import '../CaseStudy/CaseStudy.styles.scss';
import './ChurchRedesign.styles.scss';

const siteUrl = 'https://vidalta.org';

const facts = [
  { id: 'role', label: 'Role', value: 'Research, redesign & deployment' },
  { id: 'client', label: 'Client', value: 'Local church in León' },
  { id: 'timeline', label: 'Timeline', value: 'Oct 23 – Nov 5, 2026' },
  { id: 'tools', label: 'Tools', value: 'Google Forms, Claude, Hostinger' },
  { id: 'status', label: 'Status', value: 'Live' },
];

const overview = [
  {
    id: 'challenge',
    title: 'The challenge',
    text: 'The site was one long page with 16 sections: two different Sunday times, an empty events calendar, a livestream section that didn’t work and sermons last updated in May. Regular attendees had stopped checking it.',
  },
  {
    id: 'solution',
    title: 'The solution',
    text: 'A landing page built around the week: “Ver en vivo” and the latest sermon in the hero, dated events, one menu with real pages and a home cut from 16 sections to 4.',
  },
  {
    id: 'role',
    title: 'My role',
    text: 'End to end: scope, research plan, survey, competitor analysis, synthesis, information architecture, and the design and deployment of the live site.',
  },
];

const phases = [
  { id: 'plan', name: 'Plan', topic: 'Scope & research plan' },
  { id: 'research', name: 'Research', topic: 'Competitors & survey' },
  { id: 'insights', name: 'Insights', topic: 'What attendees said' },
  { id: 'structure', name: 'Structure', topic: 'Navigation, flows & sitemap' },
  { id: 'build', name: 'Build', topic: 'Redesign' },
];

const methods = [
  {
    id: 'survey',
    label: 'Step 1 · 30+ attendees',
    title: 'Short survey',
    text: 'A 5-minute Google Form shared through a QR code at church and the church WhatsApp group.',
  },
  {
    id: 'synthesis',
    label: 'Step 2 · Every response',
    title: 'Synthesis',
    text: 'Group the answers into findings and turn them into design key points, ranked by priority.',
  },
  {
    id: 'redesign',
    label: 'Step 3 · Landing page',
    title: 'Redesign',
    text: 'Rebuild the current landing page around those key points.',
  },
  {
    id: 'deploy',
    label: 'Step 4 · vidalta.org',
    title: 'Deployment',
    text: 'Publish the redesigned page on the church’s own domain through Hostinger.',
  },
];

const oldScreens = [
  { id: 'hero', image: oldHero, label: 'Home', alt: 'Old home screen with the headline, two competing buttons and a six-item bottom tab bar' },
  { id: 'live', image: oldLive, label: 'Livestream', alt: 'Old livestream section showing “Sin transmisión activa” and a list of upcoming streams' },
  { id: 'community', image: oldCommunity, label: 'Community', alt: 'Old community section with long text blocks and emoji used as icons' },
];

const siteIssues = [
  { id: 'stacked', title: 'Stacked sections', text: 'Several stacked sections make the visual design look cluttered and overloaded with information.' },
  { id: 'irrelevance', title: 'Irrelevance', text: 'The same information repeats in different sections of the site, which adds irrelevance.' },
  { id: 'errors', title: 'Small errors', text: 'Small errors in the details that, all together, take away from its visual appeal.' },
  { id: 'slop', title: 'AI slop', text: 'A basic visual design, structure and navigation, including emoji icons.' },
];

// Scores from the competitor analysis, 1–5 (5 = best). The two other churches
// stay anonymous.
const scoreColumns = ['Vidalta', 'Competitor A', 'Competitor B'];

const scores = [
  { id: 'visual', dimension: 'Visual design', values: ['3.0', '3.5', '3.5'] },
  { id: 'ia', dimension: 'Information architecture', values: ['2.0', '2.5', '3.5'] },
  { id: 'navigation', dimension: 'Navigation', values: ['3.0', '2.0', '3.5'] },
  { id: 'usability', dimension: 'Usability (attendee)', values: ['2.5', '3.0', '3.5'] },
  { id: 'accessibility', dimension: 'Accessibility', values: ['2.0', '3.0', '2.0'] },
  { id: 'content', dimension: 'Content quality', values: ['2.5', '3.5', '2.0'] },
];

const scoreAverages = ['2.5', '2.9', '3.0'];

const surveySteps = [
  {
    id: 'refine',
    label: 'Oct 26 · Refined',
    title: 'Sharper questions',
    text: 'I added questions on the last thing people couldn’t find, outdated info, when they visit and how likely they are to recommend the site.',
  },
  {
    id: 'run',
    label: 'Oct 29 · Sent',
    title: '46 responses',
    text: 'I set 30+ responses as a reliable sample for a congregation this size and collected 46. 83% attend every Sunday, the audience we wanted.',
  },
];

const keyNumbers = [
  { id: 'news', value: '0%', title: 'Get news from the site', text: 'Sunday announcements (63%) and WhatsApp (26%) do that job.' },
  { id: 'unknown', value: '11', title: 'Didn’t know it existed', text: '24% of respondents, including 3 of the 5 teenagers.' },
  { id: 'age', value: '46%', title: 'Are over 50', text: 'Larger text, high contrast and zoom became requirements.' },
  { id: 'recommend', value: '89%', title: 'Would recommend it', text: 'The open answers praise the church, not the site.' },
];

const newsChannels = [
  { id: 'sunday', label: 'Sunday announcements', value: 63 },
  { id: 'whatsapp', label: 'WhatsApp', value: 26 },
  { id: 'social', label: 'Facebook or Instagram', value: 9 },
  { id: 'site', label: 'The website', value: 0 },
];

const quotes = [
  {
    id: 'abandoned',
    quote: 'La última predicación que contiene es muy antigua… el sitio luce abandonado.',
    translation: 'The last sermon on it is very old… the site looks abandoned.',
  },
  {
    id: 'live',
    quote: 'La sección de prédicas en vivo no funciona.',
    translation: 'The live sermons section doesn’t work.',
  },
  {
    id: 'later',
    quote: 'En caso de no poder asistir a la iglesia un domingo, me gustaría poder ver la prédica en otro momento.',
    translation: 'If I can’t make it on a Sunday, I’d like to watch the sermon later.',
  },
];

const keyPoints = [
  'A working “Ver en vivo” and the latest sermon, with its date, on the first screen',
  'A sermon list, latest first, with speaker and date',
  'One-tap contact through the church’s official channels',
  'Text of 18px or more, 4.5:1 contrast, 48px buttons and pinch-zoom',
  'A short menu, and service times shown once from a single source',
  'Real photos of the congregation and shorter text blocks',
  'A short “Quiénes somos” teaser that links to its own page',
];

// `narrow` centers the tall sitemap instead of stretching it full width.
const diagrams = [
  {
    id: 'flows',
    label: 'User flows 1 & 2',
    image: flows,
    width: 1400,
    height: 740,
    alt: 'User flows for watching the livestream and watching a past sermon, with entry points, decisions and end states',
    caption:
      'The two highest-priority flows: watching the livestream (with a fallback to the next stream) and catching up on a past sermon.',
  },
  {
    id: 'sitemap',
    label: 'Sitemap',
    image: sitemap,
    width: 1166,
    height: 1400,
    narrow: true,
    alt: 'Sitemap of the new vidalta.org: a global header and footer, and the Inicio, Conócenos and Predicaciones pages with their sections',
    caption:
      'Three pages plus a global header and footer. The red dots mark the changes made to my first sketch after validating the flows.',
  },
];

const userFlows = [
  { id: 'live', title: 'Watch the livestream', priority: 'High' },
  { id: 'sermon', title: 'Watch a past sermon', priority: 'High' },
  { id: 'times', title: 'Check service time and address', priority: 'High' },
  { id: 'events', title: 'Find this week’s events', priority: 'High' },
  { id: 'give', title: 'Give', priority: 'Medium' },
  { id: 'nexo', title: 'Join a small group (Nexo)', priority: 'Medium' },
  { id: 'prayer', title: 'Ask for prayer', priority: 'Medium' },
  { id: 'contact', title: 'Contact the church', priority: 'Medium' },
  { id: 'about', title: 'Get to know the church', priority: 'Low' },
  { id: 'visit', title: 'Plan a first visit', priority: 'Low' },
];

const comparisons = [
  {
    id: 'live',
    title: 'Livestream',
    before: { image: oldLive, alt: 'Old livestream section with “Sin transmisión activa” and the 12:00 Sunday time' },
    after: { image: newSermons, alt: 'New sermons page with a “Ver la última prédica” fallback when there is no livestream' },
    text: 'When nothing is live, the new page offers the latest sermon instead of a dead end.',
  },
  {
    id: 'community',
    title: 'Community',
    before: { image: oldCommunity, alt: 'Old community cards with emoji icons and long paragraphs' },
    after: { image: newCommunity, alt: 'New community section with real photos of the congregation and three-line descriptions' },
    text: 'Emoji and long paragraphs gave way to real photos of the congregation and three-line descriptions.',
  },
  {
    id: 'give',
    title: 'Giving',
    before: { image: oldDonate, alt: 'Old giving section with bank details (blurred) and a “Copiar CLABE” button' },
    after: { image: newDonate, alt: 'New giving modal with the bank, account name, the CLABE (blurred) and a large “Copiar CLABE” button' },
    text: 'The “Copiar CLABE” button already beat both competitors, so it stayed, now in a modal you can open from anywhere.',
  },
  {
    id: 'menu',
    title: 'Navigation',
    before: { image: oldHero, alt: 'Old home screen with a six-item bottom tab bar that scrolls within the same page' },
    after: { image: newMenu, alt: 'New side menu with Inicio, Conócenos, Eventos, Predicaciones and Donar, plus email and directions' },
    text: 'A six-item tab bar that scrolled one long page became a menu of real pages, plus email and directions.',
  },
];

const aiWork = [
  'Wrote the detailed Lean UX research plan, with ordered phases and steps',
  'Synthesized the 46 survey responses',
  'Produced the research plan, sitemap and user flows as PDFs',
  'Built the landing page from the design system, visual references and PDFs I provided',
  'Optimized and refined the landing page',
];

const myWork = [
  'Defined the scope, features, constraints, limits and format, plus the Claude skills to use',
  'Built and ran the survey in Google Forms',
  'Reviewed and iterated at every step of research, design and deployment until the results met the bar',
];

// Intrinsic size of the phone screenshots (rounded), so the browser reserves
// their space before the lazy images load.
const phoneSize = { width: 360, height: 800 };

const formatIndex = (index) => String(index + 1).padStart(2, '0');

// The phase index scrolls to each phase without adding a hash to the URL.
const handleStepClick = (event, id) => {
  event.preventDefault();
  scrollToSection(id);
};

// Ranked lists fill two columns top to bottom on desktop, the first column
// taking the larger half. The item that ends the first column is flagged so it
// can drop its divider there.
const columnRows = (count) => Math.ceil(count / 2);

const pointClassName = (index, count) =>
  `church-redesign__point${index === columnRows(count) - 1 ? ' church-redesign__point--column-end' : ''}`;

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

// `TitleTag` keeps the heading order right where a card sits directly under
// an `h2` section title instead of an `h3` block title.
const Card = ({ label, title, text, inverse, titleAs: TitleTag = 'h4', children }) => (
  <li className={`case-study__card${inverse ? ' case-study__card--inverse' : ''}`}>
    {label && <span className="case-study__label">{label}</span>}
    <TitleTag className="case-study__card-title">{title}</TitleTag>
    {text && <p className="case-study__text">{text}</p>}
    {children}
  </li>
);

// `eager` marks the hero screens: they load first with high priority, as the
// likely largest paint. Every other screen loads lazily and decodes off the
// main thread.
const Phone = ({ image, alt, label, eager }) => (
  <figure className="church-redesign__phone">
    {label && <figcaption className="case-study__label church-redesign__phone-label">{label}</figcaption>}
    <img
      className="church-redesign__phone-image"
      src={image}
      alt={alt}
      width={phoneSize.width}
      height={phoneSize.height}
      loading={eager ? undefined : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding={eager ? undefined : 'async'}
    />
  </figure>
);

const Stat = ({ value, title, text }) => (
  <li className="case-study__card">
    <span className="church-redesign__stat-value">{value}</span>
    <h4 className="case-study__card-title">{title}</h4>
    <p className="case-study__text">{text}</p>
  </li>
);

/**
 * Church redesign case study (`/church-redesign`): the research, architecture
 * and build behind the new vidalta.org landing page.
 *
 * Opens with `PageIntro` (a before/after of the home screen) and
 * `FactsStrip`, then an overview, a phase navigation and five phases
 * (Plan, Research, Insights, Structure and Build), and a note on how AI was
 * used. Ends with `ContactCta`, the `Footer` and the `ContactModal`. The
 * other churches in the competitor analysis stay anonymous, and bank details
 * are blurred in the screenshots.
 */
const ChurchRedesign = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="case-study church-redesign">
      <Header onContactClick={openContact} />
      <main>
        <PageIntro
          title="Landing page redesign for a local church"
          lead="Turning a 16-section page which very few people checked into a functional landing page for both regular attendees and new people, backed by a survey of 46 of them."
          text="Vidalta is a church in León, Guanajuato, with an abandoned site. In two weeks I planned the research, benchmarked two other local churches, surveyed the congregation, defined the architecture and shipped the redesign. AI was my working partner throughout the entire process; I set the scope, made the calls and iterated until the results were right."
          action={{
            label: 'Visit the live site',
            href: siteUrl,
            ariaLabel: 'Visit the live site, vidalta.org (opens in a new tab)',
          }}
          media={
            <figure className="church-redesign__hero">
              <div className="church-redesign__pair">
                <Phone image={oldHero} label="Before" alt="Old home screen of vidalta.org with “Próximos eventos” and “Conócenos” buttons" eager />
                <Phone image={newHero} label="After" alt="New home screen with a real photo of the congregation and “Ver en vivo” and “Última prédica” buttons" eager />
              </div>
              <figcaption className="case-study__caption">
                <span className="case-study__label">Home, on a phone</span>
                The new hero puts the two weekly tasks first: watching live and catching up on the latest sermon.
              </figcaption>
            </figure>
          }
        />

        <FactsStrip facts={facts} />

        <section aria-labelledby="church-overview-title">
          <div className="case-study__container">
            <SectionHeader id="church-overview-title" title="Overview" />

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

        <section aria-labelledby="church-process-title">
          <div className="case-study__container">
            <SectionHeader
              id="church-process-title"
              title="The process"
              subtitle="Five phases in two weeks, from setting the scope to shipping the live site. Jump to any of them."
            />

            <nav className="case-study__process church-redesign__process" aria-label="Case study phases">
              {phases.map((phase, index) => (
                <a
                  key={phase.id}
                  href={`#${phase.id}`}
                  className="case-study__step"
                  onClick={(event) => handleStepClick(event, phase.id)}
                >
                  <span className="case-study__step-number">{formatIndex(index)}</span>
                  <span className="case-study__step-text">
                    <span className="case-study__step-name">{phase.name}</span>
                    <span className="case-study__step-topic">{phase.topic}</span>
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        <Phase
          index={0}
          intro="I defined the site (vidalta.org), the audience (regular attendees, not first-time visitors) and the constraint: as fast as possible. That became a Lean UX research plan: one short survey of the congregation, then a redesign of the current landing page based on the collected and synthesized answers, deployed to the church’s domain."
        >
          <div className="case-study__block">
            <h3 className="case-study__block-title">The research plan</h3>
            <ul className="case-study__cards case-study__cards--4">
              {methods.map((method) => (
                <Card key={method.id} label={method.label} title={method.title} text={method.text} />
              ))}
            </ul>
          </div>

          <div className="case-study__block">
            <h3 className="case-study__block-title">The site we started from</h3>
            <div className="church-redesign__phones">
              {oldScreens.map((screen) => (
                <Phone key={screen.id} image={screen.image} alt={screen.alt} label={screen.label} />
              ))}
            </div>
            <ul className="case-study__cards case-study__cards--4">
              {siteIssues.map((issue) => (
                <Card key={issue.id} title={issue.title} text={issue.text} />
              ))}
            </ul>
          </div>
        </Phase>

        <Phase
          index={1}
          intro="Before asking attendees anything, I benchmarked two other churches in León on six dimensions scored from 1 to 5, plus Nielsen’s 10 heuristics with severity ratings. Then I refined the Google Form and sent it out."
        >
          <div className="case-study__block">
            <h3 id="church-scores-title" className="case-study__block-title">Competitor scores</h3>
            {/* The note sits outside the scroll box so it never scrolls out of
                view with a wide table on small phones. */}
            <div className="church-redesign__table-wrap">
              <table
                className="church-redesign__table"
                aria-labelledby="church-scores-title"
                aria-describedby="church-scores-note"
              >
                <thead>
                  <tr>
                    <th scope="col" className="church-redesign__th">Dimension</th>
                    {scoreColumns.map((column) => (
                      <th key={column} scope="col" className="church-redesign__th church-redesign__th--number">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {scores.map((row) => (
                    <tr key={row.id}>
                      <th scope="row" className="church-redesign__td">{row.dimension}</th>
                      {row.values.map((value, index) => (
                        <td key={scoreColumns[index]} className="church-redesign__td church-redesign__td--number">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row" className="church-redesign__td church-redesign__td--total">Average</th>
                    {scoreAverages.map((value, index) => (
                      <td
                        key={scoreColumns[index]}
                        className="church-redesign__td church-redesign__td--number church-redesign__td--total"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
            <p id="church-scores-note" className="church-redesign__table-note">
              Landing pages scored from 1 to 5 (5 = best), reviewed on Oct 23, 2026.
            </p>
          </div>

          <div className="case-study__question">
            <span className="case-study__label">Takeaway</span>
            <p className="case-study__question-text">
              None of the three was clearly ahead, so Vidalta could lead by doing the basics well:
              one set of times, a live button, current events and working links.
            </p>
          </div>

          <div className="case-study__block">
            <h3 className="case-study__block-title">The survey</h3>
            <ul className="case-study__cards">
              {surveySteps.map((step) => (
                <Card key={step.id} label={step.label} title={step.title} text={step.text} />
              ))}
            </ul>
          </div>
        </Phase>

        <Phase
          index={2}
          intro="The main finding: abandoned content hurt more than the look. Old sermons, a livestream that didn’t work and 11 people who didn’t know the site existed. I turned the results into 7 design key points, ranked by priority."
        >
          <div className="case-study__block">
            <h3 className="case-study__block-title">Key numbers</h3>
            <ul className="case-study__cards case-study__cards--4">
              {keyNumbers.map((item) => (
                <Stat key={item.id} value={item.value} title={item.title} text={item.text} />
              ))}
            </ul>
          </div>

          <div className="case-study__block">
            <h3 className="case-study__block-title">Where attendees hear about events</h3>
            <ul className="church-redesign__bars">
              {newsChannels.map((channel) => (
                <li key={channel.id} className="church-redesign__bar">
                  <span className="church-redesign__bar-label">{channel.label}</span>
                  <span className="church-redesign__bar-value">{channel.value}%</span>
                  <span className="church-redesign__bar-track" aria-hidden="true">
                    <span className="church-redesign__bar-fill" style={{ width: `${channel.value}%` }} />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="case-study__block">
            <h3 className="case-study__block-title">In their words</h3>
            <ul className="case-study__cards case-study__cards--3">
              {quotes.map((item) => (
                <li key={item.id} className="case-study__card">
                  <blockquote className="church-redesign__quote" lang="es">
                    “{item.quote}”
                  </blockquote>
                  <p className="case-study__text">{item.translation}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="case-study__block">
            <h3 className="case-study__block-title">7 design key points</h3>
            <ol className="church-redesign__points" style={{ '--points-rows': columnRows(keyPoints.length) }}>
              {keyPoints.map((point, index) => (
                <li key={point} className={pointClassName(index, keyPoints.length)}>
                  <span className="church-redesign__point-number" aria-hidden="true">
                    {formatIndex(index)}
                  </span>
                  <span className="case-study__text">{point}</span>
                </li>
              ))}
            </ol>
          </div>
        </Phase>

        <Phase
          index={3}
          intro="I scored the current navigation 3 out of 5: every menu item jumped around the same 16-section page. Then I validated my own flows. They worked and cut the home page from 16 sections to 4, with two fixes: a “Ver en vivo” button in the hero and a home for events. Last, I mapped the sitemap and 10 user flows."
        >
          <div className="church-redesign__figures">
            {diagrams.map((diagram) => (
              <figure
                key={diagram.id}
                className={`case-study__figure church-redesign__diagram${diagram.narrow ? ' church-redesign__diagram--narrow' : ''}`}
              >
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
                    decoding="async"
                  />
                </a>
                <figcaption className="case-study__caption">
                  <span className="case-study__label">{diagram.label}</span>
                  {diagram.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="case-study__block">
            <h3 className="case-study__block-title">10 user flows, by priority</h3>
            <ol className="church-redesign__points" style={{ '--points-rows': columnRows(userFlows.length) }}>
              {userFlows.map((flow, index) => (
                <li key={flow.id} className={pointClassName(index, userFlows.length)}>
                  <span className="church-redesign__point-number" aria-hidden="true">
                    {formatIndex(index)}
                  </span>
                  <span className="case-study__text">{flow.title}</span>
                  <span className="case-study__text church-redesign__priority">{flow.priority}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="case-study__question">
            <span className="case-study__label">Rule for every flow</span>
            <p className="case-study__question-text">
              Only official church channels. No personal phone numbers of leaders or members go on
              the site.
            </p>
          </div>
        </Phase>

        <Phase
          index={4}
          intro="I built the redesign on a design system made from the church’s own palette and logo: a navy and blue scale with one warm gold accent, soft rounded shapes and 15 React components."
        >
          <div className="case-study__block">
            <div className="church-redesign__comparisons">
              {comparisons.map((item) => (
                <article key={item.id} className="church-redesign__comparison">
                  <h4 className="case-study__card-title">{item.title}</h4>
                  <div className="church-redesign__pair">
                    <Phone image={item.before.image} alt={item.before.alt} label="Before" />
                    <Phone image={item.after.image} alt={item.after.alt} label="After" />
                  </div>
                  <p className="case-study__text">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="case-study__button"
            aria-label="Visit the live site, vidalta.org (opens in a new tab)"
          >
            Visit the live site
          </a>
        </Phase>

        <section aria-labelledby="church-ai-title">
          <div className="case-study__container">
            <SectionHeader
              id="church-ai-title"
              title="How I used AI"
              subtitle="Claude did the heavy lifting on documents and code; the decisions and the quality bar were mine."
            />

            <ul className="case-study__cards">
              <Card label="AI" title="What Claude produced" titleAs="h3">
                <ul className="church-redesign__list">
                  {aiWork.map((item) => (
                    <li key={item} className="case-study__text">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
              <Card label="Me" title="What I owned" titleAs="h3" inverse>
                <ul className="church-redesign__list">
                  {myWork.map((item) => (
                    <li key={item} className="case-study__text">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </ul>
          </div>
        </section>

        <ContactCta onContactClick={openContact} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

export default ChurchRedesign;
