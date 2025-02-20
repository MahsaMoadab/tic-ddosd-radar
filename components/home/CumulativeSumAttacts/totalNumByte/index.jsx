import React from "react";
import { getSumLRLApi } from "@/services/getSumLRLApi";

export default async function TotalNumByte() {
    const { sum } = await getSumLRLApi();

    if (!sum) {
        return (
            <div className="p-4 bg-gray-900 border border-sky-50 text-white">
                <h2 className="text-xl font-bold">Maximum Attack Volumes</h2>
                <p className="text-red-400">Failed to fetch data. Please try again later.</p>
            </div>
        );
    }
    return (
        <div className="py-6 px-5 bg-[#091028] border border-[#FFFFFF20]">
            <span className="uppercase text-sm text-[#78FF97]">Peta Bytes</span>
            <p className="text-5xl flex items-center flex-col gap-2 text-white font-bold pt-4">
                {sum}
            </p>
            <h3 className="text-[22px] mt-2 opacity-40">
                Total Number<br /> of <span className="underline"> Dropped Bytes</span>
                </h3>
        </div>
    );
}
