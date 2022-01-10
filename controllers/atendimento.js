const Atendimento = require('../models/atendimentos')

module.exports = app =>{
    app.get("/", (req,res) => res.send('rodando') )
    app.post("/atendimentos", (req,res) => {
        const atendimento = req.body
        Atendimento.adicionar(atendimento)
        res.send('inserção de atendimento feita com sucesso')
    } )


}