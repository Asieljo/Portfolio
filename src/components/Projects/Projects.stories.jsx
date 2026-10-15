import { expect } from 'storybook/test';
import Projects from './Projects';

const meta = {
  component: Projects,
  tags: ['ai-generated'],
};

export default meta;

/** All project cards. Internal actions link to the project pages; external ones open in a new tab. */
export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /live demo/i })).toHaveAttribute(
      'href',
      'https://clothing-shop-app.vercel.app/'
    );
  },
};
