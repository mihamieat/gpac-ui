import { Card } from "@/components/tremor/Card";
import { SparkAreaChart } from "@/components/tremor/SparkChart";
import { ProgressCircle } from "@/components/tremor/ProgressCircle";
import OverviewCard from "@/components/OverviewCard";

const chartData = [
  {
    chartdata: [
      {
        time: "10:00",
        Percent: 40,
      },
      {
        time: "10:01",
        Percent: 30,
      },
      {
        time: "10:02",
        Percent: 25,
      },
      {
        time: "10:03",
        Percent: 27,
      },
      {
        time: "10:04",
        Percent: 18,
      },
      {
        time: "10:05",
        Percent: 23,
      },
      {
        time: "10:06",
        Percent: 34,
      },
    ],
    device: "Machine 12",
    donutChartdata: 34,
  },
  {
    chartdata: [
      {
        time: "10:00",
        Percent: 40,
      },
      {
        time: "10:01",
        Percent: 30,
      },
      {
        time: "10:02",
        Percent: 25,
      },
      {
        time: "10:03",
        Percent: 27,
      },
      {
        time: "10:04",
        Percent: 18,
      },
      {
        time: "10:05",
        Percent: 23,
      },
      {
        time: "10:06",
        Percent: 50,
      },
    ],
    device: "Machine 13",
    donutChartdata: 50,
  },
  {
    chartdata: [
      {
        time: "10:00",
        Percent: 40,
      },
      {
        time: "10:01",
        Percent: 30,
      },
      {
        time: "10:02",
        Percent: 25,
      },
      {
        time: "10:03",
        Percent: 27,
      },
      {
        time: "10:04",
        Percent: 18,
      },
      {
        time: "10:05",
        Percent: 23,
      },
      {
        time: "10:06",
        Percent: 3,
      },
    ],
    device: "Machine 14",
    donutChartdata: 3,
  },
  {
    chartdata: [
      {
        time: "10:00",
        Percent: 40,
      },
      {
        time: "10:01",
        Percent: 30,
      },
      {
        time: "10:02",
        Percent: 25,
      },
      {
        time: "10:03",
        Percent: 27,
      },
      {
        time: "10:04",
        Percent: 18,
      },
      {
        time: "10:05",
        Percent: 23,
      },
      {
        time: "10:06",
        Percent: 40,
      },
    ],
    device: "Machine 15",
    donutChartdata: 40,
  },
];

const donutChartdata = 34;

export default function Notifications() {
  return (
    <main>
      <div className="flex-col">
        <h1 className="p-8 font-mono fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:size-auto lg:bg-none">
          Overview
        </h1>
        <div className="grid grid-cols-3 justify-center gap-4">
          {chartData.map((overview, index) => (
            <OverviewCard
              key={index}
              device={overview.device}
              chartdata={overview.chartdata}
              donutChartdata={overview.donutChartdata}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
