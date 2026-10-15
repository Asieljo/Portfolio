import { expect } from 'storybook/test';
import About from './About';

const meta = {
  component: About,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
};

export default meta;

/** Bio, certifications and the resume download beside the portrait. */
export const Default = {
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('listitem')).toHaveLength(3);
    await expect(canvas.getByRole('link', { name: /download resume/i })).toHaveAttribute(
      'download',
      'Asiel_Rosiles_CV.pdf'
    );
  },
};
