export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Productivity Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Lose a Form Again
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          FormGuard auto-saves every keystroke in your browser. Long essays, job applications, support tickets — all backed up instantly, recovered in one click.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Works on any website.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '💾', title: 'Instant Local Backup', desc: 'Saves to browser storage as you type — zero latency, zero data loss.' },
            { icon: '☁️', title: 'Cloud Sync', desc: 'Premium users get encrypted cloud backup accessible from any device.' },
            { icon: '🔁', title: 'One-Click Restore', desc: 'Recover any saved draft from the dashboard in seconds.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Browser extension for Chrome & Firefox',
              'Unlimited local backups',
              'Cloud sync across devices',
              'Dashboard with full history',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get FormGuard
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          {[
            {
              q: 'Which browsers are supported?',
              a: 'FormGuard works on Chrome and Firefox. Edge and Brave (Chromium-based) are also supported via the Chrome extension.',
            },
            {
              q: 'Is my data private?',
              a: 'Local backups never leave your device. Cloud sync uses end-to-end encryption — we cannot read your content.',
            },
            {
              q: 'Can I use it on any website?',
              a: 'Yes. The extension monitors all text inputs and textareas across every website you visit, including Gmail, job boards, and CMS editors.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} FormGuard. All rights reserved.
      </footer>
    </main>
  )
}
