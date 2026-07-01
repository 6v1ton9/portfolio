import { projects as rawProjects } from "../data/projects";
import type { Project } from "../data/projects";

export type Locale = "pt-BR" | "en";

export type ProjectTranslation = {
  title: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  screenshots: { alt: string }[];
};

export type Translations = {
  topbar: {
    brand: string;
    home: string;
    experience: string;
    projects: string;
    education: string;
    resume: string;
    contact: string;
    theme: string;
  };
  home: {
    badge: string;
    title: string;
    subtitle: string;
    features: string[];
    ctaProjects: string;
    ctaContact: string;
  };
  trabalhos: {
    title: string;
    subtitle: string;
    items: {
      company: string;
      location: string;
      role: string;
      description: string;
      period: string;
    }[];
  };
  projetos: {
    title: string;
    subtitle: string;
    details: string;
    notFound: string;
    notFoundDesc: string;
    back: string;
    backToProjects: string;
    technologies: string;
    highlights: string;
    noScreenshots: string;
    prevImage: string;
    nextImage: string;
  };
  formacoes: {
    title: string;
    subtitle: string;
    academic: string;
    courses: string;
    items: {
      titulo: string;
      instituicao: string;
      local: string;
      nivelStatus: string;
      descricao: string;
      periodo: string;
    }[];
  };
  curriculo: {
    title: string;
    subtitle: string;
    download: string;
    openInNewTab: string;
    preview: string;
    fallbackHint: string;
    fallbackText: string;
  };
  contato: {
    title: string;
    subtitle: string;
    name: string;
    role: string;
    email: string;
    phone: string;
    location: string;
    whatsapp: string;
    sendEmail: string;
    quickMessage: string;
    quickMessageText: string;
    availability: string;
    availabilityItems: string[];
    copy: string;
    copied: string;
  };
  footer: {
    madeBy: string;
  };
  projectsData: Record<string, ProjectTranslation>;
};

