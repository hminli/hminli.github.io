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
    "I am a Ph.D. student in Economics at Wuhan University, China, and will be on the job market in 2026–2027."+ 
    "My research lies in environmental economics, labor economics, and development economics."+ 
    "Specifically, I am interested in two different questions: (i) water allocation along a river and the local response to different types of allocation (my Ph.D. thesis),"+ 
    "and (ii) human capital accumulation in developing countries.",
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
      title: "Teacher Market Competition and the Development of Human Capital",
      url: "",
      status: "sole-authored",
      coauthors: [
      ],
    },
  ],

  // ============================================================
  // 教育经历 Education
  // ============================================================
  education: [
    { year: "2020 –",        degree: "Ph.D. in Economics",  school: "[University Name]" },
    { year: "2018 – 2020",   degree: "M.A. in Economics",   school: "[University Name]" },
    { year: "2014 – 2018",   degree: "B.A. in Economics",   school: "[University Name]" },
  ],

  // ============================================================
  // 研究领域
  // ============================================================
  fields: {
    primary:   "Environmental Economics, Labor Economics",
    secondary: "Development Economics",
  },

  // ============================================================
  // 会议和报告 Conferences
  // ============================================================
  conferences: [
    { year: "2024", name: "[Conference Name]", city: "[City]" },
    { year: "2023", name: "[Conference Name]", city: "[City]" },
  ],

  // ============================================================
  // 教学经历 Teaching
  // ============================================================
  teaching: [
    { year: "2023", role: "Teaching Assistant", course: "[Course Name]", school: "[University Name]" },
  ],

};
