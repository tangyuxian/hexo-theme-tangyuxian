const js = hexo.extend.helper.get('js').bind(hexo)
hexo.extend.injector.register('body_end', () => {
  return js('https://code.jquery.com/jquery-3.6.0.js');
});
hexo.extend.injector.register('body_end', () => {
  return js('/js/search.js');
});
