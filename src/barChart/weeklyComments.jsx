import { BarChart } from "@tremor/react";

const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
};

function WeeklyComments (props) {
  let data = [];
  
  // eslint-disable-next-line no-lone-blocks
  {props.data != null ?
     data = [
      {
        name: "Today",
        "Positive": props.data.good,
        "Neutral": props.data.neutral,
        "Negative": props.data.bad,
        
      },
    ] : data=[];
  }
 
    return(
        <BarChart 
          data={data}
          dataKey="name"
          categories={["Positive","Neutral","Negative"]}
          colors={["teal", "gray", "violet"]}
          valueFormatter={dataFormatter}
          yAxisWidth="w-12"
          height="h-48"
        />
      
    );
}

export default WeeklyComments;