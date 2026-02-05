import { Download, ExternalLink, FileText } from "lucide-react";
import "./Curriculo.css";

export default function Curriculo() {
  const pdfUrl = "/curriculo-victor.pdf";

  return (
    <section className="cvSection">
      <header className="cvHeader">
        <div className="cvTitleRow">
          <span className="cvIcon" aria-hidden>
            <FileText size={20} />
          </span>
          <h1>Currículo</h1>
        </div>

        <p>Visualize meu currículo abaixo e faça o download do PDF.</p>

        <div className="cvActions">
          <a className="cvPrimaryBtn" href={pdfUrl} download>
            <Download size={18} />
            Baixar PDF
          </a>

          <a className="cvSecondaryBtn" href={pdfUrl} target="_blank" rel="noreferrer">
            <ExternalLink size={18} />
            Abrir em nova guia
          </a>
        </div>
      </header>

      <div className="cvViewerCard">
        <div className="cvViewerTop">
          <span className="cvViewerLabel">Visualização</span>
          <span className="cvViewerHint">Se não carregar, use “Abrir em nova guia”.</span>
        </div>

        <div className="cvViewer">
          <object data={pdfUrl} type="application/pdf" className="cvObject">
            <div className="cvFallback">
              <p>Seu navegador não conseguiu exibir o PDF aqui.</p>

              <div className="cvFallbackActions">
                <a className="cvPrimaryBtn" href={pdfUrl} download>
                  <Download size={18} />
                  Baixar PDF
                </a>

                <a className="cvSecondaryBtn" href={pdfUrl} target="_blank" rel="noreferrer">
                  <ExternalLink size={18} />
                  Abrir em nova guia
                </a>
              </div>
            </div>
          </object>
        </div>
      </div>
    </section>
  );
}
