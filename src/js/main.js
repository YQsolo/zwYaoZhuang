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
	console.log(obj);
	console.log(showobj);
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

//-----------------------------------------------


















