import { useNavigate } from "react-router-dom"

const Header = () => {

    const nav = useNavigate()

    return (
        <div id={"Header"}>
            <div id="nav">
                <ul id ="ItemList">
                    <li id="logo" onClick={() => nav("/")}>로고</li>
                    <li id="search" onClick={() => nav("/search")}>검색</li>
                    <li id="info" onClick={() => nav("/info")}>당 정보</li>
                    <li id="mypage" onClick={() => nav("/mypage_edit")}>마이페이지</li>
                </ul>
                <div id="signin-up">
                    <span id="signin" onClick={() => nav("/signin")}>로그인</span>
                    <span id="signup" onClick={() => nav("/signup")}>회원가입</span>
                </div>
            </div>
        </div>
    )
}

export default Header