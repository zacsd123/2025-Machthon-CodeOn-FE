import {styled} from "styled-components";

export const Container = styled.div`
width: 100%;
min-height: 100vh; 
`;

export const Header = styled.div`
width: 100%;
height: 129px;
flex-shrink: 0;
background: linear-gradient(91deg, #F1B800 53.79%, #EFA300 87.77%);
`;

export const Menu = styled.div`
width: 218px;
height: 297px;
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
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 35px;
padding-top: 39px;
margin-bottom: 14px;

cursor: pointer;
`;

export const GrayLine = styled.div`
width: 146px;
height: 8px;
flex-shrink: 0;
background-color: rgba(65, 52, 30, 0.3);
filter: blur(2.5px);
position: absolute;
left:32px;
top: 220px;
`;

export const OrangeLine = styled.div`
width: 160px;
height: 3px;
background: #FFB22C;
margin-top: 5px;
position: absolute;
left: 26px;
top: 230px;
`;


export const Sweet = styled.div`
width: 154px;
height: 64px;
flex-shrink: 0;
color: #41341E;
font-family: Inter;
font-size: 24px;
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
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left: 35px;
cursor: pointer;
`;

export const Wrapper = styled.div`
display: flex;
margin-top: 61px;
gap: 4rem;
`;

export const CenterBox = styled.div`
display: flex;
gap:17px;
`;

export const Calendar = styled.div`

`;

export const SideBox = styled.div`
width: 758px;
height: 840px;
flex-shrink: 0;
border-radius: 20px;
background: #FEF3E2;
display: flex;
flex-direction: column;
gap: 52px;
align-items: center;
`;