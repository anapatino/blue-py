import {  BarChart } from "@tremor/react";

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};


function PositiveComments (props){
  let data =[];
  
  // eslint-disable-next-line no-lone-blocks
  {props.data != null ?
    data = [
      {
        "Twitter Web App": props.data["Twitter Web App"],
        "Twitter for Android": props.data["Twitter for Android"],
        "Twitter for iPad": props.data["Twitter for iPad"],
        "Twitter for iPhone": props.data["Twitter for iPhone"],
      },
     
    ]
    : data=[];
 }
    return(
        <BarChart 
          data={data}
          dataKey="name"
          categories={["Twitter Web App","Twitter for Android","Twitter for iPad","Twitter for iPhone"]}
          colors={["teal", "cyan", "emerald","indigo"]}
          valueFormatter={dataFormatter}
          yAxisWidth="w-10"
          height="h-48"
        />
      
    );
}

export default PositiveComments;