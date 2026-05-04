export function getEpisodeCode(episodeUrl: string): string {
  const segments = episodeUrl.split("/");
  return segments[segments.length - 1];
}
