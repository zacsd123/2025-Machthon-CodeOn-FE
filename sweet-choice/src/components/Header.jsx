import { UNSAFE_decodeViaTurboStream, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import "../styles/Header.css"
import { SCFunctionContext, SCValueageContext } from "../App"

const Header = () => {

    const nav = useNavigate()

    const {setPageNum} = useContext(SCFunctionContext)
    const {pageNum, isLogin} = useContext(SCValueageContext)

    const onPageChange = (url) => {
        setPageNum(url)
        nav(url)
        // console.log(pageNum==="/login")
    }

    return (
        <div id="Header" style={{display:((pageNum === "/login") || (pageNum === "/signup") ? "none" : "")}}>
            <div id="nav">
                <ul id ="ItemList">
                    <li id="img" className="item" onClick={() => onPageChange("/")}>
                    </li>
                    <li id="search" className={(pageNum === "/search" ? "Hactive " : "") + " item"} onClick={() => onPageChange("/search")}>검색</li>
                    <li id="info" className={(pageNum === "/info" ? "Hactive " : "") + " item"} onClick={() => onPageChange("/info")}>당 정보</li>
                    <li id="mypage" className={(pageNum === "/mypage_edit" ? "Hactive " : "") + " item"} onClick={() => onPageChange("/mypage_edit")}>마이페이지</li>
                </ul>
                {isLogin ? 
                <div>logined</div>
                :
                <div id="signin-up">
                    <span id="signin" onClick={() => onPageChange("/login")}>로그인</span>
                    <span>또는</span>
                    <span id="signup" onClick={() => onPageChange("/signup")}>회원가입</span>
                </div>
                }
            </div>
        </div>
    )
}

export default Header