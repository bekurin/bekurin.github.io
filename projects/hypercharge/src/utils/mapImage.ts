/**
 * Brawl Stars Fandom Wiki에서 맵 이미지 URL을 생성합니다.
 * Special:FilePath를 통해 리다이렉트되어 실제 이미지 URL로 연결됩니다.
 */
export function getMapImageUrl(mapName: string): string {
  // 맵 이름을 URL 형식으로 변환 (공백 → 언더스코어)
  const formattedName = mapName.replace(/\s+/g, "_");
  return `https://static.wikia.nocookie.net/brawlstars/images/b/b6/${formattedName}-Map.png`;
}
