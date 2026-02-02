const brawlerImages = import.meta.glob<{ default: string }>("../images/brawlers/*.webp", { eager: true });

const BRAWLER_ID_TO_FILENAME: Record<string, string> = {
  "8-BIT": "8-Bit",
  "8BIT": "8-Bit",
  "EL PRIMO": "El_Primo",
  EL_PRIMO: "El_Primo",
  "MR. P": "Mr._P",
  MR_P: "Mr._P",
  "LARRY & LAWRIE": "Larry_%26_Lawrie",
  LARRY_AND_LAWRIE: "Larry_%26_Lawrie",
  "R-T": "R-T",
  R_T: "R-T",
  "JAE-YONG": "Jae-yong",
  JAE_YONG: "Jae-yong",
};

function formatBrawlerId(brawlerId: string): string {
  const upperCaseId = brawlerId.toUpperCase();

  if (BRAWLER_ID_TO_FILENAME[upperCaseId]) {
    return BRAWLER_ID_TO_FILENAME[upperCaseId];
  }

  // Handle both space and underscore separators
  return brawlerId
    .split(/[\s_]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("_");
}

export function getBrawlerImageUrl(brawlerId: string): string | null {
  const formattedName = formatBrawlerId(brawlerId);
  const searchPattern = `${formattedName}_Portrait.webp`;

  for (const [path, module] of Object.entries(brawlerImages)) {
    if (path.endsWith(searchPattern)) {
      return module.default;
    }
  }

  const lowerPattern = searchPattern.toLowerCase();
  for (const [path, module] of Object.entries(brawlerImages)) {
    if (path.toLowerCase().endsWith(lowerPattern)) {
      return module.default;
    }
  }

  console.warn(`[BrawlerImage] Not found: ${brawlerId} -> ${formattedName}`);
  return null;
}

export function getAllBrawlerImages(): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [path, module] of Object.entries(brawlerImages)) {
    const match = path.match(/\/([^/]+)_Portrait\.webp$/);
    if (match && match[1]) {
      result[match[1]] = module.default;
    }
  }

  return result;
}
