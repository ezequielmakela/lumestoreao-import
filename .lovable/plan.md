## Goal
Recreate the app from your private GitHub repo `Ezequielmakela/lumestoreao` inside this Lovable project. Lovable can't directly import an existing GitHub repo, so we'll read its contents through the GitHub connector and port the code into this project's TanStack Start structure.

## Steps

1. **Connect GitHub (private repo access).**
   Link the GitHub App connector so I can read the private repo via the GitHub REST API. Your token needs `repo` scope so it can see private repositories.

2. **Survey the repo.**
   - Fetch the tree of `Ezequielmakela/lumestoreao` (default branch).
   - Read `package.json`, framework config (Vite/Next/CRA/etc.), `README`, routing, and top-level `src/` layout.
   - Identify: framework, styling (Tailwind or other), state/data libs, backend calls, env vars, and assets.

3. **Confirm scope with you before porting.**
   Once I see what's in the repo, I'll come back with:
   - What ports cleanly as-is (components, styles, assets).
   - What must be adapted to this stack (TanStack Start + Tailwind v4 + shadcn) — most commonly: routing (React Router / Next → TanStack file routes), any Node-only server code (→ TanStack server functions), and env variables.
   - Any backend needs (DB, auth, storage) — we'd enable Lovable Cloud for those.

4. **Port the code in batches.**
   - Copy assets (images, fonts) into `src/assets/` / `public/`.
   - Recreate pages as `src/routes/*.tsx` route files with proper `head()` metadata.
   - Move shared UI into `src/components/`, hooks into `src/hooks/`, utils into `src/lib/`.
   - Rewrite data fetching to TanStack Query loader + `useSuspenseQuery`.
   - Install matching npm dependencies via `bun add`.
   - Replace default placeholder `src/routes/index.tsx` with the real homepage.

5. **Wire backend (only if the repo has one).**
   If the app uses a database/auth/API keys, enable Lovable Cloud and recreate tables + server functions; add any third-party keys via secrets.

6. **Verify.**
   Build, load the preview, and spot-check pages/flows against the original.

## Technical notes
- Anything Next.js-specific (`app/`, `pages/`, `next/image`, `next/link`, API routes, middleware) will be rewritten to TanStack equivalents.
- Anything React Router (`BrowserRouter`, `<Routes>`) becomes file-based routes under `src/routes/`.
- Node-only libs won't run in the Cloudflare Worker runtime and will be swapped for Web-standard / fetch-based equivalents.
- `.env` values become Lovable secrets (server) or `VITE_*` (client).

## What I need from you to start
Approve this plan. On the next turn I'll connect the GitHub connector (you'll authorize it, granting access to the private repo), then start with the repo survey and report back before mass-porting.
