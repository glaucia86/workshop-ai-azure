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
    repo: 'workshop-ai-azure/docs',
    editLinks: true,
    editLinkText: 'Encontrou algum erro? Nos ajude a melhorar esse workshop!',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Código de Conduta', link: '/workshop/CODE_OF_CONDUCT' },
    ],
    locales: {
      '/': {
        selectText: 'Idiomas',
        label: 'Português',
        sidebar: [
          { title: 'Introdução à Azure', children: ['/workshop/1/pg1','/workshop/1/pg2','/workshop/1/pg3',],},
          { title: 'Desenvolva FAQs Inteligentes com QnA Maker & Teams!', children: ['/workshop/2/pg1','/workshop/2/pg2','/workshop/2/pg3',],},
          { title: 'Crie uma Aplicação de Reconhecimento Facial com Face API & Node.js', children: ['/workshop/3/pg1','/workshop/3/pg2','/workshop/3/pg3',],},
          { title: 'Identifique Super Heróis com Custom Vision!', children: ['/workshop/4/pg1','/workshop/4/pg2','/workshop/4/pg3',],},
          { title: 'Tradução em tempo real com Translator Text & Node.js', children: ['/workshop/5/pg1','/workshop/5/pg2','/workshop/5/pg3',],},
          { title: 'Próximos Passos', children: ['/workshop/proximos-passos/pg1',],},
        ],
      },
      '/es/': {
        selectText: 'Idiomas',
        label: 'Español',
        sidebar: [
          { title: 'Introducción a Azure', children: ['/workshop/1/pg1','/workshop/1/pg2','/workshop/1/pg3',],},
          { title: '¡Desarrolle FAQs Inteligentes con QnA Maker & Teams!', children: ['/workshop/2/pg1','/workshop/2/pg2','/workshop/2/pg3',],},
          { title: 'Cree una Aplicación de Reconocimiento Facial con Face API & Node.js', children: ['/workshop/3/pg1','/workshop/3/pg2','/workshop/3/pg3',],},
          { title: '¡Identifica superhéroes con Custom Vision!', children: ['/workshop/4/pg1','/workshop/4/pg2','/workshop/4/pg3',],},
          { title: 'Desarrolle un Traductor en tiempo real con Translator Text & Node.js', children: ['/workshop/5/pg1','/workshop/5/pg2','/workshop/5/pg3',],},
          { title: 'Próximos Pasos', children: ['/workshop/proximos-passos/pg1',],},  
        ]
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        sidebar: [
          { title: 'Introduction to Azure', children: ['/workshop/1/pg1','/workshop/1/pg2','/workshop/1/pg3',],},
          { title: 'Build Smart FAQs with QnA Maker & Teams!', children: ['/workshop/2/pg1','/workshop/2/pg2','/workshop/2/pg3',],},
          { title: 'Create a Face Recognition Application with Face API & Node.js', children: ['/workshop/3/pg1','/workshop/3/pg2','/workshop/3/pg3',],},
          { title: 'Identify Heroes with Custom Vision!', children: ['/workshop/4/pg1','/workshop/4/pg2','/workshop/4/pg3',],},
          { title: 'Real-time Translation Application with Translator Text & Node.js', children: ['/workshop/5/pg1','/workshop/5/pg2','/workshop/5/pg3',],},
          { title: 'Next Steps', children: ['/workshop/proximos-passos/pg1',],},  
        ]
      },
    }, // fim colchete de locales
  }
}