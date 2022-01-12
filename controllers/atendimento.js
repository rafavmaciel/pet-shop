const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get("/atendimentos", (req, res) => {
        Atendimento.listar(res)
    })

    app.get("/atendimentos/:id", (req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.buscarPorId(id, res)
    })

    // captura a requisição , processa e envia para o banco de dados
    app.post("/atendimentos", (req, res) => {
        const atendimento = req.body
        Atendimento.adicionar(atendimento, res)
    })

    // captura a requisição, processa e retorna para o cliente
    app.patch("/atendimentos/:id", (req, res) => {
        const id = parseInt(req.params.id)
        const val = req.body
        Atendimento.alterar(id, val, res)
    })

    app.delete("/atendimentos/:id", (req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.deletar(id, res)
    })


}