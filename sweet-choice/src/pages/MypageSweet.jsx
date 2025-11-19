import React, { useState } from "react";
import * as M from "../styles/StyledMypageSweet";
import { useNavigate } from "react-router-dom";
import MypageCalendar from "../components/Calendar";
import SweetList from "../components/SweetList";
import Graph from "../components/Graph";

const MypageSweet = () => {
    const navigate = useNavigate();
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
            <M.GrayLine></M.GrayLine>
            <M.OrangeLine></M.OrangeLine>
          </M.Sweet>
          <M.History onClick={() => navigate("/mypage_history")}>
            저장 항목 보기
          </M.History>
        </M.Menu>
        <M.CenterBox>
            <M.Calendar>
              <MypageCalendar/>
            </M.Calendar>
            <M.SideBox>
              <SweetList/>
              <Graph/>
            </M.SideBox>
        </M.CenterBox>
      </M.Wrapper>
    </M.Container>
  );
};
export default MypageSweet;
