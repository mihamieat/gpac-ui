import OverviewCard from "@/components/OverviewCard";
import Link from "next/link";
import { chartData } from "@/data/dummydata";

export default function Notifications() {
  return (
    <main>
      <div className="flex-col">
        <h1 className="p-8 font-mono fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:size-auto lg:bg-none">
          Overview
        </h1>
        <div className="grid grid-cols-3 justify-center gap-4">
          {chartData.map((overview, index) => (
            <Link href="/details">
              <OverviewCard
                key={index}
                device={overview.device}
                chartdata={overview.chartdata}
                donutChartdata={overview.donutChartdata}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
