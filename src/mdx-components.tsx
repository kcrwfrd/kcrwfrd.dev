import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

const components = {
  // Customize MDX components with Tailwind classes
  h1: ({ children }) => (
    <h1 className="mb-8 font-display text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-slate-50">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-6 mt-12 font-display text-3xl font-semibold text-slate-900 md:text-4xl dark:text-slate-50">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-4 mt-8 font-display text-2xl font-semibold text-slate-900 md:text-3xl dark:text-slate-50">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-sky-600 transition-colors hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="mb-6 list-disc space-y-2 pl-6 text-slate-600 dark:text-slate-400">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 list-decimal space-y-2 pl-6 text-slate-600 dark:text-slate-400">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-slate-200 pl-6 italic text-slate-600 dark:border-slate-700 dark:text-slate-400">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-slate-900 dark:bg-slate-800 dark:text-slate-50">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mb-6 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-50 dark:bg-slate-950">
      {children}
    </pre>
  ),
  img: (props) => (
    <Image
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      {...(props as ImageProps)}
    />
  ),
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
  return components
}
