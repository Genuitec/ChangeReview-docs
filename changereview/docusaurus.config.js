// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ChangeReview for Eclipse Documentation',
  tagline: 'ChangeReview for Eclipse Documentation',
  //favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: process.env.TARGET_URL || 'https://genuitec.com',

  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/products/changereview/',
  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      // 'warn' while assets are still being produced. Consider raising this to
      // 'throw' before launch so a missing image can't ship unnoticed.
      onBrokenMarkdownImages: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
         },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ChangeReview',
        logo: {
          alt: 'ChangeReview Logo',
          src: 'img/changes_256-rounded.png',
        },
        items: [
{
            to: "https://genuitec.com",
            label: "genuitec.com",
            position: "right",
            target: '_self',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Genuitec, LLC. Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
