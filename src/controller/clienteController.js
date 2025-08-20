const clienteService = require ('../service/clienteService');

const clienteController = {
  async addTutor(request, response) {
    const result = await clienteService.addTutor(request.body);
    response.status(201).json(result);
  },

  async listTutor(request, response) {
    const result = await clienteService.listTutor();
    response.status(200).json(result);
  },

  async deleteTutor(request, response) {
    const {id} = request.params;
    const result = await clienteService.deleteTutor(id);
    response.status(200).json(result);
  }
};

module.exports = clienteController;