$(function() {
  $('.eStore_breadcrumb__items').each(function() {
    var $this = $(this)
    var $list = $this.find('.eStore_breadcrumb__selectLink')
    $this.hover(
      function() {
        $list.stop(true, true).fadeIn(200)
      },
      function() {
        $list.stop(true, true).fadeOut(200)
      }
    )
  })
})
