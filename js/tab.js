
//网红直播中心环境展示
    $(function(){
      // 页面加载完成
      $(".evrchoose li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".evrment").hide()
        // 默认内容部分是隐藏的
        $(".evrment:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
     $(".evrchoose li").click(function() {

         $(this).siblings('li').removeClass('evron');  // 删除其他兄弟元素的样式

         $(this).addClass('evron');    // 添加当前元素的样式

        });

     }); 
//普通人也能玩转短视频
    $(function(){
      // 页面加载完成
      $(".hot-list li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".hotman").hide()
        // 默认内容部分是隐藏的
        $(".hotman:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
     $(".hot-list li").click(function() {

         $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

         $(this).addClass('on');    // 添加当前元素的样式

        });

     }); 
//开启短视频电商
    $(function(){
      // 页面加载完成
      $(".swiper-list li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".swiper-slide").hide()
        // 默认内容部分是隐藏的
        $(".swiper-slide:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
     $(".swiper-list li").click(function() {

         $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

         $(this).addClass('on');    // 添加当前元素的样式

        });

     }); 