import { Post } from './post.model';

export interface Comment {
    id: number;
    createdAt: Date;
    text: string;
    posts?: Post;
}