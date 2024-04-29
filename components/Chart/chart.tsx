
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

const chartConfig = {
    type: "line",
    height: 240,
    series: [
        {
            name: "Sales",
            data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        },
    ],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        title: {
            show: "",
        },
        dataLabels: {
            enabled: true,
        },
        colors: ["#020617"],
        stroke: {
            lineCap: "round",
            curve: "smooth",
        },
        markers: {
            size: 0,
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
            categories: [
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        
        yaxis: {
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
        },
        grid: {
            show: true,
            borderColor: "#dddddd",
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                top: 5,
                right: 20,
            },
        },
        fill: {
            opacity: 0.8,
        },
        tooltip: {
            theme: "dark",
        },
        
    },
};

export default function ChartC() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Card className="w-full">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
                >
                    <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
                        <Square3Stack3DIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <Typography variant="h6" color="blue-gray">
                            Line Chart
                        </Typography>
                        <Typography
                            variant="small"
                            color="gray"
                            className="max-w-sm font-normal"
                        >
                            Your ADS history.
                        </Typography>
                    </div>
                </CardHeader>
                <CardBody className="px-2 pb-0">
                    <Chart
                        {...chartConfig}
                        type="line"
                        options={{
                            ...chartConfig.options,
                            stroke: {
                                ...chartConfig.options.stroke,
                                curve: "smooth", // or any other valid value
                                lineCap: "round" // or "butt" or "square"
                            },
                            title: {
                                ...chartConfig.options.title,
                                text: "", // Add your title text
                                 // or false, based on your requirement
                              }
                        }}
                    />
                </CardBody>
            </Card>
        </div>
    );
}
