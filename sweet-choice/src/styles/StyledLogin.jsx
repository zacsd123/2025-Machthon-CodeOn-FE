import { styled } from "styled-components";

export const Container=styled.div`
width: 100%;
min-height: 90vh; 
padding-bottom: 100px;
position: relative
`;

export const Logo = styled.div`
position: absolute;
left: 50%;
top: 5%;
transform: translateX(-50%);
`;

export const CenterBox = styled.div`
display: flex;
position: absolute;
left: 50%;
top: 18%;
transform: translateX(-50%);
`;

export const LeftBox = styled.div`
width: 33rem;
height: 47rem;
flex-shrink: 0;
border-radius: 10px 0 0 10px;
background: #FFB22C;
`;
export const RightBox = styled.div`
width: 53rem;
height: 47rem;
flex-shrink: 0;
border-radius: 0 10px 10px 0;
background: #FEF3E2;
display: flex;
flex-direction: column;
align-items:center;
gap: 30px;
`;

export const Title = styled.div`
color: #41341E;
font-family: Inter;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 8.5rem;
`;

export const Input = styled.input`
width: 400px;
height: 48px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid #41341E;
background: #FFFAF2;
padding-left:30px;
`;

export const Button = styled.input`
width: 440px;
height: 44px;
flex-shrink: 0;
border-radius: 10px;
background: #41341E;
color: #FFFAF2;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const Sign = styled.div`
color: #000;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;