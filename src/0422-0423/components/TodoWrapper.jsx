import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"

function TodoWrapper() {
    // 因為有N個Todo，所以用陣列存放物件資料
    const [todos, setTodos] = useState([
        { content: '野餐曬太陽', id: Math.random(), isCompleted: false, isEdit: false },
        { content: '吃飯看電影', id: Math.random(), isCompleted: false, isEdit: false },
        { content: '唱歌彈吉他', id: Math.random(), isCompleted: false, isEdit: false },
        { content: '游泳吃涼麵', id: Math.random(), isCompleted: false, isEdit: false },
        { content: '打球看日出', id: Math.random(), isCompleted: false, isEdit: false },
        { content: '散步玩飛盤', id: Math.random(), isCompleted: false, isEdit: false },
    ])

    // 建立加入新的todo內容函式
    // 其餘運算子(...名稱)
    const addTodo = (newContent) => {
        setTodos([...todos, { content: newContent, id: Math.random(), isCompleted: false, isEdit: false }])
    }
    // 建立刪除todo函式
    // 傳入被刪除的id
    const delTodo = (id) => {
        setTodos(todos.filter((todo) => {
            // 使用filter方法，保留不被刪除的id
            return todo.id !== id
        }))
    }
    // 切換是否被點擊的狀態，更改原本isCompleted值
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        }))
    }
    // 建立切換isEdit屬性質函式，傳給Todo元件使用
    const toggleIsEdit = (id) => {
        setTodos(todos.map(() => {
            return todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
        }))
    }

    // 建立完成修改的函式
    // 修改完成後，會異動兩個值
    // content =>新的修改內容
    // isEdit => 改回false
    const editTodo = (id, newContent) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, content: newContent, isEdit: false }
                : todo
        }))
    }

    return (
        <div className="wrapper">
            <h1>待辦事項</h1>
            <CreateForm addTodo={addTodo} />
            {
                todos.map((todo) => {
                    return <Todo
                        todo={todo}
                        key={todo.id}
                        delTodo={delTodo}
                        toggleCompleted={toggleCompleted}
                        toggleIsEdit={toggleIsEdit}
                        editTodo={editTodo}
                    />
                })
            }
        </div>
    )
}
export default TodoWrapper