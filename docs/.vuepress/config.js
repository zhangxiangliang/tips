module.exports = {
  title: "理财小百科",
  description: "韭菜小猪",
  themeConfig: {
    logo: '/images/logo.png',
    sidebar: [{
      title: "数值指标",
      children: [
        ['/guide/市净率', '市净率'],
        ['/guide/市盈率', '市盈率'],
        ['/guide/市盈率陷阱', '市盈率陷阱'],
        ['/guide/股息率', '股息率'],
      ]
    }]
  }
}
