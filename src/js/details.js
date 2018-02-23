var $header_top_a = $("#header_top .right a");
var $header_top_span = $("#header_top .right span");
showMotion($header_top_a.eq(0),$header_top_span.eq(0));
showMotion($header_top_a.eq(2),$header_top_span.eq(1));
showMotion($header_top_a.eq(3),$header_top_span.eq(2));
var $menu_li = $("#menu ul:nth-of-type(2) li");
for(let i = 0 ;i<$menu_li.length ; i++){
	menuFlex($menu_li.eq(i));
}

//------------------------------------------
var details_search1 = /[^?]?id=\d+/;
var details_search2 = /[a-zA-Z]+/;
var details_search3 = /\d+/;
var details_value = details_search3.exec(details_search1.exec(window.location.search))[0];

var $details_content_left_img = $("#details_content_left_img");
var $details_content_right01_h2 = $("#details_content_right01_h2");
var $details_content_right01_price = $("#details_content_right01_price");

var $bxdetails_04_main_origin = $("#bxdetails_04_main_origin");
var $bxdetails_04_main_effect = $("#bxdetails_04_main_effect");
var $bxdetails_04_main_specification = $("#bxdetails_04_main_specification");
var $bxdetails_04_main_pack = $("#bxdetails_04_main_pack");
var $bxdetails_04_main_forskin = $("#bxdetails_04_main_forskin");
var $bxdetails_04_main_forthecrowd = $("#bxdetails_04_main_forthecrowd");
var $bxdetails_04_main_warmprompt = $("#bxdetails_04_main_warmprompt");



$.ajax({
	url:"http://localhost/php/details.php?id="+details_value,
	data:{
		"id":details_value, 
	},
	success:function(data){
		console.log(data);
		$details_content_left_img.attr('src',data.list[0].detailsimages1);
		$details_content_right01_h2.html(data.list[0].name);
		$details_content_right01_price.html(data.list[0].price);
		$bxdetails_04_main_origin.html(data.list[0].origin);
		$bxdetails_04_main_effect.html(data.list[0].effect);
		$bxdetails_04_main_specification.html(data.list[0].specification);
		$bxdetails_04_main_pack.html(data.list[0].pack);
		$bxdetails_04_main_forskin.html(data.list[0].forskin);
		$bxdetails_04_main_forthecrowd.html(data.list[0].forthecrowd);
		$bxdetails_04_main_warmprompt.html(data.list[0].warmprompt);
	},
	dataType:'json'
});	






















//---------------显示运动--------------------------------------
function showMotion(obj,showobj){
	obj.on('mouseover',function(){
		showobj.css('height',obj.attr('data-height'));
		showobj.css('transition','0.5s');
	});
	var settime = setTimeout(function(){
		obj.on('mouseout',function(){
			showobj.css('height','0px')
			showobj.css('transition','0.5s')
		});
	},300);
	showobj.on('mouseover',function(){
		showobj.css('height',obj.attr("data-height"));
		showobj.css('transition','0.5s')
	});
	showobj.on('mouseout',function(){
		showobj.css('height','0px');
		showobj.css('transition','0.5s');
	});
}
//---------------收缩menu-----------------------------------------
function menuFlex(li){
	for(let i = 0 ;i<li.length ; i++){
		li.eq(i).on('mouseover',function(){
			$(this).css('transition','0.7s ease-in-out');
			$(this).css('width',$(this).attr('data-width'));
		});
		li.eq(i).on('mouseout',function(){
			$(this).css('transition','0.7s ease-in-out');
			$(this).css('width','0px');
		});
	}
}




















