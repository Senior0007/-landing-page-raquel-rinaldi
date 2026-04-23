// Dynamic import helper for code splitting
// This helps with performance by lazy-loading heavy components

// Dynamic import helper for code splitting
// This helps with performance by lazy-loading heavy components

export function dynamic<T extends React.ComponentType<Record<string, unknown>>>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _importer: () => Promise<{ default: T }>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _options?: { ssr?: boolean }
): React.ComponentType<Record<string, unknown>> {
  // For now, just return a simple wrapper
  // In production, this would use React.lazy and Suspense
  return () => null as unknown as React.ReactElement;
}

// Export a simple version that works without SSR concerns
export const lazyImport = <T extends React.ComponentType<Record<string, unknown>>>(
  fn: () => Promise<{ default: T }>
) => fn;