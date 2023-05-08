import React, { useState } from "react";
import BarChart from "./Charts/Barchart";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
import { UserData } from "./Data";
import { UserData2 } from "./Data";
import { categoriesData } from "./Data";
import { Box } from '@chakra-ui/react'

const Chart = () => {
  const [orderData, setorderData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Order Received",
        data: UserData.map((data) => data.OrderReceived),
        backgroundColor: [
          "#fb0aff",
        ],
        borderColor: "#d33fed",
        borderWidth: 2,
      },
    ],
  });
  const [userData, setUserData] = useState({
    labels: UserData2.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData2.map((data) => data.OrderReceived),
        backgroundColor: [
          "#7bfb5b",
        ],
        borderColor: "green",
        borderWidth: 2,
      },
    ],
  });
  const [categoryData, setcategoryData] = useState({
    labels: categoriesData.map((data) => data.type),
    datasets: [
      {
        data: categoriesData.map((data) => data.quantity),
        backgroundColor: [
          "#57fcf6",
          "#f6ff4b",
          "#ff6439",
          "#7bfb5b",
          "#ff69ee",
          "#d33fed",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });
  return (
    <Box className="gpp" 
      
      display= "flex"
      w='80%'
      h='80vh'
      justifyContent="space-between"
      //align= "center"
    
    >
      <Box w='45%'><PieChart chartData={categoryData} /></Box>
      <Box
       margin="auto"
       width= "45%"
       h='100%'
      >
        <Box  w='100%' h='50%'><LineChart chartData={orderData} /></Box>
        <Box  w='100%' h='50%'><BarChart chartData={userData} /></Box>
      </Box>
      
    </Box>
  );
};

export default Chart;