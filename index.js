const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({mensagem: 'Funcionando corretamente'});
});

app.listen(3000, () => {
    console.log('App rodando na porta 3000');
});