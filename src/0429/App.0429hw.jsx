import {useState} from "react";
function App() {
    
// 取得標籤
const pages = [
    document.querySelector("#Page0"),
    document.querySelector("#Page1"),
    document.querySelector("#Page2"),
    document.querySelector("#Page3"),
]
// 起始頁面
let currentPage = 0
// 顯示頁面
function showPage() {
    for (let i = 0; i < pages.length; i++) {
        if (i === currentPage) {
            // 顯示此頁面
            pages[i].style.display = "block";
        } else {
            pages[i].style.display = "none";  // 隱藏其他頁面
        }
    }
}

// 下一頁
function Next() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage()
    }
}

// 上一頁
function Previous() {
    if (currentPage > 0) {
        currentPage--;
        showPage()
    }
}
return(
showPage()
    )
    
}
        
export default App