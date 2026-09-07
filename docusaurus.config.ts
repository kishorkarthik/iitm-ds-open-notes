import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'IITM DS OPEN NOTES',
  tagline: 'Open Source study notes for the IIT Madras BS Data Science and Applications programme, structured and maintained as a documentation site.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://iitm-ds-open-notes.vercel.app',
  baseUrl: '/',

  onBrokenLinks: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css',
        type: 'text/css',
      },
    ],


  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'IITM DS OPEN NOTES',
      items: [],
    },

    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} iitm-ds-open-notes contributors.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;