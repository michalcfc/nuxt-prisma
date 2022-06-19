import { Request, Response, Router } from 'express';
import {
    getPosts,
    updatePostViews
} from '../services/post.service';

const router = Router();

router.get('/posts', async (req: Request, res: Response) => {
    try {
        const posts = await getPosts();
        res.json(posts);
    } catch (error) {
        console.info(`${error} occured.`)
    }
})

router.put('/post/:id/views', async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const post = await updatePostViews(id)
        res.json(post)
    } catch (error) {
        res.json({ error: `Post with ID ${id} does not exist in the database` })
    }
})

export default router;