// 用React的useState功能讓畫面有變化
import { useState } from 'react'
import r1 from '../assets/0415-img/r1.jpg'
import r2 from '../assets/0415-img/r2.jpg'
// 圖片清單內放?張圖
const arrPhtos = [r1,r2]
// 目前顯示的圖片編號, 改變目前顯示圖的方法, 初始值0=第一張
const [currentImg, setCurrentImg] = useState(0)
// 當滑鼠移過來，目前圖片切換成這張
{/* <img onMouseOver */}

function App() {
    return (
        <>
            <div className="main">
                {/*縮圖區*/}
                <div>
                    <img src={r1} alt="" width="100" />
                    
                    <img src={r2} alt="" width="100" />
                </div>
                {/*大圖區*/}
                <div>
                    <hr/>
                    <img src={r1} alt="" />
                    <img src={r2} alt="" />
                </div>
            </div>
        </>
    )
}
export default App