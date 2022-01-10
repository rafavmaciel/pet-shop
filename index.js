const custonExpress = require('./config/custonExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')
const port = 3003

const app = custonExpress()
conexao.connect(erro =>{
    if (erro){
        console.log(erro)
    }
    else {
        console.log('conexão feita com sucesso')
        Tabelas.init(conexao)
    }
})

app.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})
 
