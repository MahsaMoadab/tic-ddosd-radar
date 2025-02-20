import { getSumPPSApi } from "@/services";

export async function getSumPPS() {
  try {
    const response = await fetch(getSumPPSApi, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("API error:", response.status, response.statusText);
      return {
        sum: 0,
      };
    }

    const data = await response.json();
    const sumPackets = data.sum || 0;

    const sumInBillionPackets = sumPackets / 1e9;

    return { sum: sumInBillionPackets?.toFixed(2) };
  } catch (error) {
    console.error("Fetch failed:", error);
    return {
      sum: 0
    };
  }
}
