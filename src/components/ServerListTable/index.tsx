import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/tremor/Button";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/components/tremor/Table";
import {
  addHostname,
  fetchFullHostnameList,
  removeHostname,
} from "@/data/overviewdata";
import { Toaster } from "@/components/tremor/Toaster";
import { useToast } from "@/lib/useToast";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ServerListTable: React.FC<{
  hostnames: string[];
  setHostnames: (hostnames: string[] | ((prev: string[]) => string[])) => void;
}> = ({ hostnames, setHostnames }) => {
  const [fullHostnames, setFullHostnames] = useState<string[]>([]);
  const credentials = "your-auth-token";
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const fetchFullList = async () => {
      try {
        const fullList = await fetchFullHostnameList();
        setFullHostnames(fullList || []);
      } catch (error) {
        console.error("Error fetching full hostname list:", error);
      }
    };
    fetchFullList();
  }, []);

  const handleAddHostname = async (hostname: string) => {
    try {
      await addHostname(hostname);
      setHostnames((prev) => [...prev, hostname]);
      router.refresh();
      toast({
        className: cn(
          "bottom-0 left-0 flex fixed md:max-w-[420px] md:bottom-4 md:left-4",
        ),
        title: "Info",
        description: `Hostname "${hostname}" has been added.`,
        variant: "info",
        duration: 3000,
      });
    } catch (error) {
      console.error("Failed to add hostname:", error);
      toast({
        className: cn(
          "bottom-0 left-0 flex fixed md:max-w-[420px] md:bottom-4 md:left-4",
        ),
        title: "Error",
        description: `Failed to add hostname "${hostname}". Please try again.`,
        duration: 3000,
      });
    }
  };

  const handleRemoveHostname = async (hostname: string) => {
    try {
      await removeHostname(hostname);
      setHostnames((prev) => prev.filter((h) => h !== hostname));
      router.refresh();
      toast({
        className: cn(
          "bottom-0 left-0 flex fixed md:max-w-[420px] md:bottom-4 md:left-4",
        ),
        title: "Info",
        description: `Hostname "${hostname}" has been hidden.`,
        variant: "info",
        duration: 3000,
      });
    } catch (error) {
      console.error("Failed to remove hostname:", error);
      toast({
        className: cn(
          "bottom-0 left-0 flex fixed md:max-w-[420px] md:bottom-4 md:left-4",
        ),
        title: "Error",
        description: `Failed to remove hostname "${hostname}". Please try again.`,
        duration: 3000,
      });
    }
  };

  return (
    <>
      <TableRoot>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Available Servers</TableHeaderCell>
              <TableHeaderCell>Add/Remove</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fullHostnames.length > 0 ? (
              fullHostnames.map((hostname, index) => {
                const isInCustomList = hostnames.includes(hostname);
                return (
                  <TableRow key={index}>
                    <TableCell>{hostname}</TableCell>
                    <TableCell>
                      {isInCustomList ? (
                        <Button
                          variant="destructive"
                          onClick={() => handleRemoveHostname(hostname)}
                        >
                          Remove
                        </Button>
                      ) : (
                        <Button
                          variant="secondary"
                          onClick={() => handleAddHostname(hostname)}
                        >
                          Add
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={2}>No servers available</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableRoot>
      <Toaster />
    </>
  );
};

export default ServerListTable;
