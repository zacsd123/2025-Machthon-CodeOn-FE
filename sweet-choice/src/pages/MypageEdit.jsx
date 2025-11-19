import React,{ useState } from "react";
import * as M from "../styles/StyledMypageEdit";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const options = [
  { id: 'A', label: '[A] 건강 / 다이어트' },
  { id: 'B', label: '[B] 혈당 관리 / 전단계' },
  { id: 'C', label: '[C] 당뇨 환자'},
];

const MypageEdit = () => {
  const [selectedId, setSelectedId] = useState('A');
  const selectedOption = options.find(o=> o.id===selectedId);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <M.Container>
      <Header />
      <M.Wrapper>
        <M.Menu>
          <M.Edit onClick={()=>navigate("/mypage")}>
            개인정보 수정
            <M.GrayLine></M.GrayLine>
            <M.OrangeLine></M.OrangeLine>
          </M.Edit>
          <M.Sweet onClick={()=>navigate("/mypage_sweet")}>당 기록 보기</M.Sweet>
          <M.History onClick={()=>navigate("/mypage_history")}>저장 항목 보기</M.History>
        </M.Menu>
        <M.CenterBox>
          <M.WrapBox style={{marginTop: "116px", marginLeft:"289px"}}>
            <M.WrapBox style={{marginBottom:"31px"}}>
                <M.Title>닉네임</M.Title>
                <M.Input placeholder="이전 닉네임" />
            </M.WrapBox>
            <M.WrapBox style={{display: "flex", gap: "37px",marginBottom:"31px"}}>
                <M.WrapBox>
                    <M.Title>비밀번호</M.Title>
                    <M.Input type="password" />
                </M.WrapBox>
                <M.WrapBox>
                    <M.Title>비밀번호 확인</M.Title>
                    <M.Input type="password" />
                </M.WrapBox>
            </M.WrapBox>

           <M.WrapBox style={{marginBottom:"31px"}}>
                <M.Title>사용자 상태</M.Title>
                <M.SelectBox onClick={()=> setIsOpen(prev=>!prev)}>
                    <span style={{fontSize:"16px", fontWeight: "500", width: "229px", display: "inline-block"}}>{selectedOption?.label}</span>
                    <img  style={{ marginLeft:"18px"}}src={`${process.env.PUBLIC_URL}/images/dropdown.svg`} alt="dropdown"/>
                </M.SelectBox>

                {isOpen && (
                    <M.OptionList>
                        {options.map(opt => (
                            <M.Option key={opt.id} onClick={()=> {setSelectedId(opt.id); setIsOpen(false);}}>
                                <M.Text>{opt.label}</M.Text>
                                {(opt.id==='A'||opt.id==='B')&&<M.Line></M.Line>}
                            </M.Option>
                           
                        ))}
                    </M.OptionList>
                )}
           </M.WrapBox>

            <M.WrapBox style={{ display: "flex", gap:"37px"}}>
                <M.WrapBox>
                    <M.Title>키</M.Title>
                    <M.InputWrapper>
                        <M.InputUnit />
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
                        <M.InputUnit />
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
        </M.CenterBox>
      </M.Wrapper>
    </M.Container>
  );
};
export default MypageEdit;