const ptBR: Translations = {
  topbar: {
    brand: "Victor Barbosa",
    home: "Home",
    experience: "Experiência",
    projects: "Projetos",
    education: "Formações",
    resume: "Currículo",
    contact: "Contato",
    theme: "Tema",
  },
  home: {
    badge: "Desenvolvedor de Sistemas & Automações",
    title:
      "Crio sistemas e automações que resolvem problemas reais de empresas",
    subtitle:
      "Atuo no desenvolvimento de sistemas, automações e integração com inteligência artificial, com foco em soluções práticas para micro e pequenas empresas.",
    features: [
      "Sistemas de gestão completos",
      "IA para atendimento automatizado via WhatsApp",
      "Automação de processos e rotinas",
    ],
    ctaProjects: "Ver projetos",
    ctaContact: "Entrar em contato",
  },
  trabalhos: {
    title: "Experiência Profissional",
    subtitle:
      "Aqui apresento minhas experiências profissionais e atividades desenvolvidas ao longo da minha trajetória.",
    items: [
      {
        company: "Microlins Cursos Profissionalizantes",
        location: "Vinhedo, São Paulo",
        role: "Assistente em Sala de Aula",
        description:
          "Atuei como assistente em sala de aula, oferecendo suporte aos alunos em cursos de tecnologia e programação, além de ministrar um curso especial de Excel.",
        period: "Mar/2023 — Jun/2023",
      },
      {
        company: "Prime Cater",
        location: "Louveira, São Paulo",
        role: "Aprendiz Suporte Técnico / Automação",
        description:
          "Atuo na área de Tecnologia da Informação, prestando suporte a dispositivos e sistemas, além da criação e manutenção de automações. Atualmente, está em desenvolvimento um sistema de gerenciamento inteligente com foco na atualização em tempo real do usuário conectado em cada dispositivo.",
        period: "Mai/2024 — Atual",
      },
    ],
  },
  projetos: {
    title: "Projetos",
    subtitle:
      "Alguns projetos que desenvolvi, focados em resolver problemas reais com sistemas e automações.",
    details: "Detalhes",
    notFound: "Projeto não encontrado",
    notFoundDesc: "Esse projeto não existe (ou o link está incorreto).",
    back: "Voltar",
    backToProjects: "Voltar para Projetos",
    technologies: "Tecnologias",
    highlights: "Destaques",
    noScreenshots:
      "Nenhuma imagem configurada ainda. Coloque os arquivos em public/prints e aponte em projects.ts.",
    prevImage: "Imagem anterior",
    nextImage: "Próxima imagem",
  },
  formacoes: {
    title: "Formações",
    subtitle:
      "Aqui estão minhas formações acadêmicas e cursos relevantes para minha atuação em tecnologia.",
    academic: "Acadêmico",
    courses: "Cursos & Certificações",
    items: [
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
        instituicao: "",
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
        instituicao: "",
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
    ],
  },
  curriculo: {
    title: "Currículo",
    subtitle: "Visualize meu currículo abaixo e faça o download do PDF.",
    download: "Baixar PDF",
    openInNewTab: "Abrir em nova guia",
    preview: "Visualização",
    fallbackHint: "Se não carregar, use \"Abrir em nova guia\".",
    fallbackText: "Seu navegador não conseguiu exibir o PDF aqui.",
  },
  contato: {
    title: "Contato",
    subtitle:
      "Quer falar comigo? Me chame por e-mail, WhatsApp ou pelas redes abaixo. Respondo o mais rápido possível.",
    name: "Victor Barbosa",
    role: "T.I • Suporte • Automação • Desenvolvimento",
    email: "E-mail",
    phone: "Telefone",
    location: "Local",
    whatsapp: "Falar no WhatsApp",
    sendEmail: "Enviar e-mail",
    quickMessage: "Mensagem rápida",
    quickMessageText:
      "Sou um jovem estudante de ciência de dados e estou em busca de uma oportunidade na área de desenvolvimento. Tenho facilidade de aprendizado, sou dinâmico e comprometido, sempre disposto a me aprimorar e contribuir para o crescimento da empresa. Meu objetivo é aplicar os conhecimentos adquiridos na faculdade e desenvolver minhas habilidades na prática, agregando valor ao time e evoluindo profissionalmente.",
    availability: "Disponibilidade",
    availabilityItems: [
      "CLT | Estágio | PJ",
      "Remoto | Presencial | Híbrido",
      "Horário comercial | Meio período",
    ],
    copy: "Copiar",
    copied: "Copiado!",
  },
  footer: {
    madeBy: "Feito por Victor Barbosa",
  },
  projectsData: {
    "gestao-barbearias-saloes": {
      title: "Sistema de Gestão para Barbearias e Salões",
      shortDescription:
        "Controle completo de microempresa com módulos integrados e IA via WhatsApp.",
      longDescription:
        "Software para gestão de estabelecimentos como barbearias e salões de beleza, com módulos integrados que formam um controle completo da operação. Inclui integração com IA para atendimento via WhatsApp, além de automações de processos.",
      highlights: [
        "Gestão de agenda e atendimentos",
        "Cadastro de clientes e colaboradores",
        "Automações com n8n",
        "Atendimento automatizado via WhatsApp",
      ],
      screenshots: [
        { alt: "Tela inicial do sistema" },
        { alt: "Módulo de agenda" },
        { alt: "Gestão financeira" },
        { alt: "Configurações do estabelecimento" },
      ],
    },
  },
}

