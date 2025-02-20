import { getTopFiveLrlApi } from "@/services";

export async function getTopFiveLrl() {
  try {
    const response = await fetch(getTopFiveLrlApi, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("API error:", response.status, response.statusText);
      return {
        itemsAttacks: 0,
        maxValue: 0,
        otherItems: 0
      };
    }

    const data = await response.json();
    const itemsAttacks = data.map((item) => item.value / (1024 * 1024 * 1024));
    const maxValue = Math.max(...itemsAttacks);
    const otherItems = itemsAttacks.filter((volume) => volume !== maxValue);

    return { itemsAttacks, maxValue, otherItems };
  } catch (error) {
    console.error("Fetch failed:", error);
    return {
      itemsAttacks: 0,
      maxValue: 0,
      otherItems: 0
    };
  }
}
