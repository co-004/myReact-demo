import { useState } from "react"

// 建立元件(字首名稱大寫)
function Card({ person }) {
    // 解構資料
    const { name, age } = person

    return (
        <div ClassName="card">
            <div ClassName="card-body">
                {/*Hi, React.*/}
                {/*一般寫法 */}
                {/*Hi, {person.name} */}
                {/*解構寫法 */}

                Hi, {name} 今年{age}歲
            </div>
        </div>
    )
}

function App() {
    // 解構
    // 取出特定質作為變數
    const person = {
        name: '建仔',
        age: '10',
    }
    // 一般寫法
    // const name=person.name
    // const age=person.age
    // console.log(name, age)
    // 物件解構
    // const{name, age}=person;
    // console.log(name, age);
    // userState - ReactHook
    //     const [person, setPerson] = useState{{
    //         name:'建仔',
    //         age:'10'
    //     }
    // };

    return (
        <>
            {/*第一個person => 元件屬性*/}
            {/*第二個person => 變數(任何形式)*/}
            <Card person={person}></Card>
            <Card person2={person} />
        </>
    )
}
export default App