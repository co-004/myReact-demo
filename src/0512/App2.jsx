// import { table } from "motion/react-client";

// function App() {
//     // 建立表格資料
//     const prdData=[
//         {
//             id:1,
//             title:'prod1',
//             price:80,
//         },
//         {
//             id:2,
//             title:'prod2',
//             price:120,
//         },
//         {
//             id:2,
//             title:'prod2',
//             price:120,
//         },
//         {
//             id:3,
//             title:'prod3',
//             price:150,
//         },
//         {
//             id:4,
//             title:'prod4',
//             price:200,
//         },
//         {
//             id:5,
//             title:'prod5',
//             price:50,
//         }

//     ];
//     //建立表格元件
//     const ProdTable = ({filterProds}) => {
//         return (
//             <table>
                
//         )
//     }
//     //陣列變數
//     const [prods, setProds] =useState(prodData);
//     //排序變數，預設為遞增
//     const [ascending, setAscending]=useState(true);
//     //搜尋變數
//     const [search, setSearch]=useState('');
// return(
//     <>
//         <h1>useMemo搜尋與排序</h1>
//         <hr style={{marginBottom:'50px'}}/>
//         升降冪
//         <input type="text"
//         value={search}
//         onChange={(e)=> setSearch(e.target.value)} 
//         />
//         <br />
//         搜尋:
//         <input 
//         type="text"
//         value={search}
//         onChange={(e)=> setSearch(e.target.value)} 
//         />
//         {/*顯示結果:呼叫表格元件*/}
//         <prodTable filterProds = {filterProds}/>
//     </>

// )
// }
// export default App