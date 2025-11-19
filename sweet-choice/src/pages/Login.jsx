import React,{ useState } from "react";
import * as L from "../styles/StyledLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    

    const onLogin = () => {
        setId(document.getElementById("ID").value)
        setPassword(document.getElementById("PASS").value)
        console.log(id, password)
    }

    return(
        <L.Container>
            <L.Logo>
                <img src={`${process.env.PUBLIC_URL}/images/loginlogo.svg`}/>
            </L.Logo>
            <L.CenterBox>
                <L.LeftBox></L.LeftBox>
                <L.RightBox>
                    <L.Title>Login</L.Title>
                    <L.Input placeholder="아이디" id="ID"/>
                    <L.Input placeholder="비밀번호" id="PASS"/>
                    <L.Button type="button" value="로그인하기" onClick={onLogin}/>
                    <L.Sign>회원가입하기</L.Sign>
                </L.RightBox>
            </L.CenterBox>
        </L.Container>

    );
};

export default Login;