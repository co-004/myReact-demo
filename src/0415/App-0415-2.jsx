import{useState} from 'react'
import r1 from '../assets/0415-img/r1.jpg'
import r2 from '../assets/0415-img/r2.jpg'

function App() {
    // 圖片陣列
    const arrPhotos = [r1, r2];
    // 目前圖片的狀態
    const [currentImg, setCurrentImg] = useState(0);
    return (
        <>
            <div className="main">
                {/*縮圖區*/}
                <div>
                    {/* <img src={r1} alt="" width="100" />
                    <img src={r2} alt="" width="100" /> */}
                    {
                        arrPhotos.map((photo, index) => {
                            return (
                                <img
                                    key={index} src={photo} alt="" width={100}
                                    // 當滑鼠碰到時，取得圖片索引編號，透過setCurrentImg方法更改
                                    onMouseOver={e => setCurrentImg(index)}
                                    // 變更滑鼠的形狀為手型icon
                                    style={{ cursor: "pointer" }}
                                />
                            )
                        })
                    }
                </div>

                {/*大圖區*/}
                <div>
                    <hr />
                    <img src={arrPhotos[currentImg]} alt="" width={300} />
                </div>
            </div>
        </>
    )
}
export default App