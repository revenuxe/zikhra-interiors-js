import Services from "@/legacy-pages/Services";
import type { MarketId } from "@/lib/market-types";

type Props = { market?: MarketId };

export default function ServicesView({ market = "hyderabad" }: Props) {
  return <Services market={market} />;
}
