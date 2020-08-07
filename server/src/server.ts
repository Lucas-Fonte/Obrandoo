import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: true});
});
app.get('/test', (request, response) => {
    return response.json({ actions: true});
});

app.listen(process.env.PORT || 3333);