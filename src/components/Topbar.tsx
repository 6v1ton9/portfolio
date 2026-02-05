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

type TopbarProps = {
  brandText?: string;
};

export default function Topbar({ brandText = "Victor Barbosa" }: TopbarProps) {
  const { theme, toggleTheme } = useTheme();

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
            <span className="brand__text">{brandText}</span>
          </div>
        </div>

        {/* Centro (desktop) */}
        <nav className="topbar__center" aria-label="Navegação principal">
          <NavItem to="/" label="Home" icon={<Home size={18} />} end />
          <NavItem
            to="/trabalhos"
            label="Experiência"
            icon={<BriefcaseBusiness size={18} />}
          />
          <NavItem to="/projetos" label="Projetos" icon={<Layers3 size={18} />} />
          <NavItem
            to="/formacoes"
            label="Formações"
            icon={<GraduationCap size={18} />}
          />
          <NavItem
            to="/curriculo"
            label="Currículo"
            icon={<FileText size={18} />}
          />
        </nav>

        {/* Direita */}
        <div className="topbar__right">
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
            <span className="glowText contactBtn__text">Contato</span>
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
            <span className="brand__text">{brandText}</span>
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
          <MobileNavItem to="/" label="Home" icon={<Home size={18} />} onClick={() => setMobileOpen(false)} end />
          <MobileNavItem to="/trabalhos" label="Experiência" icon={<BriefcaseBusiness size={18} />} onClick={() => setMobileOpen(false)} />
          <MobileNavItem to="/projetos" label="Projetos" icon={<Layers3 size={18} />} onClick={() => setMobileOpen(false)} />
          <MobileNavItem to="/formacoes" label="Formações" icon={<GraduationCap size={18} />} onClick={() => setMobileOpen(false)} />
          <MobileNavItem to="/curriculo" label="Currículo" icon={<FileText size={18} />} onClick={() => setMobileOpen(false)} />
          <MobileNavItem to="/contato" label="Contato" icon={<Mail size={18} />} onClick={() => setMobileOpen(false)} />
        </nav>

        <div className="mobileSidebar__bottom">
          <button
            className="mobileThemeBtn"
            onClick={toggleTheme}
            type="button"
            aria-label="Alternar tema"
          >
            <span className="glowIcon">
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </span>
            <span className="glowText">Tema</span>
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
