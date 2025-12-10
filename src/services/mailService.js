import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

// Usar __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const user = "indicamais.org@gmail.com";
const pass = process.env.PASSWORD;

export async function sendWelcomeEmail(toEmail, userName) {
  try {
    // Caminho do HTML
    const filePath = path.join(__dirname, "../scripts/welcome.html");

    let html = fs.readFileSync(filePath, "utf8");

    // Substituir variáveis do template
    html = html
      .replace(/{{user_name}}/g, userName)
      .replace(/{{cta_url}}/g, `https://indicaplus.com/verify/${toEmail}`)
      .replace(/{{year}}/g, new Date().getFullYear());

    // Configuração do nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: { user, pass },
    });

    // Enviar
    await transporter.sendMail({
      from: user,
      to: toEmail,
      subject: "Bem-vindo à Indica+",
      html,
    });

    console.log("E-mail enviado para:", toEmail);
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err.message);
  }
}
