import { credentials } from "@/opt/credentials";

const apiRequest = async (
  endpoint: string,
  method: string,
  options: RequestInit = {},
) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`;
  try {
    const response = await fetch(url, {
      method,
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error(`Error on ${method} ${endpoint}:`, error);
    throw error;
  }
};

const fetchFullHostnameList = async () => {
  try {
    const response = await apiRequest("overview/hostname-list", "GET");
    const data = await response.json();

    // Ensure 'hostnames' is an array
    return Array.isArray(data.hostnames) ? data.hostnames : [];
  } catch (error) {
    console.error("Error fetching full hostname list:", error);
    return [];
  }
};

const addHostname = async (hostname: string) => {
  try {
    const response = await apiRequest(
      `overview/hostname/custom?hostname=${hostname}`,
      "POST",
    );
    return hostname;
  } catch (error) {
    console.error(`Error adding hostname ${hostname}:`, error);
    throw error;
  }
};

const removeHostname = async (hostname: string) => {
  try {
    const response = await apiRequest(
      `overview/hostname/custom/${hostname}`,
      "DELETE",
    );
    return hostname;
  } catch (error) {
    console.error(`Error removing hostname ${hostname}:`, error);
    throw error;
  }
};

const fetchCustomHostnameList = async () => {
  try {
    const response = await apiRequest("overview/hostname/custom", "GET");
    const data = await response.json();
    return data.hostnames;
  } catch (error) {
    console.error("Error fetching custom hostnames:", error);
    throw error;
  }
};

const fetchOverviewData = async (hostname: string) => {
  try {
    const response = await apiRequest(`overview?hostname=${hostname}`, "GET");
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
