const Atendimento = require('../models/atendimentos')

module.exports = app =>{
    app.get("/atendimentos", (req,res) => {
        Atendimento.listar(res)
    })
    app.post("/atendimentos", (req,res) => {
        const atendimento = req.body
        Atendimento.adicionar(atendimento, res)
    } )


}