module.exports = {
  base: '/tips/',
  title: "韭菜小猪",
  description: "一只爱吃韭菜的小猪",
  themeConfig: {
    logo: '/images/logo.png',
    nav: [{
        text: '小百科',
        link: '/'
      },
      {
        text: 'Github',
        link: 'https://github.com/jiucaixiaozhu/tips'
      },
    ],
    sidebar: [{
      title: "数值指标",
      children: [
        ['/data/市净率', '市净率'],
        ['/data/市盈率', '市盈率'],
        ['/data/股息率', '股息率'],
        ['/data/分红率', '分红率'],
        ['/data/市盈率陷阱', '市盈率陷阱'],
      ]
    }, {
      title: "资金市场",
      children: [
        ['/market/一级市场', '一级市场'],
        ['/market/二级市场', '二级市场'],
        ['/market/北上资金', '北上资金'],
        ['/market/南下资金', '南下资金'],
        ['/market/场外基金', '场外基金'],
      ]
    }, {
      title: "基金术语",
      children: [
        ['/fund/基金', '基金'],
        ['/fund/货币基金', '货币基金'],
        ['/fund/债券基金', '债券基金'],
        ['/fund/纯债基金', '纯债基金'],
        ['/fund/指数基金', '指数基金'],
        ['/fund/策略加权指数基金', '策略加权指数基金'],
        ['/fund/增强型指数基金', '增强型指数基金'],
      ]
    }, {
      title: "金融术语",
      children: [
        ['/terms/通货膨胀', '通货膨胀'],
      ]
    }]
  }
}
