"""Generate redirect pages from the old ChangeReview-docs URLs to the
eclipse-ai-tools documentation site.

Run from the repository root:  python3 tools/make_redirects.py
Output goes to redirects/, which the Pages workflow publishes as is.
"""
import html
import os
import shutil

NEW_SITE = "https://genuitec.github.io/eclipse-ai-tools"

# Old path (relative to /ChangeReview-docs/) -> new path (relative to NEW_SITE).
# The old paths come from the old site's sitemap.xml.
REDIRECTS = {
    "": "/",
    "overview": "/",
    "docs/overview": "/",
    "docs/install/installation": "/changereview/installation/",
    "docs/basics/editor-review": "/inline-diff/live-review/",
    "docs/basics/inline-compare": "/inline-diff/inline-compare/",
    "docs/basics/time-machine": "/inline-diff/time-machine/",
    "docs/getting-help": "/inline-diff/getting-help/",
    "docs/getting-help/getting-help": "/inline-diff/getting-help/",
    "docs/resources/changelog": "/changereview/changelog/",
    "docs/resources/eula": "/changereview/eula/",
    "markdown-page": "/",
    "blog": "/",
}

TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Moved to Eclipse AI Tools documentation</title>
<link rel="canonical" href="{url}">
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url={url}">
<script>
  // Keep any #anchor or ?query from the old link.
  location.replace({url_js} + location.search + location.hash);
</script>
</head>
<body>
<p>The ChangeReview documentation has moved to
<a href="{url}">{url}</a>.</p>
</body>
</html>
"""


def page(target):
    url = NEW_SITE + target
    return TEMPLATE.format(url=html.escape(url, quote=True),
                           url_js='"' + url.replace('"', '%22') + '"')


def main():
    out = "redirects"
    shutil.rmtree(out, ignore_errors=True)
    os.makedirs(out)
    for old, new in REDIRECTS.items():
        folder = os.path.join(out, old)
        os.makedirs(folder, exist_ok=True)
        with open(os.path.join(folder, "index.html"), "w") as f:
            f.write(page(new))
    # Anything else (old blog posts, unknown pages) lands on the new home page.
    with open(os.path.join(out, "404.html"), "w") as f:
        f.write(page("/"))
    open(os.path.join(out, ".nojekyll"), "w").close()


if __name__ == "__main__":
    main()
