import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/signup.css"

export default function Signup() {

    const [currPage, setCurrPage] = useState(0)

    const onNextQ = () => {
        setCurrPage(currPage+1)
    }

    const onPrevQ = () => {
        setCurrPage(currPage-1)
    }

    const nav = useNavigate()

    return (
        <div id="signinbody">
            <div id="Logo" onClick={() => nav("/")}>
                <span id="Logoimg"></span>
                <span>당로그</span>
            </div>
            <div id="singinPage">
                <div id="infobox">
                    정보가 많아요
                </div>
                {currPage === 0 ? 
                <div id="first" className="Page">
                    <div id="Itemlist">
                        <input type="text" placeholder="이름"/>
                        <input type="text" placeholder="성"/>
                    </div>
                    <input type="text" placeholder="이메일"/>
                    <input type="text" placeholder="아이디"/>
                    <div>
                        <input type="text" placeholder="비밀번호"/>
                        <input type="text" placeholder="비밀번호확인"/>
                    </div>
                    <button onClick={onNextQ}>다음</button>
                </div> 
                : (currPage === 1 ? 
                <div id="second" className="Page">
                    <span>우리 웹사이트를 사용하는 이유를 골라주세요.</span>
                    <span>[A] 건강/다이어트  (총 당류와 칼로리 중심)</span>
                    <span>[B] 혈당 관리/전단계  (총 당류, 당알코올 등 혈당 영향 중심)</span>
                    <span>[C] 당뇨 환자  (엄격한 당류 제한, 대체당 종류별 안전성 고지)</span>
                    <button onClick={onPrevQ}>이전</button>
                    <button onClick={onNextQ}>다음</button>
                </div>
                : (currPage === 2 ?
                    <div id="thirth" className="Page">
                    <span>성별을 선택해 주세요.</span>
                    <div>
                        <span>남성</span>
                        <span>여성</span>
                    </div>
                    <span>정보를 입력해주세요.</span>
                    <div>
                        <input type="number" placeholder="키 (cm)"/>
                        <input type="number" placeholder="몸무게 (kg)"/>
                    </div>
                    <span>본 서비스는 AI 맞춤형 분석 제공을 위해 회원의 성별, 신체정보, 식습관 데이터 등을 수집·이용합니다.  수집된 정보는 회원 탈퇴 시 즉시 파기됩니다.</span>
                    
                    <input type="checkbox" />
                    <span>네, 동의합니다.</span>
                    <button onClick={onPrevQ}>이전</button>
                    <button onClick={onNextQ}>다음</button>
                </div>
                :
                (<div id="fourth" className="Page">
                    <span>회원가입과 정보 입력이 완료되었습니다!</span>
                    <span>지금 바로 당로그를 시작해보세요.</span>
                    <button onClick={nav("/")}>완료</button>
                    4
                </div>
                )))}
            </div>
            <div id="footer"></div>
        </div>
    )
}