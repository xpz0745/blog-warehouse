(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{616:function(t,a,e){"use strict";e.r(a);var n=e(3),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"valine使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#valine使用方法"}},[t._v("#")]),t._v(" Valine使用方法")]),t._v(" "),e("p",[t._v("关于Valine的评论系统，其实vuepress-theme-reco主题已经给出了解释"),e("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/1.x/valine.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击此处"),e("OutboundLink")],1),t._v("，可以选择Valine和Vssue两种评论系统，我这边选择了Valine，下面说一说Valine的基本使用吧。")]),t._v(" "),e("p",[t._v("首先按照官网的说法在config里配置如下：")]),t._v(" "),e("h3",{attrs:{id:"valine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#valine"}},[t._v("#")]),t._v(" Valine")]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("module.exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reco'")]),t._v(",\n  themeConfig: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    valineConfig: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      appId: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),t._v(",// your appId\n      appKey: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),t._v(", // your appKey\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("blockquote",[e("p",[t._v("如果 valine 的获取评论的接口报 "),e("code",[t._v("404")]),t._v(" 错误的话，不用担心，这是因为你还没有添加评论，只要存在1条评论，就不会报错了，这是 "),e("code",[t._v("leanCloud")]),t._v(" 的请求处理操作而已；")])]),t._v(" "),e("p",[t._v("其它的参数可以参考"),e("a",{attrs:{href:"https://valine.js.org/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Valine官网"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("valineConfig的参数需要到"),e("a",{attrs:{href:"https://www.leancloud.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeanCloud官网"),e("OutboundLink")],1),t._v("注册。注册的时候可以先选择开发版，注册完成之后，在设置页面当中的应用凭证可以找到appId和appKey。")]),t._v(" "),e("img",{attrs:{src:"http://121.40.49.66/img/leanCloudImg.jpg"}}),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"title"}),e("p",[t._v("PS：记得在安全中心里把自己的域名填上，否则可能会报 "),e("code",[t._v("Code 403: 访问被API域名白名单拒绝，请检查你的安全域名设置.")]),t._v("的问题。")])]),e("p",[t._v("然后配置到config里面，之后就可以在数据存储 > 结构化数据里看到所有的评论了。")]),t._v(" "),e("img",{attrs:{src:"http://121.40.49.66/img/leanCloudImg-1.png"}})])}),[],!1,null,null,null);a.default=s.exports}}]);