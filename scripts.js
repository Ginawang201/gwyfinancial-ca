// ─── Translations ───────────────────────────────────────────────
const T = {
  zh: {
    // nav
    'nav.travel':  '旅游保险',
    'nav.student': '留学生保险',
    'nav.life':    '寿险 & 重疾险',
    'nav.gif':     '保本基金投资',
    'nav.contact': '联系我们',

    // hero
    'hero.tag':  '安省 & BC省持牌顾问 | Licensed in Ontario & British Columbia',
    'hero.h1':   '出行在外，保障先行',
    'hero.sub':  '无论海外旅行，留学陪读，还是家庭保障，我们都为您备好一份安心。',

    'hero.btn1': '查询旅游保险报价',
    'hero.btn2': '留学生 & 陪读保险',

    // compliance
    'compliance': '<strong>服务范围：</strong>GWY Financial Inc 持有安大略省及不列颠哥伦比亚省保险执照，仅向上述两省居民提供服务。<em>Licensed in Ontario & British Columbia only.</em>',

    // ── Travel ──
    'travel.h2':  '🌏 旅游保险',
    'travel.sub': '通过顾问链接即时获得报价并在线购买，保单直接发送至您的邮箱',

    'travel.tab.out':     '✈️ 出境旅游保险',
    'travel.tab.out.sub': '离开加拿大出行海外',
    'travel.tab.in':      '🍁 入境访客保险',
    'travel.tab.in.sub':  '来访加拿大的亲友',

    'travel.out.h3':  '出境旅游保险（Outbound Travel Insurance）',
    'travel.out.p':   '适合居住在安省或BC省、前往海外或其他省份旅行的居民，涵盖紧急医疗、旅程取消/中断、行李丢失等保障。',
    'travel.out.f1':  '✅ 紧急医疗及住院保障',
    'travel.out.f2':  '✅ 旅程取消 / 中断赔偿',
    'travel.out.f3':  '✅ 行李及随身物品保障',
    'travel.out.f4':  '✅ 24小时紧急援助热线',
    'travel.out.f5':  '✅ 保单即时发送至邮箱',

    'travel.in.h3':   '入境访客保险（Visitors to Canada Insurance）',
    'travel.in.p':    '适合来访加拿大的家人、朋友或商务人士，以及等待省级健康保险生效期间的新移民。',
    'travel.in.f1':   '✅ 紧急医疗及住院保障',
    'travel.in.f2':   '✅ 等待期内新移民医疗保障',
    'travel.in.f3':   '✅ 可按日计费，灵活选择保障天数',
    'travel.in.f4':   '✅ 24小时中英文紧急援助',
    'travel.in.f5':   '✅ 保单即时发送至邮箱',

    'tugo.widget.title': '🔗 在线报价购买（由 Tugo Travel Insurance 提供）',
    'tugo.widget.note':  'Advisor 链接即将上线 — 届时可直接在此查询报价并完成购买',
    'tugo.widget.btn':   '联系顾问获取报价',

    'claims.h3':     '📋 如何办理理赔',
    'claims.s1.t':   '紧急情况先就医',
    'claims.s1.p':   '若发生医疗紧急状况，请先就医，同时尽快拨打 Tugo 24小时援助热线。',
    'claims.s2.t':   '联系 Tugo 援助热线',
    'claims.s2.p':   '北美免费：<strong>1-800-387-4357</strong> &nbsp;|&nbsp; 国际直拨：<strong>+1-416-340-0049</strong>',
    'claims.s3.t':   '提交理赔申请',
    'claims.s3.p':   '登录 <a href="https://www.tugo.com/claims" target="_blank" rel="noopener">tugo.com/claims</a> 提交理赔材料：保单号、就医收据、医生诊断书等。',
    'claims.s4.t':   '等待审核 & 赔付',
    'claims.s4.p':   'Tugo 理赔团队将审核材料并与您联系，确认赔付金额及支付方式。',

    'faq.h3':  '❓ 常见问题',
    'faq.q1':  '保险覆盖哪些国家/地区？',
    'faq.a1':  'Tugo 旅游保险可覆盖全球大多数国家和地区，部分存在安全警告的目的地可能受限。购买前请确认您的目的地在承保范围内。',
    'faq.q2':  '已有既往症是否可以投保？',
    'faq.a2':  '可以投保，但既往症的保障取决于具体方案及稳定期要求。建议如实申报健康状况，顾问可协助选择最适合的方案。',
    'faq.q3':  '购买后可以修改出行日期吗？',
    'faq.a3':  '在出发前可以修改保障日期，请联系 Tugo 客服或您的顾问办理变更。',
    'faq.q4':  '保单文件怎么发送？',
    'faq.a4':  '完成购买后，保单电子文件（E-Policy）将即时发送至您填写的邮箱，请注意查收，包括垃圾邮件文件夹。',
    'faq.q5':  '我是安省或BC省以外的省份居民，可以购买吗？',
    'faq.a5':  '由于牌照限制，我们目前仅为安大略省和不列颠哥伦比亚省的居民提供服务，无法向其他省份居民销售。',

    'inbound.faq.q1': 'Super Visa 保险有哪些硬性要求？',
    'inbound.faq.a1': '加拿大移民局（IRCC）要求 Super Visa 申请人持有：① 由加拿大保险公司承保；② 保额不少于 $100,000；③ 保障期至少一年；④ 包含医疗、住院及遣返保障的保险单。',
    'inbound.faq.q2': 'Super Visa 保险可以退款吗？',
    'inbound.faq.a2': '若签证申请被拒，凭拒签证明可申请全额退款。保障生效后的退款视具体情况而定，请联系顾问了解详情。',
    'inbound.faq.q3': '父母/祖父母回国后保单还有效吗？',
    'inbound.faq.a3': '大多数访客保险仅在加拿大境内有效。如需往返保障，请在购买时告知顾问，选择含出行保障的方案。',

    'tugo.contact.h3': '📞 Tugo 客服联系方式',
    'tugo.c1.label':   '客户服务',
    'tugo.c1.val':     '1-800-387-4357（北美免费）',
    'tugo.c2.label':   '国际紧急援助',
    'tugo.c2.val':     '+1-416-340-0049',
    'tugo.c3.label':   '理赔邮件',
    'tugo.c4.label':   '官方网站',

    // ── Student ──
    'student.h2':  '🎓 国际留学生及陪读家长保险',
    'student.sub': '为在加拿大的国际留学生及陪读家长提供全面的医疗保障',

    'student.tab.s':     '👩‍🎓 留学生保险',
    'student.tab.p':     '👨‍👩‍👧 陪读家长保险',

    'student.s.h3':  '国际留学生医疗保险（International Student Insurance）',
    'student.s.p':   '专为持学签在加拿大就读的留学生设计，在省级健康保险不覆盖或等待期间提供全面医疗保障。',
    'student.s.f1':  '✅ 门诊 / 住院紧急医疗',
    'student.s.f2':  '✅ 处方药物保障',
    'student.s.f3':  '✅ 牙科急症保障',
    'student.s.f4':  '✅ 视力检查',
    'student.s.f5':  '✅ 心理健康咨询',
    'student.s.f6':  '✅ 紧急医疗转运及遣返',

    'student.p.h3':  '陪读家长访客保险（Super Visa / Visitor Insurance）',
    'student.p.p':   '满足加拿大移民局 Super Visa 要求，保额不低于 $100,000，保障期一年或以上，可续保。',
    'student.p.f1':  '✅ 符合 Super Visa 最低要求（$100,000 保额）',
    'student.p.f2':  '✅ 紧急住院及手术',
    'student.p.f3':  '✅ 救护车及紧急医疗转运',
    'student.p.f4':  '✅ 24小时援助服务',
    'student.p.f5':  '✅ 既往症稳定期选项可选',
    'student.p.f6':  '✅ 保单即时发送至邮箱',

    'student.claims.s1.t': '就医时出示保险卡',
    'student.claims.s1.p': '就医前出示 Tugo 保险卡及保单号，部分医疗机构可直接向 Tugo 结算。',
    'student.claims.s2.t': '保留所有收据及文件',
    'student.claims.s2.p': '保留所有就医收据、处方单、诊断书等原件。',
    'student.claims.s3.t': '在线提交理赔',
    'student.claims.s3.p': '登录 <a href="https://www.tugo.com/claims" target="_blank" rel="noopener">tugo.com/claims</a> 提交理赔申请及相关文件。',
    'student.claims.s4.t': '等待赔付',
    'student.claims.s4.p': 'Tugo 理赔团队将在收到完整材料后处理您的申请。',

    'sfaq.q1':  '留学生是否必须购买额外医疗保险？',
    'sfaq.a1':  '安省和BC省的国际留学生通常需要等待一段时间才能享有省级健康保险（OHIP/MSP）。在等待期间，私人医疗保险是必要的。部分学校提供团体保险，但保障范围可能有限。',
    'sfaq.q2':  'Super Visa 保险有哪些硬性要求？',
    'sfaq.a2':  '加拿大移民局要求 Super Visa 申请人持有：① 由加拿大保险公司承保；② 保额不少于 $100,000；③ 保障期至少一年；④ 包含医疗、住院及遣返保障的保险单。',
    'sfaq.q3':  '陪读家长回国后保单还有效吗？',
    'sfaq.a3':  '大多数陪读家长保险仅在加拿大境内有效。如需往返保障，请在购买时告知顾问，选择含出行保障的方案。',
    'sfaq.q4':  '保险可以中途取消并退款吗？',
    'sfaq.a4':  '在保障开始前可全额退款。保障开始后的退款政策视具体情况而定，请联系顾问了解详情。',

    // ── Life ──
    'life.h2':  '🛡️ 寿险 & 重疾险',
    'life.sub': '代理多家顶级保险公司，为您和家人，为企业主构建长期财务安全网。',

    'life.term.h3':  '定期寿险（Term Life Insurance）',
    'life.term.p':   '若投保人指定期限内身故，受益人获得免税赔偿金。',
    'life.term.f1':  '✅ 保费低，保额高',
    'life.term.f2':  '✅ 投保年龄 18–85 岁，最长保障至 85 岁',
    'life.term.f3':  '✅ 可在一定期限内免体检转换为终身险或更长期限的 Term',
    'life.term.f4':  'ℹ️ 不适合做遗产规划工具',

    'life.par.h3': '分红保险（Participating Whole Life）',
    'life.par.p':  '集终身保障、免税退休金和财富传承于一体。',
    'life.par.f1': '✅ 终身保障',
    'life.par.f2': '✅ 保单现金值免税复利稳健增长',
    'life.par.f3': '✅ 可作为税务规划及财富传承工具',
    'life.par.f4': '✅ 灵活使用现金值：支取、分红提现、保单贷款或银行抵押贷款',
    'life.ul.h3':  '万能寿险（Universal Life）',
    'life.ul.p':   '终身保险 + 投资账户，灵活调整。',
    'life.ul.f1':  '✅ 终身保障',
    'life.ul.f2':  '✅ 投资账户免税增长',
    'life.ul.f3':  '✅ 自由投资保单内置的基金',
    'life.ul.f4':  '✅ 可作为税务规划及财富传承工具',

    'life.ci.h3':    '重大疾病险（Critical Illness Insurance）',
    'life.ci.p':     '早期赔付 + 全额赔付，为健康筑起财务防线。',
    'life.ci.f1':    '✅ 涵盖癌症、心脏病、中风等25+种重疾',
    'life.ci.f2':    '✅ 一次性免税现金给付，不限用途',
    'life.ci.f3':    '✅ 全球最佳医生咨询服务（免费），提高治愈率',
    'life.ci.f4':    '✅ 部分计划提供保费退还选项（ROP）',

    'cases.h3':      '💡 真实案例分享',
    'case1.tag':     '定期寿险',
    'case1.body':    '<strong>小李，35岁，两个孩子的父亲</strong><br/>购房后有80万贷款，投保100万定期寿险（10年期），保费 $40/月。花最少的钱，给家人最大的保障，等将来手头宽裕了，再把Term转成终身险。',
    'case2.tag':     '重大疾病险',
    'case2.body':    '<strong>黄先生，45岁，IT Contractor</strong><br/>5年前买了25万保额的重疾保险，今年确诊胃癌2-3期，收到一次性25万免税理赔支票。得以暂停工作，专注治疗，并维持家庭生活开销，无需动用储蓄或变卖资产。',
    'case3.tag':     '终身寿险 + 遗产规划',
    'case3.body':    '<strong>张先生，50岁，高净值客户</strong><br/>将终身寿险纳入遗产规划，身故赔付金直接免税给到指定受益人，免除遗产认证费用和流程，实现高效的跨代财富传承。',
    'case4.tag':     '分红保险 + IFA Solution',
    'case4.body':    '<strong>于先生，52岁，企业主</strong><br/>随着企业规模不断扩大，于先生设立了控股公司架构，用于公司资产的投资避税、风险隔离与财富传承。他在控股公司名下购买了大额分红保单，同时将保单抵押给银行，取回保费继续投资；贷款利息可抵税，实现资金利用最大化——一钱三用。将来还可产生大额 CDA Credit，帮助企业主实现最大程度的合理避税。',

    'form.h3':       '📩 留下您的联系方式，获得专属的方案定制',
    'form.note':     '我们的顾问将根据您的需求，为您提供个性化的保险方案建议，无任何费用和义务。',
    'form.name.l':   '姓名',
    'form.phone.l':  '电话',
    'form.email.l':  '电子邮箱',
    'form.prov.l':   '所在省份',
    'form.prov.ph':  '请选择',
    'form.prov.on':  '安大略省（Ontario）',
    'form.prov.bc':  '不列颠哥伦比亚省（British Columbia）',
    'form.int.l':    '感兴趣的产品',
    'form.int.1':    '定期寿险',
    'form.int.2':    '终身寿险',
    'form.int.3':    '重大疾病险',
    'form.int.4':    '其他',
    'form.msg.l':    '留言（可选）',
    'form.consent':  '我同意 GWY Financial Inc 的顾问通过电话或邮件联系我，以提供保险咨询服务。',
    'form.submit':   '提交咨询请求',
    'form.success':  '✅ 感谢您的留言！我们的顾问将在 1 个工作日内与您联系。',
    'form.error':    '❌ 提交失败，请稍后再试或直接发送邮件至',

    // footer
    'footer.disclaimer': '重要声明：本网站仅向安大略省及不列颠哥伦比亚省居民提供保险咨询服务。',
    'footer.adv.h3': '联系我们',
    'footer.adv.p':  '我们将以专业诚信的态度，为您提供最优的保障方案。',
    'footer.wechat': '微信 WeChat',
    'footer.qr.ph':  '微信二维码',
    'footer.qr.tip': '请将微信二维码图片命名为 wechat-qr.png 放置于网站根目录',
    'footer.ct.h4':  '联系方式',
    'footer.nav.h4': '快速导航',
    'footer.lic.h4': '牌照信息',
    'footer.lic.on': '持有安大略省保险执照<br/><em>Licensed in Ontario</em>',
    'footer.lic.bc': '持有不列颠哥伦比亚省保险执照<br/><em>Licensed in British Columbia</em>',
    'footer.legal':  '本网站内容仅供参考，不构成保险合同的一部分。保障范围、条款及条件请以实际保单文件为准。旅游保险产品由 TuGo® Travel Insurance 承保，GWY Financial Inc 为其授权顾问。',
    'footer.copy':   '© 2024 GWY Financial Inc. 保留所有权利。',

    // nav
    'nav.outbound':      '出境旅游保险',
    'nav.inbound':       '入境访客保险 / Super Visa',
    'modal.inbound.title': '入境访客保险',

    // product tiles
    'products.h2':    '我们的保险服务',
    'products.sub':   '点击卡片，了解详情并即时获取报价',
    'tile.out.h':     '出境旅游保险',
    'tile.out.p':     '离开加拿大出行，全程紧急医疗、旅程取消及行李保障',
    'tile.in.h':      '入境访客保险 / Super Visa',
    'tile.in.p':      '来访加拿大亲友 · Super Visa · 新移民登陆',
    'tile.student.h': '留学生保险',
    'tile.student.p': '为持学签在加拿大就读的国际留学生，以及符合条件的陪读家长，提供全面医疗保障',
    'tile.gif.h':     '保本基金投资',
    'tile.gif.p':     '参与市场增长，同时享有本金保障与财富传承优势',
    'invest.section.title': '投资账户选择',
    'tile.invest.h':  '投资账户选择',
    'tile.invest.p':  'TFSA · RRSP · FHSA · RESP · 非注册 · 贷款投资',
    'invest.intro':   '选择合适的账户，是税务规划与财富积累的第一步。以下六种账户各有优势，可根据您的目标灵活组合。',
    'invest.tfsa.name': '免税储蓄计划',
    'invest.tfsa.l1': '投资增长与取款均 <strong>免税</strong>',
    'invest.tfsa.l2': '2026年累计供款上限为 $109,500',
    'invest.tfsa.l3': '适合18岁以上加拿大税务居民',
    'invest.tfsa.l4': '取款后额度次年恢复，灵活支配',
    'invest.tfsa.l5': '⚠️ 取款后当年不能存回，否则有罚款',
    'invest.rrsp.name': '注册退休储蓄计划',
    'invest.rrsp.l1': '供款当年 <strong>减税</strong>',
    'invest.rrsp.l2': '账户内免税增长，取款时 100% 算收入',
    'invest.rrsp.l3': '供款额度为上年收入的 18%（2026年上限 $33,810）',
    'invest.rrsp.l4': '71岁前须转入RRIF或购买年金',
    'invest.fhsa.name': '首次购房储蓄计划',
    'invest.fhsa.l1': '供款当年 <strong>减税</strong> + 购房取款 <strong>免税</strong>',
    'invest.fhsa.l2': '每年供款上限 $8,000，终身上限 $40,000',
    'invest.fhsa.l3': '仅限首次购房者开户',
    'invest.fhsa.l4': '可与 RRSP 首次购房计划（HBP）叠加使用',
    'invest.fhsa.l5': '账户最长持有年限 15 年',
    'invest.fhsa.l6': '如果一直没买房，可免税转入 RRSP',
    'invest.resp.name': '儿童教育储蓄计划',
    'invest.resp.l1': '政府补贴（CESG）：每年最高 <strong>$500</strong>，终身最高 $7,200',
    'invest.resp.l2': '账户内免税增长',
    'invest.resp.l3': '用于就读大学后提款，以子女较低税率计税',
    'invest.resp.l4': '低收入家庭另可申请额外补贴 CLB',
    'invest.open.acct': '非注册账户',
    'invest.open.name': 'Open Account 投资',
    'invest.open.desc': '通过专业基金经理管理，投资于加拿大、美国及环球优质资本市场，涵盖大型蓝筹股、成长型企业、固定收益及多元资产类别，在享有本金保障和财富传承优势的同时，通过加拿大、美国及环球市场的多元配置，把握全球投资机会，实现长期稳健增值。',
    'invest.loan.acct': '贷款投资',
    'invest.loan.name': 'Investment Loan',
    'invest.loan.l1': '以借贷资金扩大投资规模，放大长期回报',
    'invest.loan.l2': '贷款利息用于投资时可 <strong>税前扣除</strong>',
    'invest.loan.l3': '适合有稳定收入、风险承受能力较高的投资者',
    'invest.loan.l4': '需配合专业规划，控制下行风险',
    'form.int.l':     '感兴趣的账户类型',
    'gif.desc':           '保本基金（Segregated Fund）是由保险公司发行的投资产品，兼具基金增长潜力和本金保障功能。投资方式与互惠基金（Mutual Fund）类似，但额外增加了保险合同的保障特点。适合希望兼顾增长与保障的投资者，企业主及专业人士，重视遗产规划和财富传承的家庭。',
    'gif.compare.title':  '保本基金与互惠基金的区别',
    'gif.col.item':       '项目', 'gif.col.gif': '保本基金', 'gif.col.mf': '互惠基金',
    'gif.row1':  '专业投资管理', 'gif.row2': '市场增长潜力', 'gif.row3': '本金保障',
    'gif.row4':  '身故保障',     'gif.row5': '指定受益人',   'gif.row6': '遗产认证豁免',
    'gif.row7':  '债权人保护',   'gif.row7.gif': '可能适用',
    'gif.row8':  '管理费用',     'gif.row8.gif': '较高',      'gif.row8.mf': '较低',
    'gif.benefits.title': '保本基金的主要优势',
    'gif.f1':     '✅ 市场增长机会',
    'gif.f1.p':   '资金投资于股票、债券及专业管理的基金组合，在享有保障的同时，仍有机会分享资本市场长期增长。',
    'gif.f2':     '✅ 本金保障',
    'gif.f2.p':   '通常提供 75% 或 100% 的到期保障及身故保障。即使市场下跌，到期或身故时仍可获得约定的保障金额（扣除已提款部分）。',
    'gif.f3':     '✅ 指定受益人',
    'gif.f3.p':   '可直接指定受益人。身故后资产可直接转给受益人，通常无需经过遗产认证（Probate），提高资金传承效率。',
    'gif.f4':     '✅ 债权人保护',
    'gif.f4.p':   '对企业主、专业人士及自雇人士尤其有价值。在符合条件的情况下，资产有机会获得债权人保护。',
    'gif.f5':     '✅ 锁定收益（Reset）',
    'gif.f5.p':   '当市场上涨时，可将增长后的价值锁定，提高未来保障金额。',
    'gif.who.title': '适合哪些人？',
    'gif.who1':   '✅ 临近退休人士',
    'gif.who2':   '✅ 希望降低投资风险的人士',
    'gif.who3':   '✅ 企业主及专业人士',
    'gif.who4':   '✅ 重视遗产规划和财富传承的家庭',
    'gif.who5':   '✅ 希望兼顾增长与保障的投资者',
    'gif.cta.note':   '保本基金需根据您的投资目标及风险承受能力量身规划，请联系顾问了解详情。',
    'tile.life.h':    '寿险 & 重疾险',
    'tile.life.p':    '定期寿险、分红保险、万能寿险及重大疾病险，保障家庭财务未来',
    'tile.cta':       '立即报价 →',
    'tile.life.cta':  '咨询顾问 →',
    'tugo.widget.quote': '立即在线报价 / Get a Quote',
    'cta.note':       '由 TuGo Travel Insurance 提供 · 在线购买后，保单即时发送至您的邮箱',
    'travel.in.f6':   '✅ Super Visa 保额可达 $100,000+',
    // life card details
    'life.term.desc': '若投保人在指定期限内（10年、20年等）身故，受益人获得免税赔偿金。',
    'life.term.l1':   '✅ 保费低，保额大',
    'life.term.l2':   '✅ 投保年龄 18–85 岁，最高保障至 85 岁',
    'life.term.l3':   '✅ 可在一定年限内免体检转换为终身保险',
    'life.term.l4':   'ℹ️ 不适合做遗产规划工具',
    'life.par.desc':  '集终身保障、免税退休金和财富传承于一体，是家庭资产配置中的重要防御性资产。',
    'life.par.l1':    '✅ 免税复利稳健积累财富',
    'life.par.l2':    '✅ 隔离债权人追讨',
    'life.par.l3':    '✅ 免遗产认证，直接传承受益人',
    'life.par.l4':    '✅ 可做退休金补充',
    'life.par.l5':    '✅ 可抵押银行贷款',
    'life.par.l6':    '✅ 遗产规划的重要工具',
    'life.ul.desc':   '终身保险 + 投资账户，灵活调整。可在一定额度内选购保单内置的基金投资，获得长期免税增长，也可以只买保险不投资。',
    'life.ul.l1':     '✅ 终身寿险保障',
    'life.ul.l2':     '✅ 保单内置基金，免税长期增长',
    'life.ul.l3':     '✅ 灵活选择：投资或纯保障均可',
    'life.ul.l4':     '✅ 遗产规划的重要工具',
    'life.ci.desc':   '早期赔付 + 全额赔付，为健康筑起财务防线。为癌症、中风、心脏病、心脏搭桥等 25+ 种重大疾病提供财务保障，一旦确诊即可获得免税理赔金。',
    'life.ci.l1':     '✅ 理赔金一次性免税发放，资金用途不受限制',
    'life.ci.l2':     '✅ Best Doctors® 最佳医生服务，免费提供第二医学意见',
    'life.ci.l3':     '✅ 专业医疗资源支持，帮助患者提高治愈率',
    'life.ci.l4':     '✅ 可选有条件退还保费条款（ROP）',
    // parent conditions
    'pp.intro':       '留学生父母来加拿大陪读，可以作为 <strong>Family Member（家庭成员）</strong>购买 TuGo 留学生保险，享受优惠价格。需满足以下条件：',
    'pp.c1.t':        '留学生本人须符合 TuGo 国际学生保险资格',
    'pp.c1.p':        '在加拿大全职或兼职就读，已投保或符合投保 TuGo 留学生保险资格',
    'pp.c2.t':        '属于留学生的直系家庭成员',
    'pp.c2.p':        '父母可作为家庭成员投保',
    'pp.c3.t':        '与留学生在加拿大共同居住',
    'pp.c3.p':        '须与留学生居住在同一地址、保障期间相同。如仅为短期探望，建议购买入境访客保险',
    'pp.c4.t':        '年龄须在 15天 至 59岁 之间',
    'pp.c4.p':        '60岁及以上的家长，建议购买入境访客保险',
    'pp.c5.t':        '满足基本健康要求',
    'pp.c5.p':        '不能在医生建议不宜旅行的情况下入境；未被诊断为绝症；未接受或被建议接受姑息治疗',
    // inbound faq
    'inbound.faq.q4': '访客提前回国，保费能退吗？',
    'inbound.faq.a4': '可以申请退费。如果保障期间内没有发生任何理赔，提供回国登机牌，即可申请退还未使用天数对应的保费，扣除 $25 手续费。',
    // form
    'form.int.par':   '分红保险',
    'form.int.ul':    '万能寿险',

    'life.cta.note':  '寿险及重疾险需根据您的健康状况及财务目标量身定制，请联系顾问获取专业方案。',
    'life.cta.btn':   '联系顾问，获取方案',

    // placeholders
    'ph.name':  '您的姓名',
    'ph.phone': '例：647-xxx-xxxx',
    'ph.email': 'your@email.com',
    'ph.msg':   '您的问题或需求...',
  },

  en: {
    'nav.travel':  'Travel Insurance',
    'nav.student': 'Student Insurance',
    'nav.life':    'Life & CI',
    'nav.gif':     'GIF / Seg Funds',
    'nav.contact': 'Contact Us',

    'hero.tag':  'Licensed in Ontario & British Columbia | 安省 & BC省持牌顾问',
    'hero.h1':   'Travel with Confidence',
    'hero.sub':  'Whether you\'re travelling abroad, supporting a student, or planning your family\'s future — we\'ve got you covered.',
    'hero.btn1': 'Get a Travel Quote',
    'hero.btn2': 'Student & Accompanying Parents Insurance',

    'compliance': '<strong>Service Area:</strong> GWY Financial Inc holds insurance licences in Ontario and British Columbia only. Services are available exclusively to residents of these two provinces. <em>仅服务安省及BC省居民。</em>',

    'travel.h2':  '🌏 Travel Insurance',
    'travel.sub': 'Get an instant quote and purchase online through our advisor link. Your e-policy is sent directly to your inbox.',

    'travel.tab.out':     '✈️ Outbound Travel',
    'travel.tab.out.sub': 'Leaving Canada',
    'travel.tab.in':      '🍁 Visitors to Canada',
    'travel.tab.in.sub':  'Family & friends visiting',

    'travel.out.h3':  'Outbound Travel Insurance',
    'travel.out.p':   'For Ontario and BC residents travelling outside Canada. Covers emergency medical, trip cancellation/interruption, baggage loss, and more.',
    'travel.out.f1':  '✅ Emergency medical & hospitalization',
    'travel.out.f2':  '✅ Trip cancellation / interruption',
    'travel.out.f3':  '✅ Baggage & personal effects',
    'travel.out.f4':  '✅ 24/7 emergency assistance',
    'travel.out.f5':  '✅ E-policy delivered instantly to inbox',

    'travel.in.h3':   'Visitors to Canada Insurance',
    'travel.in.p':    'For family, friends, or business visitors coming to Canada, and for new immigrants waiting for provincial health coverage.',
    'travel.in.f1':   '✅ Emergency medical & hospitalization',
    'travel.in.f2':   '✅ Coverage during OHIP/MSP waiting period',
    'travel.in.f3':   '✅ Flexible daily coverage options',
    'travel.in.f4':   '✅ 24/7 bilingual emergency assistance',
    'travel.in.f5':   '✅ E-policy delivered instantly to inbox',

    'tugo.widget.title': '🔗 Online Quote & Purchase (Powered by Tugo Travel Insurance)',
    'tugo.widget.note':  'Advisor link coming soon — you\'ll be able to get quotes and purchase directly here',
    'tugo.widget.btn':   'Contact advisor for a quote',

    'claims.h3':     '📋 How to File a Claim',
    'claims.s1.t':   'Seek Medical Attention First',
    'claims.s1.p':   'In a medical emergency, seek care immediately and contact the Tugo 24/7 assistance line as soon as possible.',
    'claims.s2.t':   'Contact Tugo Assistance',
    'claims.s2.p':   'North America toll-free: <strong>1-800-387-4357</strong> &nbsp;|&nbsp; International: <strong>+1-416-340-0049</strong>',
    'claims.s3.t':   'Submit Your Claim',
    'claims.s3.p':   'Visit <a href="https://www.tugo.com/claims" target="_blank" rel="noopener">tugo.com/claims</a> and submit your documents: policy number, medical receipts, physician\'s report, etc.',
    'claims.s4.t':   'Review & Payment',
    'claims.s4.p':   'The Tugo claims team will review your documents, confirm the settlement amount, and arrange payment.',

    'faq.h3':  '❓ Frequently Asked Questions',
    'faq.q1':  'Which countries are covered?',
    'faq.a1':  'Tugo travel insurance covers most countries worldwide. Some destinations under travel advisories may be excluded. Please confirm your destination is covered before purchasing.',
    'faq.q2':  'Can I get coverage with a pre-existing condition?',
    'faq.a2':  'Yes. Coverage for pre-existing conditions depends on the plan selected and the stability period requirement. Please disclose your health status accurately — your advisor can help find the right plan.',
    'faq.q3':  'Can I change my travel dates after purchase?',
    'faq.a3':  'Yes, you can modify your coverage dates before departure. Contact Tugo customer service or your advisor to make changes.',
    'faq.q4':  'How will I receive my policy documents?',
    'faq.a4':  'Your e-policy will be sent to the email address you provided immediately after purchase. Please check your spam folder if you don\'t see it in your inbox.',
    'faq.q5':  'I live outside Ontario or BC. Can I purchase?',
    'faq.a5':  'Due to licensing restrictions, we can only serve residents of Ontario and British Columbia. We are unable to sell to residents of other provinces.',

    'inbound.faq.q1': 'What are the Super Visa insurance requirements?',
    'inbound.faq.a1': 'IRCC requires Super Visa applicants to have: ① Coverage from a Canadian insurance company; ② Minimum $100,000 coverage; ③ Valid for at least one year; ④ Covers health care, hospitalization, and repatriation.',
    'inbound.faq.q2': 'Can I get a refund on Super Visa insurance?',
    'inbound.faq.a2': 'If the visa application is denied, a full refund is available with proof of refusal. Refund policies after coverage begins vary — please contact your advisor for details.',
    'inbound.faq.q3': 'Is the policy valid when parents travel back home?',
    'inbound.faq.a3': 'Most visitor policies cover you while in Canada only. If you need coverage for travel in and out of Canada, please let your advisor know so they can select an appropriate plan.',

    'tugo.contact.h3': '📞 Tugo Contact Information',
    'tugo.c1.label':   'Customer Service',
    'tugo.c1.val':     '1-800-387-4357 (North America toll-free)',
    'tugo.c2.label':   'International Emergency',
    'tugo.c2.val':     '+1-416-340-0049',
    'tugo.c3.label':   'Claims Email',
    'tugo.c4.label':   'Website',

    'student.h2':  '🎓 International Student & Accompanying Parents Insurance',
    'student.sub': 'Comprehensive health coverage for international students and accompanying parents in Canada',

    'student.tab.s':     '👩‍🎓 Student Insurance',
    'student.tab.p':     '👨‍👩‍👧 Accompanying Parent',

    'student.s.h3':  'International Student Health Insurance',
    'student.s.p':   'Designed for international students studying in Canada on a student visa, providing full coverage during provincial health insurance waiting periods.',
    'student.s.f1':  '✅ Outpatient & emergency hospitalization',
    'student.s.f2':  '✅ Prescription drug coverage',
    'student.s.f3':  '✅ Emergency dental',
    'student.s.f4':  '✅ Vision care',
    'student.s.f5':  '✅ Mental health counselling',
    'student.s.f6':  '✅ Emergency medical evacuation & repatriation',

    'student.p.h3':  'Super Visa / Visitor Insurance',
    'student.p.p':   'Meets IRCC requirements for the Super Visa: minimum $100,000 coverage, valid for at least one year, renewable.',
    'student.p.f1':  '✅ Meets Super Visa minimum ($100,000 coverage)',
    'student.p.f2':  '✅ Emergency hospitalization & surgery',
    'student.p.f3':  '✅ Ambulance & emergency medical transport',
    'student.p.f4':  '✅ 24/7 assistance services',
    'student.p.f5':  '✅ Pre-existing condition stability options available',
    'student.p.f6':  '✅ E-policy delivered instantly to inbox',

    'student.claims.s1.t': 'Present Your Insurance Card',
    'student.claims.s1.p': 'Show your Tugo insurance card and policy number when seeking care. Some providers can bill Tugo directly.',
    'student.claims.s2.t': 'Keep All Receipts & Documents',
    'student.claims.s2.p': 'Retain all original receipts, prescriptions, and diagnosis reports.',
    'student.claims.s3.t': 'Submit Claim Online',
    'student.claims.s3.p': 'Visit <a href="https://www.tugo.com/claims" target="_blank" rel="noopener">tugo.com/claims</a> to submit your claim and supporting documents.',
    'student.claims.s4.t': 'Await Payment',
    'student.claims.s4.p': 'The Tugo claims team will process your request upon receiving complete documentation.',

    'sfaq.q1':  'Do international students need additional health insurance?',
    'sfaq.a1':  'International students in Ontario and BC typically wait before becoming eligible for provincial health insurance (OHIP/MSP). Private health insurance is essential during this period. Some schools offer group plans, but coverage may be limited.',
    'sfaq.q2':  'What are the Super Visa insurance requirements?',
    'sfaq.a2':  'IRCC requires Super Visa applicants to have: ① Coverage from a Canadian insurance company; ② Minimum $100,000 coverage; ③ Valid for at least one year; ④ Covers health care, hospitalization, and repatriation.',
    'sfaq.q3':  'Is the policy valid when the parent travels back home?',
    'sfaq.a3':  'Most visitor policies cover you while in Canada only. If you need coverage for travel in and out of Canada, please let your advisor know so they can select an appropriate plan.',
    'sfaq.q4':  'Can I cancel the policy and get a refund?',
    'sfaq.a4':  'A full refund is available before the coverage start date. Refund policies after coverage begins vary — please contact your advisor for details.',

    'life.h2':  '🛡️ Life Insurance & Critical Illness',
    'life.sub': 'Partnering with top-rated insurers to build a long-term financial safety net for individuals, families, and business owners.',

    'life.term.h3':  'Term Insurance',
    'life.term.p':   'Provides a tax-free death benefit to your beneficiaries if you pass away within a specified term (10, 20, or 30 years).',
    'life.term.f1':  '✅ Low premiums, high coverage amount',
    'life.term.f2':  '✅ Issue ages 18–85, coverage up to age 85',
    'life.term.f3':  '✅ Convertible to whole life or longer-term coverage without medical exam within a set period',
    'life.term.f4':  'ℹ️ Not suitable as an estate planning tool',

    'life.par.h3': 'Participating Whole Life Insurance',
    'life.par.p':  'An all-in-one solution combining lifetime protection, tax-advantaged retirement income, and wealth transfer.',
    'life.par.f1': '✅ Lifetime protection',
    'life.par.f2': '✅ Steady tax-free compound growth of cash value',
    'life.par.f3': '✅ Effective tool for tax planning & estate transfer',
    'life.par.f4': '✅ Flexible cash value access: withdraw, dividend cash out, policy loan, or bank collateral loan',
    'life.ul.h3':  'Universal Life Insurance',
    'life.ul.p':   'Lifetime insurance + investment account, with the flexibility to adjust as your needs change.',
    'life.ul.f1':  '✅ Lifetime protection',
    'life.ul.f2':  '✅ Tax-free investment account growth',
    'life.ul.f3':  '✅ Invest freely in the policy\'s built-in funds',
    'life.ul.f4':  '✅ Effective tool for tax planning & estate transfer',

    'life.ci.h3':    'Critical Illness Insurance',
    'life.ci.p':     'Early-stage payout + full benefit payout — building a financial safety net for your health.',
    'life.ci.f1':    '✅ Covers 25+ conditions including cancer, heart attack, stroke',
    'life.ci.f2':    '✅ Tax-free lump-sum payment',
    'life.ci.f3':    '✅ Complimentary Best Doctors® consultation service for better treatment outcomes',
    'life.ci.f4':    '✅ Return of premium (ROP) option available on some plans',

    'cases.h3':      '💡 Real Client Stories',
    'case1.tag':     'Term',
    'case1.body':    '<strong>Michael, 35, father of two</strong><br/>After buying a home with an $800K mortgage, Michael took out a $1,000,000, 10-year term policy at just $40/month. Maximum protection for his family at minimum cost — with a plan to convert to permanent life insurance when finances allow.',
    'case2.tag':     'Critical Illness',
    'case2.body':    '<strong>Henry, 45, IT Contractor</strong><br/>Five years ago Linda purchased a $250,000 critical illness policy. This year she was diagnosed with Stage 2–3 stomach cancer and received a tax-free lump-sum cheque for $250,000. She was able to step back from her business, focus on treatment, and cover living expenses — without touching her savings.',
    'case3.tag':     'Whole Life + Estate Planning',
    'case3.body':    '<strong>David, 50, high-net-worth client</strong><br/>David incorporated a whole life policy into his estate plan. The tax-free death benefit passes directly to named beneficiaries, bypassing probate fees and the lengthy probate process, enabling efficient intergenerational wealth transfer.',
    'case4.tag':     'Participating Life + IFA Solution',
    'case4.body':    '<strong>Mr. Yu, 52, business owner</strong><br/>As his business grew, Mr. Yu established a holding company structure for tax-efficient investing, liability protection, and wealth transfer. He purchased a large participating whole life policy under the holding company, then used it as collateral with the bank to recover the premiums for reinvestment — with the loan interest tax-deductible. One dollar, three uses. Down the road, the policy will also generate significant CDA Credits, enabling maximum tax-efficient distribution from the corporation.',

    'form.h3':       '📩 Request a Consultation',
    'form.note':     'Our advisor will reach out with a personalized recommendation — no cost, no obligation.',
    'form.name.l':   'Full Name',
    'form.phone.l':  'Phone',
    'form.email.l':  'Email',
    'form.prov.l':   'Province',
    'form.prov.ph':  'Please select',
    'form.prov.on':  'Ontario',
    'form.prov.bc':  'British Columbia',
    'form.int.l':    'Products of Interest',
    'form.int.1':    'Term',
    'form.int.2':    'Whole / Universal Life',
    'form.int.3':    'Critical Illness',
    'form.int.4':    'Other',
    'form.msg.l':    'Message (optional)',
    'form.consent':  'I consent to GWY Financial Inc\'s advisor contacting me by phone or email for insurance consultation.',
    'form.submit':   'Submit Inquiry',
    'form.success':  '✅ Thank you! Our advisor will be in touch within 1 business day.',
    'form.error':    '❌ Submission failed. Please try again or email us directly at',

    'footer.disclaimer': 'Important Notice: This website provides insurance services to residents of Ontario and British Columbia only.',
    'footer.adv.h3': 'Contact Us',
    'footer.adv.p':  'We are committed to providing you with the best coverage solutions with professionalism and integrity.',
    'footer.wechat': 'WeChat 微信',
    'footer.qr.ph':  'WeChat QR Code',
    'footer.qr.tip': 'Name your WeChat QR image wechat-qr.png and place it in the site root directory',
    'footer.ct.h4':  'Contact',
    'footer.nav.h4': 'Quick Links',
    'footer.lic.h4': 'Licensing',
    'footer.lic.on': 'Licensed in Ontario<br/><em>持有安大略省保险执照</em>',
    'footer.lic.bc': 'Licensed in British Columbia<br/><em>持有不列颠哥伦比亚省保险执照</em>',
    'footer.legal':  'Content is for informational purposes only and does not form part of any insurance contract. Coverage terms and conditions are as stated in the policy document. Travel insurance products are underwritten by TuGo® Travel Insurance. GWY Financial Inc is an authorized advisor.',
    'footer.copy':   '© 2024 GWY Financial Inc. All rights reserved.',

    // nav (EN)
    'nav.outbound':      'Outbound Travel Insurance',
    'nav.inbound':       'Visitors to Canada / Super Visa',
    'modal.inbound.title': 'Visitors to Canada Insurance',

    // product tiles (EN)
    'products.h2':    'Our Insurance Services',
    'products.sub':   'Click a card to learn more and get an instant quote',
    'tile.out.h':     'Outbound Travel Insurance',
    'tile.out.p':     'Emergency medical, trip cancellation & baggage coverage when leaving Canada',
    'tile.in.h':      'Visitors to Canada / Super Visa',
    'tile.in.p':      'Visiting family & friends · Super Visa · New immigrants landing',
    'tile.student.h': 'International Student Insurance',
    'tile.student.p': 'Comprehensive health coverage for international students and qualifying accompanying parents in Canada',
    'tile.gif.h':     'Segregated Funds',
    'tile.gif.p':     'Participate in market growth with principal protection and estate planning benefits',
    'invest.section.title': 'Investment Account Options',
    'tile.invest.h':  'Investment Accounts',
    'tile.invest.p':  'TFSA · RRSP · FHSA · RESP · Open Account · Investment Loan',
    'invest.intro':   'Choosing the right account is the foundation of tax planning and wealth building. Each of the six account types below has unique advantages — combine them to match your goals.',
    'invest.tfsa.name': 'Tax-Free Savings Account',
    'invest.tfsa.l1': 'Growth and withdrawals are completely <strong>tax-free</strong>',
    'invest.tfsa.l2': 'Cumulative contribution room is $109,500 as of 2026',
    'invest.tfsa.l3': 'Available to Canadian residents age 18+',
    'invest.tfsa.l4': 'Withdrawn room is restored the following calendar year',
    'invest.tfsa.l5': '⚠️ Re-contributing in the same year as a withdrawal triggers an over-contribution penalty',
    'invest.rrsp.name': 'Registered Retirement Savings Plan',
    'invest.rrsp.l1': 'Contributions reduce tax in the year made',
    'invest.rrsp.l2': 'Tax-deferred growth; withdrawals are 100% taxable as income',
    'invest.rrsp.l3': '18% of prior year earned income (2026 limit: $33,810)',
    'invest.rrsp.l4': 'Must convert to RRIF or annuity by age 71',
    'invest.fhsa.name': 'First Home Savings Account',
    'invest.fhsa.l1': 'Contributions reduce tax in the year made + qualifying withdrawals are <strong>tax-free</strong>',
    'invest.fhsa.l2': 'Annual limit $8,000; lifetime limit $40,000',
    'invest.fhsa.l3': 'Only available to first-time home buyers',
    'invest.fhsa.l4': 'Can be combined with the RRSP Home Buyers\' Plan (HBP)',
    'invest.fhsa.l5': 'Maximum account lifetime: 15 years',
    'invest.fhsa.l6': 'If you never buy a home, funds can be transferred to RRSP tax-free',
    'invest.resp.name': 'Registered Education Savings Plan',
    'invest.resp.l1': 'Government grant (CESG): up to <strong>$500/yr</strong>, lifetime max $7,200',
    'invest.resp.l2': 'Tax-deferred growth inside the account',
    'invest.resp.l3': 'Withdrawals when enrolled in post-secondary, taxed at the student\'s lower rate',
    'invest.resp.l4': 'Low-income families may qualify for additional Canada Learning Bond (CLB)',
    'invest.open.acct': 'Non-Registered Account',
    'invest.open.name': 'Open Account',
    'invest.open.desc': 'Managed by professional fund managers, investing across Canadian, U.S. and global capital markets — including blue-chip equities, growth companies, fixed income and diversified asset classes. With the added benefits of principal protection and estate planning advantages, clients can access diversified global opportunities while pursuing long-term, stable growth.',
    'invest.loan.acct': 'Investment Loan',
    'invest.loan.name': 'Leveraged Investing',
    'invest.loan.l1': 'Borrow to invest and amplify long-term returns',
    'invest.loan.l2': 'Interest on money borrowed to earn income is <strong>tax-deductible</strong>',
    'invest.loan.l3': 'Best suited for investors with stable income and higher risk tolerance',
    'invest.loan.l4': 'Requires careful planning to manage downside risk',
    'form.int.l':     'Account type of interest',
    'gif.desc':           'Segregated Fund is an insurance-based investment product combining the growth potential of mutual funds with the protection of an insurance contract. Ideal for investors seeking both growth and protection, business owners and professionals, and families focused on estate planning and wealth transfer.',
    'gif.compare.title':  'Segregated Funds vs. Mutual Funds',
    'gif.col.item':       'Feature', 'gif.col.gif': 'Seg Fund', 'gif.col.mf': 'Mutual Fund',
    'gif.row1':  'Professional investment management', 'gif.row2': 'Market growth potential', 'gif.row3': 'Principal guarantee',
    'gif.row4':  'Death benefit',                      'gif.row5': 'Named beneficiary',       'gif.row6': 'Probate bypass',
    'gif.row7':  'Creditor protection',                'gif.row7.gif': 'May apply',
    'gif.row8':  'Management fees',                    'gif.row8.gif': 'Higher',               'gif.row8.mf': 'Lower',
    'gif.benefits.title': 'Key Advantages',
    'gif.f1':     '✅ Market Growth Opportunity',
    'gif.f1.p':   'Invested in stocks, bonds, and professionally managed fund portfolios — with the opportunity to participate in long-term capital market growth while remaining protected.',
    'gif.f2':     '✅ Principal Guarantee',
    'gif.f2.p':   'Typically guarantees 75% or 100% of your principal at maturity or upon death. Even if markets fall, you receive the guaranteed amount (net of withdrawals).',
    'gif.f3':     '✅ Named Beneficiary',
    'gif.f3.p':   'You can designate a beneficiary directly. Upon death, assets pass directly to the beneficiary — typically bypassing probate for faster, more private wealth transfer.',
    'gif.f4':     '✅ Creditor Protection',
    'gif.f4.p':   'Especially valuable for business owners, professionals, and the self-employed. Under qualifying conditions, assets may be protected from creditors.',
    'gif.f5':     '✅ Reset Feature',
    'gif.f5.p':   'When markets rise, you can lock in the increased value as your new guaranteed amount, raising your future protection floor.',
    'gif.who.title': 'Who Is It For?',
    'gif.who1':   '✅ Those approaching retirement',
    'gif.who2':   '✅ Investors seeking to reduce market risk',
    'gif.who3':   '✅ Business owners and professionals',
    'gif.who4':   '✅ Families focused on estate planning and wealth transfer',
    'gif.who5':   '✅ Investors who want both growth and protection',
    'gif.cta.note':   'Guaranteed Investment Funds should be tailored to your investment goals and risk tolerance. Contact our advisor to learn more.',
    'tile.life.h':    'Life & Critical Illness',
    'tile.life.p':    'Term, whole life, universal life & critical illness insurance for your family\'s future',
    'tile.cta':       'Get a Quote →',
    'tile.life.cta':  'Talk to Advisor →',
    'tugo.widget.quote': 'Get an Online Quote / 立即报价',
    'cta.note':       'Powered by TuGo Travel Insurance · E-policy delivered instantly to inbox',
    'travel.in.f6':   '✅ Super Visa coverage up to $100,000+',
    // life card details (EN)
    'life.term.desc': 'If the insured passes away within the specified term (10, 20 years, etc.), beneficiaries receive a tax-free death benefit.',
    'life.term.l1':   '✅ Low premiums, high coverage',
    'life.term.l2':   '✅ Issue ages 18–85, coverage up to age 85',
    'life.term.l3':   '✅ Convertible to permanent insurance without a medical exam within a set period',
    'life.term.l4':   'ℹ️ Not suitable as an estate planning tool',
    'life.par.desc':  'An all-in-one solution combining lifetime protection, tax-free retirement income, and wealth transfer — a key defensive asset in family financial planning.',
    'life.par.l1':    '✅ Tax-free compound growth of cash value',
    'life.par.l2':    '✅ Protection from creditors',
    'life.par.l3':    '✅ Bypass probate — passes directly to beneficiaries',
    'life.par.l4':    '✅ Supplement retirement income',
    'life.par.l5':    '✅ Use as collateral for bank financing',
    'life.par.l6':    '✅ A key tool for estate planning',
    'life.ul.desc':   'Lifetime insurance + investment account with flexible adjustments. Invest in built-in policy funds up to a set limit for long-term tax-free growth, or keep it as pure insurance.',
    'life.ul.l1':     '✅ Lifetime insurance protection',
    'life.ul.l2':     '✅ Built-in investment funds with tax-free growth',
    'life.ul.l3':     '✅ Flexible choice: invest or pure protection',
    'life.ul.l4':     '✅ A key tool for estate planning',
    'life.ci.desc':   'Early-stage payout + full benefit payout — building a financial safety net for your health. Covers cancer, stroke, heart attack, bypass surgery, and 25+ critical conditions.',
    'life.ci.l1':     '✅ Tax-free lump-sum payment with no restrictions on use',
    'life.ci.l2':     '✅ Best Doctors® service — free second medical opinion',
    'life.ci.l3':     '✅ Access to specialist resources to improve treatment outcomes',
    'life.ci.l4':     '✅ Return of premium (ROP) option available',
    // parent conditions (EN)
    'pp.intro':       'Parents accompanying their child to Canada may purchase TuGo insurance as a <strong>Family Member</strong> at student rates. The following conditions must be met:',
    'pp.c1.t':        'The student must qualify for TuGo International Student Insurance',
    'pp.c1.p':        'Enrolled full-time or part-time in Canada, and currently insured or eligible for TuGo student insurance',
    'pp.c2.t':        'Must be an immediate family member of the student',
    'pp.c2.p':        'Parents qualify as family members',
    'pp.c3.t':        'Must reside with the student in Canada',
    'pp.c3.p':        'Must share the same address and coverage period. If visiting only temporarily, Visitors to Canada Insurance is recommended',
    'pp.c4.t':        'Age must be between 15 days and 59 years old',
    'pp.c4.p':        'Parents aged 60 or above should purchase Visitors to Canada Insurance instead',
    'pp.c5.t':        'Must meet basic health requirements',
    'pp.c5.p':        'Must not be travelling against physician\'s advice; must not have been diagnosed with a terminal illness; must not be receiving or have been advised to receive palliative care',
    // inbound faq (EN)
    'inbound.faq.q4': 'Can I get a refund if the visitor returns home early?',
    'inbound.faq.a4': 'Yes. If no claims have been made during the coverage period, you may apply for a refund of the unused days by providing the return boarding pass. A $25 processing fee applies.',
    // form (EN)
    'form.int.par':   'Participating Whole Life',
    'form.int.ul':    'Universal Life',

    'life.cta.note':  'Life & critical illness insurance requires a personalized assessment. Contact our advisor for a tailored recommendation.',
    'life.cta.btn':   'Contact Advisor for a Quote',

    'ph.name':  'Your name',
    'ph.phone': 'e.g. 647-xxx-xxxx',
    'ph.email': 'your@email.com',
    'ph.msg':   'Your question or requirements...',
  }
};

