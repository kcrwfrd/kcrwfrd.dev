const featuredPost = {
  title: 'On the Nature of Time and Memory',
  excerpt:
    'An exploration of how our perception of time shapes the stories we tell ourselves, and how memory becomes the architecture of identity.',
  date: 'March 15, 2024',
  readTime: '12 min read',
  category: 'Essay',
}

const recentPosts = [
  {
    title: 'The Silence Between Notes',
    excerpt:
      'What jazz taught me about the spaces we leave unfilled, and why restraint is the highest form of expression.',
    date: 'March 8, 2024',
    readTime: '8 min read',
    category: 'Reflection',
  },
  {
    title: 'Walking Through Cities at Dawn',
    excerpt:
      'There is something about the early morning light that reveals a city in its most honest state, before the performance begins.',
    date: 'February 28, 2024',
    readTime: '6 min read',
    category: 'Travel',
  },
  {
    title: 'The Art of Slow Reading',
    excerpt:
      'In an age of information overload, returning to the deliberate pace of deep reading feels like an act of rebellion.',
    date: 'February 18, 2024',
    readTime: '10 min read',
    category: 'Literature',
  },
]

export default function Home() {
  return (
    <main className="w-full mx-auto max-w-4xl px-5">
      <Post post={featuredPost} />
      {recentPosts.map((post) => (
        <Post key={post.title} post={post} />
      ))}
    </main>
  )
}

type Post = {
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
}

function Post({
  post: { title, excerpt, date, readTime, category },
}: {
  post: Post
}) {
  return (
    <article className="border-b border-border last:border-none py-16 md:py-24">
      <div className="mb-6 flex items-center gap-3 text-sm font-medium text-foreground-muted">
        <span className="text-accent">{category}</span>
        <span className="text-border">•</span>
        <time>{date}</time>
        <span className="text-border">•</span>
        <span>{readTime}</span>
      </div>

      <h2 className="mb-8 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h2>

      <p className="mb-12 max-w-2xl font-light text-xl leading-relaxed text-foreground-muted md:text-2xl md:leading-relaxed">
        {excerpt}
      </p>

      <a
        href="#"
        className="inline-flex items-center gap-2 font-display text-lg font-medium text-foreground transition-colors hover:text-accent"
      >
        Read article
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </article>
  )
}
