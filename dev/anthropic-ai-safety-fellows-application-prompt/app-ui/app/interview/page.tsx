export default function InterviewPage() {
  return (
    <article className="mx-auto max-w-7xl px-8 py-16" aria-labelledby="interview-title">
      <header className="mb-12">
        <h1 id="interview-title" className="text-4xl font-light tracking-[0.3em] text-zinc-50 mb-4">Interview Q&A</h1>
        <p className="text-sm text-zinc-400 font-light tracking-wider">
          Prepared responses for interview questions
        </p>
      </header>

      <section className="border border-zinc-800 p-8" style={{ backgroundColor: '#18181b' }} aria-labelledby="interview-content-heading">
        <h2 id="interview-content-heading" className="sr-only">Interview Preparation Content</h2>
        <div className="space-y-6">
          <p className="text-sm text-zinc-500 italic" role="note">
            Interview Q&A content will be integrated here once available. This section will contain
            prepared responses for common interview questions from the Anthropic committee.
          </p>

          <div className="space-y-6">
            <section aria-labelledby="topics-heading">
              <h3 id="topics-heading" className="text-xl font-light tracking-wide text-zinc-50 mb-4">Expected Topics</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-zinc-300 ml-4" role="list" aria-label="Expected interview topics">
                <li role="listitem">Technical AI Safety background and projects</li>
                <li role="listitem">Experience with Constitutional AI and RLAIF</li>
                <li role="listitem">ITAYN project details and implementation</li>
                <li role="listitem">Neuro-diversity and accessibility in AI systems</li>
                <li role="listitem">Long-term commitment to AI Safety field</li>
                <li role="listitem">Collaboration and communication style</li>
              </ul>
            </section>

            <section aria-labelledby="messages-heading">
              <h3 id="messages-heading" className="text-xl font-light tracking-wide text-zinc-50 mb-4">Key Messages</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-zinc-300 ml-4" role="list" aria-label="Key messages to convey">
                <li role="listitem">Emphasize "Safety as Home" narrative through-line</li>
                <li role="listitem">Connect 25-year journey to AI Safety work</li>
                <li role="listitem">Highlight polymathic perspective (education, systems, AI)</li>
                <li role="listitem">Demonstrate alignment with Anthropic's mission</li>
                <li role="listitem">Show commitment to long-term AI Safety career</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </article>
  );
}
