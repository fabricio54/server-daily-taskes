// importando o model de user
import User from "../models/User.js";

// função que cria usuário
export const userCreateService = (body) => User.create(body);

export const findById = (id) => User.findById(id);

export const findAllId = () => User.find()

export const findUpdateEmail = (id, email) => User.findOneAndUpdate({ _id: id}, { email: email })
