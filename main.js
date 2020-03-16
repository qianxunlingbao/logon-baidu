$(function(){
  var $btn = $('#testpass'),
      num = 60,
      timer;
  //定时器的时间响应
  timer = setInterval(function(){
    num--;
    if(num === -1){
      clearInterval(timer);
      $btn.val('验证码');
      $btn.removeAttr('disabled');
    }else{
      $btn.val('验证码(' + num + 's)');
    }
  },1000);

  $btn.click(function(){
    alert('验证码已发送，请注意查收！！！')
  });
})
