import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing use of StratgenAI website and services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-white to-pink-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Link href="/" className="text-purple-600 font-heading font-semibold text-sm hover:text-pink-600 mb-8 inline-block">
          ← Back to home
        </Link>
        <h1 className="text-4xl md:text-5xl font-display font-black mb-6">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="space-y-8 font-body text-gray-700">
          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900">1. Agreement</h2>
            <p>By using stratgenai.in or our products, you agree to these terms. If you disagree, do not use our services.</p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900">2. Services</h2>
            <p>
              We provide AI software, consulting, and related tools including Keirō (conversational AI) and BioCopilot AI
              (research assistant). Specific features depend on your plan or pilot agreement.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900">3. BioCopilot AI — research only</h2>
            <p className="border-l-4 border-purple-400 pl-4 bg-purple-50/50 py-3 rounded-r-lg">
              BioCopilot AI is <strong>not</strong> a medical device and must not be used for diagnosis, treatment,
              prognosis, or clinical decision-making. Output is for research and scientific interpretation only.
              You are responsible for compliance with applicable regulations in your jurisdiction.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900">4. Acceptable use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>No unlawful, harmful, or infringing use of our services</li>
              <li>No attempt to reverse-engineer or abuse systems</li>
              <li>You own or have rights to data you submit</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900">5. Intellectual property</h2>
            <p>
              StratgenAI retains rights to our software, branding, and content. You retain rights to your data.
              Deliverables under a signed contract are governed by that contract.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900">6. Disclaimer</h2>
            <p>
              Services are provided &quot;as is&quot; to the extent permitted by law. AI outputs may require human review.
              We do not guarantee uninterrupted availability of the website or beta products.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900">7. Limitation of liability</h2>
            <p>
              Our liability is limited to the amount paid for services in the twelve months before a claim, or as
              required by applicable law.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900">8. Contact</h2>
            <p>
              Questions: <a href="mailto:hello@stratgenai.in" className="text-purple-600">hello@stratgenai.in</a> · Universal Vila, Patel vaas, danilimda gam, Ahmedabad-380028
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
