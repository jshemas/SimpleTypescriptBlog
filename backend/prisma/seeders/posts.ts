import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});

const fakePosts = [
  {
    title: 'Introducing Simple TypeScript Blog',
    summary: 'A lightweight blog example built with TypeScript, Express, and Vite.',
    author: 'Jane Doe',
    publishedAt: new Date('2026-05-21T08:00:00.000Z'),
    tags: ['typescript', 'express', 'blog'],
    contentPreview:
      'Learn how this simple blog structure works and how to extend it for your own projects.',
  },
  {
    title: 'Writing Clean API Controllers',
    summary: 'How to organize Express controllers using the MVC pattern in TypeScript.',
    author: 'Alex Rivera',
    publishedAt: new Date('2026-05-18T12:30:00.000Z'),
    tags: ['api', 'mvc', 'typescript'],
    contentPreview:
      'This article shows a controller-first approach to keep your backend easy to maintain.',
  },
  {
    title: 'Fast Frontend-Proof Prototyping',
    summary: 'Tips for quickly getting a frontend and backend talking in a starter blog app.',
    author: 'Sam Patel',
    publishedAt: new Date('2026-05-15T16:45:00.000Z'),
    tags: ['frontend', 'backend', 'prototype'],
    contentPreview:
      'A polished blog prototype can be built with just a few files and a clear route structure.',
  },
];

async function main() {
  await prisma.post.deleteMany();

  for (const post of fakePosts) {
    await prisma.post.create({
      data: post,
    });
  }

  console.log(`Seeded ${fakePosts.length} posts.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
