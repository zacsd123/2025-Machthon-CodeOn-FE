import { useState } from "react";
import "../styles/search.css";
import { FoodCategory } from "../components/FoodCategory";
import axios from "../axios/axios";
import SugarSearch from "../components/SugarSearch";

const MockCategory = [
  "강냉이/팝콘",
  "마카롱/다쿠아즈",
  "비스킷/쿠키/크래커",
  "스낵과자",
  "웨이퍼",
  "일반과자",
  "전통과자",
  "마시멜로",
  "사탕",
  "양갱",
  "젤리",
  "캐러멜",
  "기타 사탕",
  "푸딩",
  "껌",
  "도넛",
  "머핀",
  "바게트/치아바타",
  "베이글",
  "기타 빵",
  "스콘",
  "식빵",
  "카스텔라",
  "케이크",
  "페이스트리",
  "크로켓",
  "파이/타르트",
  "만쥬",
  "프레즐",
  "피자",
  "핫도그",
  "호떡",
  "호빵/찐 빵",
  "곡물빵",
  "단팥빵",
  "또띠아/난",
  "마들렌",
  "모닝빵",
  "반제품/생지",
  "브라우니",
  "소금빵",
  "소보로빵",
  "앙금빵",
  "와플",
  "크림빵",
  "토스트/샌드위치",
  "팬케이크/크레이프",
  "풀빵",
  "호두과자",
  "휘낭시에",
  "떡",
  "아이스크림",
  "아이스밀크",
  "샤베트",
  "빙과",
  "초콜릿",
  "초콜릿과자",
  "초코파이",
  "코코아",
  "코코아매스",
  "기타 코코아가공품",
  "설탕",
  "시럽",
  "물엿",
  "덩어리엿",
  "당류가공품",
  "잼",
  "두부",
  "유부",
  "묵",
  "기타 두부 가공품",
  "기타 묵 가공품",
  "콩기름(대두유)",
  "옥수수기름(옥배유)",
  "유채씨유/카놀라유",
  "미강유(현미유)",
  "참기름",
  "들기름",
  "홍화유",
  "해바라기씨유",
  "땅콩기름(낙화생유)",
  "올리브유",
  "팜유",
  "고추씨기름",
  "식물성유지",
  "기타  식용유지",
  "아보카도오일",
  "포도씨유",
  "홍화씨유",
  "식용돈지",
  "혼합식용유",
  "향미유",
  "쇼트닝",
  "마가린",
  "식물성크림",
  "모조치즈",
  "어유",
  "국수",
  "기타면",
  "라면",
  "자장라면",
  "기타 라 면",
  "당면",
  "라이스페이퍼",
  "메밀국수/냉면국수",
  "볶음/비빔라면",
  "쌀국수",
  "우동면",
  "쫄면",
  "칼국수",
  "파스타",
  "라면과자",
  "침출차",
  "액상차",
  "고형차",
  "액상커피",
  "인스턴트커피",
  "원두/원두분말",
  "과·채주스",
  "과·채음료",
  "탄산음료",
  "탄산수",
  "두유",
  "발효음료",
  "유산균음료",
  "효모음료",
  "인삼/홍삼음료",
  "액상음료",
  "농축음료/베이스",
  "성장기용 조제식",
  "영·유아용 이유식",
  "체중조절용 조제식품",
  "임산·수유부용 식품",
  "고령자용 영양조제식품",
  "조제유류",
  "영아용 조제식",
  "환자용 식품",
  "메주",
  "간장",
  "청국장",
  "나토",
  "된장",
  "고추장",
  "춘장",
  "혼합장",
  "식초",
  "복합조미식품",
  "마요네즈",
  "토마토케첩",
  "분말스프",
  "드레싱",
  "기타 소스류",
  "카 레",
  "향신료",
  "소금",
  "고춧가루",
  "배추김치",
  "물김치",
  "기타김치",
  "김칫속",
  "장아찌",
  "단무지/피클",
  "과·채당절임",
  "기타 조림",
  "절임식품",
  "막걸리",
  "소주",
  "청주",
  "맥주",
  "과실주",
  "위스키",
  "리큐르",
  "고량주",
  "증류주",
  "밀가루",
  "땅콩버터",
  "견과류",
  "견과류 가공품",
  "시리얼",
  "과일가공품",
  "채소가공품",
  "두류가공품",
  "서류가공품",
  "기타 농산가공품",
  "빵가루",
  "부 침가루/튀김가루/믹스",
  "옥수수",
  "호박씨분말",
  "냉동과일",
  "건조과일(건과류)",
  "햄",
  "소시지",
  "베이컨",
  "육포",
  "양념육",
  "식육간편조리",
  "기타 식육가공품",
  "달걀/메추리알",
  "알함유가공품",
  "분유",
  "전지/탈지분유",
  "우유",
  "우유(멸균)",
  "강화우유",
  "농후발효유",
  "유당분해우유",
  "가공우유",
  "가공우유(멸균)",
  "발효유",
  "크림발효유",
  "연유",
  "유크림",
  "버터",
  "치즈",
  "유함유가공품",
  "어육가공품",
  "어묵",
  "고등어",
  "골뱅이",
  "꽁치",
  "연어",
  "정어리",
  "참치",
  "젓갈/액 젓",
  "조미건어포",
  "원재료성 수산가공품",
  "김",
  "김자반",
  "기타 수산가공품",
  "식용곤충",
  "곤충가공식품",
  "추출가공식품",
  "밥류",
  "누룽지",
  "주먹밥/김밥/초밥",
  "즉석 면요리",
  "죽",
  "스프",
  "국/탕류",
  "찌개/전골류",
  "전",
  "조림/찜",
  "함박스테이크/미트볼",
  "반찬",
  "도시락",
  "감자튀김",
  "튀김",
  "치킨",
  "떡볶이",
  "순대",
  "미숫가루/선식",
  "기타 시리얼",
  "시리얼바/에너지바/영양바",
  "즉석 빵",
  "버거",
  "샌드위치",
  "즉석 피자",
  "샐러드",
  "소스/드레싱",
  "육수",
  "기타 음료",
  "성장기 즉석식품",
  "체중조절용 즉석식품",
  "만두",
  "만두피",
  "기타 즉석식품",
  "기타가공품",
].sort(function (a, b) {
  return a.localeCompare(b);
});

