// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const BASE_URL = '/bkkr-docs';

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
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
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
            let match = docPath.match(/components\/(.*)\.md/);
            if (match != null) {
              return `https://github.com/bkkr-team/bkkr-framework/edit/mmaster/core/src/components/${match[1]}/readme.md`;
            }
            return `https://github.com/bkkr-team/bkkr-docs/edit/master/${versionDocsDirPath}/${docPath}`;
          },
          exclude: ['README.md'],
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v5',
              banner: 'none',
            },
          },
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
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '\u{1F319}',
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIcon: '\u{1F602}',
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'BKKR logo',
          src: 'logo/bkkr.svg',
          srcDark: 'logo/bkkr-light.svg',
          href: '/',
          target: '_self',
        },
        items: [
          {
            label: 'Guide',
            href: '/',
            position: 'left',
          },
          {
            type: 'doc',
            label: 'Components',
            docId: 'components',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/bkkr-team/bkkr-framework',
            label: 'GitHub',
            target: '_blank',
            position: 'right'
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
