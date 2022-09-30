import express from 'express';
import routes from './routes';

const app = express();
const port = process.env.PORT;

app.use('/', routes);

app.listen(port, () => {
    console.log(`Ominus server listening on port: ${port}`);
});
