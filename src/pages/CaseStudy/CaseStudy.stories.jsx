import { expect, within } from 'storybook/test';
import CaseStudy from './CaseStudy';

const meta = {
  component: CaseStudy,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
};

export default meta;

/** The full case study. The phase navigation links to each of the six phases on the page. */
export const Default = {
  play: async ({ canvas }) => {
    const phases = within(canvas.getByRole('navigation', { name: /case study phases/i }));
    const links = phases.getAllByRole('link');
    await expect(links).toHaveLength(6);
    await expect(links[0]).toHaveAttribute('href', expect.stringContaining('#discover'));
  },
};
