import { expect } from 'storybook/test';
import FactsStrip from './FactsStrip';

const meta = {
  component: FactsStrip,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    facts: {
      description: 'Facts to show, in order. `id` is the React key; `label` and `value` render as a term and its description.',
      control: 'object',
      table: { type: { summary: 'Array<{ id: string, label: string, value: string }>' } },
    },
  },
};

export default meta;

/** Four facts, as on the work experience page. */
export const Default = {
  args: {
    facts: [
      { id: 'role', label: 'Role', value: 'Design & Marketing Intern' },
      { id: 'industry', label: 'Industry', value: 'Satellite tracking' },
      { id: 'location', label: 'Location', value: 'León, Guanajuato' },
      { id: 'period', label: 'Period', value: 'Mar – Sep 2025' },
    ],
  },
  play: async ({ args, canvas }) => {
    await expect(canvas.getAllByRole('term')).toHaveLength(args.facts.length);
    await expect(canvas.getByText(args.facts[0].value)).toBeVisible();
  },
};

/** The strip adapts to fewer facts. */
export const TwoFacts = {
  args: {
    facts: [
      { id: 'role', label: 'Role', value: 'UX/UI Designer' },
      { id: 'tools', label: 'Tools', value: 'Figma, FigJam' },
    ],
  },
};
