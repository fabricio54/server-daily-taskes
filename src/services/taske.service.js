import Taskes from "../models/Taske.js";

export const createTaske = (body) => Taskes.create(body).populate("iduser");

export const getAllTaske = (iduser) => Taskes.find({ iduser: iduser }).populate("iduser");

export const getTaskeById = (id) => Taskes.findById(id);

export const getTaskeUserById = (iduser, id) => Taskes.find({ iduser: iduser, _id: id });

export const deleteTaskeById = (id) => Taskes.findByIdAndDelete(id);

export const updateTaske = (id, name, description ) => Taskes.findOneAndUpdate({ _id: id }, { name, description }, { rawResult: true });



