import { use, useEffect, useState } from "react";
import "../styles/search.css";
import axios from "../axios/axios";

export const FoodCategory = ({
  onCategorySelect,
  CategorySelect,
  TableSelect,
  MockCategory = [],
  onTableSelect,
  setCategoryList,
  CategoryList,
  UpCageNum,
  DownCageNum,
  CateNum,
  isLoading,
  setIsLoading,
}) => {
  // console.log(MockCategory)

  useEffect(() => {
    const getCategoryList = async () => {
      setIsLoading(true)
      const localUserData = localStorage.getItem("accessToken");
      const headers = {
        authorization: `Bearer ${localUserData}`,
      };

      try {
        const res = await axios.get(
          `/api/food/search/category?search=${
            MockCategory[CategorySelect + CateNum * 5]
          }`,
          {
            headers: headers,
          }
        );
        console.log(res.data);
        setCategoryList(res.data);
      } catch (e) {
        console.error(e);
        setCategoryList([]);
      } finally {
        setIsLoading(false)
      }
    };
    getCategoryList();
  }, [CategorySelect, CateNum]);

  const filterdCategory = MockCategory.filter(
    (item, index) => CateNum * 5 <= index && index < (CateNum + 1) * 5
  );
  // console.log(filterdCategory, CateNum)

  return (
    <div id="FoodCategory">
      <div id="CategoryRow">
        <span className="CountButton" onClick={DownCageNum}>
          PR
        </span>
        <ul id="Category">
          {filterdCategory.map((item, index) => {
            return (
              <li
                key={index}
                className="CategoryItem"
                onClick={() => onCategorySelect(index)}
              >
                <span className={CategorySelect === index ? "active" : null}>
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
        <span className="CountButton" onClick={UpCageNum}>
          NE
        </span>
      </div>
      <div id="ListArea">
        {isLoading ? ( // <--- 로딩 상태 확인
      // 로딩 중일 때 표시할 화면
      <div id="LoadingScreen">
        <p>음식 정보를 불러오는 중입니다...</p>
        {/*  */}
        {/* 필요하다면 여기에 스피너 이미지나 아이콘을 넣습니다. */}
      </div>
    ) : (
        <table id="CategoryList">
          <thead className="TableRow">
            <tr>
              <th>순서</th>
              <th>종류</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            {/* CategoryList가 비어있지 않다면 무조건 렌더링 */}
            {CategoryList && CategoryList.length > 0 ? (
              CategoryList.map((subitem, subindex) => (
                <tr
                  key={subitem["foodId"]} // key는 item의 고유 ID를 사용하는 것이 좋습니다.
                  className={
                    (TableSelect === subitem["foodId"] ? "tableActive " : "") +
                    "TableItemRow"
                  }
                  onClick={() => {
                    onTableSelect(subitem["foodId"]);
                  }}
                >
                  <td>{subindex + 1}</td>
                  <td>{subitem["foodName"]}</td>
                  <td>비고란</td>
                </tr>
              ))
            ) : (
              <tr id="NoResult">
                <td colSpan="3">
                  {/* 키워드 검색 결과가 없거나, 카테고리 목록이 없는 경우 */}
                  검색 결과가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
    )}
      </div>
    </div>
  );
};
