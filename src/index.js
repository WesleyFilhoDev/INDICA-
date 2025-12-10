import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import UserRoute from "./routes/UserRoute.js";
import RecomendationRoute from "./routes/RecomendationRoute.js";
import CategoryRoute from "./routes/CategoryRouter.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

app.use("/users", UserRoute);
app.use("/recomendations", RecomendationRoute);
app.use("/categories", CategoryRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
