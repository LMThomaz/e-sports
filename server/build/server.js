import express from 'express';
const app = express();
//primeiro passa o caminho para o get
//depois passa a função a ser executada
app.get('/ads', (request, response) => {
    return response.json([
        {
            id: 1,
            name: 'anuncio 1',
        },
        {
            id: 2,
            name: 'anuncio 2',
        },
        {
            id: 3,
            name: 'anuncio 3',
        },
    ]);
});
app.listen(3333);
