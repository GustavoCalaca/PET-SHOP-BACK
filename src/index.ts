import express from 'express';
import { ClienteController } from './controller/Cliente/clienteController';

const app = express();
app.use(express.json());


//CRUD Create, Read, Update, Delete 
app.post('/addcliente', ClienteController.addCliente); // Salvar objeto
app.get('/listCliente', ClienteController.listarClientes);




app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

console.log('Projeto Node.js com TypeScript configurado com sucesso!');
