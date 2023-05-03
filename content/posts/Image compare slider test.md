---
date: 2023-04-09 16:53:00+9
heroImage: "./images/compare-left.jpg"
heroImageAlt: "Miyu, Illya and Chloe"
tags:
  - English
  - Programming
  - Gatsby
  - Markdown
  - react-compare-slider
---

Image compare slider test post.

<!-- more -->

This is achieved by
[react-compare-slider](https://github.com/nerdyman/react-compare-slider)
.

## Patterns for conversion

```md
![Focus on Miyu](./images/compare-left.jpg "left")
![Focus on Chloe](./images/compare-right.jpg "right")
```

![Focus on Miyu](./images/compare-left.jpg "left")
![Focus on Chloe](./images/compare-right.jpg "right")

```md
![Focus on Chloe](./images/compare-right.jpg "right")
![Focus on Miyu](./images/compare-left.jpg "left")
```

![Focus on Chloe](./images/compare-right.jpg "right")
![Focus on Miyu](./images/compare-left.jpg "left")

```md
ABC.
ABC.
![Focus on Miyu](./images/compare-left.jpg "left")
![Focus on Chloe](./images/compare-right.jpg "right")
```

ABC.
ABC.
![Focus on Miyu](./images/compare-left.jpg "left")
![Focus on Chloe](./images/compare-right.jpg "right")

```md
![Focus on Miyu](./images/compare-left.jpg "left")
DEF.
DEF.
![Focus on Chloe](./images/compare-right.jpg "right")
```

![Focus on Miyu](./images/compare-left.jpg "left")
DEF.
DEF.
![Focus on Chloe](./images/compare-right.jpg "right")

```md
![Focus on Miyu](./images/compare-left.jpg "left")
![Focus on Chloe](./images/compare-right.jpg "right")
GHI.
GHI.
```

![Focus on Miyu](./images/compare-left.jpg "left")
![Focus on Chloe](./images/compare-right.jpg "right")
GHI.
GHI.

```md
ABC.
ABC.
![Focus on Miyu](./images/compare-left.jpg "left")
DEF.
DEF.
![Focus on Chloe](./images/compare-right.jpg "right")
GHI.
GHI.
```

ABC.
ABC.
![Focus on Miyu](./images/compare-left.jpg "left")
DEF.
DEF.
![Focus on Chloe](./images/compare-right.jpg "right")
GHI.
GHI.

```md
ABC.
`code`
ABC.
![Focus on Miyu](./images/compare-left.jpg "left")
DEF.
`code`
DEF.
![Focus on Chloe](./images/compare-right.jpg "right")
GHI.
`code`
GHI.
```

ABC.
`code`
ABC.
![Focus on Miyu](./images/compare-left.jpg "left")
DEF.
`code`
DEF.
![Focus on Chloe](./images/compare-right.jpg "right")
GHI.
`code`
GHI.

```md
![Focus on Miyu](./images/compare-left.jpg "left: ABC")
![Focus on Chloe](./images/compare-right.jpg "right: DEF")
```

![Focus on Miyu](./images/compare-left.jpg "left: ABC")
![Focus on Chloe](./images/compare-right.jpg "right: DEF")

```md
![Focus on Miyu](./images/compare-left.jpg "left")
![Focus on Miyu](./images/compare-left.jpg "left")
![Focus on Chloe](./images/compare-right.jpg "right")
```

![Focus on Miyu](./images/compare-left.jpg "left")
![Focus on Miyu](./images/compare-left.jpg "left")
![Focus on Chloe](./images/compare-right.jpg "right")

```md
![Focus on Miyu](./images/compare-left.jpg "left")
![Focus on Chloe](./images/compare-right.jpg "right")
![Focus on Miyu](./images/compare-left.jpg "left")
```

![Focus on Miyu](./images/compare-left.jpg "left")
![Focus on Chloe](./images/compare-right.jpg "right")
![Focus on Miyu](./images/compare-left.jpg "left")

## Patterns for non-conversion

```md
![Focus on Miyu](./images/compare-left.jpg)
![Focus on Chloe](./images/compare-right.jpg)
```

![Focus on Miyu](./images/compare-left.jpg)
![Focus on Chloe](./images/compare-right.jpg)

```md
- ![Focus on Miyu](./images/compare-left.jpg "left")
- ![Focus on Chloe](./images/compare-right.jpg "right")
```

- ![Focus on Miyu](./images/compare-left.jpg "left")
- ![Focus on Chloe](./images/compare-right.jpg "right")

```md
![Focus on Miyu](./images/compare-left.jpg "left")
![Focus on Chloe](./images/compare-right.jpg "left")
```

![Focus on Miyu](./images/compare-left.jpg "left")
![Focus on Chloe](./images/compare-right.jpg "left")

```md
![Focus on Miyu](./images/compare-left.jpg "right")
![Focus on Chloe](./images/compare-right.jpg "right")
```

![Focus on Miyu](./images/compare-left.jpg "right")
![Focus on Chloe](./images/compare-right.jpg "right")

```md
![Focus on Miyu](./images/compare-left.jpg "left")
![Focus on Chloe](./images/compare-right.jpg "left")
```

![Focus on Miyu](./images/compare-left.jpg "left")
![Focus on Chloe](./images/compare-right.jpg "left")

## Portrait check

```md
ABC.
ABC.
![sample1](./images/P6050098.jpg "left")
DEF.
DEF.
![sample2](./images/sample-portrait.jpg "right")
GHI.
GHI.
```

ABC.
ABC.
![sample1](./images/P6050098.jpg "left")
DEF.
DEF.
![sample2](./images/sample-portrait.jpg "right")
GHI.
GHI.
