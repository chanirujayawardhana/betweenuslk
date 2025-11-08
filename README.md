# Between Us LK — Maintenance Mode (Vercel)

This pack forces **all routes** to render `maintenance.html` using a `vercel.json` rewrite.

## Deploy (GitHub + Vercel)

1. Add these files at the root of your repo:
   - `maintenance.html`
   - `vercel.json`
   - `robots.txt`
2. Commit & push. Vercel will redeploy and route all pages to the maintenance page.
3. To exit maintenance, **remove** the rewrite from `vercel.json` (or delete the file) and push again.

> Note: The rewrite returns a **200** status by default (good enough for most cases).  
> If you need a strict `503 Service Unavailable` with `Retry-After`, use Next.js Middleware or a server function.
