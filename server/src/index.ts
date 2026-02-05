import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

// aqui depois entra /api/chat (IA)
const PORT = process.env.PORT ? Number(process.env.PORT) : 3333;
app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));
