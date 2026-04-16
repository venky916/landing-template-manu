import { Features } from "@/components/features";
import { FeaturesSecondary } from "@/components/features-secondary";
import { FeaturesTertiary } from "@/components/features-tertiary";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { Outcomes } from "@/components/outcomes";
import { Speed } from "@/components/speed";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <LogoCloud />
      <Features />
      <Speed />
      <FeaturesSecondary />
      <Outcomes />
      <FeaturesTertiary />
    </div>
  );
}
