import { Request, Response } from 'express';
import { Post } from '../models/post.model';

const fakePosts: Post[] = [
  {
    id: '1',
    title: 'Introducing Simple TypeScript Blog',
    summary: 'A lightweight blog example built with TypeScript, Express, and Vite.',
    author: 'Jane Doe',
    publishedAt: '2026-05-21T08:00:00.000Z',
    tags: ['typescript', 'express', 'blog'],
    contentPreview: 'Learn how this simple blog structure works and how to extend it for your own projects.',
  },
  {
    id: '2',
    title: 'Writing Clean API Controllers',
    summary: 'How to organize Express controllers using the MVC pattern in TypeScript.',
    author: 'Alex Rivera',
    publishedAt: '2026-05-18T12:30:00.000Z',
    tags: ['api', 'mvc', 'typescript'],
    contentPreview: 'This article shows a controller-first approach to keep your backend easy to maintain.',
  },
  {
    id: '3',
    title: 'Fast Frontend-Proof Prototyping',
    summary: 'Tips for quickly getting a frontend and backend talking in a starter blog app.',
    author: 'Sam Patel',
    publishedAt: '2026-05-15T16:45:00.000Z',
    tags: ['frontend', 'backend', 'prototype'],
    contentPreview: 'A polished blog prototype can be built with just a few files and a clear route structure.',
  },
];

export const listPosts = (_req: Request, res: Response) => {
  res.json(fakePosts);
};
