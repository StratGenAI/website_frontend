import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { products } from '@/lib/products-data'
import BioCopilotVisual from '@/components/products/BioCopilotVisual'
import Image from 'next/image'

interface ProductPageLayoutProps {
  productId: 1 | 2
}

export default function ProductPageLayout({ productId }: ProductPageLayoutProps) {
  const product = products.find((p) => p.id === productId)
  if (!product) return null

  const isBio = product.visual === 'biocopilot'

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/#products" className="text-purple-600 font-heading font-semibold text-sm hover:text-pink-600 mb-8 inline-flex items-center gap-1">
          ← All products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="flex justify-center">
            {isBio ? (
              <BioCopilotVisual size="lg" />
            ) : (
              <div className="w-80 h-80 relative">
                <Image src={product.logo!} alt={product.name} fill className="object-contain" unoptimized />
              </div>
            )}
          </div>

          <div>
            {product.status === 'early-access' && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4">
                Early Access
              </span>
            )}
            <p className={`text-sm font-heading font-bold uppercase tracking-wide bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-2`}>
              {product.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-6">{product.name}</h1>
            <p className="text-lg text-gray-700 font-body leading-relaxed mb-8">{product.modalDescription}</p>

            {product.disclaimer && (
              <p className="text-sm text-gray-600 italic border-l-4 border-purple-300 pl-4 mb-8">{product.disclaimer}</p>
            )}

            <ul className="space-y-3 mb-10">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-gray-700 font-body">
                  <span className="text-purple-500 mt-1">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="/#contact"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-heading font-bold bg-gradient-to-r ${product.gradient} shadow-lg hover:shadow-xl transition-shadow`}
            >
              {product.ctaLabel ?? 'Get in touch'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
