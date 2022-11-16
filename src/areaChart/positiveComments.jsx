import apiClient from "../data/http-common";
import { useQuery } from "react-query";
import {  BarChart } from "@tremor/react";

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};


function PositiveComments (props){
  let data =[];
  const getAnalyticSentiments = (topicName) => {
    return apiClient
      .get("analytics-sources", { params: { topic: topicName } })
      .then((res) => res.data);
  };

  const query = useQuery(
    ["sources", props.topic],
    () => getAnalyticSentiments(props.topic),
    {
      enabled: !!props.topic,
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
  // eslint-disable-next-line no-lone-blocks
  {query.data != null ?
    data = [
      {
        "Twitter Web App": query.data["Twitter Web App"],
        "Twitter for Android": query.data["Twitter for Android"],
        "Twitter for iPad": query.data["Twitter for iPad"],
        "Twitter for iPhone": query.data["Twitter for iPhone"],
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