import { getCountChartApi } from "@/services";

export async function getCountChart() {
  try {
    const response = await fetch(getCountChartApi, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("API error:", response.status, response.statusText);
      return {count: 0};
    }

    const data = await response.json();

    return { count: data?.count };
  } catch (error) {
    console.error("Fetch failed:", error);
    return {
      count: 0
    };
  }
}
