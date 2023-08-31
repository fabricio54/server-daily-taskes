// importando o model de user
import User from "../models/User.js";

// função que cria usuário
export const userCreateService = (body) => User.create(body);
