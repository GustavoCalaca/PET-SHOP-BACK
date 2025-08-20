const ClienteRepository = require ('../repository/clienteRepository');

const clienteService = {
    async addTutor(tutor) {
        return ClienteRepository.addTutor(tutor);
    },

    async listTutor () {
        return ClienteRepository.listTutor();
    },

    async deleteTutor(id) {
        return ClienteRepository.deleteTutor(id);
    }
};

module.exports = clienteService;