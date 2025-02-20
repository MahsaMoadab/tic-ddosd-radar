import { CalendarIcon, TimeIcon } from "@/assets";
import { getCurrentTime, getDayName } from '@/utils'
import { format } from "date-fns-jalali";

export default function Header() {
  return (
    <div className="bg-[#0a0e1a] text-white flex justify-between items-center px-6 py-3 headerFull">
      <p className="text-[24px] font-bold">TIC DDoS Radar</p>
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2 header-item">
          <CalendarIcon size={20} color="gray" />
          <span>{getDayName()} – {format(new Date(), "yyyy/MM/dd")}</span>
        </div>

        <div className="flex items-center gap-2  header-item">
          <TimeIcon size={20} color="gray" />
          <span>{getCurrentTime()}</span>
        </div>
      </div>
    </div>
  );
}
