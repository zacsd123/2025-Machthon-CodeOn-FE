import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";
import { SCFunctionContext } from "../App";
import axios from "../axios/axios";
import { CheckCircle, Zap, ArrowLeft, ArrowRight } from 'lucide-react';

const InfoCard = ({ currPage }) => {
    let title = "당로그";
    let content = "";
    
    switch (currPage) {
        case 0:
            title = "회원가입";
            content = "당로그에 오신 것을 환영합니다! 정확한 맞춤형 영양 분석을 위해 기본 정보를 입력해 주세요.";
            break;
        case 1:
            title = "사용 목적 선택";
            content = "회원님의 건강 목표에 따라 맞춤형 분석을 제공합니다. 사용 목적을 선택해 주세요.";
            break;
        case 2:
            title = "신체 정보 입력";
            content = "AI 맞춤형 분석을 위해 신체 정보가 필요합니다. 정보는 안전하게 보관되며 탈퇴 시 즉시 파기됩니다.";
            break;
        case 3:
            title = "가입 완료";
            content = "모든 준비가 끝났습니다! 지금 바로 당로그의 맞춤형 서비스를 경험해 보세요.";
            break;
        default:
            title = "정보";
            content = "정보가 많아요 (화면 넘어갈때마다 설명이 바뀌는 카드)";
            break;
    }

    return (
        <div className="info-card">
            <h3 className="info-card-title">{title}</h3>
            <p className="info-card-content">{content}</p>
        </div>
    );
};

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  nickname: "",
  password: "",
  passwordConfirm: "",

  userType: "A",

  sex: "여",
  height: "",
  weight: "",
  agreeTerms: false,
};

