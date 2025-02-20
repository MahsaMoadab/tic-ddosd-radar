import { getDurationApi } from "@/services";
import {convertMilliseconds} from '@/utils'
export async function getDuration() {
  try {
    const response = await fetch(getDurationApi, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("API error:", response.status, response.statusText);
      return {
        days: 0, hours: 0, minutes: 0
      };
    }

    const data = await response.json();

    const {days, hours, minutes} = convertMilliseconds(data?.duration)    

    return { days, hours, minutes, duration: data?.duration };
  } catch (error) {
    console.error("Fetch failed:", error);
    return {
      days: 0, hours: 0, minutes: 0
    };
  }
}
