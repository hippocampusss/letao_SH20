

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