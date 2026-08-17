import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How StratgenAI collects, uses, and protects your information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Link href="/" className="text-purple-600 font-heading font-semibold text-sm hover:text-pink-600 mb-8 inline-block">
          ← Back to home
        </Link>
        <h1 className="text-4xl md:text-5xl font-display font-black mb-6">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="prose prose-gray max-w-none space-y-8 font-body text-gray-700">
          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900">1. Who we are</h2>
            <p>
              StratgenAI (&quot;we&quot;, &quot;us&quot;) operates stratgenai.in and related services including Keirō and BioCopilot AI.
              Contact: <a href="mailto:hello@stratgenai.in" className="text-purple-600">hello@stratgenai.in</a>
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900">2. Information we collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details you submit (name, email, company, message) via forms or chatbot</li>
              <li>Technical data: IP address, browser type, pages visited (analytics, if enabled)</li>
              <li>Product usage data when you use our AI tools under a separate agreement</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900">3. How we use it</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to inquiries and schedule sessions</li>
              <li>Improve our website and products</li>
              <li>Send updates you have opted into</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900">4. Sharing</h2>
            <p>
              We do not sell your personal data. We may use trusted processors (e.g. form delivery, hosting)
              who process data only on our instructions.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900">5. BioCopilot AI & research data</h2>
            <p>
              BioCopilot AI is for research use only. Research datasets you upload under a product agreement
              are handled per your contract. Do not submit patient-identifiable clinical data unless explicitly agreed in writing.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900">6. Your rights</h2>
            <p>
              You may request access, correction, or deletion of your data by emailing hello@stratgenai.in.
              We will respond within a reasonable timeframe.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900">7. Security</h2>
            <p>We use industry-standard measures to protect data in transit and on our systems.</p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900">8. Changes</h2>
            <p>We may update this policy; the date above will reflect the latest version.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
