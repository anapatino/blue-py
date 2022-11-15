import apiClient from "../data/http-common";
import { useQuery } from "react-query";
import {  AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};


function PositiveComments (props){
  /*const getPositiveComments = () => {
    return apiClient
      .get("search-tweets", { params: { topic: props.topic } })
      .then((res) => res.data);
  };

  const query = useQuery("positiveComments", getPositiveComments, {
    enabled: Boolean(props.topic),
  });*/
    return(
           <AreaChart
                data={chartdata}
                categories={["SemiAnalysis"]}
                dataKey="date"
                height="h-60"
                colors={["green"]}
                valueFormatter={dataFormatter}
                marginTop="mt-4"      
            />
    );
}

export default PositiveComments;