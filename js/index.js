//搜索框事件
//
window.addEventListener("load", () => {
    
    // 控制--详情列表的--隐藏和现实
    let yao_sort = document.querySelectorAll(".yao_sort");
    // console.log( yao_sort )
    // 查找详情区域
    let sub_detail = document.querySelectorAll(".sub_detail");
    // 获取大的列表
    let yao_list = document.querySelector(".yao_list");

    // 添加鼠标移入监听
    yao_sort.forEach((item, index) => { 

        // let i = index;
        item.onmouseover = () => { 
            item.style.backgroundColor="#f4f4f4"
            sub_detail[index].style.display = "block";
        }
        // 元素移出监听
        item.onmouseout = (e) => { 
            item.style.backgroundColor = "#fff";
            sub_detail[index].style.display = "none";
        }

    })
    
    // 控制输入框的文字
    // 获取选择框文字
    let op_li= document.querySelectorAll(".op_list>li")
    // console.log(op_li)
    // 获取搜索框
    let input = document.getElementById("input");
    // 获取第一个li的值
    let option = document.getElementsByClassName("option")[0];
    // console.log(option)
    op_li.forEach((item, index) => { 
        item.onclick = () => { 
            // console.log(index)
            let text = item.textContent;
            var newtxt = `请输入${text.trim()}名称 `;
            // 将值赋给输入框
            input.placeholder = newtxt;
            let aaa = item.innerHTML;
            item.innerHTML = option.innerHTML;
            option.innerHTML = aaa;
        }
    })

    // 用来修改底部问背景图片
    let cert_list = document.querySelectorAll(".cert>li>a");
    // console.log(cert_list)
    let count = 0
    cert_list.forEach((item, index) => { 
        count = index * -40;
        item.style.backgroundPosition = `0 ${count}px`;
    })

    

})