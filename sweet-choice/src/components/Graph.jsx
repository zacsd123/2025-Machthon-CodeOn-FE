import React, { useEffect,useState } from "react";
import * as G from "../styles/StyledGraph";
import { ResponsivePie } from "@nivo/pie";
import axios from "../axios/axios";


const Graph = ({date}) => {
  const [data, setData] = useState([]);
   useEffect(() => {
    console.log("Graph가 받은 날짜:", date);
  }, [date]);
  const [graphdata, setGraphData] = useState([]);

  useEffect(()=> {
    const loadData = async() => {
    try{
      const accessToken = localStorage.getItem("accessToken");
       const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;
      const response = await axios.get(`/api/mypage/record?date=${formattedDate}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        
      });
      setData(response.data);
      const {totalConsumedSugar, remainSugar} = response.data;
      const graphdata = [
        {
          "id": "totalConsumedSugar",
          "label": "섭취한 당",
          "value": totalConsumedSugar,
          "color":  "#FA812F"
        },
        {
          "id": "remain",
          "label": "남은 당",
          "value": remainSugar,
          "color": "#E4DED6"
        }
      ];
      setGraphData(graphdata);
    }catch(error){
      console.error("그래프 조회 실패", error);
    }
  };
  loadData();
  },[date]);
  
  return (
    <G.Box>
      <ResponsivePie /* or Pie for fixed dimensions */
        data={graphdata}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        colors={{ datum: "data.color" }}
     
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            symbolShape: "circle",
          },
        ]}
      />
      <G.Text>{data.percent}%</G.Text>
    </G.Box>
  );
};
export default Graph;
