import React, { useEffect, useState } from "react";
import * as S from "../styles/StyledSweetList";
import axios from "../axios/axios";

const SweetList = ({ date }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const loadList = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;

        const res = await axios.get("/api/mypage/record", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: { date: formattedDate },
        });
        console.log("SweetList 응답:", res.data);
        setList(res.data.records);
      } catch (err) {
        console.error("리스트 조회 실패", err);
      }
    };
    if (date) {
      loadList();
    }
  }, [date]);

  return (
    <S.Box>
      <S.Title>섭취한 당</S.Title>
      <S.Line></S.Line>
      <>
        {list.length === 0 ? (
          <p style={{marginLeft:"18px"}}>저장된 리포트가 없어요.</p>
        ) : (
          list.flatMap((record, recordIdx) =>
            record.details.map((d, detailIdx) => (
              <S.List key={`${recordIdx}-${detailIdx}`}>
                <p>- {d.sugarNameKR}</p>
                <p>{d.amount}g</p>
              </S.List>
            ))
          )
        )}
      </>
    </S.Box>
  );
};

export default SweetList;
