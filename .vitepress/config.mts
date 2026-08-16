import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Brocks Scripts',
  description: 'Installation, configuration, integration, and support documentation for Brocks Scripts FiveM resources.',
  base: '/brocks-docs/',
  lang: 'en-US',
  cleanUrls: true,
  appearance: 'dark',
  lastUpdated: true,
  srcExclude: ['README.md'],
  sitemap: {
    hostname: 'https://theborklee.github.io/brocks-docs/'
  },
  head: [
    ['meta', { name: 'theme-color', content: '#8b5cf6' }],
    ['meta', { property: 'og:site_name', content: 'Brocks Scripts' }]
  ],
  themeConfig: {
    siteTitle: 'Brocks Scripts',
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resources', link: '/resources/bl_warehouse/overview' },
      { text: 'Free', link: '/free/bl-hairties' },
      { text: 'Store', link: 'https://brocks-scripts-peds.tebex.io' },
      { text: 'Discord', link: 'https://discord.gg/QdEPrhkFRm' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Getting Started', link: '/getting-started/getting-started' },
          { text: 'Common Installation', link: '/getting-started/common-installation' }
        ]
      },
      {
        text: 'Resources',
        collapsed: false,
        items: [
          {
            text: 'BL Warehouse',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/resources/bl_warehouse/overview' },
              { text: 'Installation', link: '/resources/bl_warehouse/installation' },
              { text: 'Configuration', link: '/resources/bl_warehouse/configuration' },
              { text: 'Items & Rewards', link: '/resources/bl_warehouse/items-and-rewards' },
              { text: 'Framework Setup', link: '/resources/bl_warehouse/framework-setup' },
              { text: 'Full Config', link: '/resources/bl_warehouse/full-config' },
              { text: 'Troubleshooting', link: '/resources/bl_warehouse/troubleshooting' }
            ]
          }
        ]
      },
      {
        text: 'Free Resources',
        collapsed: false,
        items: [
          { text: 'BL Hairties', link: '/free/bl-hairties' },
          { text: 'BL Pedspawns', link: '/free/bl-pedspawns' }
        ]
      },
      {
        text: 'Developers',
        collapsed: false,
        items: [
          { text: 'Exports', link: '/developers/exports' },
          { text: 'Events', link: '/developers/events' },
          { text: 'Integration Guide', link: '/developers/integration-guide' }
        ]
      },
      {
        text: 'Support',
        collapsed: false,
        items: [
          { text: 'Common Issues', link: '/support/common-issues' },
          { text: 'Getting Support', link: '/support/getting-support' },
          { text: 'FAQ', link: '/support/faq' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/TheBorkLee/brocks-docs' }
    ],
    editLink: {
      pattern: 'https://github.com/TheBorkLee/brocks-docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },
    footer: {
      message: 'Brocks Scripts documentation',
      copyright: 'Built for FiveM server owners.'
    }
  }
})
