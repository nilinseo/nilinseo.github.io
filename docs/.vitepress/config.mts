import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "夜七笔记",
  description: "我的Vitepress文档",
  //设置为中文，相当于html标签加lang="zh-CN"
  lang: "zh-CN",
  locales: {
    "/": {
      label: "简体中文",
      lang: "zh-CN",
    },
    base: '/',
    markdown: { 
      container: {
        tipLabel: '提示',
        warningLabel: '警告',
        dangerLabel: '危险',
        infoLabel: '信息',
        detailsLabel: '详细信息'
      },
      image: {
        // 开启图片懒加载
        lazyLoading: true
      },
    }
  },
  //主题配置
  themeConfig: {
    //头上角要主题切换的文字 Appearance
    darkModeSwitchLabel: "切换主题",
    // 文章翻页
    docFooter: {
      prev: "上一篇", //Next page
      next: "下一篇", //Previous page
    },
    //当前页面 On this page
    outlineTitle: "页面内容",

    // 返回顶部 Return to top
    returnToTopLabel: "返回顶部",
    // 菜单  Menu
    sidebarMenuLabel: "菜单",
    outlineTile:"文章目录",
    outline: [2,6],
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    // 导航栏设置 https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '整车安装教程', items: [
        {text: '碟刹款视频安装教程', link: '/guide/dieshakuan'},
        {text: '折叠款视频安装教程', link: '/guide/zhediekuan'},
        ]
      },
      { text: '配件安装与调试', items: [
        {text: '线碟刹调节教程', link: '/guide/xiandiesha'},
        {text: '大灯安装教程', link: '/guide/dadeng'},
        {text: '脚踏安装教程', link: '/guide/jiaota'},
        ]
      },
      { text: '关于', link: '/about' },
    ],
    // 侧边栏设置
    sidebar: [
      {
        text: '碟刹款安装教程',
        items: [
          { text: '视频安装教程', link: '/guide/anzhuang' },
        ]
      },
      {
        text: '其他教程',
        items: [
          { text: '线碟刹调节教程', link: '/guide/xiandiesha' },
          { text: '大灯安装教程', link: '/guide/dadeng' },
          { text: '脚踏安装教程', link: '/guide/jiaota' }
        ]
      },
    ],
    // 社交图标设置
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nilinseo/vitepress' }
    ],
    
    //404页面的配置
    notFound: {
      title: "页面未找到",
      quote: "哎呀，您好像迷失在网络的小胡同里啦，别着急，赶紧回头是岸！",
      linkText: "返回首页",
    },
    // 底部配置
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present 夜七笔记'
    }
  }
})
