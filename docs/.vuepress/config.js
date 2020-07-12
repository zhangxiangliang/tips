module.exports = {
  base: '/tips',
  title: "理财小百科",
  description: "韭菜小猪",
  themeConfig: {
    logo: '/images/logo.png',
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
      ]
    }]
  }
}
