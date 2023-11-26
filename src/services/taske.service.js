import Taskes from "../models/Taske.js";
import User from "../models/User.js";

export const createTaske = (body) => Taskes.create(body);

export const getAllTaskGeneral = () => Taskes.find();

export const getAllTaske = (iduser) => Taskes.find({ iduser: iduser }).populate("iduser");

export const getTaskeById = (id) => Taskes.findById(id);

export const getTaskeUserById = (iduser, id) => Taskes.find({ iduser: iduser, _id: id });

export const deleteTaskeById = (id) => Taskes.findByIdAndDelete(id);

export const updateTaske = (id, name, description ) => Taskes.findOneAndUpdate({ _id: id }, { name, description });

export const updateStatus = (id, status) => Taskes.updateOne({ _id: id }, { $set: { status: status }});

export const updateProfile = (iduser, {name, username, email }) => User.findByIdAndUpdate({ _id: iduser }, { name, username });

export const findAllTaskesFinish = (iduser) => Taskes.find({ iduser: iduser, status: true }).count();

export const findAllTaskeWhithFinish = (iduser) => Taskes.find({ iduser: iduser, status: true}).sort({ id: -1 })

export const findAllTaskeWhithPendent = (iduser) => Taskes.find({ iduser: iduser, status: false }).sort({ _id: -1})

export const findSearchTaske = (iduser, searchText) => {
    const regex = new RegExp(`^${searchText || ""}`, "i");
  
    return Taskes.find({
      iduser: iduser,
      $or: [
        { name: { $regex: new RegExp(searchText || "", "i") } },
        { name: { $regex: regex } }
      ]
    })
    .sort({ _id: -1 });
  };
  
  






