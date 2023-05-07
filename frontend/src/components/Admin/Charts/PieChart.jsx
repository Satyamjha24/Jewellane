import React from "react";
import 'chart.js/auto';
import { Pie } from "react-chartjs-2";
//import { Chart as ChartJS } from "chart.js/auto";
// import {Chart, ArcElement} from 'chart.js'
// import {CategoryScale} from 'chart.js'; 
// Chart.register(ArcElement);
// Chart.register(CategoryScale);
function PieChart({ chartData }) {
  return <Pie data={chartData}/>;
}

export default PieChart;