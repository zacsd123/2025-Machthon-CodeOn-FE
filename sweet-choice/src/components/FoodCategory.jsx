import { use, useEffect, useState } from "react";
import "../styles/search.css";
import axios from "../axios/axios";

export const FoodCategory = ({
  onCategorySelect,
  CategorySelect, 
  TableSelect, 
  MockCategory=[], 
  onTableSelect, 
  setCategoryList, 
  CategoryList,
  UpCageNum,
  DownCageNum,
  CateNum
}) => {

  // console.log(MockCategory)



    useEffect(() => {
    const getCategoryList = async () => {
        const localUserData = localStorage.getItem("accessToken")
        const headers = {
          "authorization": `Bearer ${localUserData}`
        }
        
        try {
            const res = await axios.get(`/api/food/search/category?search=${MockCategory[CategorySelect+CateNum*5]}`, {
                 headers: headers
            });
            console.log(res.data)
            setCategoryList(res.data);
            
        } catch (e) {
            console.error(e);
            setCategoryList([]);
        }
    }
    getCategoryList()
}, [CategorySelect, CateNum]);

    const filterdCategory = MockCategory.filter((item, index) => (
        CateNum*5 <= index && index < (CateNum+1)*5
    ))
    // console.log(filterdCategory, CateNum)

  return (
    <div id="FoodCategory">
      <div id="CategoryRow">
        <span className="CountButton" onClick={DownCageNum}>PR</span>
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
        <span className="CountButton" onClick={UpCageNum}>NE</span>
      </div>
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
              CategorySelect === index
                ? 
                CategoryList.map((subitem, subindex) => (
                    <tr
                      key={subindex}
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
                : null
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
