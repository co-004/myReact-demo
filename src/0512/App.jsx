import { div } from "motion/react-client";
import { createContext, useContext, useState } from "react"
function App() {

    // 建立共用環境區域
    const UserContext = createContext({});
    //建立使用者變數
    const [username, setUsername] = useState('');
    // 建立登入鈕的控制
    const [isLogin, setIsLogin] = useState(false);
    // 建立登入元件
    const LoginForm = () => {
        // 因為要被放在共用區，所以要搬到App元件用
        const { username, setUsername, setIsLogin } = useContext(UserContext);
        return (
            <>
                <label htmlFor="username">使用者名稱：</label>
                <input
                    type="text"
                    id="username"
                    placeholder="請輸入使用者名稱"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="button" onClick={() => { setIsLogin(true) }}>登入</button>
            </>
        )
    }
    // 登入後的元件
    const Greeting = () => {
        //使用Hook中的UserContext，從UserContext中取得username
        const { username } = UserContext(UserContext);
        return (
            <div>Hi, {username}</div>
        )
    }
    // 登入後的歡迎元件
    return (
        <>

            <h1>useContext</h1>
            <hr style={{ marginBottom: "50px" }} />
            <UserContext.Provider value={{ username, setUsername, setIsLogin }} >
                {/* 使用者登入前
                <LoginForm />
                <br /> */}
                {/*使用者登入後 */}
                {/* <Greeting /> */}

                {
isLogin ? <Greeting username={username} /> : <LoginForm />
                }
            </UserContext.Provider>


        </>
    )
}
export default App