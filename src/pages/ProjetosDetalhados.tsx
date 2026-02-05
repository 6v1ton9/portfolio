// src/pages/ProjetosDetalhados.tsx (ou ProjetoDetalhes.tsx)
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
} from "lucide-react";
import { getProjectBySlug } from "../data/projects";
import "./Projeto-detalhes.css";
import { useTheme } from "../theme/ThemeContext";

type ThemeMode = "light" | "dark";

function shotSrc(base: string, theme: ThemeMode) {
  return `${base}.${theme}.PNG`;
}

// Detecta "mobile" por breakpoint (mesmo do CSS)
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
  const project = useMemo(
    () => (slug ? getProjectBySlug(slug) : undefined),
    [slug]
  );

  const shots = project?.screenshots ?? [];
  const [active, setActive] = useState(0);

  const { theme } = useTheme();
  const resolvedTheme: ThemeMode = theme === "dark" ? "dark" : "light";
  const hasShots = shots.length > 0;

  const isMobile = useIsMobile(860);

  // ✅ Só bloqueia scroll no DESKTOP (no mobile deixa rolar)
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

  // (opcional) pré-carrega o outro tema pra não “piscar”
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

  // ✅ Swipe simples no mobile (sem lib)
  const touchStartX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current;
    const end = e.changedTouches[0]?.clientX ?? null;
    if (start == null || end == null) return;

    const dx = end - start;
    const threshold = 40; // px
    if (Math.abs(dx) < threshold) return;

    if (dx > 0) prevShot();
    else nextShot();

    touchStartX.current = null;
  };

  if (!project) {
    return (
      <section className="pageSection">
        <header className="pageHeader">
          <h1>Projeto não encontrado</h1>
          <p>Esse projeto não existe (ou o link está incorreto).</p>
        </header>

        <Link to="/projetos" className="homePrimaryBtn">
          <ArrowLeft size={18} /> Voltar para Projetos
        </Link>
      </section>
    );
  }

  return (
    <section className="projectDetailPage">
      <div className="projectDetailGrid">
        {/* ESQUERDA: infos */}
        <aside className="projectInfo">
          <Link to="/projetos" className="backLink">
            <ArrowLeft size={18} />
            Voltar
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
            <h3 className="blockTitle">Tecnologias</h3>
            <div className="techChips">
              {project.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="block">
            <h3 className="blockTitle">Destaques</h3>
            <ul className="highlights">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </aside>

        {/* DIREITA: carrossel */}
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
                  aria-label="Imagem anterior"
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
                  aria-label="Próxima imagem"
                  type="button"
                >
                  <ChevronRight size={22} />
                </button>

                <div className="carouselCaption">{shots[active].alt}</div>
              </>
            ) : (
              <div className="carouselEmpty">
                Sem prints configurados ainda. (Coloque em <b>public/prints</b> e
                aponte no <b>projects.ts</b>.)
              </div>
            )}
          </div>

          {hasShots && (
            <div className="thumbs" aria-label="Miniaturas">
              {shots.map((s, i) => (
                <button
                  key={s.base}
                  className={`thumb ${i === active ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`Abrir imagem ${i + 1}`}
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