const sugarList = [
  {
    EN: "galactose",
    KR: "갈락토오스",
  },
  {
    EN: "fructose",
    KR: "과당",
  },
  {
    EN: "honey",
    KR: "꿀",
  },
  {
    EN: "neotame",
    KR: "네오탐",
  },
  {
    EN: "sugar_alcohol",
    KR: "당알콜",
  },
  {
    EN: "maltitol",
    KR: "말티톨",
  },
  {
    EN: "maltose",
    KR: "맥아당",
  },
  {
    EN: "saccharin",
    KR: "사카린",
  },
  {
    EN: "sorbitol",
    KR: "소르비톨",
  },
  {
    EN: "sucralose",
    KR: "수크랄로스",
  },
  {
    EN: "stevia",
    KR: "스테비올배당체",
  },
  {
    EN: "acesulfame_K",
    KR: "아세설팜칼륨",
  },
  {
    EN: "aspartame",
    KR: "아스파탐",
  },
  {
    EN: "allulose",
    KR: "알룰로오스",
  },
  {
    EN: "HFCS",
    KR: "액상과당",
  },
  {
    EN: "erythritol",
    KR: "에리스리톨",
  },
  {
    EN: "oligosaccharide",
    KR: "올리고당",
  },
  {
    EN: "lactose",
    KR: "유당",
  },
  {
    EN: "isomalt",
    KR: "이소말트",
  },
  {
    EN: "sucrose",
    KR: "자당",
  },
  {
    EN: "xylitol",
    KR: "자일리톨",
  },
  {
    EN: "tagatose",
    KR: "타가토스",
  },
  {
    EN: "glucose",
    KR: "포도당",
  },
];

