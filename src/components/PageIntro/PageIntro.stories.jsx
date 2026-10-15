import { expect } from 'storybook/test';
import PageIntro from './PageIntro';

const meta = {
  component: PageIntro,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    title: {
      description: 'Page title, rendered as the `h1`.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    lead: {
      description: 'Highlighted one-sentence summary, shown beside the text on desktop.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    text: {
      description: 'Longer description of the project.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    action: {
      description: 'Optional external button under the text. It opens `href` in a new tab; `ariaLabel` should mention that.',
      control: 'object',
      table: { type: { summary: '{ label: string, href: string, ariaLabel: string }' } },
    },
    media: {
      description: 'Optional content rendered below the intro, such as a hero image.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
  },
};

export default meta;

/** Title, lead and text without an action, as on the work experience page. */
export const Default = {
  args: {
    title: 'Design & Marketing Intern',
    lead: 'Designing responsive websites, blogs and HTML email signatures for a satellite tracking company.',
    text: 'I took corporate websites and blogs from benchmarking to wireframes, reusable components and responsive high-fidelity prototypes in Figma.',
  },
};

/** With an external `action` button that opens in a new tab, as on the design system page. */
export const WithAction = {
  args: {
    title: 'Portfolio with design system',
    lead: 'Designing and building my own portfolio like a product: one design system, from the first token to the last component.',
    text: 'For the redesign of my portfolio I started from the foundations.',
    action: {
      label: 'View on GitHub',
      href: 'https://github.com/Asieljo/Portfolio',
      ariaLabel: 'View on GitHub: portfolio source code (opens in a new tab)',
    },
  },
  play: async ({ args, canvas }) => {
    const action = canvas.getByRole('link', { name: args.action.ariaLabel });
    await expect(action).toHaveAttribute('href', args.action.href);
    await expect(action).toHaveAttribute('target', '_blank');
  },
};
