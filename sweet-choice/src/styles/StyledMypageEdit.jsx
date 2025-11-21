import { styled } from "styled-components";

export const Container = styled.div`
width: 100%;
min-height: 90vh; 
padding-top: 3.7rem;
`;

export const Header = styled.div`
width: 100%;
height: 100px;
flex-shrink: 0;
background: linear-gradient(91deg, #F1B800 53.79%, #EFA300 87.77%);
`;

export const Menu = styled.div`
width: 200px;
height: 279px;
flex-shrink: 0;
border-radius: 0px 20px 20px 0px;
background: #FEF3E2;
box-shadow: 0 0 4px 0 #FFB22C;

`;

export const Edit = styled.div`
width: 154px;
height: 64px;
flex-shrink: 0;
color: #41341E;
font-family: Inter;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left: 35px;
padding-top: 39px;
margin-bottom: 14px;
position: relative;
cursor: pointer;
`;

export const GrayLine = styled.div`
width: 130px;
height: 8px;
flex-shrink: 0;
background-color: rgba(65, 52, 30, 0.3);
filter: blur(2.5px);
position: absolute;
left:0;
top: 65px;
`;

export const OrangeLine = styled.div`
width: 135px;
height: 3px;
background: #FFB22C;
margin-top: 5px;
`;


export const Sweet = styled.div`
width: 154px;
height: 64px;
flex-shrink: 0;
color: #41341E;
font-family: Inter;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 35px;
margin-bottom: 14px;
cursor: pointer;
`;

export const History = styled.div`
width: 154px;
height: 64px;
flex-shrink: 0;
color: #41341E;
font-family: Inter;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 35px;
cursor: pointer;
`;

export const CenterBox = styled.div`
width: 72%;
min-height: 65vh;
flex-shrink: 0;
border-radius: 20px;
background: #FEF3E2;
padding-bottom: 40px;
`;

export const Wrapper = styled.div`
display: flex;
margin-top: 61px;
gap: 8rem;
`;

export const WrapBox = styled.div`

`;

export const Title = styled.div`
color: #554F45;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const Input = styled.input`
width: 275px;
height: 48px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid #41341E;
background: #FFFAF2;
padding-left: 20px;
outline:none;
font-size: 16px;
::placeholer{
padding-left: 20px;
color: #A69C8B;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`;


export const InputWrapper = styled.div`

width: 275px;
height: 48px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid #41341E;
background: #FFFAF2;
padding-left: 20px;
`;

export const InputUnit = styled.input`
outline: none;
border: none;
background: #FFFAF2;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 10px;
`;

export const SelectBox = styled.div`
width: 277px;
height: 38px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid #41341E;
background: #FFFAF2;
padding-left: 20px;
padding-top: 12px;
font-size: 16px;
`;

export const OptionList = styled.div`
width: 297px;
height: 114px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid #41341E;
background: #FFFAF2;
padding-top: 12px;
font-size: 16px;
`;

export const Option = styled.div`
height: 40px;
cursor: default;
`;

export const Line = styled.div`
width: 297px;
height: 1px;
background: #000;
`;

export const Text = styled.div`
padding-left: 20px;
margin-bottom: 6px;
`;

export const Save = styled.input`
width: 123px;
height: 44px;
flex-shrink: 0;
border-radius: 20px;
background: #FFB22C;color: #41341E;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
border: none;
outline: none;
margin-top: 62px;
margin-left: 63rem;
`;