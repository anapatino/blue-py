import { LineChart } from "@tremor/react";

const chartdata = [
  {
    year: 1951,
    "Population growth rate": 1.74,
  },
  {
    year: 1952,
    "Population growth rate": 1.93,
  },
  {
    year: 1953,
    "Population growth rate": 1.9,
  },

];

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;


function CommentsNegative(){
    return(
        <LineChart
      data={chartdata}
      dataKey="year"
      categories={["Population growth rate"]}
      colors={["blue"]}
      valueFormatter={dataFormatter}  
      marginTop="mt-0"         
      height="h-60"
      yAxisWidth="w-9"
    />
    );
}

export default CommentsNegative;