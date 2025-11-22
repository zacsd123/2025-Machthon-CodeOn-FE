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
  background: linear-gradient(91deg, #f1b800 53.79%, #efa300 87.77%);
`;

export const Menu = styled.div`
  width: 200px;
  height: 279px;
  flex-shrink: 0;
  border-radius: 0px 20px 20px 0px;
  background: #fef3e2;
  box-shadow: 0 0 4px 0 #ffb22c;
  position: relative;
`;

export const Edit = styled.div`
  width: 154px;
  height: 64px;
  flex-shrink: 0;
  color: #41341e;
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
  left: 30px;
  top: 220px;
`;

export const OrangeLine = styled.div`
  width: 152px;
  height: 3px;
  background: #ffb22c;
  margin-top: 5px;
  position: absolute;
  left: 26px;
`;

export const Sweet = styled.div`
  width: 154px;
  height: 64px;
  flex-shrink: 0;
  color: #41341e;
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
  color: #41341e;
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
  background: #fef3e2;
  display: flex;
  align-items: center;
`;

export const CenterBox = styled.div``;

export const CSweet = styled.div`
  margin-left: 150px;
  color: #41341e;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 118px;
  position: relative;
  font-weight: ${({ active }) => (active ? 700 : 400)};
  cursor: default;

  &::before {
    content: "";
    position: absolute;
    width: 102px;
    height: 8px;
    flex-shrink: 0;
    background-color: rgba(65, 52, 30, 0.3);
    filter: blur(2.5px);
    left: -2px;
    top: 25px;
    display: ${({ active }) => (active ? "block" : "none")};
  }

  &::after {
    content: "";
    position: absolute;
    width: 121px;
    height: 3px;
    background: #ffb22c;
    left: -10px;
    top: 40px;
    display: ${({ active }) => (active ? "block" : "none")};
  }
`;

export const Food = styled.div`
  width: 118px;
  margin-left: 15rem;
  color: #41341e;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: relative;
  font-weight: ${({ active }) => (active ? 700 : 400)};
  cursor: default;

  &::before {
    content: "";
    position: absolute;
    width: 120px;
    height: 8px;
    flex-shrink: 0;
    background-color: rgba(65, 52, 30, 0.3);
    filter: blur(2.5px);
    left: -2px;
    top: 25px;
    display: ${({ active }) => (active ? "block" : "none")};
  }

  &::after {
    content: "";
    position: absolute;
    width: 135px;
    height: 3px;
    background: #ffb22c;
    left: -10px;
    top: 40px;
    display: ${({ active }) => (active ? "block" : "none")};
  }
`;

export const Report = styled.div`
  margin-left: 150px;
  color: #41341e;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  line-height: normal;
  width: 118px;
  position: relative;
  font-weight: ${({ active }) => (active ? 700 : 400)};
  cursor: default;

  &::before {
    content: "";
    position: absolute;
    width: 75px;
    height: 8px;
    flex-shrink: 0;
    background-color: rgba(65, 52, 30, 0.3);
    filter: blur(2.5px);
    left: -2px;
    top: 25px;
    display: ${({ active }) => (active ? "block" : "none")};
  }

  &::after {
    content: "";
    position: absolute;
    width: 95px;
    height: 3px;
    background: #ffb22c;
    left: -10px;
    top: 40px;
    display: ${({ active }) => (active ? "block" : "none")};
  }
`;

export const Divide = styled.div`
  width: 2px;
  height: 71px;
  background: #41341e;
  margin-left: 15rem;
  margin-right: 5rem;
`;

export const Box = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 17px;
`;

export const InfoBox = styled.div`
  width: 100%;
  height: 354px;
  background: #fef3e2;
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoBox2 = styled.div`
  width: 100%;
  height: 400px;
  background: #fef3e2;
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoTitle = styled.div`
  color: #41341e;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  height: 30px;
  min-width: 72px;
  margin-top: 27px;
  width: 233px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;  
  text-overflow: ellipsis;
`;

export const InfoLine = styled.div`
  width: 258px;
  height: 2px;
  background: #000;
  margin-top: 19px;
  margin-bottom: 30px;
`;

export const InfoLine2 = styled.div`
  width: 258px;
  height: 2px;
  background: #000;
  margin-top: 19px;
`;

export const InfoText = styled.div`
  width: 233px;
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const InfoText2 = styled.div`
  width: 233px;
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
`;