// ─── Language engine ─────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'zh';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const t = T[lang];

  // text content / innerHTML
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // placeholder attributes
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // toggle button state
  document.getElementById('btn-zh').classList.toggle('active', lang === 'zh');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');

  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

// ─── Tab switcher (legacy) ────────────────────────────────────────────────
function switchTab(section, panelId, btn) {
  document.querySelectorAll('#' + section + ' .tab-panel').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('#' + section + ' .tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(section + '-' + panelId).classList.remove('hidden');
  btn.classList.add('active');
}

// ─── Modal system ─────────────────────────────────────────────────
function openModal(id) {
  document.getElementById('modalOverlay').classList.add('active');
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// setTab('travel', 'out')  →  shows #travel-out, activates #tab-travel-out
function setTab(group, tab) {
  const modal = document.querySelector('.modal.active') || document;
  modal.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
  modal.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById(group + '-' + tab);
  const btn   = document.getElementById('tab-' + group + '-' + tab);
  if (panel) panel.classList.remove('hidden');
  if (btn)   btn.classList.add('active');
}

// Close modal on Escape key
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ─── Mobile nav ──────────────────────────────────────────────────
function toggleNav() {
  document.getElementById('mainNav').classList.toggle('open');
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.main-nav a').forEach(a =>
    a.addEventListener('click', () => document.getElementById('mainNav').classList.remove('open'))
  );
  setLang(currentLang);
});