export default function Search() {
  const [searchButtonInput, setSearchButtonInput] = useState(false);
  const [ToggleTopic, setToggleTopic] = useState(true);
  const [CategorySelect, setCategorySelect] = useState(0);
  const [TableSelect, setTableSelect] = useState(null);
  const [SearchValue, setSearchValue] = useState("");
  const [Shaking, setShaking] = useState(false);
  const [ButtonText, setButtonText] = useState("선택하기");
  const [CategoryList, setCategoryList] = useState([]);
  const [food, setFood] = useState(null);
  const [foods, setFoods] = useState([]);
  const [SelectedSugar, setSelectedSugar] = useState(null);

  const onSugarSelect = (sugarKR) => {
    if (SelectedSugar === sugarKR) {
      setSelectedSugar(null);
    } else {
      setSelectedSugar(sugarKR);
    }
  };

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
      // return MockCategoryList[item].filter((value, idx) => {
      //   if (value === SearchValue) {
      //     SearchedItem["Category"] = index;
      //     SearchedItem["CategoryItem"] = value;
      //   }
      // });
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
      const getFoodDetail = async () => {
        const localUserData = localStorage.getItem("accessToken");
        const headers = {
          authorization: `Bearer ${localUserData}`,
        };
        try {
          const res = await axios.get(
            `/api/food/search/detail?foodId=${TableSelect}`,
            {
              headers: headers,
            }
          );
          console.log(res.data);
          setFood(res.data);
        } catch (e) {
          console.log(e);
        }
      };

      getFoodDetail();
      onSearchModal();
    }
  };

  const [CateNum, setCateNum] = useState(0);

  const UpCageNum = () => {
    setCateNum(CateNum + 1);
  };

  const DownCageNum = () => {
    setCateNum(CateNum - 1);
  };

  const goReport = () => {
    if (TableSelect === null) {
      alert("식품을 선택해주세요");
      return;
    } else {
      const getReportData = async () => {
        const localUserData = localStorage.getItem("accessToken");
        const headers = {
          authorization: `Bearer ${localUserData}`,
          "Content-Type": "application/json",
        };

        const foodIdNumber = Number(TableSelect);

        console.log("전송될 foodId:", foodIdNumber, typeof foodIdNumber);

        const body = foodIdNumber;

        try {
          const res = await axios.post("/api/analysis/report", body, {
            headers: headers,
          });
          console.log("리포트 데이터 수신 성공:", res.data);
        } catch (e) {
          console.error("리포트 요청 오류 (400):", e);
          if (e.response && e.response.data) {
            alert(
              `리포트 요청 실패: ${e.response.status} - ${
                e.response.data.message || "요청 형식 오류"
              }`
            );
          } else {
            alert("리포트 요청 실패: 네트워크 또는 예상치 못한 서버 오류");
          }
        }
      };
      getReportData();
    }
  };

  const goFoods = () => {
    const getFoods = async () => {
      try {
        const localUserData = localStorage.getItem("accessToken");
        const headers = {
          authorization: `Bearer ${localUserData}`,
        };
        const res = await axios.get(`/api/food/search/sugar?search=${SelectedSugar}`, {
          headers:headers
        })
        setFoods(res.data)
        console.log(res.data)
      } catch (e) {
        console.log(e)
      }
    }
    getFoods()
      onSearchModal();
    
  }

  return (
    <div id="Search">
      <div id="MainContent">
        <div id="search_area" onClick={onSearchModal}>
          <span onClick={onSearchModal}>원하는 정보를 검색하세요!</span>
          <div id="search_button">
            <img src="a" alt="돋보기" onClick={onSearchModal} />
            <span onClick={onSearchModal}>검색하기</span>
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
                  <img alt="돋보기" onClick={onSearchItem} />
                </span>
              </div>
              {!ToggleTopic ? (
                <FoodCategory
                  onCategorySelect={onCategorySelect}
                  CategorySelect={CategorySelect}
                  TableSelect={TableSelect}
                  onTableSelect={onTableSelect}
                  MockCategory={MockCategory}
                  setCategoryList={setCategoryList}
                  CategoryList={CategoryList}
                  UpCageNum={UpCageNum}
                  DownCageNum={DownCageNum}
                  CateNum={CateNum}
                />
              ) : (
                <SugarSearch
                  sugarList={sugarList}
                  SelectedSugar={SelectedSugar}
                  onSugarSelect={onSugarSelect}
                />
              )}
              <div id="ReturnArea">
                <button id="SubmitButton" onClick={!ToggleTopic ? onSelectItem : goFoods}>
                  {ButtonText}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div id="resultTable">
            {(food && !ToggleTopic) && (
              <table className="food-info-table">
                <thead>
                  <tr>
                    <th className="order-col">순서</th>
                    <th className="type-col">종류</th>
                    <th className="note-col">비고</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="food-name-row">
                    <td>1</td>
                    <td>
                      <strong>{food.foodName}</strong>
                    </td>
                    <td>{food.foodCategoryName}</td>
                  </tr>
                  <tr>
                    <td className="nutrition-label">열량</td>
                    <td className="nutrition-value">{food.kcal}</td>
                    <td className="nutrition-label">(Kcal)</td>
                  </tr>
                  <tr>
                    <td className="nutrition-label">탄수화물</td>
                    <td className="nutrition-value">
                      {food.carbohydrate.toFixed(1)}
                    </td>
                    <td className="nutrition-label">(g)</td>
                  </tr>
                  <tr>
                    <td className="nutrition-label">당류</td>
                    <td className="nutrition-value">
                      {food.totalSugar.toFixed(1)}
                    </td>
                    <td className="nutrition-label">(g)</td>
                  </tr>
                  <tr>
                    <td className="nutrition-label">단백질</td>
                    <td className="nutrition-value">
                      {food.protein.toFixed(1)}
                    </td>
                    <td className="nutrition-label">(g)</td>
                  </tr>
                  <tr>
                    <td className="nutrition-label">지방</td>
                    <td className="nutrition-value">{food.fat.toFixed(1)}</td>
                    <td className="nutrition-label">(g)</td>
                  </tr>
                </tbody>
              </table>
            )}
            {(!food&& ToggleTopic) && foods.map((item, index) => (
              <div key={index}>{item.foodName}</div>
            ))}
          </div>
        )}

        <span onClick={goReport}>리포트보기</span>
      </div>
    </div>
  );
}
