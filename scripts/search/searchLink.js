const js = hexo.extend.helper.get('js').bind(hexo)
hexo.extend.injector.register('body_end', () => {
  return js('https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js');
});
hexo.extend.injector.register('body_end', () => {
  return js('/js/search.js');
});
