import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { useParams } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import { useGetCoinHistoryQuery } from "../services";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  responsive: true,

  plugins: {
    scales: {
      x:
      {
        grid: {
          display: false
        }
      },
      y:
      {
        ticks: {
          beginAtZero: true,
        },
        grid: {
          display: true
        }
      },
    },
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Price Chart',
      align: 'start' as const,
      font: {
        size: 24,
        weight: 'bold' as const,
        color: '#00a59a' as const
      }
    },
  },
};

const periodValues = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'];

export default function LineChart() {
  const [selectValue, setSelectValue] = useState('7d');

  return (
    <div>
      <select
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        {periodValues.map(value =>
          <option value={value}>{value}</option>
        )}
      </select>
      <LineComponent options={options} selectValue={selectValue} />
    </div>
  )
}

function LineComponent(props: any) {
  const { cryptoId } = useParams();
  const { data } = useGetCoinHistoryQuery({
    id: cryptoId as string,
    period: props.selectValue,
  });

  const filterLabels: string[] = [];
  const filterPrice: number[] = [];

  data?.history?.map(e => {
    filterLabels.push(new Date(e?.timestamp * 1000).toLocaleDateString('en-GB'))
    filterPrice.push(e?.price);
  })

  const filter = {
    labels: filterLabels?.reverse(),
    datasets: [{
      label: "Price ($)",
      fill: true,
      data: filterPrice?.reverse(),
      backgroundColor: "rgba(25, 178, 148, 0.2)",
      borderColor: "#19b294",
      pointRadius: 1,
      borderWidth: 2,
      spanGaps: true
    }]
  }

  return <Line options={options} data={filter} />
}