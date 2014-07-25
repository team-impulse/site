document.ready(setWidthOfBoxes());
function setWidthOfBoxes(){
	if($(window).width() >=700){
		$("#about_us").css({"width":"75%", "border-right","2px solid #8F0000"});
		$("#blog_posts").css({"width":"75%", "border-left","5px dotted #8F0000"});
	}
	else { $("#about_us #blog_posts").css({"width":"100%", "margin":"5px 0"});};
};
