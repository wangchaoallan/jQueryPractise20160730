$(document).ready(function(){

	var content="this is my new content";

	$('.top li').on('click',function(){
		var panelInfo = $(this).attr('data-panelId');
		
		$('#'+panelInfo).toggle(200);
		$('#'+panelInfo+' .panelBottom').html('');
	});

});