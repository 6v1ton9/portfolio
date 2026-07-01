// src/components/Topbar.tsx
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BriefcaseBusiness,
  Home,
  Layers3,
  Mail,
  Moon,
  Sun,
  GraduationCap,
  FileText,
  Menu,
  X,
} from "lucide-react";

import "./topbar.css";
import { useTheme } from "../theme/ThemeContext";
import { useTranslation } from "../i18n/LanguageContext";
import FlagWithFallback from "./FlagWithFallback";
import type { Locale } from "../i18n/locales";

export default function Topbar() {
  const { theme, toggleTheme } = useTheme();
  const { t, locale, setLocale } = useTranslation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Fechar com ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    if (mobileOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  // Trava scroll quando aberto
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // Foco no painel ao abrir; volta pro botão ao fechar
  useEffect(() => {
    if (mobileOpen) {
      setTimeout(() => panelRef.current?.focus(), 0);
    } else {
      buttonRef.current?.focus();
    }
  }, [mobileOpen]);

  const langOpts: { code: Locale; label: string }[] = [
    { code: "pt-BR", label: "PT" },
    { code: "en", label: "EN" },
  ];

  return (
    <header className="topbar">
      <div className="topbar__inner">
        {/* Esquerda */}
        <div className="topbar__left">
          {/* Botão mobile (hamburger) */}
          <button
            ref={buttonRef}
            className="topbarItem mobileMenuBtn"
            type="button"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobileSidebar"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="glowIcon">
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </span>
          </button>

          <div className="brand">
            <span className="brand__dot" aria-hidden />
            <span className="brand__text">{t.topbar.brand}</span>
          </div>
        </div>

        {/* Centro (desktop) */}
        <nav className="topbar__center" aria-label="Navegação principal">
          <NavItem to="/" label={t.topbar.home} icon={<Home size={18} />} end />
          <NavItem
            to="/trabalhos"
            label={t.topbar.experience}
            icon={<BriefcaseBusiness size={18} />}
          />
          <NavItem to="/projetos" label={t.topbar.projects} icon={<Layers3 size={18} />} />
          <NavItem
            to="/formacoes"
            label={t.topbar.education}
            icon={<GraduationCap size={18} />}
          />
          <NavItem
            to="/curriculo"
            label={t.topbar.resume}
            icon={<FileText size={18} />}
          />
        </nav>

        {/* Direita */}
        <div className="topbar__right">
          {/* Language switcher */}
          <div className="langSwitcher">
            {langOpts.map(({ code }) => (
              <button
                key={code}
                className={`topbarItem langBtn ${locale === code ? "is-active" : ""}`}
                onClick={() => setLocale(code)}
                type="button"
                aria-label={code === "pt-BR" ? "Português" : "English"}
                title={code === "pt-BR" ? "Português" : "English"}
              >
                <FlagWithFallback code={code} size={20} />
              </button>
            ))}
          </div>

          <button
            className="topbarItem themeBtn"
            onClick={toggleTheme}
            aria-label="Alternar tema"
            type="button"
          >
            <span className="glowIcon">
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </span>
          </button>

          <NavLink to="/contato" className="topbarItem contactBtn">
            <span className="glowIcon contactBtn__icon">
              <Mail size={18} />
            </span>
            <span className="glowText contactBtn__text">{t.topbar.contact}</span>
          </NavLink>
        </div>
      </div>

      {/* ===== Mobile Sidebar + Overlay ===== */}
      <div
        className={`mobileOverlay ${mobileOpen ? "is-open" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      />

      <aside
        id="mobileSidebar"
        ref={panelRef}
        className={`mobileSidebar ${mobileOpen ? "is-open" : ""}`}
        tabIndex={-1}
        aria-label="Menu mobile"
      >
        <div className="mobileSidebar__top">
          <div className="brand brand--mobile">
            <span className="brand__dot" aria-hidden />
            <span className="brand__text">{t.topbar.brand}</span>
          </div>

          <button
            className="topbarItem mobileCloseBtn"
            type="button"
            aria-label="Fechar menu"
            onClick={() => setMobileOpen(false)}
          >
            <span className="glowIcon">
              <X size={18} />
            </span>
          </button>
        </div>

        <nav className="mobileNav" aria-label="Navegação mobile">
          <MobileNavItem to="/" label={t.topbar.home} icon={<Home size={18} />} onClick={() => setMobileOpen(false)} end />
          <MobileNavItem to="/trabalhos" label={t.topbar.experience} icon={<BriefcaseBusiness size={18} />} onClick={() => setMobileOpen(false)} />
          <MobileNavItem to="/projetos" label={t.topbar.projects} icon={<Layers3 size={18} />} onClick={() => setMobileOpen(false)} />
          <MobileNavItem to="/formacoes" label={t.topbar.education} icon={<GraduationCap size={18} />} onClick={() => setMobileOpen(false)} />
          <MobileNavItem to="/curriculo" label={t.topbar.resume} icon={<FileText size={18} />} onClick={() => setMobileOpen(false)} />
          <MobileNavItem to="/contato" label={t.topbar.contact} icon={<Mail size={18} />} onClick={() => setMobileOpen(false)} />
        </nav>

        <div className="mobileSidebar__bottom">
          {/* Language switcher in mobile sidebar */}
          <div className="mobileLangRow">
            {langOpts.map(({ code }) => (
              <button
                key={code}
                className={`mobileLangBtn ${locale === code ? "is-active" : ""}`}
                onClick={() => setLocale(code)}
                type="button"
                aria-label={code === "pt-BR" ? "Português" : "English"}
              >
                <FlagWithFallback code={code} size={20} />
                <span>{code === "pt-BR" ? "PT" : "EN"}</span>
              </button>
            ))}
          </div>

          <button
            className="mobileThemeBtn"
            onClick={toggleTheme}
            type="button"
            aria-label="Alternar tema"
          >
            <span className="glowIcon">
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </span>
            <span className="glowText">{t.topbar.theme}</span>
          </button>
        </div>
      </aside>
    </header>
  );
}

function NavItem({
  to,
  label,
  icon,
  end,
}: {
  to: string;
  label: string;
  icon: React.ReactNode;
  end?: boolean;
}) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `topbarItem navItem ${isActive ? "is-active" : ""}`
      }
    >
      <span className="glowIcon navItem__icon">{icon}</span>
      <span className="glowText navItem__label">{label}</span>
    </NavLink>
  );
}

function MobileNavItem({
  to,
  label,
  icon,
  onClick,
  end,
}: {
  to: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  end?: boolean;
}) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `mobileNavItem ${isActive ? "is-active" : ""}`
      }
    >
      <span className="mobileNavItem__icon">{icon}</span>
      <span className="mobileNavItem__label">{label}</span>
    </NavLink>
  );
}
