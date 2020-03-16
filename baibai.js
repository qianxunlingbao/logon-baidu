$(function(){
  var t,
      a = $('input[type="button"]')


  //get dom elem
  var $user = $('#user'),
      $tel = $('#tel'),
      $password = $('#password'),
      $test = $('#test'),
      $btnCal = $('#login');

  /*calc button click event */
  $btnCal.click(function(){
    // validate if error return;
    if(!validate('#user') || !validate('#tel') || !validate('#test') || !validate('#password') ) return;

    });
  
  $user.focusout(function(){
    //if(!validate(width)) select this return;
    if(!one('#user')) $user.select();
  });
  $tel.focusout(function(){
    if(!two('#tel')) $tel.select();
  });
  $password.focusout(function(){
    if(!three('#password')) $tel.select();
  });
  $test.focusout(function(){
    if(!four('#test')) $tel.select();
  });

  
  function one(field){
    //get DOM error message
    var $data = $(field),
        $msg = $(field + '-validation-message');

    //validate 用户名
    if(!/^[A-Za-z0-9_\-\u4e00-\u9fa5]+/.test($data.val())){
      $msg.html('用户名仅支持中英文、数字和下划线，且不能为纯数字');
      $data.select();
      return false;
    }
    
    if(!/\D/.test($data.val())){
      $msg.html('用户名仅支持中英文、数字和下划线，且不能为纯数字');
      $data.select();
      return false;
    }
 
    $msg.html('');
    return true;

  }

    
  function two(field){
    //get DOM error message
    var $data = $(field),
        $msg = $(field + '-validation-message');

    //validate 手机号
    if(!/0?(13|14|15|18|17)[0-9]{9}/.test($data.val())){
      $msg.html('手机号码格式不正确');
      $data.select();
      return false;
    }
  
    $msg.html('');
    return true;

  }

  function three(field){
    //get DOM error message
    var $data = $(field),
        $msg = $(field + '-validation-message');

    //validate 密码
    if(!/(?=.*[a-zA-Z\d])(?=.*[a-zA-Z\W])(?=.*[\W\d])^.{6,22}$/.test($data.val())){
      $msg.html('密码设置不符合要求，至少含英文，数字，符号中的两种');
      $data.select();
      return false;
    }
    
    $msg.html('');
    return true;

  }
  
  function four(field){
    //get DOM error message
    var $data = $(field),
        $msg = $(field + '-validation-message'),
        timer,
        num = 5;
    timer = setInterval(function(){
      num--;
      if(num === 0){
        $msg.html('请求超时，请稍后再试！');
        $data.select();
        return false;
      }

    },1000);
  
    $msg.html('');
    return true;

  }


  function validate(field){
    //get DOM error message
    var $data = $(field),
        $msg = $(field + '-validation-message');


    // validate null
    if($data.val() === ''){
      $msg.html('不能为空!');
      $data.select();
      return false;
    }


    // validate number
    //if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
    //  $msg.html('必须是数字');
    //  $data.select();
    //  return false;
    //}


    // validate > 0
    if(Number($data.val()) < 0){
      $msg.html('必须大于零！');
      $data.select();
      return false;
    }

      // prompt error message
      // return false;
    
    $msg.html('');
    return true;
  }
});

