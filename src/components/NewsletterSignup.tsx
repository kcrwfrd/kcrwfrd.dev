export default function NewsletterSignup() {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="mb-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
          Subscribe to the Journal
        </h3>
        <p className="mb-8 font-light text-lg leading-relaxed text-foreground-muted">
          Receive new essays and reflections directly in your inbox. No spam,
          just thoughtful writing.
        </p>
        <form className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 rounded-sm border border-border bg-surface px-6 py-4 text-foreground placeholder:text-foreground-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
          <button
            type="submit"
            className="rounded-sm bg-foreground px-8 py-4 font-medium text-background transition-all hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent/50"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
