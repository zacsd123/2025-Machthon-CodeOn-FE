import React, { useState } from "react";
import * as G from "../styles/StyledGraph";
import { ResponsivePie } from "@nivo/pie";
const data = [
  {
    "id": "lisp",
    "label": "lisp",
    "value": 99,
    "color": "hsl(263, 70%, 50%)"
  },
  {
    "id": "erlang",
    "label": "erlang",
    "value": 155,
    "color": "hsl(135, 70%, 50%)"
  },
  {
    "id": "hack",
    "label": "hack",
    "value": 573,
    "color": "hsl(10, 70%, 50%)"
  },
  {
    "id": "java",
    "label": "java",
    "value": 240,
    "color": "hsl(343, 70%, 50%)"
  },
  {
    "id": "go",
    "label": "go",
    "value": 151,
    "color": "hsl(270, 70%, 50%)"
  }
];
const Graph = () => {
  return (
    <G.Box>
      <ResponsivePie /* or Pie for fixed dimensions */
        data={data}
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
    </G.Box>
  );
};
export default Graph;
