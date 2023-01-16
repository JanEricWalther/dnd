import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  base: '/',

  themeConfig: {
    nav: [
      { text: 'Regeln', link: '/rules/' },
      {
        text: 'Karten',
        items: [
          { text: 'Kontinent', link: '/maps/' },
          { text: 'Bissal Halbinsel', link: '/maps/' },
          { text: 'Caldrum', link: '/maps/' },
        ],
      },
    ],
    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Götzendämmerung', link: '/campaign-pitch' },
          // ...
        ],
      },
    ],
  },
});
