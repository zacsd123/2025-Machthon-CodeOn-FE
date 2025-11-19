import React, { useState } from "react";
import * as M from "../styles/StyledMypageHistory";
import { useNavigate } from "react-router-dom";

const MypageHistory = () => {
    const navigate = useNavigate();
    const [selectTab, setSelectTabl] = useState("sweet");
  return (
    <M.Container>
      <M.Header></M.Header>
      <M.Wrapper>
        <M.Menu>
          <M.Edit onClick={() => navigate("/mypage")}>
            개인정보 수정
          </M.Edit>
          <M.Sweet onClick={() => navigate("/mypage_sweet")}>
            당 기록 보기
          </M.Sweet>
          <M.History onClick={() => navigate("/mypage_history")}>
            저장 항목 보기
            <M.GrayLine></M.GrayLine>
            <M.OrangeLine></M.OrangeLine>
          </M.History>
        </M.Menu>
        <M.CenterBox>
            <M.Category>
                <M.CSweet
                    active={selectTab==="sweet"}
                    onClick={()=>setSelectTabl("sweet")}
                >
                    기록한 당
                </M.CSweet>
                <M.Divide></M.Divide>
                <M.Food
                    active={selectTab==="food"}
                    onClick={()=>setSelectTabl("food")}
                >기록한 음식</M.Food>
                <M.Divide></M.Divide>
                <M.Report
                    active={selectTab==="report"}
                    onClick={()=>setSelectTabl("report")}
                >리포트</M.Report>
            </M.Category>
            <M.InfoBox>
                <M.InfoTitle>당 이름</M.InfoTitle>
                <M.InfoLine></M.InfoLine>
                <M.InfoText>이런이런당이 있다</M.InfoText>
            </M.InfoBox>
        </M.CenterBox>
      </M.Wrapper>
      
    </M.Container>
  );
};
export default MypageHistory;
