    import { createContext, useContext, useEffect, useMemo, useState } from "react";
    import type { ThemeName } from "./themes";
    import { applyTheme, getStoredTheme, storeTheme } from "./applyTheme";

    type ThemeCtx = {
    theme: ThemeName;
    setTheme: (t: ThemeName) => void;
    toggleTheme: () => void;
    };

    const Ctx = createContext<ThemeCtx | null>(null);

    export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<ThemeName>("light");

    useEffect(() => {
        const saved = getStoredTheme();
        const initial: ThemeName = saved ?? "light";
        setThemeState(initial);
        applyTheme(initial);
    }, []);

    const setTheme = (t: ThemeName) => {
        setThemeState(t);
        storeTheme(t);
        applyTheme(t);
    };

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme]);

    return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
    }

    export function useTheme() {
    const ctx = useContext(Ctx);
    if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider />");
    return ctx;
    }
