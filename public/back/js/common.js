


//登录拦截
if( location.href.indexOf('login.html') === -1 ){
   $.ajax({
     type: 'get',
     url: '/employee/checkRootLogin',
     dataType: 'json',
     success: function( info ){
       if(info.error === 400){
         location.href = 'login.html';
       }
     }
   })
}

//进度条
$(document).ajaxStart(function() {
  // 开启进度条
  NProgress.start();
});


$(document).ajaxStop(function(){
  setTimeout(function(){
    NProgress.done();
  },500)
});


$(function(){
  //二级菜单切换
  $('.category').click(function(){
    $('.lt_aside .child').stop().slideToggle();
  });


//点击菜单按钮，进行菜单切换
  $('.icon_menu').click(function(){
    $('.lt_aside').toggleClass('hidemenu');
    $('.lt_topbar').toggleClass('hidemenu');
    $('.lt_main').toggleClass('hidemenu');
  });


//模态框
  $('.icon_logout').click(function(){
    $('#logoutModal').modal('show');
  });
  
  //点击模态框退出按钮
  $('#logoutBtn').click(function(){
    $.ajax({
      type: 'get',
      url: '/employee/employeeLogout',
      dataType: 'json',
      success: function(info){
        if(info.success){
          location.href = "login.html";
        }
      }
    })
  })
  
  
});