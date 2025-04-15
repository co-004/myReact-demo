import { useState } from "react";

// 子元件
function MyComponent() {
    // let count = 0;
    // 使用狀態(state)控制變數
    const[count, setCount]=useState(0);
    /*count 是目前的狀態值（初始值是 0）setCount 是用來更新 count 的方法*/
    const handleClick = () => {
        // count++;
        // 使用useState中的方法，改變count變數值
        setCount(count+1);
    }
    return (
        <>
            <button onClick={handleClick}>點擊次數:{count}</button>
        </>
    )
}
// 程式進入點
function App() {
    return (
        <>
            {/*呼叫子元件*/}
            {/*不同子元件之間的狀態互不影響*/}
            <MyComponent/>
            <MyComponent/>
            <MyComponent/>
        </>
    )
}
export default App
