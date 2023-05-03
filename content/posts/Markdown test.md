---
date: 2023-04-22 17:12:00+9
tags:
  - English
  - Programming
  - Markdown
---

Markdown test post.

<!-- more -->

## Heading

```markdown
## Heading h2
```

↓

## Heading h2

```markdown
### Heading h3
```

↓

### Heading h3

```markdown
#### Heading h4
```

↓

#### Heading h4

```markdown
##### Heading h5
```

↓

##### Heading h5

```markdown
###### Heading h6
```

↓

###### Heading h6

## Bullet lists

```markdown
- hyphen-list1
- hyphen-list2
  - nested
    - nested
- hyphen-list3
```

↓

- hyphen-list1
- hyphen-list2
  - nested
    - nested
- hyphen-list3

## Number lists

```markdown
1. number list
2. number list
   1. nested
      1. nested
3. number list
```

↓

1. number list
2. number list
   1. nested
      1. nested
3. number list

## Mix lists

```markdown
1. number list
   - bullet list
   - bullet -list
2. number list
   1. number list
   2. number list
3. number list
   - bullet
     1. number
   - bullet
4. Guido Mista
   - very long long long long long long long long long long long long long long long long long long long long long long long long long long long long text.
   - not very short short short short short short short short short short short short short short short short short short short short short short short short text.
   - multi
     line
     list.
```

↓

1. number list
   - bullet list
   - bullet -list
2. number list
   1. number list
   2. number list
3. number list
   - bullet
     1. number
   - bullet
4. Guido Mista
   - very long long long long long long long long long long long long long long long long long long long long long long long long long long long long text.
   - not very short short short short short short short short short short short short short short short short short short short short short short short short text.
   - multi
     line
     list.

## Emphasis

```markdown
_em_ .

**strong** .

**_Super Saiyan_** .
```

↓

_em_ .

**strong** .

**_Super Saiyan_** .

## Link

```markdown
[Google link](https://www.google.com/)

[日本語リンク](https://ja.wikipedia.org/wiki/日本語)
```

↓

