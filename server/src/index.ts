import express, { Request, Response } from 'express'
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import routes from './routes/routes';
import swaggerDocument from '../docs/swagger.json';

const app = express()

/**
 * App Configuration
 */

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

// Serves images
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
    res.json({ status: 'API is running on /api' });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/api-docs', (req: Request, res: Response) => {
    res.json({
        swagger:
            'the API documentation  is now available on https://link-to-api.herokuapp.com/api',
    });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.info(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)