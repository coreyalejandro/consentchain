const ACTS = [
  {
    number: 'I',
    timecode: '0:00 – 0:15',
    title: 'The Build on Silicon Hill',
    mood: 'Melancholy / Solitary',
    description: 'Dawn over Silicon Hill. The Build stands alone at the base — a lone figure in 1970s morning sun, tools in hand, no path yet carved. The world doesn\'t know his name. The music is a single low drone, like a held breath.',
    visuals: [
      'Wide establishing shot: Silicon Hill silhouette at sunrise',
      'Close-up: worn hands gripping a tool-belt',
      'Low-angle: The Build looking up at the slope — impossibly steep',
      'Color palette: amber, burnt orange, deep shadow',
    ],
    status: 'SCRIPT LOCKED',
  },
  {
    number: 'II',
    timecode: '0:15 – 0:30',
    title: 'The Funk-Pop Transition',
    mood: 'Rising / Determined',
    description: 'The music shifts — funk bass drops. One by one, metallic path-girders slam into the slope, forming a scaffolded staircase that didn\'t exist before. The Build doesn\'t wait for permission. He starts the climb as the infrastructure assembles itself under his feet.',
    visuals: [
      'Girders slamming into the hillside in rhythmic cuts (on the beat)',
      'The Build stepping onto each new platform the moment it forms',
      'Split-screen: his face (focused) vs. the scaffold assembling (chaos becoming order)',
      'Color palette: copper, electric blue, kinetic motion blur',
    ],
    status: 'SCRIPT LOCKED',
  },
  {
    number: 'III',
    timecode: '0:30 – 0:45',
    title: 'The 10-Pillar Chant',
    mood: 'Forensic / Intense',
    description: 'Rapid-fire visual cascade. Each of the 10 C-RSP pillars flashes on screen like a terminal output — FORENSIC INGEST, BENCHMARKS, ADMISSIBILITY, DETERMINISM. The Build is running, not walking, and the scanners are keeping up.',
    visuals: [
      'HUD overlay: green terminal text reading pillar names',
      'Quick cuts: screens, code, audit logs, compliance seals',
      '"VALIDATED" and "FAIL-CLOSED" stamps burning into frame',
      'Color palette: terminal green on black, harsh white flashes',
    ],
    status: 'SCRIPT LOCKED',
  },
  {
    number: 'IV',
    timecode: '0:45 – 1:00',
    title: 'Validation — The Flag on the Server Mountain',
    mood: 'Triumphant / Earned',
    description: 'The Build reaches the summit. He plants a flag — not a country\'s flag, but a green glowing seal: VALIDATED. The hill becomes a server rack. The sun rises fully. The music resolves into something almost joyful. The PSA card drops: "Safety feels good. Pass it on."',
    visuals: [
      'Slow-motion: flag plant on the summit',
      'The hill morphs into a server infrastructure rack',
      'Green "VALIDATED" seal pulses to life',
      'Final frame: PSA card — "I\'m Just a Build. Anthropic AI Safety Fellows 2026."',
      'Color palette: clean white, validated green, deep zinc',
    ],
    status: 'SCRIPT LOCKED',
  },
];

const PRODUCTION_STRATEGY = [
  'Generate Act I (15s) using Teaser Generator — melancholy 1970s morning aesthetic.',
  'Generate Act II (15s) — funk bass transition, girders on the beat.',
  'Generate Act III (15s) — rapid terminal/forensic HUD overlays.',
  'Generate Act IV (15s) — triumphant, flag plant, VALIDATED seal.',
  'Stitch locally: ffmpeg -i act1.mp4 -i act2.mp4 -i act3.mp4 -i act4.mp4 -filter_complex "[0:v][1:v][2:v][3:v]concat=n=4:v=1:a=0" output.mp4',
  'Release to LinkedIn morning of submission day.',
];

export default function TheBuildPage() {
  return (
    <article className="mx-auto max-w-7xl px-8 py-16" aria-labelledby="build-title">

      <header className="mb-16">
        <div className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-3">C-RSP v4.0 — Module 5</div>
        <h1 id="build-title" className="text-5xl font-extralight tracking-[0.15em] text-zinc-50 mb-4">
          I&rsquo;M JUST A BUILD
        </h1>
        <p className="text-sm font-light text-zinc-400 max-w-xl leading-relaxed">
          A 60-second cinematic Public Service Announcement. It bridges the &ldquo;Silo&rdquo; by making
          safety <em className="text-zinc-300">feel good.</em> Four acts. One flag on the server mountain.
        </p>
      </header>

      {/* Video Player — rendered 60s Remotion video */}
      <section
        className="mb-16 border border-zinc-800"
        style={{ backgroundColor: '#111113' }}
        aria-labelledby="player-heading"
      >
        <h2 id="player-heading" className="sr-only">Video Player — I&apos;m Just a Build</h2>
        <video
          src="/im-just-a-build.mp4"
          controls
          playsInline
          className="w-full"
          style={{ aspectRatio: '1/1', maxHeight: '640px', objectFit: 'cover', display: 'block' }}
          aria-label="I'm Just a Build — 60-second AI Safety PSA, four acts"
        >
          Your browser does not support the video element.
        </video>
      </section>

      {/* 4-Act Breakdown */}
      <section className="mb-16" aria-labelledby="acts-heading">
        <h2 id="acts-heading" className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-8">
          The Four Acts — Script Locked
        </h2>
        <div className="space-y-6">
          {ACTS.map((act) => (
            <div
              key={act.number}
              className="border border-zinc-800 p-8"
              style={{ backgroundColor: '#18181b' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-4 mb-1">
                    <span className="text-xs tracking-[0.2em] text-zinc-600">ACT {act.number}</span>
                    <span className="text-xs text-zinc-700">{act.timecode}</span>
                    <span className="text-xs text-zinc-700 italic">{act.mood}</span>
                  </div>
                  <h3 className="text-lg font-light tracking-wide text-zinc-100">{act.title}</h3>
                </div>
                <span className="text-xs tracking-wider text-zinc-600 border border-zinc-800 px-2 py-1">
                  {act.status}
                </span>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">{act.description}</p>

              <div>
                <div className="text-xs text-zinc-700 tracking-wider uppercase mb-3">Visual Direction</div>
                <ul className="space-y-1" role="list">
                  {act.visuals.map((visual, i) => (
                    <li key={i} className="text-xs text-zinc-600 flex items-start gap-2" role="listitem">
                      <span className="text-zinc-800 mt-0.5 shrink-0">—</span>
                      <span>{visual}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Production Strategy */}
      <section
        className="border border-zinc-800 p-8"
        style={{ backgroundColor: '#18181b' }}
        aria-labelledby="strategy-heading"
      >
        <h2 id="strategy-heading" className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-6">
          Modular Production Strategy — ACT_STITCHER
        </h2>
        <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
          Generate four 15s clips individually to avoid session timeout and credit exhaustion.
          Stitch locally using FFmpeg to bypass cloud render costs.
        </p>
        <ol className="space-y-3" role="list" aria-label="Production steps">
          {PRODUCTION_STRATEGY.map((step, i) => (
            <li key={i} className="flex items-start gap-4 text-xs" role="listitem">
              <span className="text-zinc-700 font-mono shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}.</span>
              {step.startsWith('ffmpeg') ? (
                <code className="text-zinc-400 bg-zinc-900 px-2 py-1 font-mono text-xs leading-relaxed break-all">
                  {step}
                </code>
              ) : (
                <span className="text-zinc-500 leading-relaxed">{step}</span>
              )}
            </li>
          ))}
        </ol>
      </section>

    </article>
  );
}
