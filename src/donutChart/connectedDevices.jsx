import apiClient from "../data/http-common";
import { useQuery } from "react-query";
import { DonutChart } from "@tremor/react";


const valueFormatter = (number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

function ConnectedDevices(props) {
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
        devices: "Twitter Web App",
        number: query.data["Twitter Web App"],
      },
      {
        devices: "Twitter for Android",
        number: query.data["Twitter for Android"],
      },
      {
        devices: "Twitter for iPad",
        number: query.data["Twitter for iPad"],
      },
      {
        devices: "Twitter for iPhone",
        number: query.data["Twitter for iPhone"],
      },
     
    ]
    : data=[];
 }
  return (
    <DonutChart
      data={data}
      category="number"
      dataKey="devices"
      valueFormatter={valueFormatter}
      marginTop="mt-8"
      height="h-40"
      colors={["green", "gray", "violet"]}
    />
  );
}

export default ConnectedDevices;
