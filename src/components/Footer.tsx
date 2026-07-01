import { Heart } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";
import "./footer.css";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="siteFooter__inner">
        <span className="siteFooter__copy">
          &copy; {year} {t.footer.madeBy}
        </span>
      </div>
    </footer>
  );
}
