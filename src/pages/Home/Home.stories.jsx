import { expect, waitFor, within } from 'storybook/test';
import Home from './Home';

const meta = {
  component: Home,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
};

export default meta;

/** The full home page with the primary theme. */
export const Default = {};

/** "Get in touch" in the hero opens the contact modal, and "Close" dismisses it. */
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

// Smooth scrolling takes a moment on a long page.
const scrollTimeout = { timeout: 3000 };

/** "View projects" in the hero scrolls down to the projects section. */
export const ViewProjectsScrolls = {
  play: async ({ canvas, canvasElement, userEvent }) => {
    const projects = canvasElement.ownerDocument.getElementById('projects');
    await userEvent.click(canvas.getByRole('button', { name: /view projects/i }));
    await waitFor(() => expect(projects.getBoundingClientRect().top).toBeLessThan(window.innerHeight / 2), scrollTimeout);
  },
};

/** On the home page the header links scroll to their section instead of navigating; "Home" scrolls back to the top. */
export const NavLinksScroll = {
  globals: { viewport: { value: 'mobile1' } },
  play: async ({ canvas, canvasElement, userEvent }) => {
    const projects = canvasElement.ownerDocument.getElementById('projects');
    const nav = () => canvas.getByRole('navigation', { name: 'Main' });

    await userEvent.click(canvas.getByRole('button', { name: /open menu/i }));
    await userEvent.click(within(nav()).getByRole('link', { name: 'Projects' }));
    // Picking a link also closes the mobile menu.
    await expect(canvas.getByRole('button', { name: /open menu/i })).toHaveAttribute('aria-expanded', 'false');
    await waitFor(() => expect(projects.getBoundingClientRect().top).toBeLessThan(window.innerHeight / 2), scrollTimeout);

    await userEvent.click(canvas.getByRole('button', { name: /open menu/i }));
    await userEvent.click(within(nav()).getByRole('link', { name: 'Home' }));
    await waitFor(() => expect(window.scrollY).toBe(0), scrollTimeout);
  },
};
