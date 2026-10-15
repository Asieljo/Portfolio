import { expect, fn, waitFor } from 'storybook/test';
import Header from './Header';

const meta = {
  component: Header,
  tags: ['ai-generated'],
  argTypes: {
    onContactClick: {
      description: 'Called when the "Contact me" button is pressed. Pages use it to open the `ContactModal`.',
      table: { type: { summary: '() => void' } },
    },
  },
  args: { onContactClick: fn() },
};

export default meta;

/** Desktop layout with the full navigation, the resume link and the theme toggle. */
export const Default = {};

/** Below the tablet breakpoint the navigation collapses into a burger menu that reports its state through `aria-expanded`. */
export const MobileMenuOpen = {
  globals: { viewport: { value: 'mobile1' } },
  play: async ({ canvas, userEvent }) => {
    const burger = canvas.getByRole('button', { name: /open menu/i });
    await expect(burger).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(burger);
    await expect(canvas.getByRole('button', { name: /close menu/i })).toHaveAttribute('aria-expanded', 'true');
  },
};

/** "Contact me" closes the mobile menu and calls `onContactClick`. */
export const ContactClick = {
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /contact me/i }));
    await expect(args.onContactClick).toHaveBeenCalledOnce();
  },
};

/**
 * The theme button cycles primary → secondary → complementary → primary. Each
 * step repaints the header and saves the choice in `localStorage`.
 */
export const ToggleTheme = {
  play: async ({ canvas, userEvent }) => {
    const header = canvas.getByRole('banner');
    // Background colors from $color-background-brand-* in the design system.
    const steps = [
      { theme: 'secondary', color: 'rgb(233, 221, 199)', next: 'complementary' },
      { theme: 'complementary', color: 'rgb(17, 17, 17)', next: 'primary' },
      { theme: 'primary', color: 'rgb(255, 107, 26)', next: 'secondary' },
    ];

    for (const { theme, color, next } of steps) {
      await userEvent.click(canvas.getByRole('button', { name: /^switch to/i }));
      await expect(document.documentElement).toHaveAttribute('data-theme', theme);
      await expect(window.localStorage.getItem('portfolio-theme')).toBe(theme);
      await expect(canvas.getByRole('button', { name: `Switch to ${next} theme` })).toBeVisible();
      // The header fades between colors, so wait for the transition to end.
      await waitFor(() => expect(window.getComputedStyle(header).backgroundColor).toBe(color));
    }
  },
};

/** Checks that the global stylesheet loaded: the primary theme paints the header orange (`#FF6B1A`). */
export const CssCheck = {
  play: async ({ canvas }) => {
    // .header uses var(--color-surface), which the primary theme sets to
    // $color-background-brand-primary (#FF6B1A) in src/styles/index.styles.scss.
    const header = canvas.getByRole('banner');
    await expect(window.getComputedStyle(header).backgroundColor).toBe('rgb(255, 107, 26)');
  },
};
