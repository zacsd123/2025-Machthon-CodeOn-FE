import React, { useEffect, useState } from "react";
import * as M from "../styles/StyledMypageHistory";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import axios from "../axios/axios";

const MypageHistory = () => {
  const navigate = useNavigate();
  const [selectTab, setSelectTabl] = useState("food");
  const [report, setReport] = useState([]);
  const [food, setFood] = useState([]);
  const loadReport = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get("/api/mypage/history", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("reports:", response.data);
      setReport(response.data);
    } catch (error) {
      console.error("리포트 로드 실패", error);
    }
  };
  useEffect(() => {
    if (selectTab === "report") {
      loadReport();
    }
  }, [selectTab]);

  const loadFood = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get("/api/mypage/record/food", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("food:", response.data);
      setFood(response.data);
    } catch (error) {
      console.error("리포트 로드 실패", error);
    }
  };
  useEffect(() => {
    if (selectTab === "food") {
      loadFood();
    }
  }, [selectTab]);
  return (
    <M.Container>
      <M.Wrapper>
        <M.Menu>
          <M.Edit onClick={() => navigate("/mypage")}>개인정보 수정</M.Edit>
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
          
            <M.Food
              active={selectTab === "food"}
              onClick={() => setSelectTabl("food")}
            >
              기록한 음식
            </M.Food>
            <M.Divide></M.Divide>
            <M.Report
              active={selectTab === "report"}
              onClick={() => setSelectTabl("report")}
            >
              리포트
            </M.Report>
          </M.Category>
          {selectTab === "report" && (
            <M.Box>
              {report.length === 0 ? (
                <p>저장된 리포트가 없어요.</p>
              ) : (
                report.map((r) => (
                  <M.InfoBox
                    key={r.reportId} /*onClick={navigate("") 리포트로 이동}*/
                  >
                    <M.InfoTitle>{r.foodName}</M.InfoTitle>
                    <M.InfoLine></M.InfoLine>
                    <M.InfoText>{r.content}</M.InfoText>
                  </M.InfoBox>
                ))
              )}
            </M.Box>
          )}
          {selectTab === "food" && (
            <M.Box>
              {food.length === 0 ? (
                <p>기록한 음식이 없어요。</p>
              ) : (
                food.map((r, idx) => (
                  <M.InfoBox2
                    key={r.idx} /*onClick={navigate("") 리포트로 이동}*/
                  >
                    <M.InfoTitle>{r.foodName}</M.InfoTitle>
                    <M.InfoLine2></M.InfoLine2>
                    <M.InfoText2>
                      <p> 음식 카테고리: {r.foodCategoryName}</p>
                      <p> 칼로리: {r.totalKcal}kcal</p>
                      <p> 탄수화물: {r.totalCarbohydrate}</p>
                      <p> 단백질: {r.totalProtein}g</p>
                      <p> 지방: {r.totalFat}g</p>
                      <p> 당류: {r.totalSugar}g</p>
                      <p>
              
                        {r.sugarContains?.map((s, idx) => (
                          <p key={idx}>
                            {s.sugarName}: {s.gram} g
                          </p>
                        ))}
                      </p>
                    </M.InfoText2>
                  </M.InfoBox2>
                ))
              )}
            </M.Box>
          )}
        </M.CenterBox>
      </M.Wrapper>
    </M.Container>
  );
};
export default MypageHistory;
