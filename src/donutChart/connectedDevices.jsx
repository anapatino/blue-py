import { DonutChart } from "@tremor/react";


const valueFormatter = (number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

function ConnectedDevices(props) {
  let data =[];
 
  // eslint-disable-next-line no-lone-blocks
  {props.data != null ?
    data = [
      {
        devices: "Twitter Web App",
        number: props.data["Twitter Web App"],
      },
      {
        devices: "Twitter for Android",
        number: props.data["Twitter for Android"],
      },
      {
        devices: "Twitter for iPad",
        number: props.data["Twitter for iPad"],
      },
      {
        devices: "Twitter for iPhone",
        number: props.data["Twitter for iPhone"],
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
      colors={["teal", "violet","cyan", "indigo"]}
    />
  );
}

export default ConnectedDevices;
