import { getSumPPSApi } from "@/services";

export async function getSumLRLApi() {
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
    const sumInBits = data.sum || 0;
    const sumInBytes = sumInBits / 8;    

    const sumInPB = sumInBytes / 1e15;

    return { sum: sumInPB.toFixed(4) };
  } catch (error) {
    console.error("Fetch failed:", error);
    return {
      sum: 0,
    };
  }
}
