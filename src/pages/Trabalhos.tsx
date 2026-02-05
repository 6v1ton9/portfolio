import { MapPin, Calendar } from "lucide-react";

export default function Trabalhos() {
  return (
    <section className="pageSection">
      <header className="pageHeader">
        <h1>Experiência Profissional</h1>
        <p>
          Aqui apresento minhas experiências profissionais e atividades
          desenvolvidas ao longo da minha trajetória.
        </p>
      </header>

      <div className="workList">
        {/* Item 1 */}
        <article className="workCard">
          <div className="workHeader">
            <h3>Microlins Cursos Profissionalizantes</h3>

            <span className="workLocation">
              <MapPin size={16} />
              Vinhedo, São Paulo
            </span>
          </div>

          <span className="workRole">Assistente em Sala de Aula</span>

          <p>
            Atuei como assistente em sala de aula, oferecendo suporte aos alunos
            em cursos de tecnologia e programação, além de ministrar um curso
            especial de Excel.
          </p>

          {/* Footer */}
          <footer className="workFooter">
            <span className="workPeriod">
              <Calendar size={14} />
              Mar/2023 — Jun/2023
            </span>
          </footer>
        </article>

        {/* Item 2 */}
        <article className="workCard">
          <div className="workHeader">
            <h3>Prime Cater</h3>

            <span className="workLocation">
              <MapPin size={16} />
              Louveira, São Paulo
            </span>
          </div>

          <span className="workRole">Aprendiz Suporte Técnico / Automação</span>

          <p>
            Atuo na área de Tecnologia da Informação, prestando suporte a
            dispositivos e sistemas, além da criação e manutenção de automações.
            Atualmente, está em desenvolvimento um sistema de gerenciamento
            inteligente com foco na atualização em tempo real do usuário
            conectado em cada dispositivo.
          </p>

          {/* Footer */}
          <footer className="workFooter">
            <span className="workPeriod">
              <Calendar size={14} />
              Mai/2024 — <strong>Atual</strong>
            </span>
          </footer>
        </article>
      </div>
    </section>
  );
}
