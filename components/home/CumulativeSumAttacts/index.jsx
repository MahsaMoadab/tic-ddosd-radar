import React from "react";
import TotalNumPacket from './totalNumPacket'
import TotalNumByte from './totalNumByte'

export default async function CumulativeSumAttacts() {
    return (
        <div className="py-7 px-4 bg-[#091028] text-white border border-[#FFFFFF20] ">
            <div className="text-[24px] mb-2 text-center">
                Cumulative Sum of Mitigated DDoS Attacks
            </div>
            <div className="flex flex-wrap">
                <TotalNumPacket />
                <TotalNumByte />
            </div>
        </div>
    );
}
