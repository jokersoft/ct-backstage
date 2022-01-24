import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const healthCheckerPlugin = createPlugin({
  id: 'health-checker',
  routes: {
    root: rootRouteRef,
  },
});

export const HealthCheckerPage = healthCheckerPlugin.provide(
  createRoutableExtension({
    name: 'HealthCheckerPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
