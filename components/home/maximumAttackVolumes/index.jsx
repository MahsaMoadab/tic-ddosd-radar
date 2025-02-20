import React from "react";
import { getTopFiveLrl } from '@/services/getTopFiveLrl';
import { RacketIcon } from '@/assets'

export default async function MaximumItemsAttacks() {
    const { itemsAttacks, maxValue, otherItems } = await getTopFiveLrl();

    if (itemsAttacks?.length === 0) {
        return (
            <div className="p-4 bg-gray-900 border border-sky-50 text-white">
                <h2 className="text-xl font-bold">Maximum Attack Volumes</h2>
                <p className="text-red-400">Failed to fetch data. Please try again later.</p>
            </div>
        );
    }
    return (
        <div className="py-7 px-4 bg-[#091028] text-white border border-[#FFFFFF20]">
            <div className="text-base font-bold flex items-center gap-2">
                <RacketIcon />
                <div>
                    <h2 className='text-2xl'>
                        Maximum Attack Volumes
                    </h2>
                    <span className="opacity-80">
                        BITS
                    </span>
                </div>
            </div>
            <p className="text-5xl text-[#78FF97] font-bold pt-6">
                {maxValue.toFixed(1)}
                <span className="text-sm opacity-20 text-white">Gbps</span>
            </p>
            <h3 className="text-[22px] mt-2">Maximum Volume
                <br />
                Of The <span className="text-[#504CA6] underline">Mitigated</span> Attacks</h3>
            <ul className="mt-2 flex gap-2">
                {otherItems.map((volume, index) => (
                    <li key={index} className="text-base p-1 px-2 rounded mt-1  border border-[#FFFFFF20]">
                        {volume.toFixed(1)} Gbps
                    </li>
                ))}
            </ul>
        </div>
    );
}
