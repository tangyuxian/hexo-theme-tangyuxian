$(function () {
  var $copyIcon = $('<i class="fa fa-copy code_copy mdui-list-item-icon nexmoefont icon-fuzhi" title="复制代码" aria-hidden="true"></i>');
  $('.code-area').prepend($copyIcon);
  new ClipboardJS('.fa-copy', {
    target: function (trigger) {
      return trigger.nextElementSibling;
    }
  });

});

