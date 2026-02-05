// src/pages/Contato.tsx
import { useMemo, useState } from "react";
import { Copy, Check, Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import "./Contato.css";

type ContactItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  copy?: string;
  href?: string;
};

function ContactItem({ icon, label, value, copy, href }: ContactItemProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!copy) return;
    try {
      await navigator.clipboard.writeText(copy);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback simples
      const ta = document.createElement("textarea");
      ta.value = copy;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    }
  };

  const content = (
    <>
      <span className="cItem__icon">{icon}</span>
      <span className="cItem__txt">
        <span className="cItem__label">{label}</span>
        <span className="cItem__value">{value}</span>
      </span>
    </>
  );

  return (
    <div className="cItem">
      {href ? (
        <a className="cItem__link" href={href} target="_blank" rel="noreferrer">
          {content}
        </a>
      ) : (
        <div className="cItem__link">{content}</div>
      )}

      {copy && (
        <button className="cItem__copy" onClick={handleCopy} type="button" aria-label={`Copiar ${label}`}>
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      )}
    </div>
  );
}

export default function Contato() {
  // ✅ Troque esses placeholders pelos seus dados
  const email = "vhbarbosa2006@gmail.com";
  const phone = "+55 (11) 98971-3573";
  const location = "Vinhedo, SP";
  const github = "https://github.com/6v1ton9";
  const linkedin = "https://linkedin.com/in/victor-henrique-aureliano-barbosa-9151b41a1";
  const whatsapp = "5511989713573"; // só números

  const waLink = useMemo(() => {
    const msg = encodeURIComponent("Olá! Vi seu portfólio e gostaria de conversar.");
    return `https://wa.me/${whatsapp}?text=${msg}`;
  }, [whatsapp]);

  return (
    <section className="pageSection">
      <header className="pageHeader">
        <h1>Contato</h1>
        <p>
          Quer falar comigo? Me chame por e-mail, WhatsApp ou pelas redes abaixo.
          Respondo o mais rápido possível.
        </p>
      </header>

      <div className="contactGrid">
        {/* Card principal */}
        <article className="contactCard">
          <div className="contactCard__top">
            <div className="contactAvatar" aria-hidden>
              VB
            </div>
            <div>
              <h2 className="contactName">Victor Barbosa</h2>
              <p className="contactRole">T.I • Suporte • Automação • Desenvolvimento</p>
            </div>
          </div>

          <div className="contactList">
            <ContactItem
              icon={<Mail size={18} />}
              label="E-mail"
              value={email}
              copy={email}
              href={`mailto:${email}`}
            />
            <ContactItem
              icon={<Phone size={18} />}
              label="Telefone"
              value={phone}
              copy={phone}
              href={`tel:${phone.replace(/\s|\(|\)|-/g, "")}`}
            />
            <ContactItem icon={<MapPin size={18} />} label="Local" value={location} />
            <ContactItem icon={<Github size={18} />} label="GitHub" value={github} href={github} copy={github} />
            <ContactItem
              icon={<Linkedin size={18} />}
              label="LinkedIn"
              value={linkedin}
              href={linkedin}
              copy={linkedin}
            />
          </div>

          <div className="contactActions">
            <a className="contactBtnBig" href={waLink} target="_blank" rel="noreferrer">
              <Send size={18} />
              Falar no WhatsApp
            </a>

            <a className="contactBtnGhost" href={`mailto:${email}`}>
              <Mail size={18} />
              Enviar e-mail
            </a>
          </div>
        </article>

        {/* Card lateral: mensagem rápida (placeholder) */}
        <aside className="contactSide">
          <h3 className="sideTitle">Mensagem rápida</h3>
          <p className="sideText">
            (Placeholder) Aqui você pode colocar um texto curto do tipo:
            “Estou disponível para oportunidades como dev júnior / suporte / automações”.
          </p>

          <div className="sideBox">
            <h4 className="sideBoxTitle">Disponibilidade</h4>
            <ul className="sideList">
              <li>CLT | Estágio | PJ</li>
              <li>Remoto | Presencial | Híbrido</li>
              <li>Horário comercial | Meio período </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