export default function Signup() {
  const { setPageNum } = useContext(SCFunctionContext);
  const [currPage, setCurrPage] = useState(0);
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [globalError, setGlobalError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onNextQ = () => {
    setGlobalError(null);

    if (currPage === 0) {
      const {
        firstName,
        lastName,
        email,
        nickname,
        password,
        passwordConfirm,
      } = formData;
      if (
        !firstName ||
        !lastName ||
        !email ||
        !nickname ||
        !password ||
        !passwordConfirm
      ) {
        setGlobalError("모든 필수 정보를 입력해주세요.");
        return;
      }
      if (password !== passwordConfirm) {
        setGlobalError("비밀번호가 일치하지 않습니다.");
        return;
      }
    }

    setCurrPage(currPage + 1);
  };

  const onPrevQ = () => {
    setCurrPage(currPage - 1);
  };

  const nav = useNavigate();

  const handleSignup = async () => {
    setGlobalError(null);

    const { sex, height, weight, agreeTerms } = formData;

    if (!sex || !height || !weight || !agreeTerms) {
      setGlobalError("성별, 키, 몸무게를 입력하고 약관에 동의해야 합니다.");
      return;
    }

    const parsedHeight = parseFloat(height);
    const parsedWeight = parseFloat(weight);

    if (
      isNaN(parsedHeight) ||
      isNaN(parsedWeight) ||
      parsedHeight <= 0 ||
      parsedWeight <= 0
    ) {
      setGlobalError("키와 몸무게는 유효한 숫자여야 합니다.");
      return;
    }

    setLoading(true);

    const payload = {
      email: formData.email,
      nickname: formData.nickname,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      userType: formData.userType,
      height: parsedHeight,
      weight: parsedWeight,
      sex: formData.sex,
    };

    try {
      const response = await axios.post(`/api/auth/signup`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setCurrPage(currPage + 1);
      }
    } catch (err) {
      const errorMessage = err.response
        ? err.response.data.message || "회원가입 중 서버 오류가 발생했습니다."
        : "네트워크 연결 상태를 확인해 주세요.";

      setGlobalError(`회원가입 실패: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const renderPage = () => {
    switch (currPage) {
      case 0:
        return (
          <div id="first" className="page-content">
            <h4 className="page-title-sm">기본 정보를 입력해주세요.</h4>
            <div className="input-group-row">
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="성" className="input-field half" />
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="이름" className="input-field half" />
            </div>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="이메일" className="input-field full" />
            <input type="text" name="nickname" value={formData.nickname} onChange={handleChange} placeholder="아이디" className="input-field full" />
            <div className="input-group-row">
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="비밀번호" className="input-field half" />
              <input type="password" name="passwordConfirm" value={formData.passwordConfirm} onChange={handleChange} placeholder="비밀번호 확인" className="input-field half" />
            </div>
            <button onClick={onNextQ} className="btn btn-next">
                다음 <ArrowRight className="btn-icon" />
            </button>
          </div>
        );
      case 1:
        return (
          <div id="second" className="page-content">
            <span className="page-title-sm">~을 사용하는 목적을 골라주세요.</span>
            
            <div className="radio-group">
              {['A', 'B', 'C'].map(type => (
                <label key={type} className={`radio-label ${formData.userType === type ? 'radio-selected' : ''}`}>
                  <input type="radio" name="userType" value={type} checked={formData.userType === type} onChange={handleChange} className="hidden" />
                  <span className="radio-text">[{type}] {
                    type === 'A' ? '건강/다이어트 (총 당류와 칼로리 중심)' :
                    type === 'B' ? '혈당 관리/전단계 (총 당류, 당알코올 등 혈당 영향 중심)' :
                    '당뇨 환자 (엄격한 당류 제한, 대체당 종류별 안전성 고지)'
                  }</span>
                </label>
              ))}
            </div>
            
            <div className="btn-group-row">
              <button onClick={onPrevQ} className="btn btn-prev">
                  <ArrowLeft className="btn-icon" /> 이전
              </button>
              <button onClick={onNextQ} className="btn btn-next">
                  다음 <ArrowRight className="btn-icon" />
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div id="thirth" className="page-content">
            <span className="page-title-sm">성별을 선택해 주세요.</span>
            <div className="sex-radio-group">
              {['남', '여'].map(g => (
                <label key={g} className={`sex-radio-label ${formData.sex === g ? 'radio-selected' : ''}`}>
                  <input type="radio" name="sex" value={g} checked={formData.sex === g} onChange={handleChange} className="hidden" />
                  <span>{g === '남' ? '남성' : '여성'}</span>
                </label>
              ))}
            </div>
            
            <span className="page-title-sm mt-8">정보를 입력해주세요.</span>
            <div className="input-group-row">
              <div className="input-unit-container half">
                <input type="number" name="height" value={formData.height} onChange={handleChange} placeholder="키" className="input-field full" />
                <span className="input-unit">cm</span>
              </div>
              <div className="input-unit-container half">
                <input type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="몸무게" className="input-field full" />
                <span className="input-unit">kg</span>
              </div>
            </div>
            
            <div className="terms-info-box">
              본 서비스는 AI 맞춤형 분석 제공을 위해 회원의 성별, 신체정보, 식습관 데이터 등을 수집·이용합니다. 수집된 정보는 회원 탈퇴 시 즉시 파기됩니다.
            </div>

            <label className="checkbox-label">
              <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className="hidden" />
              <span className="checkbox-custom">
                {formData.agreeTerms && <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>}
              </span>
              <span className="checkbox-text">네, 동의합니다.</span>
            </label>
            
            <div className="btn-group-row">
              <button onClick={onPrevQ} className="btn btn-prev" disabled={loading}>
                  <ArrowLeft className="btn-icon" /> 이전
              </button>
              <button onClick={handleSignup} className="btn btn-finish" disabled={loading}>
                {loading ? '가입 중...' : '다음 →'}
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div id="fourth" className="finish-content">
            <CheckCircle className="finish-icon" />
            <span className="finish-title">회원가입과 정보 입력이 완료되었습니다!</span>
            <span className="finish-text">지금 바로 당로그를 시작해보세요.</span>
            <button onClick={() => nav("/")} className="btn btn-start">시작하기</button>
          </div>
        );
      default:
        return <div>오류: 잘못된 페이지 접근</div>;
    }
  };

  const goMain = () => {
    setPageNum("/")
    nav("/")
  }


  return (
    <div className="signup-body">
      <h1 className="main-header" onClick={goMain}>
        <span className="LOGO"></span> 당로그
      </h1>      
      <div className="main-card">        
        <div className="info-card-container">
            <InfoCard currPage={currPage} />
        </div>
        <div className="form-box">
            
            <div className="form-content-area">
              {globalError && (
                <div className="error-box">
                  {globalError}
                </div>
              )}
              {renderPage()}
            </div>
        </div>
      </div>

      <div className="footer">© 2025 당로그. All rights reserved.</div>
    </div>
  );
}
