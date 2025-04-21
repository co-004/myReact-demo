import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div>
            <ul>
                {/*<li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>*/
                }
                <li>
                    <Link to="/">首頁</Link>
                </li>
                <li>
                    <Link to="/about">關於我</Link>
                </li>
                <li>
                    <Link to="/news">最新消息</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar