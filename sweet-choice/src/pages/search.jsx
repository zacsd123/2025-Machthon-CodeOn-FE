import { useState } from "react"
import "../styles/search.css"

const MockCategory = ["카테고리1", "카테고리2", "카테고리3", "카테고리4", "카테고리5"]

const MockCategoryList = {"카테고리1": ["종류1", "종류2", "종류3", "종류4", "종류5", "종류6", "종류7", "종류8", "종류9", "종류10", "종류11", "종류12", "종류13", "종류14", "종류15", "종류16", "종류17", "종류18", "종류19", "종류20"],
                          "카테고리2": ["종류21", "종류22", "종류23", "종류24", "종류25", "종류26", "종류27", "종류28", "종류29", "종류30", "종류31", "종류32", "종류33", "종류34", "종류35", "종류36", "종류37", "종류38", "종류39", "종류40"],
                          "카테고리3": ["종류41", "종류42", "종류43", "종류44", "종류45", "종류46", "종류47", "종류48", "종류49", "종류50", "종류51", "종류52", "종류53", "종류54", "종류55", "종류56", "종류57", "종류58", "종류59", "종류60"],
                          "카테고리4": ["종류61", "종류62", "종류63", "종류64", "종류65", "종류66", "종류67", "종류68", "종류69", "종류70", "종류71", "종류72", "종류73", "종류74", "종류75", "종류76", "종류77", "종류78", "종류79", "종류80"],
                          "카테고리5": ["종류81", "종류82", "종류83", "종류84", "종류85", "종류86", "종류87", "종류88", "종류89", "종류90", "종류91", "종류92", "종류93", "종류94", "종류95", "종류96", "종류97", "종류98", "종류99", "종류100"]}

export default function Search() {

    const [searchButtonInput, setSearchButtonInput] = useState(false)
    const [ToggleTopic, setToggleTopic] = useState(true)
    const [CategorySelect, setCategorySelect] = useState(0)
    const [TableSelect, setTableSelect] = useState(null)
    const [SearchValue, setSearchValue] = useState("")
    const [Shaking, setShaking] = useState(false)
    const [ButtonText, setButtonText] = useState("선택하기")

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

    const onSearchItem = () => {
        const SearchedItem = {"Category": null, "CategoryItem": null}
        MockCategory.filter((item, index) => {
            return MockCategoryList[item].filter((value, idx) => {
                if (value === SearchValue) {
                    SearchedItem["Category"] = index
                    SearchedItem["CategoryItem"] = value
                }
            })
        })

        // console.log(SearchedItem)

        if (!(SearchedItem["Category"] === null || SearchedItem["CategoryItem"] === null)) {
            onTableSelect(SearchedItem["CategoryItem"])
            onCategorySelect(SearchedItem["Category"])
        } else {
            onTableSelect(null)
        }
    }

    const CurrentValue = (e) => {
        const target = e.target
        // console.log("target: ", target)
        setSearchValue(target.value)
    }

    const onSelectItem = () => {
        if (TableSelect === null) {
            setShaking(true)
            setButtonText("입력하세요")
            setTimeout(() => {
                setButtonText("선택하기")
            }, 500);
        } else {
            onSearchModal()
        }
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
                        <div id="InputArea">
                            <input type="text" id="CategoryInput" placeholder="검색어를 입력하세요." onChange={CurrentValue} value={SearchValue}/>
                            <span><img src="" alt="돋보기" onClick={onSearchItem}/></span>
                        </div>
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
                                            null)
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div id="ReturnArea">
                            {TableSelect === null ? 
                            <span id="NullText">선택해주세요!</span>
                            :
                            <span id="SelectedText">{MockCategoryList[MockCategory[CategorySelect]][TableSelect]}</span>
                            }
                            <button id="SubmitButton" onClick={onSelectItem}>{ButtonText}</button>
                        </div>
                    </div>
                </div> 
                : 
                <div>닫힘</div>}
            </div>
        </div>
    )
}