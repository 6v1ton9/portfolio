// src/pages/Home.tsx
import React from "react";
import { ArrowRight, Bot, Code2, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <section className="homeHero">
      {/* Texto */}
      <div className="homeLeft">
        <span className="homeBadge">Desenvolvedor de Sistemas & Automações</span>

        <h1 className="homeTitle">
          Crio sistemas e automações que resolvem problemas reais de empresas
        </h1>

        <p className="homeSubtitle">
          Atuo no desenvolvimento de sistemas, automações e integração com
          inteligência artificial, com foco em soluções práticas para micro e
          pequenas empresas.
        </p>

        {/* Destaques */}
        <ul className="homeFeatures">
          <Feature icon={<Code2 size={18} />} text="Sistemas de gestão completos" />
          <Feature
            icon={<Bot size={18} />}
            text="IA para atendimento automatizado via WhatsApp"
          />
          <Feature
            icon={<Wrench size={18} />}
            text="Automação de processos e rotinas"
          />
        </ul>

        {/* CTAs */}
        <div className="homeCtas">
          <Link to="/projetos" className="homePrimaryBtn">
            Ver projetos <ArrowRight size={18} />
          </Link>

          <Link to="/contato" className="homeSecondaryBtn">
            Entrar em contato
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

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="homeFeature">
      <span className="homeFeatureIcon">{icon}</span>
      <span className="homeFeatureText">{text}</span>
    </li>
  );
}
