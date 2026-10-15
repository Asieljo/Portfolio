import { expect } from 'storybook/test';
import Ticker from './Ticker';

const meta = {
  component: Ticker,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
};

export default meta;

/** The skills band scrolling on a loop. */
export const Default = {
  play: async ({ canvas }) => {
    // The list renders twice so the scroll loops seamlessly; screen readers skip it.
    const items = canvas.getAllByText('Figma');
    await expect(items).toHaveLength(2);
    await expect(items[0].closest('.ticker')).toHaveAttribute('aria-hidden', 'true');
  },
};
