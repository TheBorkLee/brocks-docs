# Brocks Scripts documentation

This repository contains the Mintlify documentation website for **Brocks Scripts**. It is written in MDX (Markdown plus reusable components), configured by `docs.json`, and designed to grow as new FiveM resources are released.

This README is for the site owner and maintainers. Customer-facing content lives in the `.mdx` pages.

## Project structure

```text
brocks-docs/
├── docs.json                         # Branding, navigation, and external links
├── index.mdx                         # Documentation homepage
├── getting-started/                  # General onboarding guides
├── resources/
│   ├── bl-warehouse/                 # All BL Warehouse pages
│   └── future-resources.mdx
├── developers/                       # Exports, events, and integration templates
├── support/                          # Common issues, support, and FAQ
└── snippets/
    └── snake-game.jsx                # Interactive homepage Snake game
```

Every page path in `docs.json` omits the `.mdx` extension. For example, `resources/bl-warehouse/overview` points to `resources/bl-warehouse/overview.mdx`.

## Preview locally

You need Node.js 20.17 or newer. Check your version:

```powershell
node --version
```

### Option 1: Preview without a global install

Open PowerShell in this folder and run:

```powershell
npx mint dev
```

If PowerShell blocks `npm.ps1` scripts on Windows, use the `.cmd` launcher:

```powershell
npx.cmd mint dev
```

Mintlify opens the preview at `http://localhost:3000`. Press `Ctrl+C` in the terminal to stop it.

### Option 2: Install the Mintlify CLI globally

```powershell
npm.cmd install -g mint@latest
mint dev
```

You can also prevent the browser from opening automatically:

```powershell
mint dev --no-open
```

## Validate changes

Run Mintlify's validator from the project root:

```powershell
mint validate
```

If you did not install the CLI globally:

```powershell
npx.cmd mint validate
```

Always open the local preview after validation and click through changed pages. Test the homepage Snake game with arrow keys and the on-screen controls.

## Add a new script

1. Create a lowercase, hyphenated folder under `resources`, such as `resources/my-resource`.
2. Add an `overview.mdx`. Add `installation.mdx`, `configuration.mdx`, and `troubleshooting.mdx` when useful.
3. Start each page with frontmatter:

   ```mdx
   ---
   title: "My Resource"
   description: "A short, accurate page description."
   icon: "box"
   ---
   ```

4. Use placeholders such as `[ADD CONFIRMED DEPENDENCIES HERE]` instead of guessing technical details.
5. Add the new pages to `docs.json` as described below.
6. Run `mint validate`, preview locally, and test every link.

Copying the structure of `resources/bl-warehouse` is the easiest starting point. Do not copy BL Warehouse claims into another product's docs.

## Add or reorganize navigation

Open `docs.json` and find `navigation.groups`. A nested resource looks like this:

```json
{
  "group": "My Resource",
  "icon": "box",
  "pages": [
    "resources/my-resource/overview",
    "resources/my-resource/installation"
  ]
}
```

The path must match a real `.mdx` file exactly and must not include `.mdx`. Keep page titles inside each file's frontmatter; navigation uses those titles automatically.

## Update branding and links

The obvious branding controls are near the top of `docs.json`:

- `name`: text brand shown while there is no logo.
- `colors`: purple brand palette.
- `appearance`: dark-mode behavior.
- `navbar.links`: Discord and GitHub destinations.
- `navbar.primary`: Tebex store button.
- `footer`: repeated external links.

Before publishing, replace every `https://example.com/discord` and `https://example.com/tebex` value with the real URLs. Replace or remove the generic `https://github.com/` link if Brocks Scripts does not have a public GitHub page. Also update the placeholder cards in `support/getting-support.mdx`.

### Add a logo and favicon later

There are deliberately no logo or favicon references now, so no broken images appear. When assets are ready:

1. Create an `images` directory.
2. Add files such as `images/logo-dark.svg`, `images/logo-light.svg`, and `images/favicon.svg`.
3. Add these top-level fields to `docs.json`:

   ```json
   "logo": {
     "light": "/images/logo-light.svg",
     "dark": "/images/logo-dark.svg",
     "href": "/"
   },
   "favicon": "/images/favicon.svg"
   ```

4. Run validation and check both asset paths in the preview.

## Deploy with Mintlify

1. Create a Git repository for this folder and push it to GitHub.
2. Sign in to Mintlify and create a documentation project.
3. Connect the GitHub repository and select the branch containing `docs.json`.
4. If the repository contains only this site, use the repository root as the docs directory.
5. Add the production domain in the Mintlify dashboard when ready.
6. Replace all placeholder external URLs before launch.
7. Push changes to the connected branch; Mintlify rebuilds the site from the repository.

For the current dashboard flow and plan-specific deployment options, follow Mintlify's official deployment instructions in your Mintlify account.

## Safe publishing checklist

- Confirm all resource details against the current released files.
- Replace every bracketed placeholder intended for the public site.
- Replace Discord and Tebex placeholder URLs.
- Add or remove the GitHub link as appropriate.
- Run `mint validate`.
- Preview every changed page on desktop and mobile.
- Check that no keys, transaction details, credentials, or private server data were committed.
