import React, { useEffect, useState } from "react";
import * as M from "../styles/StyledMypageEdit";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import axios from "../axios/axios";

const options = [
  { id: "A", label: "[A] 건강 / 다이어트" },
  { id: "B", label: "[B] 혈당 관리 / 전단계" },
  { id: "C", label: "[C] 당뇨 환자" },
];

const MypageEdit = () => {
  const [selectedId, setSelectedId] = useState("A");
  const selectedOption = options.find((o) => o.id === selectedId);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  const loadProfile = async () => {
    try {
      const accessToken =
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTFAdGVzdC5jb20iLCJpYXQiOjE3NjM3MDk5MzgsImV4cCI6MTc2MzcxMzUzOH0.fuguiDKVlrADiWqbjkbcej7aHVOMrhfpa8HQn6eGPTw";
      const response = await axios.get("/api/mypage/info/getUser", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("getUser data:", response.data);
      setProfile(response.data);
      if(response.data.userType)
        setSelectedId(response.data.userType);
    } catch (error) {
      console.error("프로필 조회 실패", error);
    }
  };
  useEffect(() => {
    loadProfile();
  }, []);
  const save = async() => {
    try{
      const accessToken =
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTFAdGVzdC5jb20iLCJpYXQiOjE3NjM3MDk5MzgsImV4cCI6MTc2MzcxMzUzOH0.fuguiDKVlrADiWqbjkbcej7aHVOMrhfpa8HQn6eGPTw";
      const body = {
        nickname : profile.nickname,
        password:  profile.password,
        height: profile.height,
        weight: profile.weight,
        userType: profile.userType,
      };
      console.log("PATCH 보내기 직전 body:", body); 
      const res = await axios.patch("/api/mypage/info/updateUser",body,{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
    }catch(error){
      console.error("회원정보 수정 실패", error);
    }
  };
  return (
    <M.Container>
      <M.Wrapper>
        <M.Menu>
          <M.Edit onClick={() => navigate("/mypage")}>
            개인정보 수정
            <M.GrayLine></M.GrayLine>
            <M.OrangeLine></M.OrangeLine>
          </M.Edit>
          <M.Sweet onClick={() => navigate("/mypage_sweet")}>
            당 기록 보기
          </M.Sweet>
          <M.History onClick={() => navigate("/mypage_history")}>
            저장 항목 보기
          </M.History>
        </M.Menu>
        <M.CenterBox>
          <M.WrapBox style={{ marginTop: "116px", marginLeft: "289px" }}>
            <M.WrapBox style={{ marginBottom: "31px" }}>
              <M.Title>닉네임</M.Title>
              <M.Input value={profile?.nickname} 
                onChange={(e)=> setProfile(prev => ({ ...prev, nickname: e.target.value}))}
              />
            </M.WrapBox>
            <M.WrapBox
              style={{ display: "flex", gap: "37px", marginBottom: "31px" }}
            >
              <M.WrapBox>
                <M.Title>비밀번호</M.Title>
                <M.Input type="password" value={profile?.password} onChange={(e)=> setProfile(prev => ({ ...prev, password: e.target.value}))} />
              </M.WrapBox>
              <M.WrapBox>
                <M.Title>비밀번호 확인</M.Title>
                <M.Input type="password" />
              </M.WrapBox>
            </M.WrapBox>

            <M.WrapBox style={{ marginBottom: "31px" }}>
              <M.Title>사용자 상태</M.Title>
              <M.SelectBox onClick={() => setIsOpen((prev) => !prev)}>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    width: "229px",
                    display: "inline-block",
                  }}
                >
                  {selectedOption?.label}
                </span>
                <img
                  style={{ marginLeft: "18px" }}
                  src={`${process.env.PUBLIC_URL}/images/dropdown.svg`}
                  alt="dropdown"
                />
              </M.SelectBox>

              {isOpen && (
                <M.OptionList>
                  {options.map((opt) => (
                    <M.Option
                      key={opt.id}
                      onClick={() => {
                        setSelectedId(opt.id);
                        setProfile(prev=>({...prev, userType: opt.id}));
                        setIsOpen(false);
                      }}
                    >
                      <M.Text>{opt.label}</M.Text>
                      {(opt.id === "A" || opt.id === "B") && <M.Line></M.Line>}
                    </M.Option>
                  ))}
                </M.OptionList>
              )}
            </M.WrapBox>

            <M.WrapBox style={{ display: "flex", gap: "37px" }}>
              <M.WrapBox>
                <M.Title>키</M.Title>
                <M.InputWrapper>
                  <M.InputUnit value={profile?.height} onChange={(e)=> setProfile(prev => ({ ...prev, height: e.target.value}))}/>
                  <span
                    style={{
                      color: "#554F45",
                      fontFamily: "Inter",
                      fontSize: "12px",
                    }}
                  >
                    cm
                  </span>
                </M.InputWrapper>
              </M.WrapBox>
              <M.WrapBox>
                <M.Title>체중</M.Title>
                <M.InputWrapper>
                  <M.InputUnit value={profile?.weight} onChange={(e)=> setProfile(prev => ({ ...prev, weight: e.target.value}))}/>
                  <span
                    style={{
                      color: "#554F45",
                      fontFamily: "Inter",
                      fontSize: "12px",
                    }}
                  >
                    kg
                  </span>
                </M.InputWrapper>
              </M.WrapBox>
            </M.WrapBox>
          </M.WrapBox>
          <M.Save type="button" value="저장하기" onClick={save} />
        </M.CenterBox>
      </M.Wrapper>
    </M.Container>
  );
};
export default MypageEdit;
