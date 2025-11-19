import { useEffect, useState } from "react";
import "../styles/search.css";

export const FoodCategory = ({MockCategoryList, onCategorySelect, CategorySelect, TableSelect, MockCategory, onTableSelect}) => {

    const [CateNum, setCateNum] = useState(0)

    const UpCageNum = () => {
        setCateNum(CateNum+1)
    }

    const DownCageNum = () => {
        setCateNum(CateNum-1)
    }

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
                ? MockCategoryList[item].map((subitem, subindex) => (
                    <tr
                      key={subindex}
                      className={
                        (TableSelect === subindex ? "tableActive " : "") +
                        "TableItemRow"
                      }
                      onClick={() => {
                        onTableSelect(subindex);
                      }}
                    >
                      <td>{subindex + 1}</td>
                      <td>{subitem}</td>
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