// ─── Contact form ─────────────────────────────────────────────────
async function submitForm(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('[type="submit"]');
  const successEl = form.querySelector('.form-success') || form.parentElement.querySelector('.form-success');
  const errorEl   = form.querySelector('.form-error')   || form.parentElement.querySelector('.form-error');
  btn.disabled = true;
  btn.textContent = currentLang === 'zh' ? '提交中…' : 'Sending…';

  try {
    const res = await fetch('https://formspree.io/f/mykawrew', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    });
    if (res.ok) {
      if (successEl) successEl.classList.remove('hidden');
      if (errorEl)   errorEl.classList.add('hidden');
      form.reset();
    } else {
      throw new Error('failed');
    }
  } catch {
    if (errorEl)   errorEl.classList.remove('hidden');
    if (successEl) successEl.classList.add('hidden');
  } finally {
    btn.disabled = false;
    btn.textContent = T[currentLang]['form.submit'] || '提交咨询请求';
  }
}

// ─── Scroll nav highlight ─────────────────────────────────────────
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section[id]').forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  document.querySelectorAll('.main-nav a').forEach(a => {
    const active = a.getAttribute('href') === '#' + current;
    a.style.background = active ? 'rgba(255,255,255,0.15)' : '';
    a.style.color      = active ? '#fff'                   : '';
  });
}, { passive: true });
