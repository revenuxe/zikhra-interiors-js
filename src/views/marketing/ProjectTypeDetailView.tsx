import type { ProjectTypeItem } from "@/lib/project-types-data";
import type { MarketId } from "@/lib/market-types";
import type { PackageCategory } from "@/lib/travel-packages";
import PackageExplorer from "@/views/marketing/PackageExplorer";

export default function ProjectTypeDetailView({ item }: { item: ProjectTypeItem; market?: MarketId }) {
  const categories: Record<string, PackageCategory> = { umrah: "classic", "family-umrah": "family", "group-umrah": "family", "private-umrah": "private" };
  return <PackageExplorer initialCategory={categories[item.slug] ?? "all"} />;
}
