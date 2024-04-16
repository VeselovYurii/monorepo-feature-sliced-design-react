import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run creation:serve',
        production: 'nx run creation:preview',
      },
      ciWebServerCommand: 'nx run creation:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
