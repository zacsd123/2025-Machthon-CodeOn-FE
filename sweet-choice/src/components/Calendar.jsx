import React,{useState} from "react";
import Calendar from "react-calendar";
import * as C from "../styles/StyledCalendar";
import 'react-calendar/dist/Calendar.css';
import { formatLongDate } from "react-calendar/dist/shared/dateFormatter.js";

const MypageCalendar = ({loadDate,onChangeDate}) => {
    return(
        <C.Box>
            <Calendar
            value={loadDate}
            onChange={onChangeDate}
             calendarType="gregory"
             prevLabel={<img src={`${process.env.PUBLIC_URL}/images/prev.svg`}/>}
             nextLabel={<img src={`${process.env.PUBLIC_URL}/images/next.svg`}/>}
             formatMonthYear={(locale,date)=> {
                const year = date.getFullYear();
                const month = String(date.getMonth()+1).padStart(2,"0");
                return `${year}.${month}`;
             }}
             formatDay={(locale,date)=>{
               const day = date.getDate();
               return `${day}`;
             }}
             formatShortWeekday={(locale,date)=>{
                return date.toLocaleDateString("en-US",{weekday: "short"}).toUpperCase().slice(0,3)
             }}
             showNeighboringMonth={false}
             
            />
        </C.Box>
    );
};
export default MypageCalendar;