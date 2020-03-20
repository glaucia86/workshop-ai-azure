/**
 * file: config.js
 * description: file responsible for all application configuration
 * date: 03/11/2020
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

module.exports = {
  base: '/',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: 'Workshop A.I + Cognitive Services + Azure',
  description: 'Workshops de A.I + Cognitive Services + Azure, com intuito de ajudar a todas as pessoas a aprenderem a criar aplicações inteligentes e disponibilizar no Azure!',
  markdown: {
    lineNumbers: true,
  },
  locales: {
    '/': {
      lang: 'pt-BR',
      title: 'Workshop A.I + Cognitive Services + Azure',
      description: 'Workshops de A.I + Cognitive Services + Azure, com intuito de ajudar a todas as pessoas a aprenderem a criar aplicações inteligentes e disponibilizar no Azure!',
    },
    '/es/': {
      lang: 'es-ES',
      title: 'Workshop A.I + Cognitive Services + Azure',
      description: 'Talleres A.I + Cognitive Services + Azure, para ayudar a todos a aprender a crear aplicaciones inteligentes y ponerlas en la nube con Azure.',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Workshop A.I + Cognitive Services + Azure',
      description: 'A.I + Cognitive Services + Azure workshops, in order to help everyone learn to create smart applications and make them available on Azure!'
    },
  },
  themeConfig: {
    repo: 'https://github.com/glaucia86/workshop-ai-azure',
    editLinks: true,
    editLinkText: 'Encontrou algum erro? Nos ajude a melhorar esse workshop!',
    locales: {
      '/': {
        selectText: 'Idiomas',
        label: 'Português',
        nav: [
          { text: 'Página Principal', link: '/' },
          { text: 'Videos', link: 'https://www.youtube.com/user/l32759' },
          { text: 'Dúvidas?', link: 'https://github.com/glaucia86/workshop-ai-azure/issues' },
          { text: 'Código de Conduta', link: '/workshop/CODE_OF_CONDUCT' },
        ],
        sidebar: [
          { title: '☁️ Workshop 1: Introdução à Azure', children: ['/workshop/1/pg1','/workshop/1/pg2','/workshop/1/pg3',],},
          { title: '💬 Workshop 2: Desenvolva FAQs Inteligentes com QnA Maker & Teams!', children: ['/workshop/2/pg1','/workshop/2/pg2','/workshop/2/pg3',],},
          { title: '👥 Workshop 3: Crie uma Aplicação de Reconhecimento Facial com Face API & Node.js', children: ['/workshop/3/pg1','/workshop/3/pg2','/workshop/3/pg3','/workshop/3/pg4','/workshop/3/pg5',],},
          { title: '⚡️ Workshop 4: Identifique Super Heróis com Custom Vision!', children: ['/workshop/4/pg1','/workshop/4/pg2','/workshop/4/pg3',],},
          { title: '🔈 Workshop 5: Tradução em tempo real com Translator Text & Node.js', children: ['/workshop/5/pg1','/workshop/5/pg2','/workshop/5/pg3','/workshop/5/pg4',],},
          { title: '📕 Próximos Passos', children: ['/workshop/next-steps/pg1',],},
        ],
      },
      '/es/': {
        selectText: 'Idiomas',
        label: 'Español',
        nav: [
          { text: 'Home', link: '/es/' },
          { text: 'Videos', link: 'https://www.youtube.com/user/l32759' },
          { text: '¿Dudas?', link: 'https://github.com/glaucia86/workshop-ai-azure/issues' },
          { text: 'Código de Conducta', link: '/es/CODE_OF_CONDUCT' },
        ],
        sidebar: [
          { title: '☁️ Taller 1: Introducción a Azure', children: ['/es/workshop/1/pg1','/es/workshop/1/pg2','/es/workshop/1/pg3',],},
          { title: '💬 Taller 2: ¡Desarrolle FAQs Inteligentes con QnA Maker & Teams!', children: ['/es/workshop/2/pg1','/es/workshop/2/pg2','/es/workshop/2/pg3',],},
          { title: '👥 Taller 3: Cree una Aplicación de Reconocimiento Facial con Face API & Node.js', children: ['/es/workshop/3/pg1','/es/workshop/3/pg2','/es/workshop/3/pg3','/es/workshop/3/pg4','/es/workshop/3/pg5',],},
          { title: '⚡️ Taller 4: ¡Identifica superhéroes con Custom Vision!', children: ['/es/workshop/4/pg1','/es/workshop/4/pg2','/es/workshop/4/pg3',],},
          { title: '🔈 Taller 5: Desarrolle un Traductor en tiempo real con Translator Text & Node.js', children: ['/es/workshop/5/pg1','/es/workshop/5/pg2','/es/workshop/5/pg3','/es/workshop/5/pg4',],},
          { title: '📕 Próximos Pasos', children: ['/es/workshop/next-steps/pg1',],},  
        ]
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Videos', link: 'https://www.youtube.com/user/l32759' },
          { text: 'Doubts?', link: 'https://github.com/glaucia86/workshop-ai-azure/issues' },
          { text: 'Code of Conduct', link: '/en/CODE_OF_CONDUCT' },
        ],
        sidebar: [
          { title: '☁️ Workshop 1: Introduction to Azure', children: ['/en/workshop/1/pg1','/en/workshop/1/pg2','/en/workshop/1/pg3',],},
          { title: '💬 Workshop 2: Build Smart FAQs with QnA Maker & Teams!', children: ['/en/workshop/2/pg1','/en/workshop/2/pg2','/en/workshop/2/pg3',],},
          { title: '👥 Workshop 3: Create a Face Recognition Application with Face API & Node.js', children: ['/en/workshop/3/pg1','/en/workshop/3/pg2','/en/workshop/3/pg3','/en/workshop/3/pg4','/en/workshop/3/pg5',],},
          { title: '⚡️ Workshop 4: Identify Heroes with Custom Vision!', children: ['/en/workshop/4/pg1','/en/workshop/4/pg2','/en/workshop/4/pg3',],},
          { title: '🔈 Workshop 5: Real-time Translation Application with Translator Text & Node.js', children: ['/en/workshop/5/pg1','/en/workshop/5/pg2','/en/workshop/5/pg3','/en/workshop/5/pg4',],},
          { title: '📕 Next Steps', children: ['/en/workshop/next-steps/pg1',],},  
        ]
      },
    }, // fim colchete de locales
  }
}