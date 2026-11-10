import { expect, within } from 'storybook/test';
import ChurchRedesign from './ChurchRedesign';

const meta = {
  component: ChurchRedesign,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
};

export default meta;

/** The full case study. The phase navigation links to each of the five phases, and the live site opens in a new tab. */
export const Default = {
  play: async ({ canvas }) => {
    const phases = within(canvas.getByRole('navigation', { name: /case study phases/i }));
    const links = phases.getAllByRole('link');
    await expect(links).toHaveLength(5);
    await expect(links[0]).toHaveAttribute('href', expect.stringContaining('#plan'));

    const liveLinks = canvas.getAllByRole('link', { name: /visit the live site/i });
    await expect(liveLinks[0]).toHaveAttribute('href', 'https://vidalta.org');
    await expect(liveLinks[0]).toHaveAttribute('target', '_blank');
  },
};
