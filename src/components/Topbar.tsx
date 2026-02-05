// src/components/Topbar.tsx
import { NavLink } from "react-router-dom";
import {
  BriefcaseBusiness,
  Home,
  Layers3,
  Mail,
  Moon,
  Sun,
  GraduationCap,
  FileText, // ✅ add
} from "lucide-react";
import "./topbar.css";
import { useTheme } from "../theme/ThemeContext";

type TopbarProps = {
  brandText?: string;
};

export default function Topbar({ brandText = "Victor Barbosa" }: TopbarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="topbar">
      <div className="topbar__inner">
        {/* Esquerda */}
        <div className="topbar__left">
          <div className="brand">
            <span className="brand__dot" aria-hidden />
            <span className="brand__text">{brandText}</span>
          </div>
        </div>

        {/* Centro */}
        <nav className="topbar__center" aria-label="Navegação principal">
          <NavItem to="/" label="Home" icon={<Home size={18} />} end />
          <NavItem to="/trabalhos" label="Experiência" icon={<BriefcaseBusiness size={18} />} />
          <NavItem to="/projetos" label="Projetos" icon={<Layers3 size={18} />} />
          <NavItem to="/formacoes" label="Formações" icon={<GraduationCap size={18} />} />
          <NavItem to="/curriculo" label="Currículo" icon={<FileText size={18} />} /> {/* ✅ add */}
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
