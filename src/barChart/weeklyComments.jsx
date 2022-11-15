import apiClient from "../data/http-common";
import { useQuery } from "react-query";
import { BarChart } from "@tremor/react";

const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
};

function WeeklyComments (props) {
  let data = [];
  const getWeeklyComments = (topicName) => {
    return apiClient
      .get("analytics-sentiments", { params: { topic:topicName } })
      .then((res) => res.data);
  };

  const query = useQuery(["tweets",props.topic], () => getWeeklyComments(props.topic), 
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
        name: "Today",
        "Positive": query.data.good,
        "Neutral": query.data.neutral,
        "Negative": query.data.bad,
        
      },
    ] : data=[];
  }
 
    return(
        <BarChart 
          data={data}
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