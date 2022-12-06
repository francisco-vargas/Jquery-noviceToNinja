$(document).ready(function(){
	$('p:first').click(function(){
		$(this)
			.effect('shake', {times:3}, 300)
			.effect('highlight', {}, 1000)
			.hide('explode',{},1000)
			.show('clip',{},1000);
			
	})	
});

	
	
	
	
	
/* $(document).ready(function() {
  $('p:first')
    .effect('shake', {times:3}, 300)
    .effect('highlight', {}, 3000)
    .hide('explode', {}, 1000);  
}); */



