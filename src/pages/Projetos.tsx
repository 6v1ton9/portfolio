import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";

export default function Projetos() {
  return (
    <section className="pageSection">
      <header className="pageHeader">
        <h1>Projetos</h1>
        <p>
          Alguns projetos que desenvolvi, focados em resolver problemas reais
          com sistemas e automações.
        </p>
      </header>

      <div className="projectGrid">
        {projects.map((p) => (
          <Link key={p.slug} to={`/projetos/${p.slug}`} className="projectCardLink">
            <article className="projectCard">
              <div className="projectCardTop">
                <h3>{p.title}</h3>
                <span className="projectOpen">
                  Detalhes <ArrowRight size={16} />
                </span>
              </div>

              <p>{p.shortDescription}</p>

              <div className="projectTech">
                {p.tech.slice(0, 3).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
