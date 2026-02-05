import { MapPin, Calendar, GraduationCap } from "lucide-react";
import "./formacoes.css";

type FormacaoItem = {
  titulo: string;
  instituicao: string;
  local: string;
  nivelStatus: string;
  descricao: string;
  periodo: string;
};

export default function Formacoes() {
  const formacoes: FormacaoItem[] = [
    // ===== Formação Acadêmica =====
    {
      titulo: "Bacharelado em Ciência de Dados",
      instituicao: "Univesp",
      local: "São Paulo, SP (EAD/Online)",
      nivelStatus: "Bacharelado • Em andamento",
      descricao:
        "Graduação focada em análise de dados, estatística e fundamentos para atuar com dados e tecnologia.",
      periodo: "Início: Agosto/2025 — Duração: 8 semestres",
    },
    {
      titulo: "Técnico em Análise e Desenvolvimento de Sistemas",
      instituicao: "Etec Vasco Antônio Venchiarutti",
      local: "Jundiaí, SP",
      nivelStatus: "Técnico • Concluído",
      descricao:
        "Formação técnica voltada ao desenvolvimento de sistemas, lógica de programação e bases de projetos em TI.",
      periodo: "Conclusão: Dez/2024",
    },

    // ===== Formações profissionalizantes (cursos/certificações) =====
    {
      titulo: "Certificação em HTML 5, CSS3 e Bootstrap4",
      instituicao: "",
      local: "Online",
      nivelStatus: "Certificação • Concluído",
      descricao:
        "Fundamentos de front-end com HTML, CSS e Bootstrap para criação de interfaces responsivas.",
      periodo: "Carga horária: 40 horas",
    },
    {
      titulo: "Certificação em Java básico",
      instituicao: "Curso em Vídeo",
      local: "Online",
      nivelStatus: "Certificação • Concluído",
      descricao:
        "Introdução à linguagem Java, com foco em lógica, sintaxe e programação básica.",
      periodo: "Carga horária: 40 horas",
    },
    {
      titulo: "Certificação em Introdução à Ciência de Dados",
      instituicao: "Não informado",
      local: "Online",
      nivelStatus: "Certificação • Concluído",
      descricao:
        "Conceitos introdutórios de ciência de dados, contexto de uso e fundamentos para análises.",
      periodo: "Carga horária: não informada",
    },
    {
      titulo: "Certificação Introdução Python",
      instituicao: "Curso em Vídeo",
      local: "Online",
      nivelStatus: "Certificação • Concluído",
      descricao:
        "Noções iniciais de Python para programação, automações e base para estudos em dados.",
      periodo: "Carga horária: 8 horas",
    },
    {
      titulo: "Certificação Segurança da informação com Python",
      instituicao: "Não informado",
      local: "Online",
      nivelStatus: "Certificação • Concluído",
      descricao:
        "Introdução a conceitos de segurança e aplicações práticas utilizando Python.",
      periodo: "Carga horária: 5 horas",
    },
    {
      titulo: "Certificação Algoritimo",
      instituicao: "Curso em Vídeo",
      local: "Online",
      nivelStatus: "Certificação • Concluído",
      descricao:
        "Lógica de programação e construção de algoritmos para resolver problemas de forma estruturada.",
      periodo: "Carga horária: 40 horas",
    },
    {
      titulo: "Certificação Python mundo 1",
      instituicao: "Curso em Vídeo",
      local: "Online",
      nivelStatus: "Certificação • Concluído",
      descricao:
        "Base da linguagem Python: variáveis, estruturas, funções e fundamentos de programação.",
      periodo: "Carga horária: 40 horas",
    },
    {
      titulo: "Certificação Python mundo 2",
      instituicao: "Curso em Vídeo",
      local: "Online",
      nivelStatus: "Certificação • Concluído",
      descricao:
        "Aprofundamento em Python com estruturas mais avançadas e resolução de exercícios práticos.",
      periodo: "Carga horária: 40 horas",
    },
    {
      titulo: "Certificação Python mundo 3",
      instituicao: "Curso em Vídeo",
      local: "Online",
      nivelStatus: "Certificação • Concluído",
      descricao:
        "Conteúdos avançados e consolidação de fundamentos em Python com foco em prática.",
      periodo: "Carga horária: 40 horas",
    },
    {
      titulo: "Curso em Programação de Games Scratch",
      instituicao: "Curso complementar ensino fundamental",
      local: "Presencial",
      nivelStatus: "Curso • Concluído",
      descricao:
        "Introdução ao desenvolvimento de jogos com Scratch, lógica e criação de interações.",
      periodo: "Carga horária: 38 horas",
    },
    {
      titulo: "Curso de Robótica Educacional",
      instituicao: "Curso complementar ensino fundamental",
      local: "Presencial",
      nivelStatus: "Curso • Concluído",
      descricao:
        "Aprendizado de fundamentos de robótica educacional, lógica e montagem/controle básico.",
      periodo: "Carga horária: 38 horas",
    },
    {
      titulo: "Curso de Informática Básica",
      instituicao: "Curso complementar ensino fundamental",
      local: "Presencial",
      nivelStatus: "Curso • Concluído",
      descricao:
        "Conceitos essenciais de informática: uso do computador, sistema operacional e noções de produtividade.",
      periodo: "Carga horária: 38 horas",
    },
  ];

  return (
    <section className="pageSection">
      <header className="pageHeader">
        <h1>Formações</h1>
        <p>
          Aqui estão minhas formações acadêmicas e cursos relevantes para minha
          atuação em tecnologia.
        </p>
      </header>

      <div className="eduGrid">
        {formacoes.map((item, idx) => (
          <article className="workCard" key={`${item.titulo}-${idx}`}>
            <div className="workHeader">
              <h3 className="workTitleLine">
                <span className="workTitleIcon" aria-hidden>
                  <GraduationCap size={18} />
                </span>
                {item.titulo}
              </h3>

              <span className="workLocation">
                <MapPin size={16} />
                {item.instituicao} — {item.local}
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
