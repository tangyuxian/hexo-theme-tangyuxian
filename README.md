## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429104219.png)总览

![image-20210429103541217](https://cdn.tangyuxian.com/PicGoImages/20210429104818.png)

------

# [Tangyuxian](https://www.tangyuxian.com)

> 糖羽仙深度定制的HEXO专属主题
<p align="center">
<img alt="star" src="https://img.shields.io/github/stars/tangyuxian/hexo-theme-tangyuxian.svg"/>
<img alt="fork" src="https://img.shields.io/github/forks/tangyuxian/hexo-theme-tangyuxian.svg"/>
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/tangyuxian/hexo-theme-tangyuxian.svg?label=commits">
<img alt="issues" src="https://img.shields.io/github/issues/tangyuxian/hexo-theme-tangyuxian.svg"/>
<a href="https://www.tangyuxian.com"><img alt="Author" src="https://img.shields.io/badge/author-糖羽仙-red.svg"/></a>
<a href="http://wpa.qq.com/msgrd?v=3&uin=2120252100&site=qq&menu=yes"><img alt="QQ" src="https://img.shields.io/badge/QQ-2120252100-red.svg"/></a>
<a href="https://github.com/tangyuxian/hexo-theme-tangyuxian/blob/master/LICENSE"><img alt="license" src="https://img.shields.io/github/license/tangyuxian/hexo-theme-tangyuxian.svg"/></a>
<img alt="hexo" src="https://img.shields.io/badge/hexo-blue.svg"/>
<img alt="Download" src="https://img.shields.io/badge/download-29.9KB-brightgreen.svg"/>
</p>

## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429104626.png)贡献

> 本主题基于[**hexo-theme-nexmoe**](https://github.com/tangyuxian/hexo-theme-nexmoe)深度定制,感谢原作者开源
>

## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429105429.png)演示

[**糖羽仙**](https://www.tangyuxian.com)

## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429112034.png)特色功能

1. 基于hexo-theme-nexmoe-2.5.9深度定制,继承其所有优点,扩展性更高,兼容性更强;
2. 主题色百变搭配,将想象力全权交给您
3. 本地搜索功能与互联网搜索功能控件自由切换,随心而改
4. 动态看板娘与静态立绘板互相组合,动静结合互相辉映
5. 右侧时钟天气控件,自由开关,看文学习不忘记时间,天气变化随时注意,细微之处皆是关怀
6. 即时通讯插件自由开关,让联系您的人与您实时沟通,不错过任何一次机会
7. 更多特色等待您来探索

## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429114146.png)教程

1. 使用本主题包前请阅读[HEXO官方文档](https://hexo.io/zh-cn/docs/),本主题包仅适用于HEXO,请确认您已安装HEXO相关依赖

2. 开始使用本主题

   - 注意安装`wordcount`插件,用来激活字数统计功能:`npm i --save hexo-wordcount`

   - 请修改位于您项目根目录的`_config.yml`的文件,将默认代码高亮关闭处理

     ```
     highlight:
       enable: false
     ```

   - 设置文章信息

     ```
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

   - 自动通过标签来匹配封面(beta)

     目前标签名对应的封面配置位置在主题根目录(`/source/js/postcover.js`),可在该文件下配置标签对应的封面,文章封面的优先级是(文章md文件配置的封面>自动匹配的封面>在主题包`_config.yml`全局设置的背景图)

   - 文章归档

     为了让文章归档到一个页面,请在项目的根目录`/source/`下创建`archives.md`文件,文件内填写如下内容即可:

     ```
     ---
     title: 文章归档
     layout: archives
     permalink: archives.html
     ---
     ```

   - 更多...

3. 将本主题下载后放至您的hexo项目根目录的 `themes` 下,并开启使用本主题

4. 以下是本主题包的目录结构图

   ```
   ├── languages       //国际化语言包
   ├── layout			//ejs模板布局文件夹
   ├── scripts         //自定义执行脚本		
   ├── source          //静态资源文件夹
   ├── _config.styl	//样式配置文件
   ├── _config.yml		//主题配置文件
   ├── package.json    //node配置项
   └── README.md       //说明文档
   ```
   

`_config.yml`属于本主题核心配置项,本主题的所有功能性内容将在本主题中配置

注:静态立绘板的配置图在 `background character` 中

5. 即时通讯插件

   `daovoice`需要您到[daovoice官网](http://dashboard.daovoice.io/)申请key并配置

6. 主题色个性化配置

   `_config.styl`属于本主题个性化配置项,主题色和部分插件的自定义图案可在该配置项中配置,未来版本会不断扩展可配置内容

7. 本地搜索功能依赖

   参考[hexo-generator-search](https://www.npmjs.com/package/hexo-generator-search),配置相关参数,用于生成`search.xml`,本地搜索依赖该文件进行检索

8. 看板娘配置方法

   参考[hexo-helper-live2d](https://github.com/tangyuxian/hexo-helper-live2d)配置看板娘插件.

   附赠更多丰富的看板娘插件[live2D大礼包](https://github.com/tangyuxian/live2D)(ps:里面有超级萌小埋哦)

   

## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429114804.png)许可
   > 根据 Apache License 2.0 许可证开源。

   <a href="https://github.com/tangyuxian/hexo-theme-tangyuxian/blob/master/LICENSE"><img alt="license" src="https://img.shields.io/github/license/tangyuxian/hexo-theme-tangyuxian.svg"/></a>

   

## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429144611.png)卖萌

喜欢的小伙伴记得start哦
