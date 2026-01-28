## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429104219.png)总览

![image-20260128143349312](https://cdn.tangyuxian.com/PicGoImages/20260128143413122.png)
------

# [Tangyuxian](https://www.tangyuxian.com)

中文 | [英文](./README_en.md)

> 糖羽仙深度定制的HEXO专属主题
<p align="center">
<img alt="star" src="https://img.shields.io/github/stars/tangyuxian/hexo-theme-tangyuxian.svg"/>
<img alt="fork" src="https://img.shields.io/github/forks/tangyuxian/hexo-theme-tangyuxian.svg"/>
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/tangyuxian/hexo-theme-tangyuxian.svg?label=commits">
<img alt="issues" src="https://img.shields.io/github/issues/tangyuxian/hexo-theme-tangyuxian.svg"/>
<a href="https://www.tangyuxian.com"><img alt="Author" src="https://img.shields.io/badge/author-糖羽仙-red.svg"/></a>
<a href="http://wpa.qq.com/msgrd?v=3&uin=2120252100&site=qq&menu=yes"><img alt="QQ" src="https://img.shields.io/badge/QQ-2120252100-red.svg"/></a>
<img alt="hexo" src="https://img.shields.io/badge/hexo-blue.svg"/>
<img alt="Download" src="https://img.shields.io/badge/download-29.9KB-brightgreen.svg"/>
</p>

## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429104626.png)贡献

> 本主题基于[**hexo-theme-nexmoe**](https://github.com/theme-nexmoe/hexo-theme-nexmoe)开发,感谢原作者开源及以下贡献者共同完善

![贡献者](https://camo.githubusercontent.com/b320412fe85a1831fa76b86b73f3bc91480a85fdaf30185725b5279d84d186ba/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f6865786f2d7468656d652d6e65786d6f652f636f6e7472696275746f72732e7376673f77696474683d38393026627574746f6e3d66616c7365)



## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429105429.png)演示

[**糖羽仙**](https://www.tangyuxian.com)

![image-20260128143740276](https://cdn.tangyuxian.com/PicGoImages/20260128143742060.png)

![image-20260128143809724](https://cdn.tangyuxian.com/PicGoImages/20260128143811427.png)


## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429112034.png)特色功能

1. 基于hexo-theme-nexmoe-4.2.2深度定制,继承其所有优点,扩展性更高,兼容性更强;
2. 主题色百变搭配,将想象力全权交给您
3. 本地搜索功能与互联网搜索功能控件自由切换,随心而改
4. 动态看板娘与静态立绘板互相组合,动静结合互相辉映
5. 右侧时钟天气控件,自由开关,看文学习不忘记时间,天气变化随时注意,细微之处皆是关怀
6. ~~即时通讯插件自由开关,让联系您的人与您实时沟通,不错过任何一次机会~~
6. 集成AI插件,可以内嵌AI聊天界面
6. 集成[Memos](https://usememos.com/)文章加载功能
7. 更多特色等待您来探索

## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429114146.png)教程

1. 使用本主题包前请阅读[HEXO官方文档](https://hexo.io/zh-cn/docs/),本主题包仅适用于HEXO,请确认您已安装HEXO相关依赖

2. 开始使用本主题

   - 运行以下命令以安装 Tangyuxian：

     ```bash
     npm install hexo-theme-tangyuxian hexo-renderer-inferno
     ```

   - 使用Tangyuxian

     - 方法1 在项目的根目录中编辑 `_config.yml`。将名为 `theme` 的键的值更改为 `tangyuxian`
     - 方法2

     ```bash
     hexo config theme tangyuxian
     ```

   - 配置tangyuxian

     在项目的根目录中编辑 `_config.tangyuxian.yml`。

   - 设置文章信息

     ```markdown
     ---
     title: 此处为标题
     date: 此处为时间
     tags:
     - 标签1
     - 标签2
     categories:
     - 分组名
     cover: /images/post/markerdown.jpg(可选:封面地址,可以是相对也可以是绝对路径)
     coverWidth: 1200(可选:封面宽度)
     coverHeight: 320(可选:封面高度)
     author:文章作者(可选)
     from:文章来源(可选)
     ---
     ```

   - 自动通过标签来匹配封面

     在`_config.tangyuxian.yml`的`tagsCovers`下可配置对应类型的封面，默认内置了常见封面，可直接使用，也可自行配置封面。

   - 文章归档

     为了让文章归档到一个页面,请在项目的根目录`/source/`下创建`archives.md`文件,文件内填写如下内容即可:

     ```markdown
     ---
     title: 文章归档
     layout: archives
     permalink: archives.html
     ---
     ```

   - 更多...

3. 修改本主题并在本地使用方法

   在根目录的`package.json`中增加配置项

   ```json
     "workspaces": [
       "packages/*"
     ]
   ```

   在根目录创建文件夹`packages`，将本主题下载后放到该文件夹里，然后在根目录的`package.json`中修改内容

   ```json
   "hexo-theme-tangyuxian": "workspace:^"
   ```

   之后就可以在本地随时修改本主题

4. 以下是本主题包的目录结构图

   ```
   ├── languages       //国际化语言包
   ├── layout			//ejs模板布局文件夹
   ├── scripts         //自定义执行脚本		
   ├── source          //静态资源文件夹
   ├── package.json    //node配置项
   └── README.md       //说明文档
   ```


5. ~~即时通讯插件~~

   ~~`daovoice`需要您到[daovoice官网](http://dashboard.daovoice.io/)申请key并配置~~

6. AI对话插件（可选）

   聊天框开放为自由嵌入，可以采用dify的工作流生成智能体进行嵌入，在`_config.tangyuxian.yml`配置文件中有预设的配置项

   ```yml
   # 聊天机器人 可以内嵌ai聊天页面到这里，chat中配置内嵌的地址，比如dify或者是其它定制化的聊天界面
   chatbot:
     enable: true
     options:
       title: 糖糖的AI分身(BETA)
       chat: https://www.tangyuxian.com/weifu.html 
       style: "width: 100%; height: 100%;overflow: hidden;"
   ```

7. memos插件使用（可选）

   - memos是可完全私有化的备忘录，可通过[markerdown-一键生成专属自己的备忘录 - 糖羽仙](https://www.tangyuxian.com/2026/01/16/kai-fa-gong-ju/md/markerdown-yi-jian-sheng-cheng-zhuan-shu-zi-ji-de-bei-wang-lu/)该文章了解部署过程。当拥有memos后，可在`_config.tangyuxian.yml`配置项中对参数进行调整
   
   ```yml
   # 配置memos组件相关内容，需要使用已有的momos服务才行，可到https://usememos.com/本地部署一套备忘录服务    
   memos:
     host: https://memos.tangyuxian.com
     pageSize: 10
     filter: "#moments" # 用于筛选memos的标签,默认是#moments。匹配到后会自动移除
     enableFancybox: true
   ```
   
   - 为了让文章归档到一个页面,请在项目的根目录`/source/`下创建`memos.md`文件,文件内填写如下内容即可:
   
   ```markdown
     ---
     title: 动态
     layout: memos
     permalink: memos.html
     ---
   ```


8. 主题色个性化配置（可选）

   默认配置内容如下：

   ```css
   :root {
       --gutter: 24px;
       --radius: 13px;
       --color-primary: #e67249;
       --color2: rgba(255, 118, 30, 0.5);
       --color3: #ffb900;
       --color4: #33d57a;
       --color5: #00dbff;
       --color6: #1a98ff;
       --color7: #9090ff;
       --color-primary-bg: rgba(255, 78, 106, 0.15);
       --color2-bg: rgba(255, 118, 30, 0.15);
       --color3-bg: rgba(255, 185, 0, 0.15);
       --color4-bg: rgba(51, 213, 122, 0.15);
       --color5-bg: rgba(0, 219, 255, 0.15);
       --color6-bg: rgba(26, 152, 255, 0.15);
       --color7-bg: rgba(144, 144, 255, 0.15);
       --color-shadow: rgba(161, 177, 204, 0.4);
       --color-card: #fff;
       --color-text-1: #111;
       --color-text-2: #444;
       --color-text-3: #363636;
       --clock-logo:url("/images/background/clock_logo.png");
       --qweather-logo:url("/images/background/clock_logo.png");
       --character:url("/images/background/character.png");
   }
   ```

   其中 `--clock-logo` 是时钟中间显示的图片，`--qweather-logo`是天气旁边显示的图片，`--character`是左侧的立绘图片，在根目录中的 `_config.tangyuxian.yml` 中设置 `customStyles` 的值。 默认配置如下：

   yaml

   ```yml
   customStyles:
     - custom.css
     - themes/umaru/index.css
   ```

   然后，在名为 `source` 的路径中创建和配置对应路径的文件。这样就可以编写自己的自定义样式，下面会覆盖上面，注意顺序。

9. 本地搜索功能依赖（可选）

   参考[hexo-generator-search](https://www.npmjs.com/package/hexo-generator-search),配置相关参数,用于生成`search.json`,本地搜索依赖该文件进行检索

   ```yml
   search:
     path: search.json
     field: post
   ```

10. 看板娘配置方法（可选）

   参考[hexo-helper-live2d](https://github.com/tangyuxian/hexo-helper-live2d)配置看板娘插件.

   附赠更多丰富的看板娘插件[live2D大礼包](https://github.com/tangyuxian/live2D)(ps:里面有超级萌小埋哦)

   

## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429114804.png)许可
   > 根据 Apache License 2.0 许可证开源。


## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429144611.png)卖萌

喜欢的小伙伴记得start哦
