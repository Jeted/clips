/***********************************************************************************/
/**********                             Vite                              **********/
/***********************************************************************************/

import { defineConfig, UserConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import sveltePreprocess from 'svelte-preprocess';
import tsconfig from './tsconfig.json';
import _config from './src/config';

const config = <UserConfig>defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
  ],
  server: {
    host: 'localhost',
    port: 5000,
  },
  base: `/${_config.REPO}/`,
});

// Load path aliases from the tsconfig.json file
const aliases = tsconfig.compilerOptions.paths;

for (const alias in aliases) {
  const paths = aliases[alias].map((p: string) => path.resolve(__dirname, p));

  // Our tsconfig uses glob path formats, whereas webpack just wants directories
  // We'll need to transform the glob format into a format acceptable to webpack

  const wpAlias = alias.replace(/(\\|\/)\*$/, '');
  const wpPaths = paths.map((p: string) => p.replace(/(\\|\/)\*$/, ''));

  if (!config.resolve) config.resolve = {};
  if (!config.resolve.alias) config.resolve.alias = {};

  if (config.resolve && config.resolve.alias && !(wpAlias in config.resolve.alias)) {
    config.resolve.alias[wpAlias] = wpPaths.length > 1 ? wpPaths : wpPaths[0];
  }
}

export default config;
