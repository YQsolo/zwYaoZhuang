var new_element=document.createElement("script"); 
new_element.setAttribute("type","text/javascript"); 
new_element.setAttribute("src","../js/main.js");
document.body.appendChild(new_element); 



//-------------------index页轮播调用-------------------------
var $banner = $("#banner");
var $bannerdiv = $("#banner div");
var $bannerli = $("#banner ul li");
lunbo($banner,$bannerdiv,$bannerli);

//-------------------下拉----------------------
var $header_a = $("#header_top .right a");
var $header_span = $("#header_top .right span");
showMotion($header_a.eq(0), $header_span.eq(0));
showMotion($header_a.eq(2), $header_span.eq(1));
showMotion($header_a.eq(3), $header_span.eq(2));
//-------------------横向menu------------------
var $menu_li = $("#menu ul:nth-of-type(2) li");
for(let i = 0 ;i<$menu_li.length ;i++){
	menuFlex($menu_li.eq(i));
}
//---------------------------------------------

var $index_main_03_ul = $("#index_main_03 ul");
var li = '';
$.ajax({
	url:"http://localhost/php/index.php",
	success:function(data){
		li='';
		for(let i = 0 ;i<data.list.length ; i++){
			li += `<li name="`+data.list[i].id+`">
					<a href="../html/details.html?id=`+data.list[i].id+`">
						<img src="`+data.list[i].detailsimages1+`">
					</a>
					<div class="index_main_03_cotton">
						<a href="../html/details.html?id=`+data.list[i].id+`">`+data.list[i].name+`</a>
						<div>
							<label>￥<span>`+data.list[i].price+`</span></label> 
							<a href="#">加入购物车</a>
						</div>
						<p>
						距团购结束
							<span>2天08小时42分06秒</span>
							<label>3人已购买</label>
						</p>
					</div>
				</li>`;
		}
		$index_main_03_ul.append(li);
	},
	dataType:'json'
});

//-------------------------------------------------------------
var index_main_02_num = 0;
var $index_main_02_center_ul = $("#index_main_02_center_ul");
var $index_main_02_center_right = $("#index_main_02_center_right");
$.ajax({
	url:"http://localhost/php/index1.php",
	success:function(data){
		li='';
		for(var i = 0 ;i<data.list.length-1 ;i++){
			li+=`<li>
					<a href="#">
						<img src="`+data.list[i].brand_img+`">
					</a>
				</li>`;
		}
		$index_main_02_center_ul.append(li);
		li=`<img src="`+data.list[data.length-1].brand_img+`">`;
		$index_main_02_center_right.append(li);
	},
	data:"index="+index_main_02_num,
	dataType:'json'
});
var $index_main_02_top_01_ul = $("#index_main_02_top_01 ul");

$index_main_02_top_01_ul.on('mouseover','li',function(){
	for(let i = 0 ;i<$index_main_02_top_01_ul.children('li').length ; i++){
		$index_main_02_top_01_ul.children('li').attr('class','');
	}
	$(this).attr('class','index_main_02_this');
	console.log($(this).attr('index'));
	$index_main_02_center_ul.html('');
	$index_main_02_center_right.html('');
	$.ajax({
		url:"http://localhost/php/index1.php",
		success:function(data){
			li='';
			for(var i = 0 ;i<data.list.length-1 ;i++){
				li+=`<li>
						<a href="#">
							<img src="`+data.list[i].brand_img+`">
						</a>
					</li>`;
			}
			$index_main_02_center_ul.append(li);
			li=`<img src="`+data.list[data.length-1].brand_img+`">`;
			$index_main_02_center_right.append(li);
		},
		data:"index="+$(this).attr('index'),
		dataType:'json'
	});
});





















//---------------轮播图----------------------------------------
function lunbo(banner,div,li){
	var index = 0;
	function run(div,li){
		for(let i = 0 ;i<div.length ; i++){
			div[i].className = '';
			li[i].className = '';
		}
		div[index].className = "show";
		li[index].className = "current";
		index++;
		if(index >= div.length){
			index = 0;
		}
	}
	for(let i = 0 ;i<li.length ; i++){
		li[i].onmouseover = function(){
			index = i;
			run(div,li);
		}
	}
	var setinterval = setInterval(function(){
		run(div,li);
	},3500);
	banner.onmouseover = function(){
		clearInterval(setinterval);
	}
	banner.onmouseout = function(){
		setinterval=setInterval(function(){
			run(div,li);
		},3500);
	}
}
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


















































