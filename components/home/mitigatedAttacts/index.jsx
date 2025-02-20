import React from "react";
import { LineChartIcon } from '@/assets'
import { getCountChart } from "@/services/getCountChart";


export default async function MitigatedAttacts() {
    const { count } = await getCountChart();

    if (!count) {
        return (
            <div className="p-4 bg-gray-900 border border-sky-50 text-white">
                <h2 className="text-xl font-bold">Maximum Attack Volumes</h2>
                <p className="text-red-400">Failed to fetch data. Please try again later.</p>
            </div>
        );
    }
    return (
        <div className="py-7 px-4 bg-[#091028] border border-[#FFFFFF20] flex items-center flex-col gap-6 justify-center">
            <p className="text-5xl flex items-center flex-col gap-4 text-[#78FF97] font-bold">
                <LineChartIcon />
                {count}
            </p>
            <h3 className="text-[22px] text-center  text-white">
            Number Of <span className="text-[#504CA6] underline">Mitigated</span> Attacks</h3>
        </div>
    );
}
