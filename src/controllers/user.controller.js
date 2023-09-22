import { userCreateService } from "../services/user.service.js";
import { transport
} from "../services/auth.service.js";
import { randomMath } from "../services/functionSimples.js";

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

export const isEmailValid = async (req, res) => {
   try {
       // pegando os dados do usuário no body
       const { name, email } = req.body;

       // validando dados
       if (!name || !email) {
           res.status(400).send({ message: "Envie todos os campos para registro" });
       }

       const codigo = randomMath();

       transport.sendMail({
           from: "Daily Tasks",
           to: email,
           subject: "Enviando email com Nodemailer",
           html: `<h1>Olá, ${name}!</h1><p>Código de verificação ${codigo}`,
           text: `olá, ${name}! Esse email foi enviado para conclusão de cadastro no Daily Taskes`
       })
       .then(() => console.log("email enviado com sucesso!"))
       .catch((error) => console.log(error));

       req.codigo = codigo;

   } catch (error) {
       res.status(500).send({
           message: error.message
       })
   }
}
