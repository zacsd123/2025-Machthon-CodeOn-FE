import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  padding-bottom: 100px;
  position: relative;
`;

export const Logo = styled.div`
  position: absolute;
  left: 50%;
  top: 24%;
  transform: translateX(-50%);
`;

export const CenterBox = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  top: 33%;
  transform: translateX(-50%);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

export const LeftBox = styled.div`
  width: 20rem;
  height: 27rem;
  flex-shrink: 0;
  border-radius: 20px 0 0 20px;
  background: #ffb22c;
  padding-left: 40px;
  padding-right: 40px;
`;
export const RightBox = styled.div`
  width: 38rem;
  height: 27rem;
  flex-shrink: 0;
  border-radius: 0 20px 20px 0;
  background: #fef3e2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Title = styled.div`
  color: #41341e;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 3rem;
`;

export const Input = styled.input`
  width: 400px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #41341e;
  background: #fffaf2;
  padding-left: 30px;
`;

export const Button = styled.input`
  width: 440px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #41341e;
  color: #fffaf2;
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

export const LTitle = styled.div`
  margin-top: 13rem;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  color: white;
`;

export const LText = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: white;
`;

export const Footer = styled.div`
position: absolute;
top: 830px;
left: 50%;
font-size: 13px;
color: #000;
font-family: Inter;
transform: translateX(-50%);
`;