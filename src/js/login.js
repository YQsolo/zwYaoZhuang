//-------------login页--------------------
var $header_top_a = $("#header_top .right a");
var $header_top_span = $("#header_top .right span");
showMotion($header_top_a.eq(0),$header_top_span.eq(0));
showMotion($header_top_a.eq(2),$header_top_span.eq(1));
showMotion($header_top_a.eq(3),$header_top_span.eq(2));

var $login_user = $("#login_user");
var $login_word = $("#login_word");
var $login_login = $("#login_login");
var login_password_tishi = $("#login_password_tishi");
$login_login.on('click',function(){
	$.ajax({
		url:"http://localhost/php/login.php",
		success:function(data){	
			login_password_tishi.html(data);
		},
		type:'POST',
		data:{
			"username":$login_user.val(),
			"password":$login_word.val()
		}
	});
});



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
