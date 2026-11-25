# Blog publishing

Blog articles are local Markdown or MDX files in `src/content/blog/`. The collection excludes entries with `draft: true` from listings, article routes, and production output.

## Frontmatter

```yaml
title: "Article title"
slug: "article-slug"
language: "sl" # or "en"
description: "Short editorial description."
seoTitle: "Optional SEO title"
seoDescription: "Optional SEO description"
primaryKeyword: "primary keyword"
secondaryKeywords: ["keyword two"]
publicationDate: 2026-01-15
updatedDate: 2026-01-20
author: "Approved author name"
featuredImage: "/images/article.webp"
imageAlt: "Descriptive image alternative text"
category: "SEO"
draft: true
translationId: "shared-article-id"
faq:
  - question: "Question?"
    answer: "Answer."
```

Use the same `translationId` for Slovenian and English translations. Keep each file fully localized. Do not publish an article until its author, dates, images, links and claims have been approved.

## Publish workflow

1. Add the `.md` or `.mdx` file to `src/content/blog/`.
2. Set `draft: false` only when the article is approved.
3. Run `npm run check` and `npm run build`.
4. Check the localized URL, metadata, structured data, links and responsive presentation locally.
5. Deploy through the approved Cloudflare workflow described in `DEPLOYMENT.md`.

No external CMS is required.
