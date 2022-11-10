
import {  DonutChart } from '@tremor/react';

const list = [
    {
        devices: 'cellular',
        number: 9800,
    },
    {
        devices: 'tablet',
        number: 4567,
    },
    {
        devices: 'computer',
        number: 3908,
    },
  
];

const valueFormatter = ( number) => (
    `$ ${Intl.NumberFormat('us').format(number).toString()}`
);


function ConnectedDevices (){
    return(
    <DonutChart
            data={ list }
            category="number"
            dataKey="devices"
            valueFormatter={ valueFormatter }
            marginTop="mt-8"
            height="h-40"
            colors={["green", "gray", "violet"]}
        />);
}

export default ConnectedDevices;