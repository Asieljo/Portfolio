import { expect, within } from 'storybook/test';
import PortfolioDesignSystem from './PortfolioDesignSystem';

const meta = {
  component: PortfolioDesignSystem,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
};

export default meta;

/** The full design system page. The phase navigation scrolls to each of the eight steps. */
export const Default = {
  play: async ({ canvas }) => {
    const phases = within(canvas.getByRole('navigation', { name: /project phases/i }));
    await expect(phases.getAllByRole('link')).toHaveLength(8);
    await expect(canvas.getByRole('heading', { level: 2, name: 'Storybook' })).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /open storybook: component library/i })
    ).toHaveAttribute('href', expect.stringContaining('chromatic.com'));
    await expect(
      canvas.getByRole('link', { name: /explore the code on github/i })
    ).toHaveAttribute('target', '_blank');
  },
};
