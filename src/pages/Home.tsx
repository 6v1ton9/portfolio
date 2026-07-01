// src/pages/Home.tsx
import React from "react";
import { ArrowRight, Bot, Code2, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useTranslation } from "../i18n/LanguageContext";

export default function Home() {
  const { t } = useTranslation();

  const icons = [Code2, Bot, Wrench];

  return (
    <section className="homeHero">
      {/* Texto */}
      <div className="homeLeft">
        <span className="homeBadge">{t.home.badge}</span>

        <h1 className="homeTitle">{t.home.title}</h1>

        <p className="homeSubtitle">{t.home.subtitle}</p>

        {/* Destaques */}
        <ul className="homeFeatures">
          {t.home.features.map((text, i) => {
            const Icon = icons[i] || Code2;
            return (
              <li key={i} className="homeFeature">
                <span className="homeFeatureIcon">
                  <Icon size={18} />
                </span>
                <span className="homeFeatureText">{text}</span>
              </li>
            );
          })}
        </ul>

        {/* CTAs */}
        <div className="homeCtas">
          <Link to="/projetos" className="homePrimaryBtn">
            {t.home.ctaProjects} <ArrowRight size={18} />
          </Link>

          <Link to="/contato" className="homeSecondaryBtn">
            {t.home.ctaContact}
          </Link>
        </div>
      </div>

      {/* Foto / visual */}
      <div className="homeRight">
        <img src="/eu.png" alt="Foto de Victor Barbosa" className="homeImg" />
      </div>
    </section>
  );
}
