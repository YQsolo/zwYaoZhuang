var new_element=document.createElement("script"); 
new_element.setAttribute("type","text/javascript"); 
new_element.setAttribute("src","../js/main.js");
document.body.appendChild(new_element); 
//------------------register注册-----------------------------
var $register_user = $('#register_user');
var $register_user_prompt = $('#register_user_prompt');
var user_RegularExpression = /^1[3|4|5|8][0-9]\d{4,8}$/;


var $register_word = $('#register_word');
var $register_word1 = $('#register_word1');
var $register_word_prompt = $('#register_word_prompt');
var $register_button = $('#register_button');
//验证密码是否一致

var user_name = false;
var pass_word = false;
$register_word1.on('blur',function(){
	if($register_word.val() === $register_word1.val()){
		$register_word_prompt.html('');
		pass_word = true;
	}
	else{
		$register_word_prompt.html('两次输入的密码不匹配');
		pass_word = false;
	}
});
//手机号是否符合标准
$register_user.on('blur',function(){
	var user = $register_user.val();
	if(user_RegularExpression.test(user)){
		$register_user_prompt.html('');
		$.ajax({
			url:"http://localhost/php/register.php",
			success:function(data){	
				$register_user_prompt.html(data);
				if(data == '账号已经存在'){
					user_name = false;
				}
				else{
					user_name = true;
				}
			},
			type:'POST',
			data:{
				"username":$register_user.val()
			}
		});		
	}
	else{
		$register_user_prompt.html('手机号格式有误,请重新输入');
		pass_word = false;
	}
	
});
$register_button.on('click',function(){
	if(user_name == true && pass_word == true){
		$.ajax({
			url:"http://localhost/php/register1.php",
			success:function(data){
				console.log(data);
			}, 	
			type:'POST',
			data:{
				"username":$register_user.val(),
				"password":$register_word.val()
			}
		});
	}
	else{
		console.log('--------------');
	}
});




















