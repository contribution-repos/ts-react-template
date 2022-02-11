import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'ESBoot',
  base: '/docs/',
  hash: true,
  outputPath: 'dist',
  history: {
    type: 'hash',
  },
  mode: 'site',
  mfsu: {
    development : {
      output : "./.mfsu-dev",
    },
    // production : {
    //   output : "./.mfsu-prod",
    // }
  },
  themeConfig: {
    repository: {
       url: '',
       branch: 'master',
       platform: 'github',
     },
   },
  favicon: '/images/logo.jpg',
  logo: '/images/logo.jpg',
});
