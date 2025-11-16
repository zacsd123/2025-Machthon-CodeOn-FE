import { useState } from "react"
import "../styles/search.css"
import styled from "styled-components"

const MockCategory = ["카테고리1", "카테고리2", "카테고리3", "카테고리4", "카테고리5"]

const MockCategoryList = {"카테고리1": ["종류1", "종류2", "종류3", "종류4", "종류5", "종류6", "종류7", "종류8", "종류9", "종류10", "종류11", "종류12", "종류13", "종류14", "종류15", "종류16", "종류17", "종류18", "종류19", "종류20"],
                          "카테고리2": ["종류1", "종류2", "종류3", "종류4", "종류5", "종류6", "종류7", "종류8", "종류9", "종류10", "종류11", "종류12", "종류13", "종류14", "종류15", "종류16", "종류17", "종류18", "종류19", "종류20"],
                          "카테고리3": ["종류1", "종류2", "종류3", "종류4", "종류5", "종류6", "종류7", "종류8", "종류9", "종류10", "종류11", "종류12", "종류13", "종류14", "종류15", "종류16", "종류17", "종류18", "종류19", "종류20"],
                          "카테고리4": ["종류1", "종류2", "종류3", "종류4", "종류5", "종류6", "종류7", "종류8", "종류9", "종류10", "종류11", "종류12", "종류13", "종류14", "종류15", "종류16", "종류17", "종류18", "종류19", "종류20"],
                          "카테고리5": ["종류1", "종류2", "종류3", "종류4", "종류5", "종류6", "종류7", "종류8", "종류9", "종류10", "종류11", "종류12", "종류13", "종류14", "종류15", "종류16", "종류17", "종류18", "종류19", "종류20"]}

export default function Search() {

    const [searchButtonInput, setSearchButtonInput] = useState(false)
    const [ToggleTopic, setToggleTopic] = useState(true)
    const [CategorySelect, setCategorySelect] = useState(0)
    const [TableSelect, setTableSelect] = useState(null)

    const onSearchModal =  () => {
        setSearchButtonInput(!searchButtonInput)
        // console.log("검색모달인풋")
    }

    const onToggleTopic = () => {
        setToggleTopic(!ToggleTopic)
    }
    
    const onCategorySelect = (index) => {
        setCategorySelect(index)
    }

    const onTableSelect = (index) => {
        if (TableSelect === index) {
            setTableSelect(null)
            return
        }
        setTableSelect(index)
    }
    

    return (
        <div id="search">
            <div id="header">imheader</div>
            <div id="MainContent">
                <div id="search_area" onClick={onSearchModal}>
                    <span>원하는 정보를 검색하세요!</span>
                    <div id="search_button">
                        <img src="" alt="돋보기" />
                        <span>검색하기</span>
                    </div>
                </div>
                {searchButtonInput ? 
                <div id="searchModal">
                    <div id="searchModalBody">
                        <div id="ToggleMainTopic" onClick={onToggleTopic}>
                            <div id="Slider">
                                <div id="word" className={ToggleTopic ? "left" : "right"}>{ToggleTopic ? "당" : "음식"}</div>
                            </div>
                        </div>
                        <div id="InputArea"></div>
                        <ul id="Category">
                            {MockCategory.map((item, index) => {
                                return (
                                    <li key={index} className="CategoryItem" onClick={() => onCategorySelect(index)}>
                                        <span className={CategorySelect===index ? "active" : null}>{item}</span>
                                    </li>
                                    )
                            })}
                        </ul>
                        <div id="ListArea">
                            <table id="CategoryList">
                                <thead className="TableRow">
                                    <tr>
                                        <th>순서</th>
                                        <th>종류</th>
                                        <th>비고</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {MockCategory.map((item, index) => 
                                        (CategorySelect === index ? 
                                            MockCategoryList[item].map((subitem, subindex) => (
                                                <tr 
                                                key={subindex} 
                                                className={(TableSelect === subindex ? "tableActive " : "") + "TableItemRow"} 
                                                onClick={() => {onTableSelect(subindex)}}
                                                >
                                                    <td>{subindex+1}</td>
                                                    <td>{subitem}</td>
                                                    <td>비고란</td>
                                                </tr>
                                            ))                                         
                                            :
                                            null))}
                                </tbody>
                            </table>
                        </div>
                        <button onClick={onSearchModal}>dd</button>
                    </div>
                </div> 
                : 
                <div>닫힘</div>}
            </div>
        </div>
    )
}