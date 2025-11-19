import React,{ useState } from "react";
import * as L from "../styles/StyledLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
    return(
        <L.Container>
            <L.Logo>
                <img src={`${process.env.PUBLIC_URL}/images/loginlogo.svg`}/>
            </L.Logo>
            <L.CenterBox>
                <L.LeftBox></L.LeftBox>
                <L.RightBox>
                    <L.Title>Login</L.Title>
                    <L.Input placeholder="아이디"/>
                    <L.Input placeholder="비밀번호"/>
                    <L.Button type="button" value="로그인하기"/>
                    <L.Sign>회원가입하기</L.Sign>
                </L.RightBox>
            </L.CenterBox>
        </L.Container>

    );
};

export default Login;