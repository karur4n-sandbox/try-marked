$('.js-preview-tab').click(function() {
  var markdownPreview = $('.markdown-preview');
  var markdownBody = $('.markdown-body');
  markdownPreview.html(marked(markdownBody.val()));
  markdownBody.addClass('hidden');
  markdownPreview.removeClass('hidden');
})

$('.js-write-tab').click(function() {
  var markdownPreview = $('.markdown-preview');
  var markdownBody = $('.markdown-body');
  markdownPreview.addClass('hidden');
  markdownBody.removeClass('hidden');
})
