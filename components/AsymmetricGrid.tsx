'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AsymmetricGridProps {
  children: ReactNode[]
  className?: string
}

export default function AsymmetricGrid({ children, className = '' }: AsymmetricGridProps) {
  return (
    <div className={`grid grid-cols-12 gap-4 ${className}`}>
      {children.map((child, index) => {
        const colSpan = index % 3 === 0 ? 7 : index % 3 === 1 ? 5 : 12
        const rowSpan = index % 4 === 0 ? 2 : 1
        
        return (
          <motion.div
            key={index}
            className={`col-span-12 md:col-span-${colSpan} ${rowSpan === 2 ? 'md:row-span-2' : ''}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {child}
          </motion.div>
        )
      })}
    </div>
  )
}



