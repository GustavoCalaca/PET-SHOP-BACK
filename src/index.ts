import express from 'express';
import { UsuarioController } from './controller/Usuario/UsuarioController';
import { ClienteController } from './controller/Cliente/clienteController';
import { DoencaController } from './controller/Doenca/doencaController';
import { ServicoController } from './controller/Servico/servicoController';
import { ProdutoController } from './controller/Produto/produtoController';

const app = express();
app.use(express.json());


//CRUD Create, Read, Update, Delete 
app.post('/addcliente', ClienteController.addCliente); 
app.get('/listCliente', ClienteController.listarClientes);


app.post('/addDoenca', DoencaController.addDoenca); 
app.get('/listDoenca', DoencaController.listarDoenca);
app.delete('/deleteDoenca/:id', DoencaController.deletarDoenca);
app.put('/alterardoenca/:id', DoencaController.alterarDoenca);




app.post('/addProduto', ProdutoController.adicionarProduto);
app.get('/listProduto', ProdutoController.listarProdutos);
app.delete('/deleteProduto/:id', ProdutoController.deletarProduto);
app.put('/updateProduto/:id', ProdutoController.atualizarProduto);


app.post('/addServico', ServicoController.adicionarServico);
app.get('/listServico', ServicoController.listarServicos);
app.delete('/deleteServico/:id', ServicoController.deletarServico);
app.put('/updateServico/:id', ServicoController.atualizarServico);



app.post('/addusuario', UsuarioController.addUsuario);
app.get('/listusuario', UsuarioController.listarUsuario);
app.put('/updateusuario/:id', UsuarioController.atualizarUsuario);
app.delete('/deleteusuario/:id', UsuarioController.deletarUsuario);

 
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

