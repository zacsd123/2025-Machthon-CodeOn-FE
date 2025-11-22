import React,{ useContext, useRef, useState } from "react";
import * as L from "../styles/StyledLogin";
import { useNavigate } from "react-router-dom";
import axios from "../axios/axios";
import { SCFunctionContext } from "../App";

const Login = () => {

    const {setPageNum, setToken} = useContext(SCFunctionContext)

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const nav = useNavigate()
    
    const goMain = () => {
        setPageNum("/")
        nav("/")
    };

    const onLogin = async() => {
        try{
            const body ={
                email: id,
                password: password,
            };
            const res= await axios.post("/api/auth/login",body);
            const token =res.data;
            localStorage.setItem("accessToken", token);
            setToken(token)
            setPageNum("/") 
            nav("/");
        }catch(error){
            console.error("로그인 실패", error);
        }
    }

    return(
        <L.Container>
            <L.Logo>
                <img src={`${process.env.PUBLIC_URL}/images/loginlogo.svg`} onClick={goMain}/>
            </L.Logo>
            <L.CenterBox>
                <L.LeftBox></L.LeftBox>
                <L.RightBox>
                    <L.Title>Login</L.Title>
                    <L.Input placeholder="아이디" id="ID" value={id} onChange={(e) => setId(e.target.value)}/>
                    <L.Input placeholder="비밀번호" id="PASS" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <L.Button type="button" value="로그인하기" onClick={onLogin} />
                    <L.Sign>회원가입하기</L.Sign>
                </L.RightBox>
            </L.CenterBox>
        </L.Container>

    );
};

export default Login;