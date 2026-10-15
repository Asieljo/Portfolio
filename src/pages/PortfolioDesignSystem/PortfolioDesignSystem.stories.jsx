import { expect, within } from 'storybook/test';
import PortfolioDesignSystem from './PortfolioDesignSystem';

const meta = {
  component: PortfolioDesignSystem,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
};

export default meta;

/** The full design system page. The phase navigation scrolls to each of the seven steps. */
export const Default = {
  play: async ({ canvas }) => {
    const phases = within(canvas.getByRole('navigation', { name: /project phases/i }));
    await expect(phases.getAllByRole('link')).toHaveLength(7);
    await expect(
      canvas.getByRole('link', { name: /explore the code on github/i })
    ).toHaveAttribute('target', '_blank');
  },
};
