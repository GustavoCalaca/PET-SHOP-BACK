import express from 'express';
import { ClienteController } from './controller/clienteController';

const app = express();
app.use(express.json());

app.post('/addcliente', ClienteController.addCliente);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

console.log('Projeto Node.js com TypeScript configurado com sucesso!');
