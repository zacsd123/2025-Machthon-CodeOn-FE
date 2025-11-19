import {styled} from "styled-components";

export const Container = styled.div`
width: 100%;
min-height: 100vh; 
padding-bottom: 100px;
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
position: relative;
`;

export const Edit = styled.div`
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
padding-top: 39px;
margin-bottom: 14px;

cursor: pointer;
`;

export const GrayLine = styled.div`
width: 140px;
height: 8px;
flex-shrink: 0;
background-color: rgba(65, 52, 30, 0.3);
filter: blur(2.5px);
position: absolute;
left:30px;
top: 220px;
`;

export const OrangeLine = styled.div`
width: 152px;
height: 3px;
background: #FFB22C;
margin-top: 5px;
position: absolute;
left: 26px;
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
font-weight: 700;
line-height: normal;
margin-left: 35px;
cursor: pointer;
`;

export const Wrapper = styled.div`
display: flex;
margin-top: 61px;
gap: 9rem;
`;

export const Category = styled.div`
width: 1150px;
height: 100px;
flex-shrink: 0;
border-radius: 10px 10px 0 0;
background: #FEF3E2;
display: flex;
align-items: center;

`;

export const CenterBox = styled.div`

`;

export const CSweet = styled.div`
margin-left: 150px;
color: #41341E;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
width:118px;
position: relative;
font-weight: ${({active})=>(active? 700 : 400)};
cursor: default;

&::before{
content:"";
position: absolute;
width: 102px;
height: 8px;
flex-shrink: 0;
background-color: rgba(65, 52, 30, 0.30);
filter: blur(2.5px);
left: -2px;
top: 25px;
display: ${({active})=> (active? "block" : "none")};
}

&::after{
content: "";
position: absolute;
width: 121px;
height: 3px;
background: #FFB22C;
left: -10px;
top: 40px;
display: ${({active})=> (active? "block" : "none")};
}
`;

export const Food = styled.div`
width:118px;
margin-left: 140px;
color: #41341E;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
position: relative;
font-weight: ${({active})=>(active? 700 : 400)};
cursor: default;

&::before{
content:"";
position: absolute;
width: 120px;
height: 8px;
flex-shrink: 0;
background-color: rgba(65, 52, 30, 0.30);
filter: blur(2.5px);
left: -2px;
top: 25px;
display: ${({active})=> (active? "block" : "none")};
}

&::after{
content: "";
position: absolute;
width: 135px;
height: 3px;
background: #FFB22C;
left: -10px;
top: 40px;
display: ${({active})=> (active? "block" : "none")};
}
`;

export const Report = styled.div`
margin-left: 150px;
color: #41341E;
font-family: Inter;
font-size: 24px;
font-style: normal;
line-height: normal;
width:118px;
position: relative;
font-weight: ${({active})=>(active? 700 : 400)};
cursor: default;

&::before{
content:"";
position: absolute;
width: 75px;
height: 8px;
flex-shrink: 0;
background-color: rgba(65, 52, 30, 0.30);
filter: blur(2.5px);
left: -2px;
top: 25px;
display: ${({active})=> (active? "block" : "none")};
}

&::after{
content: "";
position: absolute;
width: 95px;
height: 3px;
background: #FFB22C;
left: -10px;
top: 40px;
display: ${({active})=> (active? "block" : "none")};
}
`;

export const Divide = styled.div`
width: 2px;
height: 71px;
background: #41341E;
margin-left: 130px;
`;

export const InfoBox = styled.div`
width: 295px;
height: 354px;
background: #FEF3E2;
margin-top: 17px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const InfoTitle = styled.div`
color: #41341E;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
height: 30px;
min-width: 72px;
margin-top:27px;
`;

export const InfoLine = styled.div`
width: 258px;
height: 2px;
background: #000;
margin-top: 19px;
margin-bottom: 30px;
`;

export const InfoText = styled.div`
width: 233px;
color: #000;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 30px; /* 214.286% */
`;