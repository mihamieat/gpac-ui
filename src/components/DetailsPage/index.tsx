"use client";

import { AreaChart } from "@/components/tremor/AreaChart";

const chartdata = [
  {
    date: "10:00",
    GPU: 50,
  },
  {
    date: "10:00",
    GPU: 20,
  },
  {
    date: "10:00",
    GPU: 10,
  },
  {
    date: "10:00",
    GPU: 3,
  },
  {
    date: "10:00",
    GPU: 4,
  },
  {
    date: "10:00",
    GPU: 5,
  },
  {
    date: "10:00",
    GPU: 7,
  },
  {
    date: "10:00",
    GPU: 13,
  },
  {
    date: "10:00",
    GPU: 24,
  },
  {
    date: "10:00",
    GPU: 65,
  },
  {
    date: "10:00",
    GPU: 80,
  },
  {
    date: "10:00",
    GPU: 3,
  },
];

export default function AreaChartTypeExample() {
  return (
    <AreaChart
      type="default"
      className="h-60"
      data={chartdata}
      index="date"
      categories={["GPU"]}
      showLegend={false}
    />
  );
}
