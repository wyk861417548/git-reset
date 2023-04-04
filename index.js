console.log("你好")

const G = {
  // 防抖
  debounce:function(fn,wait){
    let timer = null
    return function(){
      const that = this,args = arguments;
      if(timer)clearTimeout(timer)
      timer = setTimeout(()=>{
        fn.apply(that,args)
      },wait)
    }
  },


  // 节流
  throttle:function(fn,wait){
    const timer = null;
    return function(){
      const that = this,args=arguments;
      if(!timer){
        timer = setTimeout(()=>{
          timer = null;
          fn.apply(that,args)
        },wait)
      }
    }
  }
}