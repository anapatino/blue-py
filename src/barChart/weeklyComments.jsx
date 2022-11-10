
import {   BarChart } from "@tremor/react";

const chartdata = [
    {
      name: "Mon",
      "Positive": 248,
      "Neutral": 488,
      "Negative": 248,
      
    },
    {
      name: "Tue",
      "Positive": 28,
      "Neutral": 876,
      "Negative": 23,
      
    },
    {
      name: "Wed",
      "Positive": 982,
      "Neutral": 222,
      "Negative": 33,
      
    },
    {
        name: "Thu",
        "Positive": 92,
        "Neutral": 22,
        "Negative": 33,
        
      },
      {
        name: "Fri",
        "Positive": 42,
        "Neutral": 42,
        "Negative": 13,
        
      },
  ];

  const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };

function WeeklyComments () {
    return(
      
        <BarChart 
          data={chartdata}
          dataKey="name"
          categories={["Positive","Neutral","Negative"]}
          colors={["green", "gray", "violet"]}
          valueFormatter={dataFormatter}
          yAxisWidth="w-12"
          height="h-48"
        />
      
    );
}

export default WeeklyComments;