const en: Translations = {
  topbar: {
    brand: "Victor Barbosa",
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    resume: "Resume",
    contact: "Contact",
    theme: "Theme",
  },
  home: {
    badge: "Systems Developer & Automation Specialist",
    title:
      "I build systems and automations that solve real business problems",
    subtitle:
      "I work on system development, automation, and AI integration, focusing on practical solutions for micro and small businesses.",
    features: [
      "Complete management systems",
      "AI-powered automated WhatsApp support",
      "Process and routine automation",
    ],
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
  },
  trabalhos: {
    title: "Professional Experience",
    subtitle:
      "Here are my professional experiences and activities developed throughout my career.",
    items: [
      {
        company: "Microlins Cursos Profissionalizantes",
        location: "Vinhedo, São Paulo",
        role: "Classroom Assistant",
        description:
          "Worked as a classroom assistant, supporting students in technology and programming courses, and taught a special Excel course.",
        period: "Mar/2023 — Jun/2023",
      },
      {
        company: "Prime Cater",
        location: "Louveira, São Paulo",
        role: "Technical Support / Automation Apprentice",
        description:
          "Working in the IT department, providing support for devices and systems, as well as creating and maintaining automations. Currently developing an intelligent management system focused on real-time tracking of which user is connected to each device.",
        period: "May/2024 — Present",
      },
    ],
  },
  projetos: {
    title: "Projects",
    subtitle:
      "Some projects I've developed, focused on solving real problems with systems and automations.",
    details: "Details",
    notFound: "Project not found",
    notFoundDesc: "This project doesn't exist (or the link is incorrect).",
    back: "Back",
    backToProjects: "Back to Projects",
    technologies: "Technologies",
    highlights: "Highlights",
    noScreenshots:
      "No screenshots configured yet. Place files in public/prints and reference them in projects.ts.",
    prevImage: "Previous image",
    nextImage: "Next image",
  },
  formacoes: {
    title: "Education",
    subtitle:
      "Here are my academic background and relevant courses for my work in technology.",
    academic: "Academic",
    courses: "Courses & Certifications",
    items: [
      {
        titulo: "Bachelor's in Data Science",
        instituicao: "Univesp",
        local: "São Paulo, SP (Online)",
        nivelStatus: "Bachelor's • In progress",
        descricao:
          "Degree focused on data analysis, statistics, and fundamentals for working with data and technology.",
        periodo: "Start: Aug/2025 — Duration: 8 semesters",
      },
      {
        titulo: "Technical Degree in Systems Analysis and Development",
        instituicao: "Etec Vasco Antônio Venchiarutti",
        local: "Jundiaí, SP",
        nivelStatus: "Technical • Completed",
        descricao:
          "Technical education focused on systems development, programming logic, and IT project foundations.",
        periodo: "Completed: Dec/2024",
      },
      {
        titulo: "HTML 5, CSS3 and Bootstrap4 Certification",
        instituicao: "",
        local: "Online",
        nivelStatus: "Certification • Completed",
        descricao:
          "Front-end fundamentals with HTML, CSS and Bootstrap for creating responsive interfaces.",
        periodo: "Hours: 40",
      },
      {
        titulo: "Basic Java Certification",
        instituicao: "Curso em Vídeo",
        local: "Online",
        nivelStatus: "Certification • Completed",
        descricao:
          "Introduction to Java, focusing on logic, syntax, and basic programming.",
        periodo: "Hours: 40",
      },
      {
        titulo: "Introduction to Data Science Certification",
        instituicao: "",
        local: "Online",
        nivelStatus: "Certification • Completed",
        descricao:
          "Introductory concepts of data science, use cases, and foundations for analysis.",
        periodo: "Hours: not informed",
      },
      {
        titulo: "Introduction to Python Certification",
        instituicao: "Curso em Vídeo",
        local: "Online",
        nivelStatus: "Certification • Completed",
        descricao:
          "Initial Python concepts for programming, automation, and data studies foundation.",
        periodo: "Hours: 8",
      },
      {
        titulo: "Information Security with Python Certification",
        instituicao: "",
        local: "Online",
        nivelStatus: "Certification • Completed",
        descricao:
          "Introduction to security concepts and practical applications using Python.",
        periodo: "Hours: 5",
      },
      {
        titulo: "Algorithms Certification",
        instituicao: "Curso em Vídeo",
        local: "Online",
        nivelStatus: "Certification • Completed",
        descricao:
          "Programming logic and algorithm construction for structured problem solving.",
        periodo: "Hours: 40",
      },
      {
        titulo: "Python World 1 Certification",
        instituicao: "Curso em Vídeo",
        local: "Online",
        nivelStatus: "Certification • Completed",
        descricao:
          "Python language basics: variables, structures, functions, and programming fundamentals.",
        periodo: "Hours: 40",
      },
      {
        titulo: "Python World 2 Certification",
        instituicao: "Curso em Vídeo",
        local: "Online",
        nivelStatus: "Certification • Completed",
        descricao:
          "Advanced Python with more complex structures and practical exercises.",
        periodo: "Hours: 40",
      },
      {
        titulo: "Python World 3 Certification",
        instituicao: "Curso em Vídeo",
        local: "Online",
        nivelStatus: "Certification • Completed",
        descricao:
          "Advanced content and consolidation of Python fundamentals with practical focus.",
        periodo: "Hours: 40",
      },
      {
        titulo: "Scratch Game Programming Course",
        instituicao: "Elementary school complementary course",
        local: "In-person",
        nivelStatus: "Course • Completed",
        descricao:
          "Introduction to game development with Scratch, logic, and interaction creation.",
        periodo: "Hours: 38",
      },
      {
        titulo: "Educational Robotics Course",
        instituicao: "Elementary school complementary course",
        local: "In-person",
        nivelStatus: "Course • Completed",
        descricao:
          "Fundamentals of educational robotics, logic, and basic assembly/control learning.",
        periodo: "Hours: 38",
      },
      {
        titulo: "Basic Computer Skills Course",
        instituicao: "Elementary school complementary course",
        local: "In-person",
        nivelStatus: "Course • Completed",
        descricao:
          "Essential computer concepts: computer usage, operating system, and productivity basics.",
        periodo: "Hours: 38",
      },
    ],
  },
  curriculo: {
    title: "Resume",
    subtitle: "View my resume below and download the PDF.",
    download: "Download PDF",
    openInNewTab: "Open in new tab",
    preview: "Preview",
    fallbackHint: "If it doesn't load, use \"Open in new tab\".",
    fallbackText: "Your browser couldn't display the PDF here.",
  },
  contato: {
    title: "Contact",
    subtitle:
      "Want to talk? Reach me by email, WhatsApp, or through social media below. I'll respond as soon as possible.",
    name: "Victor Barbosa",
    role: "IT • Support • Automation • Development",
    email: "Email",
    phone: "Phone",
    location: "Location",
    whatsapp: "Chat on WhatsApp",
    sendEmail: "Send email",
    quickMessage: "Quick message",
    quickMessageText:
      "I'm a young data science student looking for an opportunity in the development field. I learn quickly, I'm dynamic and committed, always willing to improve and contribute to the company's growth. My goal is to apply the knowledge acquired in college and develop my skills in practice, adding value to the team and evolving professionally.",
    availability: "Availability",
    availabilityItems: [
      "CLT | Internship | PJ",
      "Remote | On-site | Hybrid",
      "Business hours | Part-time",
    ],
    copy: "Copy",
    copied: "Copied!",
  },
  footer: {
    madeBy: "Made by Victor Barbosa",
  },
  projectsData: {
    "gestao-barbearias-saloes": {
      title: "Management System for Barbershops and Salons",
      shortDescription:
        "Complete micro-business control with integrated modules and AI via WhatsApp.",
      longDescription:
        "Software for managing establishments such as barbershops and beauty salons, with integrated modules that provide complete operational control. Includes AI integration for WhatsApp support, as well as process automations.",
      highlights: [
        "Schedule and appointment management",
        "Client and employee registration",
        "n8n automations",
        "Automated WhatsApp support",
      ],
      screenshots: [
        { alt: "System dashboard" },
        { alt: "Schedule module" },
        { alt: "Financial management" },
        { alt: "Establishment settings" },
      ],
    },
  },
};

export const locales: Record<Locale, Translations> = {
  "pt-BR": ptBR,
  en,
};

export function getTranslatedProject(slug: string, locale: Locale): Project | undefined {
  const base = rawProjects.find((p) => p.slug === slug);
  if (!base) return undefined;

  const t = locales[locale].projectsData[slug];
  if (!t) return base;

  return {
    ...base,
    title: t.title,
    shortDescription: t.shortDescription,
    longDescription: t.longDescription,
    highlights: t.highlights,
    screenshots: base.screenshots.map((s, i) => ({
      ...s,
      alt: t.screenshots[i]?.alt ?? s.alt,
    })),
  };
}

export function getTranslatedProjects(locale: Locale): Project[] {
  return rawProjects.map((p) => {
    const translated = getTranslatedProject(p.slug, locale);
    return translated ?? p;
  });
}
