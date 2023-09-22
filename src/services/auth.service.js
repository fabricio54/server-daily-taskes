import nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: "fabricioallves2020@gmail.com",
        pass: "rwqi hmuz gcxf hsuc" // senha de app criada
    }
});
