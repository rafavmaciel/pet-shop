const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {

    adicionar(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        
        // validações de dados 
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = atendimento.cliente.length >= 5
        // array com a descrição dos erros
        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]
        // filtra os campos que estão com o paramentro valido igual a false dentro da requisição 
        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length
        
        if(existemErros) {
            res.status(400).json(erros)
        } else {
            
            const atendimentoDatado = {...atendimento, dataCriacao, data}
    
            const sql = 'INSERT INTO atendimentos SET ?'
    
            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(atendimento)
                }
            })

        }

    }
}

module.exports = new Atendimento
