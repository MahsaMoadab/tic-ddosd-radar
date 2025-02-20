import { CalendarIcon, TimeIcon } from "@/assets";


export default function Header() {
    return (
        <div className="bg-blue-600 text-white p-4 shadow-md flex space-between justify-between w-100">
            <p className="text-[24px] font-bold">TIC DDoS Radar</p>
            <div style={{ display: "flex", gap: "20px", alignItems: "center", color: "white", background: "#0D1117", padding: "10px 20px", borderRadius: "10px" }}>
                  {/* Date Section */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <CalendarIcon size={20} color="gray" />
                    {/* <span>{weekday} – {persianDateStr}</span> */}
                  </div>
            
                  {/* Time Section */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <TimeIcon size={20} color="gray" />
                    {/* <span>{time}</span> */}
                  </div>
                </div>
        </div>
    );
}
