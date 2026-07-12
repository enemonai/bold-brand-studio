import type { RouteRecord } from 'vite-react-ssg';
import RootLayout from './RootLayout';
import { projects } from './data/projects.generated';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    entry: 'src/RootLayout.tsx',
    children: [
      {
        index: true,
        lazy: () => import('./pages/Index').then(module => ({ Component: module.default })),
        entry: 'src/pages/Index.tsx',
      },
      {
        path: 'projects',
        lazy: () => import('./pages/Projects').then(module => ({ Component: module.default })),
        entry: 'src/pages/Projects.tsx',
      },
      {
        path: 'project/:slug',
        lazy: () =>
          import('./pages/ProjectDetail').then(module => ({ Component: module.default })),
        entry: 'src/pages/ProjectDetail.tsx',
        getStaticPaths: () => projects.map(project => `project/${project.slug}`),
      },
    ],
  },
];
