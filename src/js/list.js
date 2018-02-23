var $header_top_a = $("#header_top .right a");
var $header_top_span = $("#header_top .right span");
showMotion($header_top_a.eq(0),$header_top_span.eq(0));
showMotion($header_top_a.eq(2),$header_top_span.eq(1));
showMotion($header_top_a.eq(3),$header_top_span.eq(2));
var $menu_li = $("#menu ul:nth-of-type(2) li");
for(let i = 0 ;i<$menu_li.length ; i++){
	menuFlex($menu_li.eq(i));
}
var num = 0;


//页码区
var $main_main_right_num = $("#main_main_right_num");
var $main_main_prev = $("#main_main_prev");
var $main_main_next = $("#main_main_next");
var $main_foot_ul = $("#main_foot ul:nth-of-type(1)");
var $main_main_right_span01 = $("#main_main_right_span01");
var $main_main_right_span02 = $("#main_main_right_span02");
var li = ''; 

$("#main_main_prev").on('click',function(){
	num--;
	if(num<=0){
		num = 0;
	}
	$.ajax({
		url:"http://localhost/php/list.php",
		success:function(data){
			console.log(data);
			$main_main_right_num.html(data.length);
			li='';
			$main_foot_ul.html('');
			$main_main_right_span01.html(num+1);
			$main_main_right_span02.html(Math.ceil(data.length/12));
			for(let i = 0 ;i<data.list.length ; i++){
			li +=	`<li name = "`+data.list[i].id+`">
					<a href="details.html?id=`+data.list[i].id+`">
						<img src="`+data.list[i].detailsimages1+`">
					</a>
					<div>
						<a href="details.html?">`+data.list[i].name+`</a>
						<p>
							<label><span>￥</span>`+data.list[i].price+`</label>
							<span class="main_foot_gwc">加入购物车</span>
						</p>
					</div>
				</li>
				`;	
			}
			$main_foot_ul.append(li);
		},
		data:"index="+num,
		dataType:'json'
	});
});
$("#main_main_next").on('click',function(){
	num++;
	console.log(num);
	$.ajax({
		url:"http://localhost/php/list.php",
		success:function(data){
			console.log(data);
			$main_main_right_num.html(data.length);
			li='';
			$main_foot_ul.html('');
			$main_main_right_span01.html(num+1);
			$main_main_right_span02.html(Math.ceil(data.length/12));
			for(let i = 0 ;i<data.list.length ; i++){
			li +=	`<li name = "`+data.list[i].id+`">
					<a href="details.html?id=`+data.list[i].id+`">
						<img src="`+data.list[i].detailsimages1+`">
					</a>
					<div>
						<a href="details.html?">`+data.list[i].name+`</a>
						<p>
							<label><span>￥</span>`+data.list[i].price+`</label>
							<span class="main_foot_gwc">加入购物车</span>
						</p>
					</div>
				</li>
				`;	
			}
			$main_foot_ul.append(li);
		},
		data:"index="+num,
		dataType:'json'
	});
//未写完
});
//内容区的ul
$.ajax({
	url:"http://localhost/php/list.php",
	success:function(data){
		console.log(data);
		$main_main_right_num.html(data.length);
		$main_main_right_span01.html(num+1);
		$main_main_right_span02.html(Math.ceil(data.length/12));
		for(let i = 0 ;i<data.list.length ; i++){
		li +=	`<li name = "`+data.list[i].id+`">
					<a href="details.html?id=`+data.list[i].id+`">
						<img src="`+data.list[i].detailsimages1+`">
					</a>
					<div>
						<a href="details.html?">`+data.list[i].name+`</a>
						<p>
							<label><span>￥</span>`+data.list[i].price+`</label>
							<span class="main_foot_gwc">加入购物车</span>
						</p>
					</div>
				</li>
				`;	
		}
		$main_foot_ul.append(li);
	},
	data:"index="+num,
	dataType:'json'
});
	
//-----------------------------------------------------------
$main_foot_ul.on('click','li',function(){
	console.log(this);
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
