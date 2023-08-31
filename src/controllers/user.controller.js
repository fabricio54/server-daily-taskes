import { userCreateService } from "../services/user.service.js";

export const userCreateController = async (req, res) => {
    try {
        // pegando os dados do usuário no body
        const { name, username, email, password } = req.body;

        // validando dados
        if (!name || !username || !email || !password) {
            res.status(400).send({ message: "Envie todos os campos para registro" });
        }

        // criando um serviço para criação de contas de usuários
        const user = await userCreateService(req.body);

        // verificando se o usuário e válido
        if (!user) {
            return res.status(400).send({
                message: "Erro na criação do usuário"
            });
        }

        // mostrando o usuário criado na tela
        res.status(200).send({
            message: "usuário criado com sucesso",
            user: {
                name,
                username,
                email,
                password,
            }
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}