//code to handle news slide-downs. Uses jQuery.
$(document).ready(function(){
	$('#blog_posts li').hide();
	$('#first_news_item').show();
	$("#more_news_link").click(function(){
		$("#blog_posts li").slideDown();
		$("#more_news_link").slideUp();
	});
});
