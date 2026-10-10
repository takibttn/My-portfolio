export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/**
 * Runs before the app hydrates (injected into the document head) so the correct
 * theme is applied on first paint, with no flash of the wrong colour scheme.
 * Falls back to the user's system preference when nothing has been stored.
 */
export const themeInitScript = [
  "(function(){",
  "try{",
  'var k="' + THEME_STORAGE_KEY + '";',
  "var s=localStorage.getItem(k);",
  "var t=(s==='light'||s==='dark')?s:",
  "(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light';",
  "document.documentElement.setAttribute('data-theme',t);",
  "}catch(e){",
  "document.documentElement.setAttribute('data-theme','light');",
  "}",
  "})();",
].join("");

export function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
