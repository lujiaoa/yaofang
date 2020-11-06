window.addEventListener('load',()=>{
  //右侧div的点击事件
  // 1.获取右侧点击的div
  document.getElementsByClassName('morebtn')[0].onclick=()=>{
    // 获取要改变的div
    let details = document.getElementsByClassName('details')[0];
    // 获取要改变的div2
    let dedetailsActive = document.getElementsByClassName('details-active')[0];
    // 当第一块显示的时候，让第二块隐藏
    if(details.style.display == 'none'){
      details.style.display='block';
      dedetailsActive.style.display = 'none';
    }else{
      details.style.display='none';
      dedetailsActive.style.display = 'block';
    }
  }
})