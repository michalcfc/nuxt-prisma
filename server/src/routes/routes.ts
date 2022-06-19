import { Router } from 'express';
import postController from '../controllers/post.controller';

const api = Router()
    .use(postController)

export default Router().use('/api', api);