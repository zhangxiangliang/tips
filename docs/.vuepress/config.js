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
      title: "市场相关",
      children: [
        ['/market/一级市场', '一级市场'],
        ['/market/二级市场', '二级市场'],
        ['/market/A股', 'A股'],
        ['/market/B股', 'B股'],
        ['/market/港股', '港股'],
        ['/market/美股', '美股'],
        ['/market/北上资金', '北上资金'],
        ['/market/南下资金', '南下资金'],
        ['/market/场外基金', '场外基金'],
        ['/market/场内基金', '场内基金'],
        ['/market/主板市场', '主板市场'],
        ['/market/中小板市场', '中小板市场'],
        ['/market/创业板市场', '创业板市场'],
        ['/market/科创板市场', '科创板市场'],
        ['/market/新三板市场', '新三板市场'],
        ['/market/区域股权市场', '区域股权市场'],
      ]
    }, {
      title: "数值指标",
      children: [
        ['/data/市净率', '市净率'],
        ['/data/市盈率', '市盈率'],
        ['/data/股息率', '股息率'],
        ['/data/分红率', '分红率'],
        ['/data/市盈率陷阱', '市盈率陷阱'],
      ]
    }, {
      title: "股票相关",
      children: [
        ['/stock/股票', '股票'],
        ['/stock/白马股', '白马股'],
        ['/stock/蓝筹股', '蓝筹股'],
        ['/stock/优先股', '优先股'],
      ]
    }, {
      title: "指数相关",
      children: [
        ['/index/上证指数', '上证指数'],
        ['/index/深证成指', '深证成指'],
        ['/index/创业板指', '创业板指'],
        ['/index/中证全指', '中证全指'],
        ['/index/恒生指数', '恒生指数'],
      ]
    }, {
      title: "基金相关",
      children: [
        ['/fund/基金', '基金'],
        ['/fund/申购赎回', '申购赎回'],
        ['/fund/基金分红', '基金分红'],
        ['/fund/货币基金', '货币基金'],
        ['/fund/债券基金', '债券基金'],
        ['/fund/纯债基金', '纯债基金'],
        ['/fund/指数基金', '指数基金'],
        ['/fund/股票型基金', '股票型基金'],
        ['/fund/平衡型基金', '平衡型基金'],
        ['/fund/增强型指数基金', '增强型指数基金'],
        ['/fund/策略加权指数基金', '策略加权指数基金'],
        ['/fund/场外基金', '场外基金'],
        ['/fund/场内基金', '场内基金'],
        ['/fund/ETF', 'ETF'],
        ['/fund/LOF', 'LOF'],
        ['/fund/FOF', 'FOF'],
        ['/fund/公募基金', '公募基金'],
        ['/fund/私募基金', '私募基金'],
      ]
    }, {
      title: "可转债",
      children: [
        ['/bond/可转债', '可转债'],
        ['/bond/募集说明书', '募集说明书'],
      ]
    }, {
      title: "价值投资",
      children: [
        ['/value-investing/价值投资', '价值投资'],
        ['/value-investing/基础概念', '基础概念'],
        ['/value-investing/能力圈', '能力圈'],
        ['/value-investing/安全边际', '安全边际'],
      ]
    }, {
      title: "金融术语",
      children: [
        ['/terms/创新型存款', '创新型存款'],
        ['/terms/结构型存款', '结构型存款'],
        ['/terms/市场先生', '市场先生'],
        ['/terms/通货膨胀', '通货膨胀'],
        ['/terms/黑天鹅事件', '黑天鹅事件'],
        ['/terms/灰犀牛事件', '灰犀牛事件'],
      ]
    }]
  }
}
