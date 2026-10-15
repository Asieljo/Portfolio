import { expect } from 'storybook/test';
import SectionHeader from './SectionHeader';

const meta = {
  component: SectionHeader,
  tags: ['ai-generated'],
  argTypes: {
    id: {
      description: 'Id of the `h2`, so the parent section can reference it with `aria-labelledby`.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    title: {
      description: 'Section title, rendered as an `h2`.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    subtitle: {
      description: 'Optional supporting text below the title.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    className: {
      description: 'Extra class to position the header inside the page layout.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
  },
};

export default meta;

/** Title only, as in the "Overview" sections. */
export const TitleOnly = {
  args: { id: 'case-study-overview-title', title: 'Overview' },
};

/** Title with a subtitle, as in the "Demo reel" section of the work experience page. */
export const WithSubtitle = {
  args: {
    id: 'satech-reel-title',
    title: 'Demo reel',
    subtitle: 'A look at my design work in 90 seconds.',
  },
  play: async ({ args, canvas }) => {
    await expect(canvas.getByRole('heading', { level: 2, name: args.title })).toHaveAttribute('id', args.id);
    await expect(canvas.getByText(args.subtitle)).toBeVisible();
  },
};
