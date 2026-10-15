import { expect, waitFor } from 'storybook/test';
import SatechExperience from './SatechExperience';

const meta = {
  component: SatechExperience,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
};

export default meta;

/** The full work experience page. Each design file card opens its Figma file in a new tab. */
export const Default = {
  play: async ({ canvas }) => {
    const figmaLinks = canvas.getAllByRole('link', { name: /^open in figma:/i });
    await expect(figmaLinks).toHaveLength(3);
    for (const link of figmaLinks) {
      await expect(link).toHaveAttribute('href', expect.stringContaining('figma.com'));
      await expect(link).toHaveAttribute('target', '_blank');
    }
  },
};

/** "Get in touch" in the closing call to action opens the contact modal, and "Close" dismisses it. */
export const OpensContactModal = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /get in touch/i }));
    // The modal fades in from opacity 0, so wait for the animation to finish.
    const dialog = canvas.getByRole('dialog', { name: /contact me for more/i });
    await waitFor(() => expect(dialog).toBeVisible());
    await userEvent.click(canvas.getByRole('button', { name: /^close$/i }));
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
  },
};
