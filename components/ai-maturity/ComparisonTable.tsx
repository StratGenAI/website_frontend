'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const comparisonData = [
  {
    metric: 'AI Tools',
    level0: '0',
    level1: '0-1',
    level2: '1-3',
    level3: '4-7',
    level4: '10-20',
    level5: '20-50+',
  },
  {
    metric: 'Team Adoption',
    level0: '0%',
    level1: '<10%',
    level2: '10-30%',
    level3: '50-70%',
    level4: '80-90%',
    level5: '95%+',
  },
  {
    metric: 'Monthly ROI',
    level0: '₹0',
    level1: '₹0',
    level2: '₹50K-1L',
    level3: '₹2-5L',
    level4: '₹10-20L',
    level5: '₹1Cr+',
  },
  {
    metric: 'Efficiency Gain',
    level0: '0%',
    level1: '0-5%',
    level2: '15-25%',
    level3: '30-50%',
    level4: '50-70%',
    level5: '70-90%',
  },
  {
    metric: 'Implementation Time',
    level0: '-',
    level1: '3-6M',
    level2: '4-8M',
    level3: '6-12M',
    level4: '12-18M',
    level5: '18-24M+',
  },
  {
    metric: 'Investment (Annual)',
    level0: '₹0',
    level1: '₹1-3L',
    level2: '₹3-8L',
    level3: '₹10-25L',
    level4: '₹50L-2Cr',
    level5: '₹2-10Cr+',
  },
  {
    metric: 'AI Team Size',
    level0: '0',
    level1: '0',
    level2: '0-1',
    level3: '1-3',
    level4: '5-15',
    level5: '20-100+',
  },
  {
    metric: 'Custom Solutions',
    level0: 'No',
    level1: 'No',
    level2: 'No',
    level3: 'Starting',
    level4: 'Yes',
    level5: 'Proprietary',
  },
  {
    metric: 'Strategic Focus',
    level0: 'None',
    level1: 'Exploring',
    level2: 'Testing',
    level3: 'Scaling',
    level4: 'Leading',
    level5: 'Innovating',
  },
  {
    metric: 'Competitive Edge',
    level0: 'None',
    level1: 'None',
    level2: 'Minimal',
    level3: 'Moderate',
    level4: 'Strong',
    level5: 'Dominant',
  },
]

const levelColors = [
  { bg: '#FF4444', text: '#FFFFFF' },
  { bg: '#FF8C00', text: '#FFFFFF' },
  { bg: '#FFD700', text: '#000000' },
  { bg: '#90EE90', text: '#000000' },
  { bg: '#228B22', text: '#FFFFFF' },
  { bg: '#006400', text: '#FFFFFF' },
]

export default function ComparisonTable() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              Level <span className="gradient-text">Comparison</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Compare key metrics across all maturity levels
            </p>
          </motion.div>

          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            <motion.div
              className="min-w-full inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <table className="w-full border-collapse text-sm sm:text-base">
                <thead>
                  <tr>
                    <th className="sticky left-0 z-10 bg-white p-3 sm:p-4 text-left font-heading font-bold text-gray-900 border-b-2 border-gray-200 text-xs sm:text-sm">
                      Metric
                    </th>
                    {[0, 1, 2, 3, 4, 5].map((level) => (
                      <th
                        key={level}
                        className="p-2 sm:p-4 text-center font-heading font-bold text-white border-b-2 border-gray-200 min-w-[90px] sm:min-w-[120px] text-xs sm:text-sm"
                        style={{ backgroundColor: levelColors[level].bg }}
                      >
                        L{level}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, rowIndex) => (
                    <motion.tr
                      key={row.metric}
                      className="hover:bg-gray-50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + rowIndex * 0.05 }}
                    >
                      <td className="sticky left-0 z-10 bg-white p-3 sm:p-4 font-heading font-semibold text-gray-900 border-b border-gray-200 text-xs sm:text-sm">
                        {row.metric}
                      </td>
                      {[0, 1, 2, 3, 4, 5].map((level) => {
                        const value = row[`level${level}` as keyof typeof row] as string
                        return (
                          <td
                            key={level}
                            className="p-2 sm:p-4 text-center font-body border-b border-gray-200 text-xs sm:text-sm whitespace-nowrap"
                            style={{
                              backgroundColor: `${levelColors[level].bg}15`,
                              color: levelColors[level].text === '#FFFFFF' ? '#1F2937' : '#1F2937',
                            }}
                          >
                            <span className="inline-block">{value}</span>
                          </td>
                        )
                      })}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}


