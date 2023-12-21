let toggleButtons = document.querySelectorAll(".item")

toggleButtons.forEach(el => {
    el.addEventListener("click", function (event){
        let childImg = this.querySelector("img");
        if (event.target === childImg || event.target === this.querySelector(".sub-title")) {
            const pEle = this.querySelector(".paragraph");
            // CSS文件中设置的样式，第一次点击必须这样才能获取到，因为不是JS赋值的
            const computedStyle = window.getComputedStyle(pEle);
            if (computedStyle.display === 'none' ) {
                pEle.style.display = 'block';
                childImg.src = "assets/images/icon-minus.svg";
            } else {
                pEle.style.display = 'none';
                childImg.src = "assets/images/icon-plus.svg";
            }
        }

    })
})
