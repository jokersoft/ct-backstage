import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { healthCheckerPlugin, HealthCheckerPage } from '../src/plugin';

createDevApp()
  .registerPlugin(healthCheckerPlugin)
  .addPage({
    element: <HealthCheckerPage />,
    title: 'Root Page',
    path: '/health-checker'
  })
  .render();
