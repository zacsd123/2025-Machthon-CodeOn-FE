import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "../styles/Header.css"

const Header = () => {

    const nav = useNavigate()

    const [pageNum, setPageNum] = useState("")

    const onPageChange = (url) => {
        setPageNum(url)
        nav(url)
    }

    return (
        <div id={"Header"}>
            <div id="nav">
                <ul id ="ItemList">
                    <li id="img" className={(pageNum === "/" ? "active " : "") + " item"} onClick={() => onPageChange("/")}>
                    </li>
                    <li id="search" className={(pageNum === "/search" ? "active " : "") + " item"} onClick={() => onPageChange("/search")}>검색</li>
                    <li id="info" className={(pageNum === "/info" ? "active " : "") + " item"} onClick={() => onPageChange("/info")}>당 정보</li>
                    <li id="mypage" className={(pageNum === "/mypage_edit" ? "active " : "") + " item"} onClick={() => onPageChange("/mypage_edit")}>마이페이지</li>
                </ul>
                <div id="signin-up">
                    <span id="signin" onClick={() => onPageChange("/login")}>로그인</span>
                    <span id="signup" onClick={() => onPageChange("/signup")}>회원가입</span>
                </div>
            </div>
        </div>
    )
}

export default Header