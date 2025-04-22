import { useState } from "react"
import { MdAdd } from "react-icons/md";

function CreateForm({ addTodo }) {
    // 建立input內容變數
    // const => 常數
    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        // 取消網頁預設行為，否則抓不到資料
        e.preventDefault();
        // 增加todo內容
        addTodo(content);
        // 清空input輸入列
        setContent('');
    }
    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="輸入待辦事項"
                value={content}
                // 雙向綁定
                // 當UI發生內容異動時，state會跟著改變
                // 當state改變時，UI也會跟著動
                onChange={(e) => {
                    setContent(e.target.value)
                }}
            />
            <button type="submit">
                <MdAdd 
                    style={{ cursor: 'pointer' }}
                />
            </button>
        </form>
    )
}
export default CreateForm