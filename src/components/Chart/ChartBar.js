import React from "react";
import "./ChartBar.css";
const ChartBar = (props) => {
  // props from Char component
  // include value maxValue label
  // Chart reveive the filter data?, and then pass the specific year of expense
  // to CharBar for rendering.

  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
