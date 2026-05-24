import { Request, Response } from 'express';
import { Post } from '../models/post.model';
import { prisma } from '../lib/prisma';

export const listPosts = async (_req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        publishedAt: 'desc',
      },
    });

    const formattedPosts: Post[] = posts.map((post) => ({
      id: post.id,
      title: post.title,
      summary: post.summary,
      author: post.author,
      publishedAt: post.publishedAt.toISOString(),
      tags: post.tags,
      contentPreview: post.contentPreview,
    }));

    res.json(formattedPosts);
  } catch (error) {
    console.error('Failed to fetch posts', error);
    res.status(500).json({ message: 'Failed to fetch posts' });
  }
};
