// src/pages/ProjetosDetalhados.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
} from "lucide-react";
import "./Projeto-detalhes.css";
import { useTheme } from "../theme/ThemeContext";
import { useTranslation, getTranslatedProject } from "../i18n/LanguageContext";

type ThemeMode = "light" | "dark";

function shotSrc(base: string, theme: ThemeMode) {
  return `${base}.${theme}.PNG`;
}

function useIsMobile(breakpoint = 860) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window === "undefined" ? false : window.innerWidth <= breakpoint
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}

export default function ProjetoDetalhes() {
  const { slug } = useParams();
  const { t, locale } = useTranslation();
  const project = useMemo(
    () => (slug ? getTranslatedProject(slug, locale) : undefined),
    [slug, locale]
  );

  const shots = project?.screenshots ?? [];
  const [active, setActive] = useState(0);

  const { theme } = useTheme();
  const resolvedTheme: ThemeMode = theme === "dark" ? "dark" : "light";
  const hasShots = shots.length > 0;

  const isMobile = useIsMobile(860);

  useEffect(() => {
    if (isMobile) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMobile]);

  useEffect(() => {
    if (shots.length > 0) setActive((v) => Math.min(v, shots.length - 1));
  }, [shots.length]);

  useEffect(() => {
    if (!hasShots) return;
    const other: ThemeMode = resolvedTheme === "dark" ? "light" : "dark";
    shots.forEach((s) => {
      const img = new Image();
      img.src = shotSrc(s.base, other);
    });
  }, [resolvedTheme, hasShots, shots]);

  const prevShot = () =>
    setActive((v) => (v - 1 + shots.length) % shots.length);
  const nextShot = () => setActive((v) => (v + 1) % shots.length);

  const touchStartX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current;
    const end = e.changedTouches[0]?.clientX ?? null;
    if (start == null || end == null) return;

    const dx = end - start;
    const threshold = 40;
    if (Math.abs(dx) < threshold) return;

    if (dx > 0) prevShot();
    else nextShot();

    touchStartX.current = null;
  };

  if (!project) {
    return (
      <section className="pageSection">
        <header className="pageHeader">
          <h1>{t.projetos.notFound}</h1>
          <p>{t.projetos.notFoundDesc}</p>
        </header>

        <Link to="/projetos" className="homePrimaryBtn">
          <ArrowLeft size={18} /> {t.projetos.backToProjects}
        </Link>
      </section>
    );
  }

  return (
    <section className="projectDetailPage">
      <div className="projectDetailGrid">
        <aside className="projectInfo">
          <Link to="/projetos" className="backLink">
            <ArrowLeft size={18} />
            {t.projetos.back}
          </Link>

          <h1 className="projectTitle">{project.title}</h1>
          <p className="projectDesc">{project.longDescription}</p>

          {(project.links?.github || project.links?.live || project.links?.demo) && (
            <div className="projectLinks">
              {project.links?.github && (
                <a className="projLink" href={project.links.github} target="_blank" rel="noreferrer">
                  <Github size={18} />
                  GitHub
                </a>
              )}
              {project.links?.live && (
                <a className="projLink" href={project.links.live} target="_blank" rel="noreferrer">
                  <ExternalLink size={18} />
                  Live
                </a>
              )}
              {project.links?.demo && (
                <a className="projLink" href={project.links.demo} target="_blank" rel="noreferrer">
                  <ExternalLink size={18} />
                  Demo
                </a>
              )}
            </div>
          )}

          <div className="block">
            <h3 className="blockTitle">{t.projetos.technologies}</h3>
            <div className="techChips">
              {project.tech.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="block">
            <h3 className="blockTitle">{t.projetos.highlights}</h3>
            <ul className="highlights">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="projectMedia">
          <div
            className="carouselMain"
            onTouchStart={isMobile ? onTouchStart : undefined}
            onTouchEnd={isMobile ? onTouchEnd : undefined}
          >
            {hasShots ? (
              <>
                <button
                  className="carouselBtn left"
                  onClick={prevShot}
                  aria-label={t.projetos.prevImage}
                  type="button"
                >
                  <ChevronLeft size={22} />
                </button>

                <img
                  className="carouselImg"
                  src={shotSrc(shots[active].base, resolvedTheme)}
                  alt={shots[active].alt}
                  loading="lazy"
                />

                <button
                  className="carouselBtn right"
                  onClick={nextShot}
                  aria-label={t.projetos.nextImage}
                  type="button"
                >
                  <ChevronRight size={22} />
                </button>

                <div className="carouselCaption">{shots[active].alt}</div>
              </>
            ) : (
              <div className="carouselEmpty">
                {t.projetos.noScreenshots}
              </div>
            )}
          </div>

          {hasShots && (
            <div className="thumbs">
              {shots.map((s, i) => (
                <button
                  key={s.base}
                  className={`thumb ${i === active ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`${t.projetos.details} ${i + 1}`}
                  type="button"
                >
                  <img
                    src={shotSrc(s.base, resolvedTheme)}
                    alt={s.alt}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </main>
      </div>
    </section>
  );
}
