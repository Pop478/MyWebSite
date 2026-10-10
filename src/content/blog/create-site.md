---
title: 'Create my web cite with astro'
description: 'How a small amount of structure helps a website remain easy to extend.'
pubDate: 2026-10-10
tags:
    - astro
    - web-development
---

# Static sites that stay simple

A static site does not need a complicated architecture to be useful. The key is
to keep pages, layouts, components, and content in clearly defined places.

## Separate content from presentation

Article text belongs in Markdown files. Layouts define the document shell, and
pages choose which content to display. This separation lets you update the
design without rewriting every article.

## Build before publishing

Astro builds the site ahead of time. A successful build checks the content
schema, generates the article routes, and produces the files ready for hosting.
