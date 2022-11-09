const js = hexo.extend.helper.get('js').bind(hexo)
const css = hexo.extend.helper.get('css').bind(hexo);
//依赖
hexo.extend.injector.register('body_end', () => {
  return js('https://lib.baomitu.com/clipboard.js/2.0.8/clipboard.min.js');
});
//核心包
hexo.extend.injector.register('body_end', () => {
  return js('/lib/codeBlock/codeBlockFuction.js');
});
//代码语言
hexo.extend.injector.register('body_end', () => {
  return js('/lib/codeBlock/codeLang.js');
});
//代码复制
hexo.extend.injector.register('body_end', () => {
  return js('/lib/codeBlock/codeCopy.js');
});
//代码折叠
hexo.extend.injector.register('body_end', () => {
  return js('/lib/codeBlock/codeShrink.js');
});
//css样式
hexo.extend.injector.register('body_end', () => {
  return css('/lib/codeBlock/matery.css');
});
