import { expect, waitFor } from 'storybook/test';
import NotFound from './NotFound';

const meta = {
  component: NotFound,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
};

export default meta;

/** The 404 page with links back home and to the projects. */
export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1 })).toHaveTextContent(/this page doesn.t exist/i);
    await expect(canvas.getByRole('link', { name: /back home/i })).toHaveAttribute('href', '/');
  },
};

/** "Contact me" in the header (inside the mobile menu) opens the contact modal, and "Close" dismisses it. */
export const OpensContactModal = {
  globals: { viewport: { value: 'mobile1' } },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /open menu/i }));
    await userEvent.click(canvas.getByRole('button', { name: /contact me/i }));
    // The modal fades in from opacity 0, so wait for the animation to finish.
    const dialog = canvas.getByRole('dialog', { name: /contact me for more/i });
    await waitFor(() => expect(dialog).toBeVisible());
    await userEvent.click(canvas.getByRole('button', { name: /^close$/i }));
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
  },
};
