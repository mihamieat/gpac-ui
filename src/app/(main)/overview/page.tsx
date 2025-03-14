"use client";
import { useEffect, useState } from "react";
import OverviewCard from "@/components/OverviewCard";
import OverviewDrawer from "@/components/OverviewDrawer";
import {
  fetchCustomHostnameList,
  fetchOverviewData,
} from "@/data/overviewdata";

const Overview = () => {
  const [hostnames, setHostnames] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [overviewData, setOverviewData] = useState<Record<string, any>>({});

  // Fetch initial hostnames and their overview data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const hostnameList = await fetchCustomHostnameList();
        setHostnames(hostnameList);

        if (hostnameList.length > 0) {
          const results = await Promise.all(
            hostnameList.map(async (hostname: string) => {
              try {
                const data = await fetchOverviewData(hostname);
                return { hostname, data };
              } catch (err) {
                console.error(
                  `Error fetching overview data for ${hostname}:`,
                  err,
                );
                return { hostname, data: null };
              }
            }),
          );

          const overviewMap: Record<string, any> = {};
          results.forEach(({ hostname, data }) => {
            if (data) overviewMap[hostname] = data;
          });

          setOverviewData(overviewMap);
        }
      } catch (err) {
        setError("Failed to fetch data.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Update overviewData when hostnames change
  useEffect(() => {
    const fetchNewData = async () => {
      const newHostnames = hostnames.filter(
        (hostname) => !overviewData[hostname],
      );
      if (newHostnames.length > 0) {
        const results = await Promise.all(
          newHostnames.map(async (hostname: string) => {
            try {
              const data = await fetchOverviewData(hostname);
              return { hostname, data };
            } catch (err) {
              console.error(
                `Error fetching overview data for ${hostname}:`,
                err,
              );
              return { hostname, data: null };
            }
          }),
        );

        const newOverviewMap = { ...overviewData };
        results.forEach(({ hostname, data }) => {
          if (data) newOverviewMap[hostname] = data;
        });

        setOverviewData(newOverviewMap);
      }
    };

    fetchNewData();
  }, [hostnames]);

  return (
    <main>
      <div className="flex-col">
        <h1 className="p-8 font-mono fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:size-auto lg:bg-none">
          Overview
        </h1>
        <div className="flex flex-row">
          <div className="flex flex-wrap gap-4">
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {Object.entries(overviewData).map(
              ([hostname, data]) =>
                hostnames.includes(hostname) && (
                  <OverviewCard
                    key={hostname}
                    device={hostname}
                    chartdata={
                      data.gpu_data?.map((item: any) => ({
                        time: item.timestamp,
                        Percent: item.percentage,
                      })) || []
                    }
                    donutChartdata={data.percentage?.percentage || 0}
                  />
                ),
            )}
          </div>
          <div className="px-5">
            {/* Pass setHostnames to OverviewDrawer */}
            <OverviewDrawer hostnames={hostnames} setHostnames={setHostnames} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Overview;
