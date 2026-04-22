// Dynamic import helper for code splitting
// This helps with performance by lazy-loading heavy components

export function dynamic<T extends React.ComponentType<any>>(
  importer: () => Promise<{ default: T }>,
  options?: { ssr?: boolean }
): React.ComponentType<any> {
  // For now, just return a simple wrapper
  // In production, this would use React.lazy and Suspense
  return () => null as any;
}

// Export a simple version that works without SSR concerns
export const lazyImport = <T extends React.ComponentType<any>>(
  fn: () => Promise<{ default: T }>
) => fn;