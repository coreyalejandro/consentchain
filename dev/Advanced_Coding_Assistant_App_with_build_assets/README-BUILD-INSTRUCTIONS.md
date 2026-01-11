# Advanced Coding Assistant App — Production Build

This repository is a Vite + React single-page application.
It translates natural language into code across multiple languages with a built-in pattern-aware agent and a print-rich pseudocode environment.

Below are deterministic, **production-grade** build paths. Choose ONE.

---

## Option A — Local build (macOS / Linux)

**Requirements**
- Node.js 20.x or newer (`node -v` should be >= 20.0.0)
- PNPM (preferred) or NPM

**Steps**
1. Open Terminal and navigate to the project:
   ```bash
   cd "/mnt/data/advanced_coding_assistant_app"
   ```
2. Install dependencies (PNPM preferred, falls back to NPM):
   ```bash
   # Preferred
   corepack enable
   corepack prepare pnpm@9 --activate
   pnpm install --frozen-lockfile

   # If you don't want PNPM, use NPM:
   # npm ci
   ```
3. Build the production bundle:
   ```bash
   pnpm build
   # or: npm run build
   ```
4. Preview the production build locally (optional):
   ```bash
   pnpm dlx serve -s dist -l 4173
   # then open http://localhost:4173
   ```

**Output**
- The production bundle will be at: `dist/`

---

## Option B — Local build (Windows PowerShell)

**Requirements**
- Node.js 20.x or newer
- PNPM (preferred) or NPM

**Steps (PowerShell)**
```powershell
cd "/mnt/data/advanced_coding_assistant_app"
corepack enable
corepack prepare pnpm@9 --activate
pnpm install --frozen-lockfile
pnpm build
# Optional preview:
pnpm dlx serve -s dist -l 4173
```

---

## Option C — Dockerized build + NGINX production image

**Build the image**
```bash
cd "/mnt/data/advanced_coding_assistant_app"
docker build -t advanced-coding-assistant:prod -f Dockerfile .
```

**Run the container**
```bash
docker run --rm -p 8080:80 advanced-coding-assistant:prod
# open http://localhost:8080
```

---

## Option D — GitHub Actions CI (artifact + GitHub Pages)

1. Commit the repo, then push to GitHub.
2. Add the workflow file at `.github/workflows/build.yml`.
3. Enable GitHub Pages:
   - Settings → Pages → Source: **GitHub Actions**
4. On push to `main`, CI will:
   - Install deps
   - Build with Vite
   - Upload `dist/` artifact
   - Deploy to Pages

---

## Troubleshooting

- If install fails, ensure Node 20+ and clear your cache:
  ```bash
  pnpm store prune && pnpm install
  # or: npm cache verify && rm -rf node_modules package-lock.json && npm ci
  ```
- If Vite fails with a plugin error, remove `.vite/` and rebuild:
  ```bash
  rm -rf node_modules .vite dist && pnpm install && pnpm build
  ```

---

## Security & Determinism

- `--frozen-lockfile` / `npm ci` ensures reproducible installs.
- Dockerfile pins Node base image to LTS (20) for stable builds.
- GitHub Actions uses `setup-node@v4` with `cache: 'pnpm'` for speed & determinism.
