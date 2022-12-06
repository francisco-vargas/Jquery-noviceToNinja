$(document).ready(function() {
  $('a[href=#]').click(function(e) {
    $.scrollTo(0,'slow','easeOutBounce');
    e.preventDefault();
  });
});
