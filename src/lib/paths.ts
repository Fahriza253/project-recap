/** Astro `base` from GitHub Pages may omit the trailing slash. */
export function withBase(path = '', base = import.meta.env.BASE_URL): string {
  const root = base.endsWith('/') ? base : `${base}/`;
  if (!path || path === '/') {
    return root;
  }
  return `${root}${path.replace(/^\//, '')}`;
}

export function proyekHref(id: string, base = import.meta.env.BASE_URL): string {
  return withBase(`proyek/${id}/`, base);
}
