import mongoose from "mongoose";
import { createTaske, getAllTaske, getTaskeUserById, deleteTaskeById, updateTaske, updateStatus, getTaskeById, updateProfile, findAllTaskesFinish } from "../services/taske.service.js"
const ObjectId = mongoose.Types.ObjectId;

export const controllerCreateTaske = async (req, res) => {
    try {
        const { name, description} = req.body;
        const iduser = req.userId;

        console.log(name, description, iduser)

        if(!name && !description) {
            return res.status(404).send({
                message: "preencha todos os campos"
            });
        }

        const response = await createTaske({name, description, iduser});

        if(!response) {
            console.log('passou')
            return res.status(404).send({
                error: response.error
            })
        }

        res.status(200).send({
        message: "taske criada com sucesso!",
        taske: response
        })
        
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

export const controllerGetAllTaske = async (req, res) => {
    try {
        const userId = req.userId;

        if(!userId) {
            return res.status(404).send({
                message: "user is not found"
            })
        }

        const response = await getAllTaske(userId);
        console.log(response);

        res.send({
            taske: response  
        });

    } catch (error) {
        return res.status(500).send({
            message: error.message
        })
    }
}

export const controllerDeleteTaske = async (req, res) => {
    try {
        const id = req.id;
        const iduser = req.userId;

        const taske = await getTaskeUserById(iduser, id);

        if (!taske) {
            return res.status(404).send({
                message: "Task not found by ID"
            });
        }

        const response = await deleteTaskeById(id);

        // Aqui você está enviando uma resposta
        res.send({
            message: "Task deleted successfully!",
            taske: response
        });

        // Após enviar a resposta, retorne para encerrar a função
        return;
    } catch (error) {
        // Aqui você pode manipular erros e enviar uma única resposta de erro
        res.status(500).send({
            error: error.message
        });

        // Após enviar a resposta de erro, retorne para encerrar a função
        return;
    }
}



export const controllerUpdateTaske = async (req, res) => {
    try {
        const { name, description } = req.body;
        const id = req.id;

        if(!name && !description) {
            return res.status(401).send({
                message: "fill in at least one field"
            })
        }

        await updateTaske(id, name, description);

        res.send({
            message: "taske update succefuly"
        })

        
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

export const controllerUpdateStatus = async (req, res) => {
    try {
        const id = req.id;

        const response = await getTaskeById(id);

        if(!response) {
            res.status(401).send({
                message: "taske updated succefully!"
            })
        }

        let statusAtual;

        if(response.status === true) {
            statusAtual = false;
        }else{
            statusAtual = true;
        }

        const status = await updateStatus(id, statusAtual);

        res.send({
            taske: status
        })
        
    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
}

export const controllerUpdateProfile = async (req, res) => {
    try {
        const { name, username } = req.body;
        const iduser = req.userId;

        if(!name || !username) {
            return res.status(404).send({
                message: "preencha ao menos um campo"
            })
        }

        const response = await updateProfile(iduser, {name, username});

        res.send({
            user: response
        })

    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
}

export const controllerGetAllTaskesFinish = async (req, res) => {
    try {
        const iduser = req.userId;

        const response = await findAllTaskesFinish(iduser);

        //if(response === 0) {
            //return res.send({
                //mensage: "Não tem tarefas no momento"
            //})
        //}

        res.send({
            total: response
        })
    } catch (error) {
        res.send({
            error: error.message
        })
    }
}


