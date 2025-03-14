import { credentials } from "@/opt/credentials";

const fetchFullHostnameList = async () => {
  const endpoint = "overview/hostname-list";
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Ensure 'hostnames' is an array
    return Array.isArray(data.hostnames) ? data.hostnames : [];
  } catch (error) {
    console.error("Error fetching custom hostnames:", error);
    return [];
  }
};

const addHostname = async (hostname: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/overview/hostname/custom?hostname=${hostname}`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return hostname;
  } catch (error) {
    console.error(`Error adding hostname ${hostname}:`, error);
    throw error;
  }
};

const removeHostname = async (hostname: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/overview/hostname/custom/${hostname}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return hostname;
  } catch (error) {
    console.error(`Error removing hostname ${hostname}:`, error);
    throw error;
  }
};

const fetchCustomHostnameList = async () => {
  const endpoint = "overview/hostname/custom";
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.hostnames;
  } catch (error) {
    console.error("Error fetching custom hostnames:", error);
    throw error;
  }
};

const fetchOverviewData = async (hostname: string) => {
  const endpoint = "overview";
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}?hostname=${hostname}`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching overview data", error);
    throw error;
  }
};
export {
  addHostname,
  fetchFullHostnameList,
  fetchCustomHostnameList,
  fetchOverviewData,
  removeHostname,
};
