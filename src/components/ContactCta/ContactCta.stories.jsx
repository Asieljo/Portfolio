import { expect, fn } from 'storybook/test';
import ContactCta from './ContactCta';

const meta = {
  component: ContactCta,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    onContactClick: {
      description: 'Called when the "Get in touch" button is pressed. Project pages use it to open the `ContactModal`.',
      table: { type: { summary: '() => void' } },
    },
  },
  args: { onContactClick: fn() },
};

export default meta;

/** "Get in touch" calls `onContactClick`; "More projects" links back to the home projects section. */
export const Default = {
  play: async ({ args, canvas, userEvent }) => {
    await expect(canvas.getByRole('link', { name: /more projects/i })).toHaveAttribute('href', '/');
    await userEvent.click(canvas.getByRole('button', { name: /get in touch/i }));
    await expect(args.onContactClick).toHaveBeenCalledOnce();
  },
};
