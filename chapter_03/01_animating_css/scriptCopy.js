$(document).ready(function(){
	$('p:first').toggle(function() {
		$(this).animate({'height':'+=150px'}, 500, 'linear');
	}, function() {
		$(this).animate({'height':'-=150px'}, 500, 'swing');
	});
});