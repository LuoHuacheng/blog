module.exports = {
  base: '/blog/',
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
    sidebarDepth: 3,
    sidebar: {
      '/advanced/': [],
      '/basic/': [
        {
          title: '页面布局',
          children: [
            '1-layout/center',
            '1-layout/column',
          ],
        },
        {
          title: '盒模型',
          children: [
            '2-box/box-model',
            '2-box/bfc',
          ],
        },
        {
          title: 'DOM事件',
          path: '3-event/',
        },
        {
          title: 'HTTP',
          path: '4-http/',
        },
        {
          title: '原型/原型链',
          path: '5-prototype/',
        },
        {
          title: '对向对象',
          path: '6-oop/',
        },
        {
          title: '前后端通信',
          path: '7-comm/',
        },
        {
          title: 'web安全',
          path: '8-security/',
        },
        {
          title: '算法',
          path: '9-algorithm/',
        },
        {
          title: '渲染机制',
          path: '10-rendering/',
        },
        {
          title: 'JS执行机制',
          path: '11-execution/',
        },
        {
          title: '性能优化',
          path: '12-performance/',
        },
        {
          title: '错误捕获',
          path: '13-errorhandling/',
        },
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
