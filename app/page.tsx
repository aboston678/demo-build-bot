const STEPS = [
  {
    n: "01",
    title: "Post a spec",
    body: "Drop a message in #testing-demo-build-bot describing the page you want built.",
  },
  {
    n: "02",
    title: "React 🔨",
    body: "Add the hammer reaction to the message. That's the build trigger.",
  },
  {
    n: "03",
    title: "Get the link",
    body: "Within ~15 minutes the bot ships a live page and replies in-thread with its URL.",
  },
];

export default function Home() {
  return (
    <div className="animate-fade-up">
      <p className="eyebrow">NationGraph</p>
      <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
        Demo Build Bot
      </h1>
      <p className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-ink-muted">
        A Slack-native build pipeline. Describe a page, react with a hammer, and
        a live deployment lands back in the channel — code written, pushed, and
        shipped automatically.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.n} className="panel panel-hover p-6">
            <span className="mono-label">{s.n}</span>
            <h2 className="mt-3 font-display text-lg font-medium text-ink">
              {s.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {s.body}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-12 font-mono text-[0.72rem] text-ink-dim">
        Each shipped demo lives at{" "}
        <span className="mono-tag">/&lt;slug&gt;</span>
      </p>
    </div>
  );
}
