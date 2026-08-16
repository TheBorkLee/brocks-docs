# Brocks Scripts documentation

The official documentation website for **Brocks Scripts**, built with [VitePress](https://vitepress.dev/) and deployed for free with GitHub Pages.

The published site is expected at:

**https://theborklee.github.io/brocks-docs/**

This README is for site maintainers. Customer-facing documentation is stored in the Markdown pages throughout the repository.

## What is in this project?

```text
brocks-docs/
├── .github/workflows/deploy.yml       # Builds and deploys GitHub Pages
├── .vitepress/
│   ├── config.mts                     # Branding, navigation, sidebar, and base path
│   └── theme/
│       ├── components/                # Cards, callouts, steps, and animated backdrop
│       ├── custom.css                 # Dark Brocks Scripts theme
│       └── index.ts                   # Custom component registration
├── developers/                        # Exports, events, and integration guides
├── getting-started/                   # General onboarding guides
├── resources/
│   └── bl_warehouse/                  # Complete BL Warehouse documentation section
├── support/                            # Common issues, support, and FAQ
├── index.md                            # Homepage
├── package.json                        # Commands and dependencies
└── package-lock.json                   # Locked dependency versions
```

## Requirements

- [Node.js](https://nodejs.org/) 20 or newer. The deployment workflow uses Node.js 22.
- npm, which is included with Node.js.

Check your installed versions:

```powershell
node --version
npm.cmd --version
```

The `.cmd` launcher avoids the PowerShell execution-policy error that can occur with `npm.ps1` on Windows.

## Install dependencies

Open PowerShell in this repository and run:

```powershell
npm.cmd install
```

For a clean, reproducible install using the committed lockfile:

```powershell
npm.cmd ci
```

## Run locally

Start the development server:

```powershell
npm.cmd run docs:dev
```

Open the local address shown in the terminal, normally `http://localhost:5173/brocks-docs/`. Changes reload automatically while the server is running. Press `Ctrl+C` to stop it.

## Validate a production build

Run the same build used by GitHub Pages:

```powershell
npm.cmd run docs:build
```

The generated static site is written to `.vitepress/dist`. That directory is ignored by Git and should not be committed.

Preview the completed production build locally:

```powershell
npm.cmd run docs:preview
```

## How GitHub Pages deployment works

The workflow in `.github/workflows/deploy.yml` runs whenever a commit is pushed to `main`:

1. GitHub checks out the repository.
2. Node.js is configured.
3. `npm ci` installs the exact locked dependencies.
4. `npm run docs:build` builds VitePress.
5. `.vitepress/dist` is uploaded as a GitHub Pages artifact.
6. GitHub deploys that artifact to Pages.

For the first deployment, open the repository on GitHub and select:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

After that, check the repository's **Actions** tab for deployment progress. The project base path is already configured as `/brocks-docs/`, which matches the repository name.

## Add a new documentation page

1. Create a lowercase, hyphenated `.md` file in the appropriate directory. For example:

   ```text
   resources/my-resource/overview.md
   ```

2. Add frontmatter and content:

   ```md
   ---
   title: "My Resource"
   description: "A short, accurate description."
   ---

   # My Resource

   Add verified documentation here.
   ```

3. Add the page to `themeConfig.sidebar` in `.vitepress/config.mts`:

   ```ts
   { text: 'Overview', link: '/resources/my-resource/overview' }
   ```

4. Link to the page with a root-relative Markdown link:

   ```md
   [Open My Resource](/resources/my-resource/overview)
   ```

   VitePress automatically applies the configured `/brocks-docs/` base path to links in Markdown and site configuration.

5. Run `npm.cmd run docs:build` and fix any broken-link or Markdown errors before pushing.

## Add a new resource section

Copy the organizational pattern—not the technical claims—from `resources/bl_warehouse`:

```text
resources/
└── resource-name/
    ├── overview.md
    ├── installation.md
    ├── configuration.md
    └── troubleshooting.md
```

Add only information confirmed against the released resource. Use obvious placeholders such as `[ADD CONFIRMED DEPENDENCIES HERE]` instead of guessing.

## Update navigation and branding

Edit `.vitepress/config.mts` to change:

- Site title and description
- Top navigation
- Sidebar groups and pages
- Store and Discord links
- GitHub repository links
- GitHub Pages base path

The Store and Discord links are configured as:

```text
https://brocksscripts.tebex.io
https://discord.gg/QdEPrhkFRm
```

Update these in `.vitepress/config.mts` and `support/getting-support.md` if either destination changes. The dark theme and purple design tokens are in `.vitepress/theme/custom.css`.

## Safe publishing checklist

- Confirm documentation against the current released resource files.
- Keep the BL Warehouse placeholders until details are verified.
- Confirm the Store and Discord URLs are current.
- Never commit license keys, Tebex transaction data, credentials, database passwords, `.env` files, paid source archives, or private server data.
- Run `npm.cmd run docs:build`.
- Test changed pages and the animated site background locally.
- Check the GitHub Actions run after pushing to `main`.
