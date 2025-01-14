// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({

    site: 'https://SamuelCubano.github.io',
    base: 'Mi-Portafolio',


  devToolbar: {
      enabled: false
    },

  integrations: [icon()]

 
});