'use client'

import { motion } from 'framer-motion'
import { Dna, FlaskConical, Microscope } from 'lucide-react'
import { usePerformanceMode } from '@/lib/use-performance-mode'

type Size = 'sm' | 'lg'

interface BioCopilotVisualProps {
  size?: Size
  showBadge?: boolean
}

export default function BioCopilotVisual({ size = 'lg', showBadge = true }: BioCopilotVisualProps) {
  const isLarge = size === 'lg'
  const box = isLarge ? 'w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]' : 'w-16 h-16'
  const { lowPower } = usePerformanceMode()

  return (
    <div className={`relative ${box} flex items-center justify-center`}>
      {!lowPower && (
        <motion.div
          className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-400/25 via-purple-400/20 to-pink-400/25 blur-3xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.45, 0.6, 0.45] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      <div
        className={`relative w-full h-full rounded-[2rem] border border-purple-200/70 bg-gradient-to-br from-white via-blue-50/80 to-pink-50/80 shadow-2xl overflow-hidden ${
          isLarge ? 'p-8 md:p-10' : 'p-2 rounded-xl'
        }`}
      >
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(14,165,233,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.4) 1px, transparent 1px)',
            backgroundSize: isLarge ? '28px 28px' : '12px 12px',
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div
            className={`rounded-2xl bg-gradient-to-br from-blue-50 to-pink-50 border border-purple-200/60 flex flex-col items-center justify-center shadow-lg ${
              isLarge ? 'w-44 h-44 md:w-52 md:h-52' : 'w-full h-full rounded-lg'
            }`}
          >
            <Dna
              className={`text-purple-600 ${isLarge ? 'w-16 h-16 md:w-20 md:h-20 mb-3' : 'w-6 h-6'}`}
              strokeWidth={1.5}
            />
            {isLarge && (
              <>
                <span className="text-3xl md:text-4xl font-display font-black tracking-tight gradient-text">
                  Bio
                </span>
                <span className="text-xl md:text-2xl font-heading font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent -mt-1">
                  Copilot
                </span>
              </>
            )}
          </div>

          {isLarge && (
            <div className="flex items-center gap-3 mt-8">
              {[
                { Icon: Microscope, color: 'text-blue-600', bg: 'from-blue-50 to-blue-100/80 border-blue-200/60' },
                { Icon: FlaskConical, color: 'text-purple-600', bg: 'from-purple-50 to-purple-100/80 border-purple-200/60' },
                { Icon: Dna, color: 'text-pink-600', bg: 'from-pink-50 to-pink-100/80 border-pink-200/60' },
              ].map(({ Icon, color, bg }, idx) => (
                <div
                  key={idx}
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${bg} border flex items-center justify-center`}
                >
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showBadge && isLarge && (
        <div className="absolute -top-2 -right-2 md:top-4 md:right-0 z-20 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-xs font-heading font-bold shadow-lg border border-white/30">
          Logo in development
        </div>
      )}
    </div>
  )
}
