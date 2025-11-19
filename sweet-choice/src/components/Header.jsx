import { useNavigate } from "react-router-dom"
import "../styles/Header.css"

const Header = () => {

    const nav = useNavigate()

    return (
        <div id={"Header"}>
            <div id="nav">
                <ul id ="ItemList">
                    <li id="logo" className="item" onClick={() => nav("/")}>
                        <span id="img"></span>
                    </li>
                    <li id="search" className="item" onClick={() => nav("/search")}>검색</li>
                    <li id="info" className="item" onClick={() => nav("/info")}>당 정보</li>
                    <li id="mypage" className="item" onClick={() => nav("/mypage_edit")}>마이페이지</li>
                </ul>
                <div id="signin-up">
                    <span id="signin" onClick={() => nav("/login")}>로그인</span>
                    <span id="signup" onClick={() => nav("/signup")}>회원가입</span>
                </div>
            </div>
        </div>
    )
}

export default Header