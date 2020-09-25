window.addEventListener("load", () => {
  // 获取记住密码的div
  let ckdiv = document.querySelector(".ckdiv");
  // console.log(ckdiv)
  // 获取i元素
  let checked = document.querySelector(".ckbox>i")
  // console.log(checked)
  ckdiv.onclick=function(){
    // 如果i上面有类名就清除类名，没有就添加
    if(checked.className){
      checked.className=""
    }else{
      checked.className="checked"
    }
  }
  // 用于切换表头
  let item = document.querySelectorAll(".item");
  console.log(item)
  item.forEach((item,index)=>{
    item.onclick=()=>{
      // 将样式设为默认
      
      
    }
  })
})