[Google link](https://www.google.com/)

[日本語リンク](https://ja.wikipedia.org/wiki/日本語)

## Table

```markdown
| left align | center align | right align |
| :--------- | :----------: | ----------: |
| left       |    center    |       right |
| left       |    center    |       right |
| left       |    center    |       right |
```

↓

| left align | center align | right align |
| :--------- | :----------: | ----------: |
| left       |    center    |       right |
| left       |    center    |       right |
| left       |    center    |       right |

```markdown
| Column1 | Column2 | Column3 | Column4 | Column5 | Column6 | Column7 | Column8 | Column9 | Column10 | Column11 | Column12 | Column13 |
| :------ | :-----: | ------: | :------ | :------ | :------ | :------ | :------ | :------ | :------- | :------- | :------- | :------- |
| left    | center  |   right | left    | left    | left    | left    | left    | left    | left     | left     | left     | left     |
| left    | center  |   right | left    | left    | left    | left    | left    | left    | left     | left     | left     | left     |
| left    | center  |   right | left    | left    | left    | left    | left    | left    | left     | left     | left     | left     |
```

↓

| Column1 | Column2 | Column3 | Column4 | Column5 | Column6 | Column7 | Column8 | Column9 | Column10 | Column11 | Column12 | Column13 |
| :------ | :-----: | ------: | :------ | :------ | :------ | :------ | :------ | :------ | :------- | :------- | :------- | :------- |
| left    | center  |   right | left    | left    | left    | left    | left    | left    | left     | left     | left     | left     |
| left    | center  |   right | left    | left    | left    | left    | left    | left    | left     | left     | left     | left     |
| left    | center  |   right | left    | left    | left    | left    | left    | left    | left     | left     | left     | left     |

## Code Block

````markdown
```js
const longlong = `very long long long long long long long long long long long long long long long long long long long long long long long long long text.`;
```
````

↓

```js
const longlong = `very long long long long long long long long long long long long long long long long long long long long long long long long long text.`;
```

````markdown
```ts
import { Actor, Canvas, CollisionType, Engine, Vector } from "excalibur";

console.log("日本語やで");

export class PowerGauge extends Actor {
  getProgressCallback: (() => number) | null = null;

  constructor() {
    super({
      pos: Vector.Zero,
      collisionType: CollisionType.PreventCollision,
    });
    this.z = 1;
  }

  onPreUpdate(_engine: Engine, _delta: number): void {
    const canvas = new Canvas({
      cache: false,
      height: 32,
      width: 32,
      draw: (ctx: CanvasRenderingContext2D) => {
        if (!this.getProgressCallback)
          throw Error("Have not registered getProgress callback!!");

        ctx.strokeStyle = "chartreuse";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(16, 16, 15, 0, Math.PI * 2 * this.getProgressCallback(), false);
        ctx.stroke();
      },
    });
    this.graphics.use(canvas);
  }

  registerGetProgressCallback(callback: () => number) {
    this.getProgressCallback = callback;
  }
}
```
````

↓

```ts
import { Actor, Canvas, CollisionType, Engine, Vector } from "excalibur";

console.log("日本語やで");

export class PowerGauge extends Actor {
  getProgressCallback: (() => number) | null = null;

  constructor() {
    super({
      pos: Vector.Zero,
      collisionType: CollisionType.PreventCollision,
    });
    this.z = 1;
  }

  onPreUpdate(_engine: Engine, _delta: number): void {
    const canvas = new Canvas({
      cache: false,
      height: 32,
      width: 32,
      draw: (ctx: CanvasRenderingContext2D) => {
        if (!this.getProgressCallback)
          throw Error("Have not registered getProgress callback!!");

        ctx.strokeStyle = "chartreuse";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(16, 16, 15, 0, Math.PI * 2 * this.getProgressCallback(), false);
        ctx.stroke();
      },
    });
    this.graphics.use(canvas);
  }

  registerGetProgressCallback(callback: () => number) {
    this.getProgressCallback = callback;
  }
}
```

````markdown
```markdown
| left align |  中央  | right align |
| :--------- | :----: | ----------: |
| 012345     | center |       right |
| 一二三     | center |          右 |
```
````

↓

```markdown
| left align |  中央  | right align |
| :--------- | :----: | ----------: |
| 012345     | center |       right |
| 一二三     | center |          右 |
```

## Inline code

```markdown
Inline `inline code` inline.
```

Inline `inline code` inline.

## Break line

```markdown
English
breakline.
```

↓

English
breakline.

## Quote block

````markdown
> ## Heading 1
>
> Louise! Louise! Louiseaaaaaaaaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhh!!!
> yarghh...uh...aaahah-! AaAAAAA!!! LOUISELOUISELOUISEaaaaAAAAaaa!!!
> Ae...sniffsniff! sniffsniff! sssssaaahsssssaaah.. smells good.... sniff
>
> gasp! I can haz sniffsniff pink blonde hair de Louise Francoise?! sniffsniff! Aah!
> No! I want fluffing! fluff! fluff! Hair hair fluff fluff! Scratch scratch fluff fluff... Kyunkyunnkyui!!
>
> - A: `inline code` .
> - B: `日本語インライン` .
>
> ```js
> const foo = `bar`.
> console.table({foo});
> ```
>
> ## Heading 2
>
> "Aieee! A ninja! Why is there a ninja here!?"
>
> > The story takes place in the cyberpunk metropolis of Neo-Saitama. After his wife and child are killed in a ninja turf war, salaryman Kenji Fujikido gets possessed by a mysterious ninja soul known as Naraku Ninja. As Naraku's craving for massacring the evil ninja overlaps with Fujikido's lust for revenge, together they bring Ninja Slayer – a terrifying ninja-killing grim reaper - into existence. The more their mental resonance and physical symbiosis deepens, the more powerful Ninja Slayer becomes. If Fujikido completely surrenders himself to Naraku, he will be unstoppable, at the cost of Naraku being able to massacre freely without restraint.
>
> [Wikipedia | Ninja Slayer](https://en.wikipedia.org/wiki/Ninja_Slayer#Plot)
````

↓

> ## Heading 1
>
> Louise! Louise! Louiseaaaaaaaaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhh!!!
> yarghh...uh...aaahah-! AaAAAAA!!! LOUISELOUISELOUISEaaaaAAAAaaa!!!
> Ae...sniffsniff! sniffsniff! sssssaaahsssssaaah.. smells good.... sniff
>
> gasp! I can haz sniffsniff pink blonde hair de Louise Francoise?! sniffsniff! Aah!
> No! I want fluffing! fluff! fluff! Hair hair fluff fluff! Scratch scratch fluff fluff... Kyunkyunnkyui!!
>
> - A: `inline code` .
> - B: `日本語インライン` .
>
> ```js
> const foo = `bar`.
> console.table({foo});
> ```
>
> ## Heading 2
>
> "Aieee! A ninja! Why is there a ninja here!?"
>
> > The story takes place in the cyberpunk metropolis of Neo-Saitama. After his wife and child are killed in a ninja turf war, salaryman Kenji Fujikido gets possessed by a mysterious ninja soul known as Naraku Ninja. As Naraku's craving for massacring the evil ninja overlaps with Fujikido's lust for revenge, together they bring Ninja Slayer – a terrifying ninja-killing grim reaper - into existence. The more their mental resonance and physical symbiosis deepens, the more powerful Ninja Slayer becomes. If Fujikido completely surrenders himself to Naraku, he will be unstoppable, at the cost of Naraku being able to massacre freely without restraint.
>
> [Wikipedia | Ninja Slayer](https://en.wikipedia.org/wiki/Ninja_Slayer#Plot)

Multi level block quote test.

```markdown
> Level 1.
> > Level 2.
> > > Level 3.
> > > > Level 4.
> > > > > Level 5.
> > > > > Level 5.
> > > > Level 4.
> > > Level 3.
> > Level 2.
> Level 1.
```

↓

> Level 1.
> > Level 2.
> > > Level 3.
> > > > Level 4.
> > > > > Level 5.
> > > > > Level 5.
> > > > Level 4.
> > > Level 3.
> > Level 2.
> Level 1.

## Horizontal Rules

```markdown
Sand

---

Wich
```

↓

Sand

---

Wich

## HTML

```markdown
<p>Do not forget to buy <mark>milk</mark> today.</p>
```

<p>Do not forget to buy <mark>milk</mark> today.</p>
