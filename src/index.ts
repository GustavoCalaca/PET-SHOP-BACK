import express from 'express';
import { ClienteController } from './controller/Cliente/clienteController';
import { DoencaController } from './controller/Doenca/doencaController';

import { TutorController } from './controller/Tutor/TutorController';

const app = express();
app.use(express.json());


//CRUD Create, Read, Update, Delete 
app.post('/addcliente', ClienteController.addCliente); 
app.get('/listCliente', ClienteController.listarClientes);

// Rotas
app.post("/addusuario", UsuarioController.addUsuario);
app.get("/listusuario", UsuarioController.listUsuario);
app.put("/updateusuario/:id", UsuarioController.updateUsuario);
app.delete("/deleteusuario/:id", UsuarioController.deleteUsuario);




app.post('/addDoenca', DoencaController.addDoenca); 
app.get('/listDoenca', DoencaController.listarDoenca);
app.delete('/deleteDoenca/:id', DoencaController.deletarDoenca);
app.put('/updateDoenca/:id', DoencaController.atualizarDoenca); 

app.post('/aatutor', TutorController.addTutor);
app.get('/listTutores', TutorController.listarTutores)


/*app.post('/addProduto', ProdutoController.adicionarProduto);
app.get('/listProduto', ProdutoController.listarProdutos);
app.delete('/deleteProduto/:id', ProdutoController.deletarProduto);
app.put('/updateProduto/:id', ProdutoController.atualizarProduto);



app.post('/addServico', ServicoController.adicionarServico);
app.get('/listServico', ServicoController.listarServicos);
app.delete('/deleteServico/:id', ServicoController.deletarServico);
app.put('/updateServico/:id', ServicoController.atualizarServico);*/

 


const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

