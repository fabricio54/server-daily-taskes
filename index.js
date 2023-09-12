// importando modulos
import express from 'express';
const app = express();
// conectando ao database
import connectDataBase from "./src/db/db.js";

// importando rotas
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

app.use("/user", userRouter);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

// executando o servidor
app.listen(port, () => console.log(`Servidor rodando na port ${port}`));