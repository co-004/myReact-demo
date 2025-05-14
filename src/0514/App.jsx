import { useEffect } from 'react'
import $ from 'jquery'
import './App.css'
import { BsDisplay } from 'react-icons/bs'
export default function App() {
    useEffect(() => {
        $(function () {
            // 變數宣告：

            // 取得所有按鈕(按鈕區)
            let setFilter = $('#filterBtn');
            // 取得按鈕中的超連結
            let filterBtn = setFilter.find('a');
            // ALL 按鈕
            let btnAll = $('allItem');
            // 取得所有篩選列表中的元素(圖片區)
            let setList = $('filterList');
            // 篩選列表中的li
            let filterList = setList.find('li');
            // 篩選列表的寬度
            let listWidth = filterList.outerWidth;

            // 按鈕被點擊
            filterBtn.on('click', function () {
                // 檢查是否被點選，否才執行
                if (!($(this).hasClass('active'))) {
                    // 目前被點選的按鈕類別將儲存到filterClass
                    var filterClass = $(this).attr('class');

                    // 使用 each() 方法
                    filterList.each(function () {
                        // 檢查li中是否有被篩選到的類別
                        if ($(this).hasClass(filterClass)) {
                            // yes => 顯示動畫(寬度延展、提升透明度顯示圖片)
                            $(this).css(
                                { display: 'block' }.stop().animate({width:listWidth},1500)
                        )
                            // find()方法中，使用全域選擇器 => * 選取所有filterList所有元素
                            $(this).find('*').stop().animate({opacity:'1'},1500);
                        } else {
                            // no =>隱藏
                            // 顯示動畫 (隱藏項目)
                            $(this).find('*').stop().animate({opacity:'0'},1000);
                            $(this).stop().animate({width:'0'},100, function(){
                                 $(this).css({ display: 'none' })
                            });

                           
                        }
                    })

                    // 清除所有按鈕上的active類別
                    filterBtn.removeClass('acitve');
                    // 目前被點選的按鈕加上active類別
                    $(this).addClass('active');
                }
            })

            // 全部顯示
            btnAll.on('click', function () {
                filterList.each(function () {
                    $(this).css({})
                    $(this).find('*')
                    $(this).css({ display: 'none' })

                })
            })
            // 重新載入時，All按鈕呈現被點選狀態
            btnAll.on('click');
        })
    }, [])
    return (
        <>
            <div id="wrapper">
                {/* 按鈕區 */}
                <div id="filterBtn">
                    <a href="javascript:;" className="allItem">ALL</a>
                    <a href="javascript:;" className="allItem">CATS</a>
                    <a href="javascript:;" className="allItem">FOOD</a>
                    <a href="javascript:;" className="allItem">VIEW</a>
                </div>
                {/* 圖片區 */}
                <div id="filterList">
                    <ul>
                        <li className="cats"><img src="./img/cats4.jpg" alt="" /></li>
                        <li className="view"><img src="./img/view1.jpg" alt="" /></li>
                        <li className="cats"><img src="./img/cats3.jpg" alt="" /></li>
                        <li className="food"><img src="./img/food3.jpg" alt="" /></li>
                        <li className="view"><img src="./img/view3.jpg" alt="" /></li>
                        <li className="cats"><img src="./img/cats1.jpg" alt="" /></li>
                        <li className="food"><img src="./img/food1.jpg" alt="" /></li>
                        <li className="view"><img src="./img/view2.jpg" alt="" /></li>
                        <li className="food"><img src="./img/food2.jpg" alt="" /></li>
                        <li className="cats"><img src="./img/cats5.jpg" alt="" /></li>
                        <li className="view"><img src="./img/view4.jpg" alt="" /></li>
                        <li className="cats"><img src="./img/cats6.jpg" alt="" /></li>
                        <li className="food"><img src="./img/food4.jpg" alt="" /></li>
                        <li className="cats"><img src="./img/cats2.jpg" alt="" /></li>
                        <li className="food"><img src="./img/food5.jpg" alt="" /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}