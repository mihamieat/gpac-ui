import { Card } from "@/components/tremor/Card";
import { SparkAreaChart } from "@/components/tremor/SparkChart";
import { ProgressCircle } from "@/components/tremor/ProgressCircle";

const chartdata = [
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
          <Card className="w-80 h-60 flex flex-col justify-center hover:bg-gray-100 items-center">
            <div className="mb-4">
              <p className="text-center font-mono text-gray-700 dark:text-gray-300">
                Machine 1
              </p>
            </div>
            <div className="flex justify-center items-center">
              <SparkAreaChart
                data={chartdata}
                categories={["Percent"]}
                index={"time"}
                colors={["violet"]}
                className="sm:h-10 sm:w-36"
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <ProgressCircle
                value={donutChartdata}
                strokeWidth={10}
                radius={40}
              >
                <span className="text-center">{donutChartdata}%</span>
              </ProgressCircle>
            </div>
          </Card>
          <Card className="w-80 h-60 flex flex-col justify-center items-center">
            <div className="mb-4">
              <p className="text-center font-mono text-gray-700 dark:text-gray-300">
                Machine 2
              </p>
            </div>
            <div className="flex justify-center items-center">
              <SparkAreaChart
                data={chartdata}
                categories={["Percent"]}
                index={"time"}
                colors={["violet"]}
                className="sm:h-10 sm:w-36"
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <ProgressCircle
                value={donutChartdata}
                strokeWidth={10}
                radius={40}
              >
                <span className="text-center">{donutChartdata}%</span>
              </ProgressCircle>
            </div>
          </Card>
          <Card className="w-80 h-60 flex flex-col justify-center items-center">
            <div className="mb-4">
              <p className="text-center font-mono text-gray-700 dark:text-gray-300">
                Machine 3
              </p>
            </div>
            <div className="flex justify-center items-center">
              <SparkAreaChart
                data={chartdata}
                categories={["Percent"]}
                index={"time"}
                colors={["violet"]}
                className="sm:h-10 sm:w-36"
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <ProgressCircle
                value={donutChartdata}
                strokeWidth={10}
                radius={40}
              >
                <span className="text-center">{donutChartdata}%</span>
              </ProgressCircle>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
