import { expect, fn } from 'storybook/test';
import Landing from './Landing';

const meta = {
  component: Landing,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    onContactClick: {
      description: 'Called when the "Get in touch" button is pressed. Home uses it to open the `ContactModal`.',
      table: { type: { summary: '() => void' } },
    },
  },
  args: { onContactClick: fn() },
};

export default meta;

/** Hero with the primary theme artwork. "Get in touch" calls `onContactClick`. */
export const Default = {
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /get in touch/i }));
    await expect(args.onContactClick).toHaveBeenCalledOnce();
  },
};
