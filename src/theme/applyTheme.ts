    import type { ThemeName, ThemeTokens } from "./themes";
    import { themes } from "./themes";

    const STORAGE_KEY = "portfolio_theme";

    export function getStoredTheme(): ThemeName | null {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "light" || v === "dark" ? v : null;
    }

    export function storeTheme(theme: ThemeName) {
    localStorage.setItem(STORAGE_KEY, theme);
    }

    export function applyTheme(themeName: ThemeName) {
    const t: ThemeTokens = themes[themeName];
    const root = document.documentElement;

    root.dataset.theme = themeName;

    root.style.setProperty("--bg", t.bg);
    root.style.setProperty("--surface", t.surface);
    root.style.setProperty("--text", t.text);
    root.style.setProperty("--muted", t.muted);
    root.style.setProperty("--border", t.border);
    root.style.setProperty("--focus", t.focus);
    }
