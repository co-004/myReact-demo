function Component() {
    return <h1>React</h1>
}

function App() {
    // 建立陣列1；陣列內容可以是屬性、方法、元件
    // 同陣列中，key屬性的值不可重複
    const listItem = [
        <Component key="4" />,
        <Component key="5" />

    ]
    //建立陣列2 
    const listBooks = [
        { bookName: 'HTML', id: 'book1' },
        { bookName: 'CSS', id: 'book2' },
        { bookName: 'JavaScript', id: 'book3' },
        { bookName: 'React', id: 'book4' },

    ]
    // 過濾出陣列中，除了css的書本
    const filterBooks = listBooks.filter((book) => {
        // 書本名稱若非CSS，便保留
        if (book.bookName != 'CSS') {
            return true
        }
    })
    return (
        <>
            {/*使用陣列方法1*/}
            {listItem}
            <hr />

            {/*使用陣列方法2:map方法*/}
            {
                listBooks.map((book) => {
                    return <div key={book.id}>{book.bookName}</div>
                })
            }
            <hr />

            {/*顯示Filter()過濾後的陣列資料*/}
            {
                filterBooks.map((book) => {
                    return <div key={book.id}>{book.bookName}</div>
                })
            }

        </>
    )
}
export default App