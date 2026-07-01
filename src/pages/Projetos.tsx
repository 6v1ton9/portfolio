import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation, getTranslatedProjects } from "../i18n/LanguageContext";

export default function Projetos() {
  const { t, locale } = useTranslation();
  const translatedProjects = getTranslatedProjects(locale);

  return (
    <section className="pageSection">
      <header className="pageHeader">
        <h1>{t.projetos.title}</h1>
        <p>{t.projetos.subtitle}</p>
      </header>

      <div className="projectGrid">
        {translatedProjects.map((p) => (
          <Link key={p.slug} to={`/projetos/${p.slug}`} className="projectCardLink">
            <article className="projectCard">
              <div className="projectCardTop">
                <h3>{p.title}</h3>
                <span className="projectOpen">
                  {t.projetos.details} <ArrowRight size={16} />
                </span>
              </div>

              <p>{p.shortDescription}</p>

              <div className="projectTech">
                {p.tech.slice(0, 3).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
