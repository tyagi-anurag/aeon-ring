'use client';

import dynamic from 'next/dynamic';

// Dynamic import disables Server-Side Rendering (SSR) for the 3D part
const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
  loading: () => null, // Prevents flash of unstyled content
});

// IMPORTANT: We must accept the 'color' prop here
export default function SceneWrapper({ color }: { color: string }) {
  // And pass it down to the actual Scene component
  return <Scene color={color} />;
}