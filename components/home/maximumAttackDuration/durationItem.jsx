export default function DurationItem({ value, label }) {

    return (
        <div className="w-[48px]">
            <p className="text-2xl rounded bg-[#FFFFFF1A] w-[48px] h-[48px] flex items-center justify-center">
                {value}
            </p>
            <p className="uppercase text-[#FFFFFFCC] text-xs text-center py-1">{label}</p>
        </div>
    );
}
