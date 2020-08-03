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
          ['/data/股息率', '股息率'],
          ['/data/分红率', '分红率'],
          ['/data/市盈率', '市盈率'],
          ['/data/市盈率陷阱', '市盈率陷阱'],
          ['/data/净资产收益率', '净资产收益率'],
        ]
      }, {
        title: "股票相关",
        children: [
          ['/stock/股票', '股票'],
          ['/stock/白马股', '白马股'],
          ['/stock/蓝筹股', '蓝筹股'],
          ['/stock/优先股', '优先股'],
          ['/stock/股权质押', '股权质押'],
        ]
      }, {
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
        title: "债券相关",
        children: [
          ['/bond/债券', '债券'],
          ['/bond/政府债', '政府债'],
          ['/bond/企业债', '企业债'],
          ['/bond/地方债', '地方债'],
          ['/bond/可转债', '可转债'],
          ['/bond/国债逆回购', '国债逆回购'],
          ['/bond/募集说明书', '募集说明书'],
          ['/bond/股东配售', '股东配售'],
        ]
      }, {
        title: "价值投资",
        children: [
          ['/value-investing/价值投资', '价值投资'],
          ['/value-investing/基础概念', '基础概念'],
          ['/value-investing/能力圈', '能力圈'],
          ['/value-investing/安全边际', '安全边际'],
          ['/value-investing/价值估值', '价值估值'],
          ['/value-investing/企鹅估值法', '企鹅估值法'],
          ['/value-investing/清算估值法', '清算估值法'],
          ['/value-investing/现金流折现估值法', '现金流折现估值法'],
          ['/value-investing/基本面分析', '基本面分析'],
          ['/value-investing/技术面分析', '技术面分析'],
          ['/value-investing/定量分析', '定量分析'],
          ['/value-investing/定性分析', '定性分析'],
        ]
      }, {
        title: "护城河",
        children: [
          ['/moat/护城河', '护城河'],
          ['/moat/网络效应护城河', '网络效应护城河'],
          ['/moat/规模效应护城河', '规模效应护城河'],
          ['/moat/转换成本护城河', '转换成本护城河'],
          ['/moat/无形资产护城河', '无形资产护城河'],
          ['/moat/品牌认知护城河', '品牌认知护城河'],
          ['/moat/专利技术护城河', '专利技术护城河'],
          ['/moat/法定许可护城河', '法定许可护城河'],
        ]
      },
      {
        title: "商业相关",
        children: [
          ['/business/商业模式', '商业模式'],
          ['/business/高利润模式', '高利润模式'],
          ['/business/品牌溢价', '品牌溢价'],
          ['/business/非经常性损益', '非经常性损益'],
        ]
      },
      {
        title: "金融术语",
        children: [
          ['/terms/大类资产', '大类资产'],
          ['/terms/创新型存款', '创新型存款'],
          ['/terms/结构型存款', '结构型存款'],
          ['/terms/市场先生', '市场先生'],
          ['/terms/通货膨胀', '通货膨胀'],
          ['/terms/黑天鹅事件', '黑天鹅事件'],
          ['/terms/灰犀牛事件', '灰犀牛事件'],
        ]
      }
    ]
  }
}
