import React,{ useRef, useState } from "react";
import * as L from "../styles/StyledLogin";
import { useNavigate } from "react-router-dom";
import axios from "../axios/axios";

const Login = () => {

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const ID = useRef("")

    const nav = useNavigate()


    const onLogin = () => {
        console.log(id, password)

        // const a = axios.get(`${id} ${password}`)
    }

    return(
        <L.Container>
            <L.Logo>
                <img src={`${process.env.PUBLIC_URL}/images/loginlogo.svg`} onClick={() => nav("/")}/>
            </L.Logo>
            <L.CenterBox>
                <L.LeftBox></L.LeftBox>
                <L.RightBox>
                    <L.Title>Login</L.Title>
                    <L.Input placeholder="아이디" id="ID" value={id} onChange={(e) => setId(e.target.value)}/>
                    <L.Input placeholder="비밀번호" id="PASS" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <L.Button type="button" value="로그인하기" onClick={onLogin}/>
                    <L.Sign>회원가입하기</L.Sign>
                </L.RightBox>
            </L.CenterBox>
        </L.Container>

    );
};

export default Login;