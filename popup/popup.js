function init()
{

	var mAutoSelect;
	var bg = chrome.extension.getBackgroundPage();
	//chrome.storage.local.get('selectMode',function(item){$("#show_auto").html("已"+item);});
	jQuery("#show_auto").html(bg.sMode);
	// Attach event listeners
	jQuery("#auto_select").click(function(){
	//	chrome.storage.local.get('selectMode',function(item){
	//		if(item=="开启")chrome.storage.local.set({'selectMode':"关闭"},function(){
	//			$("#show_auto").html("已关闭");
	//		});
	//		else chrome.storage.local.set({'selectMode':"开启"},function(){
	//			$("#show_auto").html("已开启");
	//		});
	//	});
		if(bg.sMode=="on"){bg.sMode="off";jQuery("#show_auto").html("已关闭");}
		else {bg.sMode="on";jQuery("#show_auto").html("已开启");}
	}); 
	jQuery("#debugP").html(bg.sMode);
	jQuery("#wlist_submit").click(function(){
		bg.courseId = jQuery("#wlist_input").val();
		jQuery("#debugP").html(bg.courseId);
		jQuery("#wlist_input").val("");
	});


}
jQuery.noConflict();
jQuery(document).ready(function(){
	init();
});

