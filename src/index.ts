import express from 'express';
import { ClienteController } from './controller/Cliente/clienteController';
import { ProdutoController } from './controllers/DoencaController';
import { ProdutoController } from './controllers/ProdutoController';
import { ServicoController } from './controllers/ServicoController';

const app = express();
app.use(express.json());


//CRUD Create, Read, Update, Delete 
app.post('/addcliente', ClienteController.addCliente); 
app.get('/listCliente', ClienteController.listarClientes);





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

console.log('Projeto Node.js com TypeScript configurado com sucesso!');
