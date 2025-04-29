import { useEffect, useState } from "react"
import { LuArrowBigRight, LuArrowBigLeft } from "react-icons/lu";
export default function App() {
    // 建立目前背景圖的變數
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    // 建立輪播圖片的陣列物件
    const slides = [
        { url: "/img/r1.jpg", title: "photo-1" },
        { url: "/img/r2.jpg", title: "photo-2" },
        { url: "/img/r3.jpg", title: "photo-3" },
        { url: "/img/r4.jpg", title: "photo-4" },
    ]
    //當currentImgIndex值改變時，會觸發useEffect
    useEffect(() => {
        //每隔3秒呼叫nextSlide()換下一張
        const autoplay = setInterval(() => {
            // 就換下一張
            nextSlide();
        }, 3000);
        //每隔3秒後，移除autoplay，取得最新索引編號
        return () => clearInterval(autoplay);
    }, [currentImgIndex]);

    //下一張
    const nextSlide = () => {
        //取得索引編號，檢查是否為最後一張；
        // 是就回到第一張；否則跳下一張
        setCurrentImgIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
    }
    //上一張
    const prevSlide = () => {
        //取得索引編號，檢查是否為第一張；
        // 是就跳到最後一張；否則回到上一張
        setCurrentImgIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
    }

    //建立左右icon元件
    const Arrow = ({ direction, onClick }) => {
        return (
            // 擺放icon區域
            <div style={{
                position: "absolute",
                top: "50%",
                cursor: "pointer",
                color: "white",
                [direction]: "20px", //將icon拆開，調整左右留白間距
            }}>
                {
                    direction === "left" ? (
                        <LuArrowBigLeft size={50} onClick={onClick} />
                    ) : (
                        <LuArrowBigRight size={50} onClick={onClick} />
                    )
                }
            </div>

        )

    }

    return (
        <>
            {/*滿版最外層 */}
            <div className="wrapper" style={{
                maxWidth: "100vw",
                height: "100vh",
                margin: "auto",
            }}>
                {/*滿版背景輪播區 */}
                <div style={{
                    backgroundImage: `url(${slides[currentImgIndex].url})`,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    margin: "auto"
                }}>
                    {/*文字區 */}
                    <h1 style={{fontStyle:"bold", textAlign: "center", color: "#d3d3d3" ,backgroundColor: "green" }}>{slides[currentImgIndex].title}</h1>
                    {/*上一張 */}
                    <Arrow direction="left" onClick={prevSlide} />
                    {/*下一張 */}
                    <Arrow direction="right" onClick={nextSlide} />
                </div>

            </div>
        </>
    )
}