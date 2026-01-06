'use client'

import { Suspense } from 'react'
import HeroSection from '@/components/ai-maturity/HeroSection'
import OverviewSection from '@/components/ai-maturity/OverviewSection'
import MaturityLevels from '@/components/ai-maturity/MaturityLevels'
import ComparisonTable from '@/components/ai-maturity/ComparisonTable'
import AssessmentQuiz from '@/components/ai-maturity/AssessmentQuiz'
import ResourcesSection from '@/components/ai-maturity/ResourcesSection'
import FAQSection from '@/components/ai-maturity/FAQSection'
import CTASection from '@/components/ai-maturity/CTASection'

export default function AIMaturityModelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <HeroSection />
        <OverviewSection />
        <MaturityLevels />
        <ComparisonTable />
        <AssessmentQuiz />
        <ResourcesSection />
        <FAQSection />
        <CTASection />
      </Suspense>
    </div>
  )
}

