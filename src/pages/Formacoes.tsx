import { MapPin, Calendar, GraduationCap } from "lucide-react";
import "./Formacoes.css";
import { useTranslation } from "../i18n/LanguageContext";

export default function Formacoes() {
  const { t } = useTranslation();

  return (
    <section className="pageSection">
      <header className="pageHeader">
        <h1>{t.formacoes.title}</h1>
        <p>{t.formacoes.subtitle}</p>
      </header>

      <div className="eduGrid">
        {t.formacoes.items.map((item, idx) => (
          <article className="workCard" key={idx}>
            <div className="workHeader">
              <h3 className="workTitleLine">
                <span className="workTitleIcon" aria-hidden>
                  <GraduationCap size={18} />
                </span>
                {item.titulo}
              </h3>

              <span className="workLocation">
                <MapPin size={16} />
                {item.instituicao && `${item.instituicao} — `}{item.local}
              </span>
            </div>

            <span className="workRole">{item.nivelStatus}</span>

            <p>{item.descricao}</p>

            <footer className="workFooter">
              <span className="workPeriod">
                <Calendar size={14} />
                {item.periodo}
              </span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
