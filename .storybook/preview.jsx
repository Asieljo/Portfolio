import { MemoryRouter } from 'react-router-dom';
import ThemeProvider from '../src/features/theme/ThemeProvider';
import '../src/styles/index.styles.scss';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  // Generates a Docs page for every component from its JSDoc and argTypes.
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  async beforeEach() {
    // Same key the inline script in index.html reads before first paint.
    window.localStorage.setItem('portfolio-theme', 'primary');
    document.documentElement.dataset.theme = 'primary';
  },
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;