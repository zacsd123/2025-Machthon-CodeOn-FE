import styled from "styled-components";

export const Box = styled.div`
  width: 565px;
  height: 355px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fffaf2;
  position: relative;
`;

export const Text = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: 600;
  color: "#41341E";
  pointerevents: none;
`;
