window.addEventListener("load", () => {
  // 封装一个轮播图
  class banner {
    constructor({array, wrapperName, wrapperWidth,isoOpactive,arrText=false}) {
      this.array = array;
      this.wrapperName = wrapperName;
      // li的宽度
      this.wrapperWidth = wrapperWidth;
      this.banner = true;
      // 轮播小按钮的文字
      this.arrText = arrText;
    }

    // 创建普通结构
    create() {
      let picWrapper = document.createElement("div");
      picWrapper.className = "picWrapper";
      picWrapper.style.width = `${this.wrapperWidth}px`
      let ul = document.createElement("ul");
      ul.className = "pics";
      // 设置ul的宽度
      ul.style.width = `${this.wrapperWidth * this.array.length}px`;
      this.array.forEach((item, index) => {
        let li = document.createElement("li");
        li.style.width = `${this.wrapperWidth}px`;
        let img = document.createElement("img");
        // 将数组的值，放入img的src中
        img.src = item;
        // 将img添加到li中
        li.appendChild(img);
        // 将创建的li的结构添加到ul中
        ul.appendChild(li);
      });
      // 将ul添加到picWrapper中
      picWrapper.appendChild(ul);
      // 将此元素添加到页面中
      // 测试使用
      let banner = document.getElementsByClassName(`${this.wrapperName}`)[0];
      banner.appendChild(picWrapper);
      return banner.lastElementChild;
    }
    // 创建a标签的按钮
    create_arrow() {
      let div_arrow = document.createElement("div");
      div_arrow.className = "arrow";
      let a1 = document.createElement("a");
      a1.className = "btn_a prev";
      // 添加
      div_arrow.appendChild(a1);
      let a2 = document.createElement("a");
      a2.className = "btn_a next";
      div_arrow.appendChild(a2);
      // 将a添加到banner中
      this.create().appendChild(div_arrow);
      return banner.lastElementChild
    }
    // 创建轮播小按钮
    create_smList() { 
      let ul = document.createElement("ul");
      ul.className = "mark clearfix";
      if (this.arrText) {
        this.arrText.forEach((item, index) => {
          let li = document.createElement("li");
          let span = document.createElement("span");
          span.innerHTML = item;
          // 将span添加到li中
          li.appendChild(span)
          // 将li放如ul中
          ul.appendChild(li)
        })

      }
      // 将ul添加到sm_list中，再将sm_list添加到框架中
      let sm_list = document.createElement("div");
      sm_list.className = "sm_list"
      sm_list.appendChild(ul);
      this.create().appendChild( sm_list)
    };
  }

  // 测试
  let lilei = new banner({
    array: ["./img/picture/0054e45f-d73a-48d7-b045-5dae6a4046a47684.jpg_300x300.jpg", "bbb", "ccc"],
    wrapperName: "aaa",
    wrapperWidth: 320,
    isOpicaty: true,
    arrText:["925年度大促","你猜我买不买"]
  });
  // lilei.create();
  // lilei.create_smList()
});