// importando modulos
import express from 'express';
const app = express();
import cors from "cors";
// conectando ao database
import connectDataBase from "./src/db/db.js";

// importando rotas
import { corsAuth } from './src/middlewares/cors.middleware.js';
import userRouter from "./src/routes/user.router.js";

// configurando o dotenv (uso de variáveis globais)
import dotenv from "dotenv";
dotenv.config();

// criando porta de acesso
const port = process.env.PORT || 3000;

// conectando ao banco de dados
connectDataBase();

// configurando as rotas para uso
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);

// executando o servidor
app.listen(port, () => console.log(`Servidor rodando na port ${port}`));