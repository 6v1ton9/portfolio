import { Download, ExternalLink, FileText } from "lucide-react";
import "./Curriculo.css";
import { useTranslation } from "../i18n/LanguageContext";

export default function Curriculo() {
  const { t } = useTranslation();
  const pdfUrl = "/curriculo-victor.pdf";

  return (
    <section className="cvSection">
      <header className="cvHeader">
        <div className="cvTitleRow">
          <span className="cvIcon" aria-hidden>
            <FileText size={20} />
          </span>
          <h1>{t.curriculo.title}</h1>
        </div>

        <p>{t.curriculo.subtitle}</p>

        <div className="cvActions">
          <a className="cvPrimaryBtn" href={pdfUrl} download>
            <Download size={18} />
            {t.curriculo.download}
          </a>

          <a className="cvSecondaryBtn" href={pdfUrl} target="_blank" rel="noreferrer">
            <ExternalLink size={18} />
            {t.curriculo.openInNewTab}
          </a>
        </div>
      </header>

      <div className="cvViewerCard">
        <div className="cvViewerTop">
          <span className="cvViewerLabel">{t.curriculo.preview}</span>
          <span className="cvViewerHint">{t.curriculo.fallbackHint}</span>
        </div>

        <div className="cvViewer">
          <object data={pdfUrl} type="application/pdf" className="cvObject">
            <div className="cvFallback">
              <p>{t.curriculo.fallbackText}</p>

              <div className="cvFallbackActions">
                <a className="cvPrimaryBtn" href={pdfUrl} download>
                  <Download size={18} />
                  {t.curriculo.download}
                </a>

                <a className="cvSecondaryBtn" href={pdfUrl} target="_blank" rel="noreferrer">
                  <ExternalLink size={18} />
                  {t.curriculo.openInNewTab}
                </a>
              </div>
            </div>
          </object>
        </div>
      </div>
    </section>
  );
}
