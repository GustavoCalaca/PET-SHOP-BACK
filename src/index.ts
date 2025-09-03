import express from 'express';
import { ClienteController } from './controller/Cliente/clienteController';
import { addUsuario, listUsuario, updateUsuario, deleteUsuario } from "./controller/usuarioController";

const app = express();
app.use(express.json());


//CRUD Create, Read, Update, Delete 
app.post('/addcliente', ClienteController.addCliente); // Salvar objeto
app.get('/listCliente', ClienteController.listarClientes);

// Rotas
app.post("/addusuario", addUsuario);
app.get("/listusuario", listUsuario);
app.put("/updateusuario/:id", updateUsuario);
app.delete("/deleteusuario/:id", deleteUsuario);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));





