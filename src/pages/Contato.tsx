// src/pages/Contato.tsx
import { useMemo, useState } from "react";
import { Copy, Check, Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import "./Contato.css";
import { useTranslation } from "../i18n/LanguageContext";

type ContactItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  copy?: string;
  href?: string;
};

function ContactItem({ icon, label, value, copy, href }: ContactItemProps) {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const handleCopy = async () => {
    if (!copy) return;
    try {
      await navigator.clipboard.writeText(copy);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
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
        <button className="cItem__copy" onClick={handleCopy} type="button" aria-label={`${copied ? t.contato.copied : t.contato.copy} ${label}`}>
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      )}
    </div>
  );
}

export default function Contato() {
  const { t, locale } = useTranslation();

  const email = "vhbarbosa2006@gmail.com";
  const phone = "+55 (11) 98971-3573";
  const location = "Vinhedo, SP";
  const github = "https://github.com/6v1ton9";
  const linkedin = "https://linkedin.com/in/victor-henrique-aureliano-barbosa-9151b41a1";
  const whatsapp = "5511989713573";

  const waLink = useMemo(() => {
    const msg = encodeURIComponent(
      locale === "en"
        ? "Hi! I saw your portfolio and I'd like to get in touch."
        : "Olá! Vi seu portfólio e gostaria de conversar."
    );
    return `https://wa.me/${whatsapp}?text=${msg}`;
  }, [whatsapp, locale]);

  return (
    <section className="pageSection">
      <header className="pageHeader">
        <h1>{t.contato.title}</h1>
        <p>{t.contato.subtitle}</p>
      </header>

      <div className="contactGrid">
        <article className="contactCard">
          <div className="contactCard__top">
            <div className="contactAvatar" aria-hidden>
              VB
            </div>
            <div>
              <h2 className="contactName">{t.contato.name}</h2>
              <p className="contactRole">{t.contato.role}</p>
            </div>
          </div>

          <div className="contactList">
            <ContactItem
              icon={<Mail size={18} />}
              label={t.contato.email}
              value={email}
              copy={email}
              href={`mailto:${email}`}
            />
            <ContactItem
              icon={<Phone size={18} />}
              label={t.contato.phone}
              value={phone}
              copy={phone}
              href={`tel:${phone.replace(/\s|\(|\)|-/g, "")}`}
            />
            <ContactItem icon={<MapPin size={18} />} label={t.contato.location} value={location} />
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
              {t.contato.whatsapp}
            </a>

            <a className="contactBtnGhost" href={`mailto:${email}`}>
              <Mail size={18} />
              {t.contato.sendEmail}
            </a>
          </div>
        </article>

        <aside className="contactSide">
          <h3 className="sideTitle">{t.contato.quickMessage}</h3>
          <p className="sideText">
            {t.contato.quickMessageText}
          </p>

          <div className="sideBox">
            <h4 className="sideBoxTitle">{t.contato.availability}</h4>
            <ul className="sideList">
              {t.contato.availabilityItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
