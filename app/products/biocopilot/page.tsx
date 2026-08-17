import ProductPageLayout from '@/components/products/ProductPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BioCopilot AI — Research Assistant',
  description: 'AI-powered research assistant for genomics, microbiome, and multi-omics. For research use only.',
}

export default function BioCopilotProductPage() {
  return <ProductPageLayout productId={2} />
}
