# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

**Note**: feel free to use the package manager of your choice.

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

GitHub Actions builds and deploys this site on pushes to main. You can also
run **Deploy documentation to GitHub Pages** manually from the repository's
**Actions** tab.

In repository **Settings > Pages**, set **Source** to **GitHub Actions**.

The workflow uses GitHub Pages' configured origin and base path. For this
repository, the default address is https://genuitec.github.io/ChangeReview-docs/.

Local builds retain the Genuitec production defaults:
https://genuitec.com/products/changereview/. Override TARGET_URL and
TARGET_BASE_URL to build for another host.
