# Blog

To add a new blog post:

1. **Create the post file**: `blog/[slug].html` (e.g. `blog/my-new-article.html`)
   - Use `blog/local-seo-for-home-service-businesses.html` as a template
   - Include proper H1, H2, H3 structure, meta description, and content

2. **Register the post**: Add an entry to `blog/posts-data.js`:
   ```js
   {
     slug: 'my-new-article',
     title: 'Your Post Title',
     excerpt: 'A short excerpt (1-2 sentences) for cards and the homepage.',
     date: '2025-02-15'  // YYYY-MM-DD
   }
   ```
   - Posts are sorted by date descending (newest first)
   - The homepage "Latest Post" section and blog index update automatically
