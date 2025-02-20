import React from "react";
import { getDuration } from '@/services/getDuration'
import { DashboardIcon } from '@/assets';
import DurationItem from './durationItem'

export default async function MaximumAttackDuration() {
    const { days, hours, minutes, duration } = await getDuration();

    if (!duration) {
        return (
            <div className="p-4 bg-gray-900 border border-sky-50 text-white">
                <h2 className="text-xl font-bold">Maximum Attack Volumes</h2>
                <p className="text-red-400">Failed to fetch data. Please try again later.</p>
            </div>
        );
    }
    return (
        <div className="px-9 bg-[#58CE7A1A] flex items-center gap-6 justify-center w-max mt-3">
            <DashboardIcon />
            <div className="flex gap-6 mx-5">
                <DurationItem label="days" value={days} />
                <DurationItem label="hours" value={hours} />
                <DurationItem label="minutes" value={minutes} />
            </div>
            <h3 className="text-[20px] px-10 text-white">
                <p className="text-[#78FF97] text-[22px] font-bold">Maximum</p>
                Attack Duration</h3>
        </div>
    )
}
