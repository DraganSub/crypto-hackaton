import React, { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { useGetCoinHistoryQuery } from "../services";
import { Select } from "antd";
import { useTheme } from "../hooks";

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
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                ticks: {
                    beginAtZero: true,
                },
                grid: {
                    display: true,
                },
            },
        },
        legend: {
            position: "top" as const,
        },
        title: {
            display: true,
            text: "Price Chart",
            align: "start" as const,
            font: {
                size: 24,
                weight: "bold" as const,
                color: "#00a59a" as const,
            },
        },
    },
};

// TODO: move this to constants

const periodValues = [
    { value: "3h", label: "3h" },
    { value: "24h", label: "24h" },
    { value: "7d", label: "7d" },
    { value: "30d", label: "30d" },
    { value: "3m", label: "3m" },
    { value: "1y", label: "1y" },
    { value: "3y", label: "3y" },
    { value: "5y", label: "5y" },
];

export default function LineChart() {
    const [selectValue, setSelectValue] = useState<string>("7d");

    const handleChange = (value: string) => {
        setSelectValue(value);
    };

    return (
        <div>
            <Select
                size={"middle"}
                defaultValue="7d"
                onChange={handleChange}
                style={{ width: 200 }}
                options={periodValues}
            />
            <LineComponent options={options} selectValue={selectValue} />
        </div>
    );
}

function LineComponent(props: any) {
    const { cryptoId } = useParams();
    const { data } = useGetCoinHistoryQuery({
        id: cryptoId as string,
        period: props.selectValue,
    });
    const { theme } = useTheme();

    const filterLabels: string[] = [];
    const filterPrice: number[] = [];

    data?.history?.forEach((e) => {
        filterLabels.push(
            new Date(e?.timestamp * 1000).toLocaleDateString("en-GB")
        );
        filterPrice.push(e?.price);
    });

    const filter = {
        labels: filterLabels?.reverse(),
        datasets: [
            {
                label: "Price ($)",
                fill: true,
                data: filterPrice?.reverse(),
                backgroundColor: theme === "dark" ? "#476D7C" : "rgba(25, 178, 148, 0.2)",
                borderColor: theme === "dark" ? "white" : "#19b294",
                pointRadius: 1,
                borderWidth: 2,
                spanGaps: true,
            },
        ],
    };

    return <Line options={options} data={filter} />;
}
