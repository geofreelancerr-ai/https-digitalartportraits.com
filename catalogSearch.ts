import { catalog, type Artwork } from "./catalog";

export function searchCatalog(query: string, works: Artwork[] = catalog): Artwork[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];
  return works.filter(work => [work.title, work.collection, work.description, ...work.tags].join(" ").toLowerCase().includes(normalized));
}
