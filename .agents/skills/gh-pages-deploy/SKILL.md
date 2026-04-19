---
name: gh-pages-deploy
description: Deploy static frontend to GitHub Pages using existing GitHub Actions workflow. Use when content needs to be published to https://csg2001.github.io/. Commits and pushes changes; the workflow automatically builds and deploys. Includes verification that the site is live.
version: "2.0.0"
author: Kilo
tags:
  - deployment
  - github
  - hosting
  - frontend
---

# GitHub Pages Deployment (Streamlined)

Deploy static frontend websites to GitHub Pages when the repository and GitHub Actions workflow are already configured. This skill is tailored for projects with an existing CI/CD pipeline.

## Prerequisites

- GitHub CLI (`gh`) installed and authenticated
- Git installed
- Project already has:
  - Git repository initialized
  - GitHub remote configured
  - GitHub Pages enabled
  - GitHub Actions workflow (`.github/workflows/deploy.yml`) in place

## Deployment Workflow

### 1. Commit Changes

Stage all changes and create a commit with a descriptive message:

```bash
git add .
git commit -m "feat: description of changes"
```

### 2. Push to Main Branch

Push the commit to trigger the GitHub Actions workflow:

```bash
git push origin main
```

### 3. Monitor Deployment

Watch the workflow run:

```bash
# List recent workflow runs
gh run list --repo CSG2001/csg2001.github.io -L 3

# Watch the latest run (use -w for live logs)
gh run watch --repo CSG2001/csg2001.github.io -L 3

# Or get specific run details
gh run view <run-id> --log
```

The workflow uses `peaceiris/actions-gh-pages` to publish `./dist` to the `gh-pages` branch.

### 4. Verify Deployment

Wait for the build to complete (typically 30-60 seconds), then verify the site is live:

```bash
# Check latest Pages build status
gh api repos/CSG2001/csg2001.github.io/pages/builds/latest --jq '{commit, status, updated_at}'

# Wait until status is "built"
while true; do
  STATUS=$(gh api repos/CSG2001/csg2001.github.io/pages/builds/latest --jq '.status')
  if [ "$STATUS" = "built" ]; then break; fi
  echo "Waiting for build... (status: $STATUS)"
  sleep 5
done

# Test that the site responds
curl -s -o /dev/null -w "%{http_code}" https://csg2001.github.io/
# Expected output: 200
```

### 5. Quick Deploy Script

For a complete deployment in one flow:

```bash
# Commit and push
git add .
git commit -m "feat: your changes"
git push origin main

# Monitor and wait for deployment
echo "Waiting for GitHub Pages build to complete..."
while true; do
  STATUS=$(gh api repos/CSG2001/csg2001.github.io/pages/builds/latest --jq '.status')
  echo "Status: $STATUS"
  [ "$STATUS" = "built" ] && break
  sleep 5
done

# Verify
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://csg2001.github.io/)
if [ "$HTTP_CODE" = "200" ]; then
  echo "✓ Site live at: https://csg2001.github.io/"
else
  echo "✗ Deployment check failed (HTTP $HTTP_CODE)"
  exit 1
fi
```

## Site URL

The deployed site is available at: **https://csg2001.github.io/**

## Troubleshooting

- **Build not starting**: Check GitHub Actions tab for workflow triggers
- **Build failed**: View workflow logs with `gh run view`
- **404 error**: Wait 1-2 minutes for CDN propagation; verify `index.html` exists in `dist/`
- **Old content showing**: CDN cache; hard refresh (`Ctrl+Shift+R`) or wait a few minutes

## Notes

- Auto-deploy is active: every push to `main` triggers a rebuild via GitHub Actions
- The site publishes to the `gh-pages` branch (managed by `peaceiris/actions-gh-pages`)
- Homepage URL is set in repository settings: `https://csg2001.github.io/`
- Vite builds the production bundle to `./dist` before deployment
