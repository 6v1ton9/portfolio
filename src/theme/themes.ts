    export type ThemeName = "light" | "dark";

    export type ThemeTokens = {
    bg: string;        // fundo geral
    surface: string;   // cards/topbar
    text: string;      // texto principal
    muted: string;     // texto secundário
    border: string;    // bordas
    focus: string;     // cor de foco/brand
    };

    export const themes: Record<ThemeName, ThemeTokens> = {
    light: {
        bg: "#f2f4f7",        // cinza claro (não branco)
        surface: "#ffffff",
        text: "#111827",
        muted: "#4b5563",
        border: "#e5e7eb",
        focus: "#60a5fa"      // azul claro
    },
    dark: {
        bg: "#0b1220",        // preto azulado
        surface: "#0f172a",   // azul bem escuro
        text: "#e5e7eb",
        muted: "#9ca3af",
        border: "#1f2937",
        focus: "#c084fc"      // roxo claro
    }
    };
