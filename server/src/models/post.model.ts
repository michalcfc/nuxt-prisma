import { Comment } from "./comment.model"

export interface Post {
    id: number;
    title: string;
    createdAt: Date
    updatedAt: Date
    content: string;
    comments: Comment[];
}