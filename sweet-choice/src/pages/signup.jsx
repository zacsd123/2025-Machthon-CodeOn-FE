import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";
import { SCFunctionContext } from "../App";
import axios from "../axios/axios";

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

  const goMain = () => {
    setPageNum("/");
    nav("/");
  };

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
      const response = await axios.post(`/api/auth/signup`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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
          <div id="first" className="flex flex-col gap-4">
            <div id="Itemlist" className="flex gap-2">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="성"
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="이름"
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="이메일"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              placeholder="아이디 (닉네임)"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="flex gap-2">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="비밀번호"
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="password"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={handleChange}
                placeholder="비밀번호확인"
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              onClick={onNextQ}
              className="w-full p-3 mt-4 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-150"
            >
              다음
            </button>
          </div>
        );
      case 1:
        return (
          <div id="second" className="flex flex-col gap-6">
            <span className="text-lg font-semibold text-gray-700">
              우리 웹사이트를 사용하는 이유를 골라주세요.
            </span>

            <div className="flex flex-col gap-3">
              <label className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-indigo-50 transition duration-150">
                <input
                  type="radio"
                  name="userType"
                  value="A"
                  checked={formData.userType === "A"}
                  onChange={handleChange}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span>
                  <strong className="text-indigo-600">[A] 건강/다이어트</strong>{" "}
                  (총 당류와 칼로리 중심)
                </span>
              </label>
              <label className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-indigo-50 transition duration-150">
                <input
                  type="radio"
                  name="userType"
                  value="B"
                  checked={formData.userType === "B"}
                  onChange={handleChange}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span>
                  <strong className="text-indigo-600">
                    [B] 혈당 관리/전단계
                  </strong>{" "}
                  (총 당류, 당알코올 등 혈당 영향 중심)
                </span>
              </label>
              <label className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-indigo-50 transition duration-150">
                <input
                  type="radio"
                  name="userType"
                  value="C"
                  checked={formData.userType === "C"}
                  onChange={handleChange}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span>
                  <strong className="text-indigo-600">[C] 당뇨 환자</strong>{" "}
                  (엄격한 당류 제한, 대체당 종류별 안전성 고지)
                </span>
              </label>
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={onPrevQ}
                className="p-3 px-6 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-150"
              >
                이전
              </button>
              <button
                onClick={onNextQ}
                className="p-3 px-6 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-150"
              >
                다음
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div id="thirth" className="flex flex-col gap-6">
            <span className="text-lg font-semibold text-gray-700">
              성별을 선택해 주세요.
            </span>
            <div className="flex justify-start gap-6">
              <label className="flex items-center space-x-2 text-gray-700">
                <input
                  type="radio"
                  name="sex"
                  value="남"
                  checked={formData.sex === "남"}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-indigo-600"
                />
                <span>남성</span>
              </label>
              <label className="flex items-center space-x-2 text-gray-700">
                <input
                  type="radio"
                  name="sex"
                  value="여"
                  checked={formData.sex === "여"}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-indigo-600"
                />
                <span>여성</span>
              </label>
            </div>

            <span className="text-lg font-semibold text-gray-700 mt-2">
              정보를 입력해주세요.
            </span>
            <div className="flex gap-2">
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="키 (cm)"
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="몸무게 (kg)"
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg border mt-2">
              본 서비스는 AI 맞춤형 분석 제공을 위해 회원의 성별, 신체정보,
              식습관 데이터 등을 수집·이용합니다. 수집된 정보는 회원 탈퇴 시
              즉시 파기됩니다.
            </div>

            <label className="flex items-center space-x-2 text-gray-700">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-indigo-600 rounded"
              />
              <span>네, 상기 내용에 동의합니다.</span>
            </label>

            <div className="flex justify-between mt-4">
              <button
                onClick={onPrevQ}
                className="p-3 px-6 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-150"
                disabled={loading}
              >
                이전
              </button>
              <button
                onClick={handleSignup}
                className="p-3 px-6 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-150 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "가입 중..." : "회원가입 완료"}
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div
            id="fourth"
            className="flex flex-col gap-4 items-center text-center p-8 bg-white rounded-lg shadow-lg"
          >
            <svg
              className="w-16 h-16 text-green-500 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="text-2xl font-bold text-gray-800">
              회원가입과 정보 입력이 완료되었습니다!
            </span>
            <span className="text-gray-600">
              지금 바로 당로그를 시작해보세요.
            </span>
            <button
              onClick={() => nav("/")}
              className="w-full mt-6 p-3 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-150"
            >
              당로그 시작하기
            </button>
          </div>
        );
      default:
        return <div>오류: 잘못된 페이지 접근</div>;
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4"
      id="signinbody"
    >
      {/* 로고 영역 */}
      <div
        id="Logo"
        onClick={goMain}
        className="flex items-center mb-8 cursor-pointer"
      >
        <span
          id="Logoimg"
          className="w-8 h-8 bg-indigo-600 rounded-full mr-2"
        ></span>
        <span className="text-2xl font-bold text-gray-800">당로그</span>
      </div>

      {/* 회원가입 페이지 영역 */}
      <div
        id="singinPage"
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl"
      >
        <div
          id="infobox"
          className="text-center mb-6 text-xl font-bold text-indigo-600"
        >
          회원가입 ({currPage + 1}/3)
        </div>

        {globalError && (
          <div
            className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg text-center"
            role="alert"
          >
            {globalError}
          </div>
        )}

        {renderPage()}
      </div>

      {/* 푸터 영역 (생략) */}
      <div id="footer" className="mt-8 text-sm text-gray-500">
        © 2024 당로그. All rights reserved.
      </div>
    </div>
  );
}
