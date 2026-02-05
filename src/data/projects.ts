

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  location?: string; // opcional: "Projeto pessoal", "Freelance", etc.
  tech: string[];
  highlights: string[];
  screenshots: { base: string; alt: string }[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "gestao-barbearias-saloes",
    title: "Sistema de Gestão para Barbearias e Salões",
    shortDescription:
      "Controle completo de microempresa com módulos integrados e IA via WhatsApp.",
    longDescription:
      "Software para gestão de estabelecimentos como barbearias e salões de beleza, com módulos integrados que formam um controle completo da operação. Inclui integração com IA para atendimento via WhatsApp, além de automações de processos.",
    tech: ["Node.js", "TypeScript", "React", "JavaScript", "n8n", "IA/WhatsApp"],
    highlights: [
      "Gestão de agenda e atendimentos",
      "Cadastro de clientes e colaboradores",
      "Automações com n8n",
      "Atendimento automatizado via WhatsApp",
    ],
    screenshots: [
      { base: "/prints/dashboard", alt: "Tela inicial do sistema" },
      { base: "/prints/calendario", alt: "Módulo de agenda" },
      { base: "/prints/financeiro", alt: "Gestão financeira" },
      { base: "/prints/configuracoes", alt: "Configurações do estabelecimento" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
