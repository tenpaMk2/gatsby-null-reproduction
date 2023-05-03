---
date: 2023-04-21 21:46:00+9
isNSFW: true
tags:
  - English
  - isNSFW
  - Markdown
---

This post has NSFW contents❗
Google's SafeSearch excludes it from search results.

<!-- more -->

When frontmatter is specified as follows,

```yaml
date: 2023-04-21 21:46:00+9
isNSFW: true
tags:
  - English
  - isNSFW
  - Markdown
```

The following tag will be inserted.

```html
<meta name="rating" content="adult" />
```

Reference: [Google: SafeSearch and your website](https://developers.google.com/search/docs/crawling-indexing/safesearch)
