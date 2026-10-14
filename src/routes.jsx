import App from './App';
import Home from './pages/Home/Home';

// Home ships in the main bundle; the other pages load on demand so the landing
// does not download their code. vite-react-ssg prerenders every static path
// below into its own HTML file at build time (see ssgOptions in vite.config.js).
export const routes = [
  {
    path: '/',
    element: <App />,
    entry: 'src/App.jsx',
    children: [
      {
        index: true,
        element: <Home />,
        entry: 'src/pages/Home/Home.jsx',
      },
      {
        path: 'case-study',
        lazy: async () => ({ Component: (await import('./pages/CaseStudy/CaseStudy')).default }),
      },
      {
        path: 'work-experience',
        lazy: async () => ({ Component: (await import('./pages/SatechExperience/SatechExperience')).default }),
      },
      {
        path: 'design-system',
        lazy: async () => ({ Component: (await import('./pages/PortfolioDesignSystem/PortfolioDesignSystem')).default }),
      },
      {
        path: '*',
        lazy: async () => ({ Component: (await import('./pages/NotFound/NotFound')).default }),
      },
    ],
  },
];
