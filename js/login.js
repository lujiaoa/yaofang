window.addEventListener("load", () => {
  // 获取记住密码的div
  let ckdiv = document.querySelector(".ckdiv");
  // console.log(ckdiv)
  // 获取i元素
  let checked = document.querySelectorAll(".ckbox>i");
  // ckdiv.onclick=function(){
  //   // 如果i上面有类名就清除类名，没有就添加
  //   if(checked.className){
  //     checked.className=""
  //   }else{
  //     checked.className="checked"
  //   }
  // }

  checked.forEach((item, index) => {
    item.onclick =()=> {
      if (item.className) {
        item.className = "";
      } else {
        item.className = "checked";
      }
    };
  });
  // 用于切换表头
  let item = document.querySelectorAll(".item");
  item.forEach((item, index) => {
    item.onclick = () => {
      // console.log("aa")
      switch (index) {
        case 0:
          item.className = "item selected";
          document.querySelectorAll(".item")[1].className = "item";
          document.querySelectorAll(".form_div")[0].style.display = "block";
          document.querySelectorAll(".form_div")[1].style.display = "none";
          break;
        case 1:
          item.className = "item selected";
          document.querySelectorAll(".item")[0].className = "item";
          document.querySelectorAll(".form_div")[1].style.display = "block";
          document.querySelectorAll(".form_div")[0].style.display = "none";
          break;
      }
    };
  });
});
