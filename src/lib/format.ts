/** Builds an editorial section label like "03 / Experience". */
export function sectionLabel(index: number, text: string): string {
  return `${String(index).padStart(2, "0")} / ${text}`;
}
