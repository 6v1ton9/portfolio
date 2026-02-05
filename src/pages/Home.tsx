    import { ArrowRight, Bot, Code2, Wrench } from "lucide-react";
    import { Link } from "react-router-dom";
    import "./home.css";


    export default function Home() {
    return (
        <section
        className="homeHero"
        style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 48,
            alignItems: "center",
            minHeight: "70vh"
        }}
        >
        {/* Texto */}
        <div>
            <span
            style={{
                display: "inline-block",
                marginBottom: 14,
                padding: "6px 12px",
                borderRadius: 999,
                background: "color-mix(in srgb, var(--focus) 18%, transparent)",
                color: "var(--focus)",
                fontWeight: 700,
                fontSize: "0.85rem"
            }}
            >
            Desenvolvedor de Sistemas & Automações
            </span>

            <h1
            style={{
                fontSize: "2.6rem",
                lineHeight: 1.1,
                margin: "0 0 18px"
            }}
            >
            Crio sistemas e automações que resolvem problemas reais de empresas
            </h1>

            <p
            style={{
                fontSize: "1.05rem",
                color: "var(--muted)",
                maxWidth: 560,
                marginBottom: 28
            }}
            >
            Atuo no desenvolvimento de sistemas, automações e integração com
            inteligência artificial, com foco em soluções práticas para micro e
            pequenas empresas.
            </p>

            {/* Destaques */}
            <ul
            style={{
                display: "grid",
                gap: 14,
                padding: 0,
                margin: "0 0 32px",
                listStyle: "none"
            }}
            >
            <Feature icon={<Code2 size={18} />} text="Sistemas de gestão completos" />
            <Feature icon={<Bot size={18} />} text="IA para atendimento automatizado via WhatsApp" />
            <Feature icon={<Wrench size={18} />} text="Automação de processos e rotinas" />
            </ul>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 14 }}>
            <Link to="/projetos" className="homePrimaryBtn">
                Ver projetos
                <ArrowRight size={18} />
            </Link>

            <Link to="/contato" className="homeSecondaryBtn">
                Entrar em contato
            </Link>
            </div>
        </div>

        {/* Foto / visual */}
        <div
        style={{
            height: 380,
            borderRadius: 24,
            border: "1px solid var(--border)",
            background:
            "linear-gradient(135deg, color-mix(in srgb, var(--focus) 22%, transparent), transparent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden", // 🔑 garante bordas arredondadas
        }}
        >
        <img
            src="/eu.png
            "
            alt="Foto de Victor Barbosa"
            style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            }}
        />
        </div>
        </section>
    );
    }

    function Feature({
    icon,
    text
    }: {
    icon: React.ReactNode;
    text: string;
    }) {
    return (
        <li
        style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 14px",
            borderRadius: 12,
            background: "var(--surface)",
            border: "1px solid var(--border)"
        }}
        >
        <span style={{ color: "var(--focus)" }}>{icon}</span>
        <span>{text}</span>
        </li>
    );
    }
