## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429104219.png)Overview

![image-20260128143349312](https://cdn.tangyuxian.com/PicGoImages/20260128143413122.png)
------

# [Tangyuxian](https://www.tangyuxian.com)

[Chinese](./README.md) | English

> A deeply customized Hexo theme by Tangyuxian, supporting personalized configuration and responsive layout.
<p align="center">
<img alt="star" src="https://img.shields.io/github/stars/tangyuxian/hexo-theme-tangyuxian.svg"/>
<img alt="fork" src="https://img.shields.io/github/forks/tangyuxian/hexo-theme-tangyuxian.svg"/>
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/tangyuxian/hexo-theme-tangyuxian.svg?label=commits">
<img alt="issues" src="https://img.shields.io/github/issues/tangyuxian/hexo-theme-tangyuxian.svg"/>
<a href="https://www.tangyuxian.com"><img alt="Author" src="https://img.shields.io/badge/author-Tangyuxian-red.svg"/></a>
<a href="http://wpa.qq.com/msgrd?v=3&uin=2120252100&site=qq&menu=yes"><img alt="QQ" src="https://img.shields.io/badge/QQ-2120252100-red.svg"/></a>
<img alt="hexo" src="https://img.shields.io/badge/hexo-blue.svg"/>
<img alt="Download" src="https://img.shields.io/badge/download-29.9KB-brightgreen.svg"/>
</p>

## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429104626.png)Contribution

> This theme is developed based on [**hexo-theme-nexmoe**](https://github.com/theme-nexmoe/hexo-theme-nexmoe). Thanks to the original author for open sourcing it and the following contributors for improving it together.

![Contributors](https://camo.githubusercontent.com/b320412fe85a1831fa76b86b73f3bc91480a85fdaf30185725b5279d84d186ba/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f6865786f2d7468656d652d6e65786d6f652f636f6e7472696275746f72732e7376673f77696474683d38393026627574746f6e3d66616c7365)



## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429105429.png)Demo

[**Tangyuxian**](https://www.tangyuxian.com)

![image-20260128143740276](https://cdn.tangyuxian.com/PicGoImages/20260128143742060.png)

![image-20260128143809724](https://cdn.tangyuxian.com/PicGoImages/20260128143811427.png)


## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429112034.png)Features

1. Deeply customized based on hexo-theme-nexmoe-4.2.2, inheriting all its advantages with higher extensibility and stronger compatibility.
2. Versatile theme color combinations, leaving the imagination entirely to you.
3. Free switching between local search and internet search controls, modify as you wish.
4. Dynamic Live2D girl combined with static illustrations, creating a mutual radiance of motion and stillness.
5. Right-side clock and weather widget, freely toggleable. Don't forget the time while reading and learning, and stay aware of weather changes—care in every detail.
6. ~~Instant messaging plugin freely toggleable, allowing real-time communication with visitors, never missing an opportunity.~~
6. Integrated AI plugin, allowing embedding of AI chat interfaces.
6. Integrated [Memos](https://usememos.com/) article loading function.
7. More features waiting for you to explore.

## ![img](https://cdn.tangyuxian.com/PicGoImages/20210429114146.png)Tutorial

1. Please read the [Hexo Official Documentation](https://hexo.io/docs/) before using this theme package. This package is only applicable to Hexo; please ensure you have installed Hexo-related dependencies.

2. Start using this theme

   - Run the following command to install Tangyuxian:

     ```bash
     npm install hexo-theme-tangyuxian hexo-renderer-inferno

   - Use Tangyuxian

     - Method 1: Edit `_config.yml` in the project root directory. Change the value of the `theme` key to `tangyuxian`.
     - Method 2:

     ```bash
     hexo config theme tangyuxian
     ```

   - Configure Tangyuxian

     Edit `_config.tangyuxian.yml` in the project root directory.

   - Set Post Information

     ```markdown
     ---
     title: Title here
     date: Date here
     tags:
     - Tag 1
     - Tag 2
     categories:
     - Category Name
     cover: /images/post/markerdown.jpg (Optional: Cover address, can be relative or absolute path)
     coverWidth: 1200 (Optional: Cover width)
     coverHeight: 320 (Optional: Cover height)
     author: Post author (Optional)
     from: Post source (Optional)
     ---
     ```

   - Automatically match covers by tags

     Configure corresponding cover types under `tagsCovers` in `_config.tangyuxian.yml`. Common covers are built-in by default and can be used directly, or you can configure your own.

   - Archives

     To archive articles on a single page, please create an `archives.md` file under the project root directory `/source/`, and fill in the following content:

     ```markdown
     ---
     title: Archives
     layout: archives
     permalink: archives.html
     ---
     ```

   - More...

3. How to modify this theme and use it locally

   Add configuration items in `package.json` in the root directory:

   ```json
     "workspaces": [
       "packages/*"
     ]

```

Create a folder named `packages` in the root directory. Download this theme and place it inside this folder, then modify the content in `package.json` in the root directory:

```json
"hexo-theme-tangyuxian": "workspace:^"

```

After that, you can modify this theme locally at any time.

4. The directory structure of this theme package is as follows:
```
├── languages       // Internationalization language packages
├── layout          // EJS template layout folder
├── scripts         // Custom execution scripts
├── source          // Static resources folder
├── package.json    // Node configuration items
└── README.md       // Documentation

```


5. ~~Instant Messaging Plugin~~
~~`daovoice` requires you to apply for a key at [daovoice official site](https://www.google.com/search?q=http://dashboard.daovoice.io/) and configure it.~~
6. AI Chat Plugin (Optional)
The chat box is open for free embedding. You can use Dify workflow to generate agents for embedding. There are preset configuration items in the `_config.tangyuxian.yml` configuration file.
```yml
# Chatbot: You can embed the AI chat page here. Configure the embedded address in 'chat', such as Dify or other customized chat interfaces.
chatbot:
  enable: true
  options:
    title: Tangtang's AI Avatar (BETA)
    chat: [https://www.tangyuxian.com/weifu.html](https://www.tangyuxian.com/weifu.html) 
    style: "width: 100%; height: 100%;overflow: hidden;"

```


7. Memos Plugin Usage (Optional)
* Memos is a fully privatizable memo service. You can understand the deployment process via [markerdown - One-click generation of exclusive memos - Tangyuxian](https://www.tangyuxian.com/2026/01/16/kai-fa-gong-ju/md/markerdown-yi-jian-sheng-cheng-zhuan-shu-zi-ji-de-bei-wang-lu/). Once you have Memos, you can adjust parameters in the `_config.tangyuxian.yml` configuration items.


```yml
# Configure memos component content. Requires an existing memos service. You can deploy a memo service locally at [https://usememos.com/](https://usememos.com/)
memos:
  host: [https://memos.tangyuxian.com](https://memos.tangyuxian.com)
  pageSize: 10
  filter: "#moments" # Tags used to filter memos, default is #moments. Automatically removed after matching.
  enableFancybox: true

```


* To archive articles on a single page, please create a `memos.md` file under the project root directory `/source/`, and fill in the following content:


```markdown
  ---
  title: Moments
  layout: memos
  permalink: memos.html
  ---

```


8. Theme Color Personalization (Optional)
Default configuration content is as follows:
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


Where `--clock-logo` is the image displayed in the center of the clock, `--qweather-logo` is the image displayed next to the weather, and `--character` is the standing illustration on the left. Set the value of `customStyles` in `_config.tangyuxian.yml` in the root directory. The default configuration is as follows:
yaml
```yml
customStyles:
  - custom.css
  - themes/umaru/index.css

```


Then, create and configure files in the corresponding path within the `source` directory. This way you can write your own custom styles. The entries below will override the ones above, pay attention to the order.
9. Local Search Function Dependency (Optional)
Refer to [hexo-generator-search](https://www.google.com/search?q=https://www.npmjs.com/package/hexo-generator-search), configure relevant parameters to generate `search.json`. Local search relies on this file for retrieval.
```yml
search:
  path: search.json
  field: post

```


10. Live2D Configuration Method (Optional)

Refer to [hexo-helper-live2d](https://www.google.com/search?q=https://github.com/tangyuxian/hexo-helper-live2d) to configure the Live2D plugin.

Bonus: More rich Live2D plugin [Live2D Gift Pack](https://www.google.com/search?q=https://github.com/tangyuxian/live2D) (PS: Contains super cute Umaru).

## License

> Open sourced under the Apache License 2.0.

## Show some love

If you like it, remember to star!
