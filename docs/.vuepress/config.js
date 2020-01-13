module.exports = {
  title: 'HC的前端之旅',
  description: 'Javascript, HTML, CSS, Vue, React, Flutter, NodeJs, 前端技术',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '基础', link: '/basic/' },
      { text: '进阶', link: '/advanced/' },
      { text: '框架', link: '/frame/' },
      { text: '其他', link: '/other/' },
    ],
    sidebar: {
      '/advanced/': [],
      '/basic/': [
        '1-layout/',
        '2-box/',
        '3-event/',
        '4-http/',
        '5-prototype/',
        '6-oop/',
        '7-comm/',
        '8-security/',
        '9-algorithm/',
        '10-rendering/',
        '11-execution/',
        '12-performance/',
        '13-errorhandling/',
      ],
      '/frame/': [
        {
          title: 'Flutter',
          path: 'flutter/',
        },
        {
          title: 'NodeJs',
          path: 'nodejs/',
        },
        {
          title: 'React',
          path: 'react/',
        },
        {
          title: 'Vue',
          path: 'vue/',
        },
        {
          title: '数据库',
          path: 'storage/',
        },
      ],
      '/other/': ['wsl', 'change-source'],
      '/': ['', 'about'],
    },
    lastUpdated: '上次更新', // string | boolean
    smoothScroll: true,
  },
};
