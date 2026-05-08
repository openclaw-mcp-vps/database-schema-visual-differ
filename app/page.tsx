export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          Database Tooling
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Visual Diff for{" "}
          <span className="text-[#58a6ff]">Database Schemas</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Compare schemas across environments instantly. See every table, column, and index change with automated migration risk scoring — before you ship.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Access — $25/mo
          </a>
          <span className="text-[#8b949e] text-sm">No credit card required to explore</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⚡", title: "Instant Comparison", desc: "Connect multiple DB environments and diff schemas in seconds." },
            { icon: "🔍", title: "Deep Inspection", desc: "Tables, columns, indexes, constraints — nothing is missed." },
            { icon: "🛡️", title: "Risk Scoring", desc: "Automated impact analysis flags breaking changes before migration." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$25</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited schema comparisons",
              "Visual diff reports with risk scores",
              "PostgreSQL, MySQL, SQLite support",
              "Export diffs as PDF or JSON",
              "Email alerts on schema drift",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which databases are supported?",
              a: "SchemaDiff supports PostgreSQL, MySQL, and SQLite. Support for MSSQL and Oracle is on the roadmap."
            },
            {
              q: "Is my database connection secure?",
              a: "Connections are encrypted in transit. Credentials are never stored — only schema metadata is extracted and cached temporarily."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel anytime from your billing dashboard. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} SchemaDiff. All rights reserved.
      </footer>
    </main>
  )
}
