$(function () {
  //1.表单校验
  $('#form').bootstrapValidator({
    
    feedbackIcons: {
      // 校验成功的
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    //配置字段
    fields: {
      //配置对应名字段
      username: {
        //配置校验规则
        validators: {
          //配置不能为空
          notEmpty: {
            message: "用户名不能为空"
          },
          //配置字符长度
          stringLength: {
            min: 2,
            max: 6,
            message: "用户名必须在2-6位"
          },
          callback: {
            message: "用户名不存在"
          }
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: "密码不能为空"
          },
          stringLength: {
            min: 6,
            max: 12,
            message: "密码长度必须在6-12位"
          },
          callback: {
            message: "密码错误"
            
          }
        }
      }
    }
  });
  //2.基本登录功能
  $('#form').on('success.form.bv', function (e) {
    //阻止默认的提交
    e.preventDefault();
    
    //使用ajax提交逻辑
    
    $.ajax({
      type: "POST",
      url: "/employee/employeeLogin",
      dataType: "json",
      data: $('#form').serialize(),
      success: function (info) {
        console.log(info);
        if(info.success){
          location.href = 'index.html';
        }
        if(info.error === 1000){
          $('#form').data("bootstrapValidator").updateStatus("username","INVALID","callback");
        }
        if(info.error === 1001){
          $('#form').data("bootstrapValidator").updateStatus("password","INVALID","callback");
        }
      }
    })
  });
  
  //3.重置功能
  $('[type="reset"]').click(function(){
    $('#form').data('bootstrapValidator').resetForm(true);
  })
});

