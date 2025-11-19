import { useState } from "react";
import "../styles/search.css";
import { FoodCategory } from "../components/FoodCategory";

const MockCategory = [
  "과자류·빵류 또는 떡류",
  "빙과류",
  "코코아가공품류 또는 초콜릿류",
  "당류",
  "잼류",
  "두부류 또는 묵류",
  "식용유지류",
  "면류",
  "음료류",
  "특수영양식품",
  "특수의료용도식품",
  "장류",
  "조미식품",
  "절임류 또는 조림류",
  "주류",
  "농산가공식품류",
  "식육가공품 및 포장육",
  "알가공품류",
  "유가공품류",
  "수산가공식품류",
  "동물성가공식품류",
  "즉석식품류",
  "기타식품류",
];

const MockCategoryList = {
  "과자류·빵류 또는 떡류": [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  빙과류: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  "코코아가공품류 또는 초콜릿류": [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  당류: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  잼류: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  "두부류 또는 묵류": [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  식용유지류: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  면류: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  음료류: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  특수영양식품: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  특수의료용도식품: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  장류: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  조미식품: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  "절임류 또는 조림류": [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  주류: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  농산가공식품류: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  "식육가공품 및 포장육": [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  알가공품류: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  유가공품류: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  수산가공식품류: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  동물성가공식품류: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  즉석식품류: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  기타식품류: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
};

export default function Search() {
  const [searchButtonInput, setSearchButtonInput] = useState(false);
  const [ToggleTopic, setToggleTopic] = useState(true);
  const [CategorySelect, setCategorySelect] = useState(0);
  const [TableSelect, setTableSelect] = useState(null);
  const [SearchValue, setSearchValue] = useState("");
  const [Shaking, setShaking] = useState(false);
  const [ButtonText, setButtonText] = useState("선택하기");

  const onSearchModal = () => {
    setSearchButtonInput(!searchButtonInput);
    // console.log("검색모달인풋")
  };

  const onToggleTopic = () => {
    setToggleTopic(!ToggleTopic);
  };

  const onCategorySelect = (index) => {
    setCategorySelect(index);
  };

  const onTableSelect = (index) => {
    if (TableSelect === index) {
      setTableSelect(null);
      return;
    }
    setTableSelect(index);
  };

  const onSearchItem = () => {
    const SearchedItem = { Category: null, CategoryItem: null };
    MockCategory.filter((item, index) => {
      return MockCategoryList[item].filter((value, idx) => {
        if (value === SearchValue) {
          SearchedItem["Category"] = index;
          SearchedItem["CategoryItem"] = value;
        }
      });
    });

    // console.log(SearchedItem)

    if (
      !(
        SearchedItem["Category"] === null ||
        SearchedItem["CategoryItem"] === null
      )
    ) {
      onTableSelect(SearchedItem["CategoryItem"]);
      onCategorySelect(SearchedItem["Category"]);
    } else {
      onTableSelect(null);
    }
  };

  const CurrentValue = (e) => {
    const target = e.target;
    // console.log("target: ", target)
    setSearchValue(target.value);
  };

  const onSelectItem = () => {
    if (TableSelect === null) {
      setShaking(true);
      setButtonText("입력하세요");
      setTimeout(() => {
        setButtonText("선택하기");
      }, 500);
    } else {
      onSearchModal();
    }
  };

  return (
    <div id="Search">
      <div id="MainContent">
        <div id="search_area" onClick={onSearchModal}>
          <span>원하는 정보를 검색하세요!</span>
          <div id="search_button">
            <img src="a" alt="돋보기" />
            <span>검색하기</span>
          </div>
        </div>
        {searchButtonInput ? (
          <div id="searchModal">
            <div id="searchModalBody">
              <div id="ToggleMainTopic" onClick={onToggleTopic}>
                <div id="Slider">
                  <div id="word" className={ToggleTopic ? "left" : "right"}>
                    {ToggleTopic ? "당" : "음식"}
                  </div>
                </div>
              </div>
              <div id="InputArea">
                <input
                  type="text"
                  id="CategoryInput"
                  placeholder="검색어를 입력하세요."
                  onChange={CurrentValue}
                  value={SearchValue}
                />
                <span>
                  <img src="" alt="돋보기" onClick={onSearchItem} />
                </span>
              </div>
              {!ToggleTopic ? (
                <FoodCategory
                  MockCategoryList={MockCategoryList}
                  onCategorySelect={onCategorySelect}
                  CategorySelect={CategorySelect}
                  TableSelect={TableSelect}
                  onTableSelect={onTableSelect}
                  MockCategory={MockCategory}
                />
              ) : (
                <div>당</div>
              )}
              <div id="ReturnArea">
                {TableSelect === null ? (
                  <span id="NullText">선택해주세요!</span>
                ) : (
                  <span id="SelectedText">
                    {
                      MockCategoryList[MockCategory[CategorySelect]][
                        TableSelect
                      ]
                    }
                  </span>
                )}
                <button id="SubmitButton" onClick={onSelectItem}>
                  {ButtonText}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>닫힘</div>
        )}
      </div>
    </div>
  );
}
