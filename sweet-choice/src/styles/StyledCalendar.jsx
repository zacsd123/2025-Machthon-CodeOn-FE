import styled from "styled-components";

export const Box = styled.div`
  .react-calendar {
    width: 720px;
    height: 740px;
    border-radius: 20px;
    background: #fef3e2;
    border: none;
    padding-bottom: 18px;
    padding-top: 18px;
  }
  .react-calendar__navigation button {
    background: transparent;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background: transparent;
  }
  .react-calendar__navigation__prev2-button {
    display: none;
  }
  .react-calendar__navigation__prev-button {
    padding-left: 55px;
  }
  .react-calendar__navigation__next2-button {
    display: none;
  }
  .react-calendar__navigation__next-button {
    padding-right: 55px;
  }
  .react-calendar__navigation {
    height: 90px;
  }
  .react-calendar__navigation__label__labelText--from {
    color: #41341e;
    font-family: Inter;
    font-size: 43px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .react-calendar__month-view__weekdays__weekday {
    color: #41341e;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .react-calendar__month-view__weekdays {
    position: relative;
  }
  .react-calendar__month-view__weekdays::after {
    width: 690px;
    height: 1px;
    background: #41341e;
    position: absolute;
    content: "";
    top: 63px;
    left: 27px;
  }
  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }
  .react-calendar__tile {
    color: #41341e;
    text-align: right;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-top: 42px;
    position: relative;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: transparent;
  }
  .react-calendar__tile--active {
    background: transparent;
    color: #41341e;
  }
  .react-calendar__tile--active::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -48%);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #ffd894;
    filter: blur(2px);
    z-index: 0;
  }
  .react-calendar__tile--active abbr,
  .react-calendar__tile--active span {
    position: relative;
    z-index: 1;
  }
  .react-calendar__tile--now,
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: transparent;
  }
`;
