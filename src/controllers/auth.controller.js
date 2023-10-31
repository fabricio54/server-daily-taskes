// importando o modulo de serviços de autenticação
import { loginService, gererateToken } from "../services/auth.service.js";
// importando o módulo de bcrypt
import bcrypt from "bcrypt";

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await loginService(email);

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password);

        if (!passwordIsValid) {
            return res.status(401).send({ message: "Invalid password" });
        }

        const token = gererateToken(user.id);

        res.send({ token: token });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
}


export { login };