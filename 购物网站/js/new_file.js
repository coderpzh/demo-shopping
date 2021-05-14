$(function(){
	$(".nav_letf li").hover(function(){
		$(this).find(".content_show").css("display","block");
	},function(){
		$(this).find(".content_show").css("display","none");
	});
});