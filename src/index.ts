import express from 'express';
import { ClienteController } from './controller/Cliente/clienteController';
<<<<<<< HEAD
import { addUsuario, listUsuario, updateUsuario, deleteUsuario } from "./controller/usuarioController";
=======
import { ProdutoController } from './controllers/DoencaController';
import { ProdutoController } from './controllers/ProdutoController';
import { ServicoController } from './controllers/ServicoController';
>>>>>>> 0de2baddaec9a758558aff137924421417e1e94d

const app = express();
app.use(express.json());


//CRUD Create, Read, Update, Delete 
app.post('/addcliente', ClienteController.addCliente); 
app.get('/listCliente', ClienteController.listarClientes);

// Rotas
app.post("/addusuario", addUsuario);
app.get("/listusuario", listUsuario);
app.put("/updateusuario/:id", updateUsuario);
app.delete("/deleteusuario/:id", deleteUsuario);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));




<<<<<<< HEAD
=======

app.post('/addDoenca', ClienteController.addDoenca); 
app.get('/listDoenca', ClienteController.listarDoenca);
app.delete('/deleteDoenca/:id', ClienteController.deletarDoenca);
app.put('/updateDoenca/:id', ClienteController.atualizarDoenca); 


app.post('/addProduto', ProdutoController.adicionarProduto);
app.get('/listProduto', ProdutoController.listarProdutos);
app.delete('/deleteProduto/:id', ProdutoController.deletarProduto);
app.put('/updateProduto/:id', ProdutoController.atualizarProduto);



app.post('/addServico', ServicoController.adicionarServico);
app.get('/listServico', ServicoController.listarServicos);
app.delete('/deleteServico/:id', ServicoController.deletarServico);
app.put('/updateServico/:id', ServicoController.atualizarServico);

 


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
>>>>>>> 0de2baddaec9a758558aff137924421417e1e94d

