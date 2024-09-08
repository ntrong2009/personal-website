import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'resume',
  exposes: {
    './Module': 'apps/resume/src/app/app.module.ts',
  },
};

export default config;
