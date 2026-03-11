export default function VideoPage() {
  return (
    <article className="mx-auto max-w-7xl px-8 py-16" aria-labelledby="video-title">
      <header className="mb-12">
        <h1 id="video-title" className="text-4xl font-light tracking-[0.3em] text-zinc-50 mb-4">Video Script</h1>
        <p className="text-sm text-zinc-400 font-light tracking-wider">
          Video submission script and talking points
        </p>
      </header>

      <section className="border border-zinc-800 p-8" style={{ backgroundColor: '#18181b' }} aria-labelledby="video-content-heading">
        <h2 id="video-content-heading" className="sr-only">Video Script Content</h2>
        <div className="space-y-6">
          <p className="text-sm text-zinc-500 italic" role="note">
            Video script content will be integrated here once available. This section will contain
            the prepared script for the video submission component of the application.
          </p>

          <div className="space-y-6">
            <section aria-labelledby="structure-heading">
              <h3 id="structure-heading" className="text-xl font-light tracking-wide text-zinc-50 mb-4">Structure</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-zinc-300 ml-4" role="list" aria-label="Video structure outline">
                <li role="listitem">Opening: Introduction and "Safety as Home" theme</li>
                <li role="listitem">Body: Three layers of safety (Educator, Dean, AI Engineer)</li>
                <li role="listitem">Closing: Why Anthropic and commitment to AI Safety</li>
              </ul>
            </section>

            <section aria-labelledby="talking-points-heading">
              <h3 id="talking-points-heading" className="text-xl font-light tracking-wide text-zinc-50 mb-4">Key Talking Points</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-zinc-300 ml-4" role="list" aria-label="Key talking points">
                <li role="listitem">25-year journey from Teacher → Dean → AI Engineer</li>
                <li role="listitem">Neuro-diversity and accessibility as foundational principles</li>
                <li role="listitem">"Intention is All You Need" (ITAYN) project</li>
                <li role="listitem">Constitutional AI alignment with personal mission</li>
                <li role="listitem">Commitment to "Safety for All"</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </article>
  );
}
