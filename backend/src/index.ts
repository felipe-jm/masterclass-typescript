import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

const username = 'felipe-jm';

app.use(cors())
app.use(routes);

app.listen(3333);