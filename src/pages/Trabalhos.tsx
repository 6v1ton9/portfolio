import { MapPin, Calendar } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";

export default function Trabalhos() {
  const { t, locale } = useTranslation();

  return (
    <section className="pageSection">
      <header className="pageHeader">
        <h1>{t.trabalhos.title}</h1>
        <p>{t.trabalhos.subtitle}</p>
      </header>

      <div className="workList">
        {t.trabalhos.items.map((item, idx) => (
          <article className="workCard" key={idx}>
            <div className="workHeader">
              <h3>{item.company}</h3>
              <span className="workLocation">
                <MapPin size={16} />
                {item.location}
              </span>
            </div>

            <span className="workRole">{item.role}</span>

            <p>{item.description}</p>

            <footer className="workFooter">
              <span className="workPeriod">
                <Calendar size={14} />
                {item.period}
              </span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
