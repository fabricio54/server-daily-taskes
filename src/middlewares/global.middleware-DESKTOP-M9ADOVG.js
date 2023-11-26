import { validPasswordModule } from "../services/functionSimples.js";
import { getTaskeById } from "../services/taske.service.js";

export const validUser = (req, res, next) => {
    try {
        const { password } = req.body;

        const passwordValid = validPasswordModule(password);

        if(!passwordValid && !(password.length >= 8 && password.length <= 12 ) ) {
            res.status(400).send({
                message: "Senha deve estar entre 8 e 12 caracters e conter ao menos um caracter especial"
            })
        }
        next();
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

export const validIdTaske = async (req, res, next) => {
    try {
        const id = req.query.id;

        if(!id) {
            res.send({
                message: "taske not found"
            })
        }

        const response = await getTaskeById(id);

        if(!response) {
            res.send({
                message: "id taske not found"
            })
        }

        req.id = id;

        next();

    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
}