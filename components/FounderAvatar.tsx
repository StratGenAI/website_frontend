'use client'

import Image from 'next/image'
import { useState } from 'react'

interface FounderAvatarProps {
  name: string
  image: string
  gradient: string
  className?: string
  imageStyle?: React.CSSProperties
}

export default function FounderAvatar({
  name,
  image,
  gradient,
  className = '',
  imageStyle,
}: FounderAvatarProps) {
  const [failed, setFailed] = useState(false)
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br ${gradient} text-white font-display font-black text-4xl md:text-5xl ${className}`}
      >
        {initials}
      </div>
    )
  }

  return (
    <Image
      src={image}
      alt={name}
      fill
      className={`object-cover ${className}`}
      sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
      style={imageStyle}
      onError={() => setFailed(true)}
    />
  )
}
