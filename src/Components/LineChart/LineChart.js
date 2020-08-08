import React from 'react';
import { Line } from 'react-chartjs-2';

import './LineChart.styles.scss';

const LineChart = ({data, time, selected}) => {
    var type = selected.slice(5,selected.length)
    var color;
    var bgcolor;
    switch(type){
        case 'confirmed':
            color = '#DC143C';
            bgcolor = 'rgba(255,0,0,0.7)';
            break;
        case 'deceased':
            color = '#696969';
            bgcolor = 'rgba(128,128,128,0.7)';
            break;
        case 'recovered':
            color = '#32CD32';
            bgcolor = 'rgba(50,205,50,0.7)';
            break;
        default:
            color = 'yellow';
            bgcolor = '#F08080';
    }
    const selectedData = []
    const labels = []
    const time_data = data.slice(data.length-time, data.length)
    time_data.map(ele => selectedData.push(eval(eval('ele.'+selected))))
    time_data.map(ele => labels.push(ele.date))
    const graphData = {
        labels: labels,
        datasets: [
            {
                label: selected,
                data: selectedData,
                borderColor: [color],
                backgroundColor: [bgcolor],
                pointBackgroundColor: 'white'
            }
        ]
    }
    return(
        <Line data={graphData} />
    )
}

export default LineChart;