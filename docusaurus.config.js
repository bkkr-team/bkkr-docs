// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const BASE_URL = '/docs';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BKKR Documentation',
  tagline:
    'A UI toolkit for building performant, high-quality mobile and desktop apps using web technologies - HTML, CSS, and JavaScript.',
  url: 'https://bkkr-team.github.io/',
  baseUrl: `${BASE_URL}/`,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bkkr-team',
  projectName: 'bkkr-docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: { label: 'English' },
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          editUrl: ({ versionDocsDirPath, docPath }) => {
            let match = docPath.match(/api\/(.*)\.md/);
            if (match != null) {
              return `https://github.com/bkkr-team/bkkr-framework/edit/main/core/src/components/${match[1]}/readme.md`;
            }
            return `https://github.com/bkkr-team/bkkr-docs/edit/main/${versionDocsDirPath}/${docPath}`;
          },
          exclude: ['README.md'],
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v6',
              banner: 'none',
            },
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: [
            require.resolve('./node_modules/modern-normalize/modern-normalize.css'),
            require.resolve('./src/styles/custom.scss'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        hideOnScroll: true,
        title: 'BKKR',
        logo: {
          alt: 'BKKR logo',
          src: 'img/logo.svg',
          href: '/',
          target: '_self',
        },
        items: [
          {
            type: 'doc',
            label: 'Guide',
            docId: 'guide',
            position: 'left',
          },
          {
            type: 'doc',
            label: 'Components',
            docId: 'components',
            position: 'left',
          },
          {
            href: 'https://github.com/bkkr-team/bkkr-framework',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'S9UPRK0052',
        apiKey: 'deac83026d9661f1eb9c6a4484ce1caf',
        indexName: 'bkkrframework',
        contextualSearch: true,
      },
    },

  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ],
  ],
};

module.exports = config;
