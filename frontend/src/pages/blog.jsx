import { useEffect, useState } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/posts');
        if (!response.ok) {
          throw new Error(`Unable to load posts (${response.status})`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="blog-page">
      <section>
        <h1>Blog Posts</h1>
        {loading && <p>Loading posts…</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && posts.length === 0 && <p>No posts available.</p>}
        <div className="post-list">
          {posts.map((post) => (
            <article key={post.id} className="post-card">
              <h2>{post.title}</h2>
              <p className="post-summary">{post.summary}</p>
              <p className="post-meta">
                By {post.author} · {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              {post.tags?.length > 0 && (
                <p className="post-tags">Tags: {post.tags.join(', ')}</p>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
