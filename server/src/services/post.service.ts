import prisma from '../../prisma/prisma-client';

export const getPosts = async () => {
    const posts = await prisma.post.findMany()
    return posts
}

export const updatePostViews = async (id: string) => {
    const views = await prisma.post.update({
        where: { id },
        data: {
            views: {
                increment: 1,
            },
        },
    })
    return views
}