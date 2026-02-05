import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

import Home from "./pages/Home";
import Trabalhos from "./pages/Trabalhos";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import ProjetoDetalhes from "./pages/ProjetosDetalhados";
import Formacoes from "./pages/Formacoes";
import Curriculo from "./pages/Curriculo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/trabalhos" element={<Trabalhos />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/:slug" element={<ProjetoDetalhes />} />
          <Route path="/formacoes" element={<Formacoes />} />
          <Route path="/curriculo" element={<Curriculo />} />
          <Route path="/contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
