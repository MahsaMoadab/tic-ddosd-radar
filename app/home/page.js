import MaximumItemsAttacks from "@/components/home/maximumAttackVolumes";
import MitigatedAttacts from "@/components/home/mitigatedAttacts";
import CumulativeSumAttacts from "@/components/home/CumulativeSumAttacts";
import MaximumAttackDuration from "@/components/home/maximumAttackDuration";

export default function HomePage() {
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-base">
          The Radar report has been extracted from the data of the{" "}
          <span className="text-[#78FF97] underline">SIWAN</span> DDoS detection
          and Mitigation system, which has been deployed
          <br /> and operated by the TIC company as the country&apos;s defense
          shield, providing effective protection against attacks.
        </h3>
      </div>
      <div className="flex flex-wrap gap-3">
        <div className="flex flex-wrap">
          <MitigatedAttacts />
          <CumulativeSumAttacts />
        </div>

        <MaximumItemsAttacks />
      </div>
      <MaximumAttackDuration />
    </div>
  );
}
