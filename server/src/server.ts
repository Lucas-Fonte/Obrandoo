import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: true});
});

app.listen(process.env.PORT || 3333);