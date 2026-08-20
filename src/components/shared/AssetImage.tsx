'use client';

import Image from 'next/image';
import { useState } from 'react';

type AssetImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  quality?: number;
  unoptimized?: boolean;
};

export function AssetImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  loading = 'lazy',
  sizes,
  quality = 80,
  unoptimized = false,
}: AssetImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={[
          'flex items-center justify-center border border-white/10 bg-[#060606] text-center',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        role="img"
        aria-label={alt}
      >
        <span className="px-4 text-[0.7rem] uppercase tracking-[0.28em] text-zinc-500">
          Görsel eklenecek
        </span>
      </div>
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
      priority={priority}
      loading={loading}
      sizes={sizes}
      className={className}
      unoptimized={unoptimized}
      onError={() => setHasError(true)}
    />
  );
}
