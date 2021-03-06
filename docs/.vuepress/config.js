module.exports = {
  title: 'CSS tricks',
  description: 'some CSS tricks, 一些常用的 CSS 样式, 一点 CSS 技巧',
  dest: './dist', // 设置输出目录
  base: '/css_tricks/',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#00adb5' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#00adb5' }],
    ['meta', {name:'description', itemprop: 'description', content: 'some CSS tricks, 一些常用的 CSS 样式, 一点 CSS 技巧' }],
    ['meta', { itemprop: 'name', content: 'css_trick' }],
    ['meta', { itemprop: 'image', content: '/css_tricks/images/favicon.png' }],
  ],
  repo: 'https://qishaoxuan.github.io/css_tricks/', // 添加 github 链接
  themeConfig: {
    serviceWorker: {
      updatePopup: {
         message: "点击刷新以查看新的内容",
         buttonText: "刷新"
      }
    },
    lastUpdated: 'Last Updated',
    nav: [{
        text: 'js tricks',
        link: 'https://qishaoxuan.github.io/js_tricks/'
      },
      {
        text: 'blog',
        link: 'https://qishaoxuan.github.io/blog/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/QiShaoXuan/css_tricks'
      },
    ],
    sidebar: [
      {
        title: '工具',
        collapsable: false,
        children: [
          ['/createTriangle/', '三角形生成器'],
        ],
      },
      {
        title: '理论',
        collapsable: false,
        children: [
          ['/name/', '命名规则'],
          ['/selector/', '选择器'],
          ['/pseudo/', '伪类和伪元素'],
          ['/unit/', '单位'],
          ['/filter/', '滤镜 filter'],
          ['/flexbox/', 'flexbox'],
          ['/grid/','grid'],
          ['/object/','object-fit, object-position']
        ]
      },
      {
        title: '动',
        collapsable: false,
        children: [
          ['/accordion/', '手风琴'],
          ['/hover/', '悬停'],
          ['/loading/', '加载动画'],
          ['/spring/', '弹簧动画'],
          ['/parabola/','抛物线']
        ]
      },
      {
        title: '静',
        collapsable: false,
        children: [
          ['/reset/', '清除默认样式'],
          ['/scrollTemp/', '滚动条样式'],
          ['/mdedia/', 'midea 参考'],
          ['/cursor/', '手型'],
          ['/shadow/', '投影'],
        ]
      },
      {
        title: '技巧',
        collapsable: false,
        children: [
          ['/verticalMiddle/', '垂直居中'],
          ['/bottom/', '底部自适应'],
          ['/triangle/', '三角形边框'],
          ['/ellipsis/', '文字超出显示省略号'],
          ['/lineBreak/', '插入换行'],
          ['/glass/', '毛玻璃效果'],
          ['/positionWidth/','绝对定位宽度自动撑开']
        ]
      },
      // ['/', 'Home'],
    ]
  }
}
