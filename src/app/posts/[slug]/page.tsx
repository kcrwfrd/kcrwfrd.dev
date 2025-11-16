import { notFound } from 'next/navigation'
import { getAllPostSlugs, getPostMetadata } from '@/lib/posts'

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const metadata = await getPostMetadata(slug)

  return {
    title: metadata.title,
    description: metadata.excerpt,
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  try {
    // Dynamically import the MDX file
    const { default: Post, metadata } = await import(
      `@/../posts/${slug}/index.mdx`
    )

    return (
      <article className="mx-auto w-full max-w-4xl px-5">
        {/* Post Header */}
        <header className="mb-12 border-b border-slate-200 pb-8 dark:border-slate-700">
          <div className="mb-4 flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
            <time>{metadata.date}</time>
            {metadata.tags && metadata.tags.length > 0 && (
              <>
                <span className="text-slate-200 dark:text-slate-700">•</span>
                <div className="flex gap-2">
                  {metadata.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-sky-600 dark:text-sky-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          <h1 className="mb-4 font-display text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-slate-50">
            {metadata.title}
          </h1>

          {metadata.excerpt && (
            <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-400">
              {metadata.excerpt}
            </p>
          )}
        </header>

        {/* Post Content */}
        <div className="prose-custom">
          <Post />
        </div>
      </article>
    )
  } catch (error) {
    notFound()
  }
}
