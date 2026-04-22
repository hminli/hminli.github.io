const SITE_DATA = {

  // ============================================================
  // 基本信息 — 修改这里更新导航栏、主页标题、联系方式
  // ============================================================
  info: {
    name_en:        "Haomin LI",
    name_zh:        "李浩民",
    position:       "Ph.D. Student",
    department:     "Department of Economics",
    university:     "Wuhan University",
    email:          "haominli.ec@gmail.com",
    cv_pdf:         "assets/cv.pdf",
    last_updated:   "April 2026",
  },

  // ============================================================
  // 主页简介 — 每个字符串是一段
  // ============================================================
  bio: [
    "Welcome! I am a Ph.D. student in Department of Economics at Wuhan University, China, and will expect to be on the job market in the 2026–2027 academic year. My research lies in environmental, labor, and development economics. Specifically, I currently investigate three topics: (i) water allocation along a river and its local responses (my Ph.D. dissertation), (ii) human capital accumulation, and (iii) growth in developing countries.",
  ],

  // ============================================================
  // 发表论文 Publications
  // url: 论文链接（没有则填 ""）
  // journal: 期刊名
  // details: 卷期年份等
  // coauthors: [ { name, url } ]，没有主页则 url: ""
  // ============================================================
  publications: [
    {
      title: "顾客至上：消费者在线投诉的基本面预测能力研究",
      url: "http://www.mwm.net.cn/web/xq?leafid=984&docid=5571",
      journal: "管理世界",
      details: "2024年第05期",
      coauthors: [
        { name: "蔡卫星", url: "https://finance.gdufe.edu.cn/2018/0711/c4361a102037/page.htm" },
        { name: "蒲雨琦", url: "" },
      ],
    },
  ],

  // ============================================================
  // Working Papers
  // status: 投稿状态，如 "Under Review" / "R&R at JDE"，没有则填 ""
  // ============================================================
  working_papers: [
     {
      title: "Beyond the Market: Experimenting with Water Allocation Policies in the Yellow River Basin",
      url: "",
      coauthors: [
        { name: "Shihe Fu",    url: "https://ems.whu.edu.cn/info/1680/215401.htm" },
        { name: "Zhi Luo",    url: "https://ems.whu.edu.cn/info/1680/10590.htm" },
        { name: "Guanhua Yi", url: "" },
        { name: "Shan Zheng", url: "http://jgxy.tju.edu.cn/info/1014/5126.htm" },
      ],
    },
    {
      title: "Internet Access and Schooling in China",
      url: "",
      status: "",
      coauthors: [
        { name: "Stephan Heblich", url: "https://sites.google.com/view/stephanheblich/about" },
        { name: "Qihui Li",        url: "" },
        { name: "Sichen Liu",      url: "" },
        { name: "Junhui Ma",       url: "" },
      ],
    },
    {
      title: "Warriors, Wells, and Wealth",
      url: "",
      status: "",
      coauthors: [
        { name: "Wentong Sun", url: "https://wentongsun.github.io/" },
        { name: "Runnan Wang", url: "https://sites.google.com/view/rnwang" },
      ],
    },
  ],

  // ============================================================
  // Works in Progress
  // ============================================================
  wip: [
    {
      title: "When Water Conservation Backfires: Resource Substitution, Agricultural Expansion, and Environmental Externalities",
      url: "",
      coauthors: [
        { name: "Zhi Luo",    url: "https://ems.whu.edu.cn/info/1680/10590.htm" },
      ],
    },
   {
      title: "Teacher Market Competition and the Development of Human Capital (sole-authored)",
      url: "",
      coauthors: [
      ],
    },
  ],
};
