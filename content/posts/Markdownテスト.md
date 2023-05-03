---
date: 2023-04-22 17:13:00+9
tags:
  - 日本語
  - プログラミング
  - Markdown
---

Markdownテスト記事。

<!-- more -->

## 見出し

```markdown
## 見出しh2
```

↓

## 見出しh2

```markdown
### 見出しh3
```

↓

### 見出しh3

```markdown
#### 見出しh4
```

↓

#### 見出しh4

```markdown
##### 見出しh5
```

↓

##### 見出しh5

```markdown
###### 見出しh6
```

↓

###### 見出しh6

## 順序なしリスト

```markdown
- 順序なしリスト1
- 順序なしリスト2
  - ネスト
    - ネスト
- 順序なしリスト3
```

↓

- 順序なしリスト1
- 順序なしリスト2
  - ネスト
    - ネスト
- 順序なしリスト3

## 番号つきリスト

```markdown
1. 番号つきリスト
2. 番号つきリスト
   1. ネスト
      1. ネスト
3. 番号つきリスト
```

↓

1. 番号つきリスト
2. 番号つきリスト
   1. ネスト
      1. ネスト
3. 番号つきリスト

## 複合リスト

```markdown
1. 番号つきリスト
   - 順序なしリスト
   - 順序なしリスト
2. 番号つきリスト
   1. 番号つきリスト
   2. 番号つきリスト
3. 番号つきリスト
   - 順序なしリスト
     1. 番号つきリスト
   - 順序なしリスト
4. グイード・ミスタ
   - 超長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長いテキスト
   - マジでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングなテキスト
   - 複数行
     にまたがる
     テキスト
```

↓

1. 番号つきリスト
   - 順序なしリスト
   - 順序なしリスト
2. 番号つきリスト
   1. 番号つきリスト
   2. 番号つきリスト
3. 番号つきリスト
   - 順序なしリスト
     1. 番号つきリスト
   - 順序なしリスト
4. グイード・ミスタ
   - 超長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長いテキスト
   - マジでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングでロングなテキスト
   - 複数行
     にまたがる
     テキスト

## 強調

```markdown
_イタリック_ 。

**強調** 。

**_超サイヤ人_** 。
```

↓

_イタリック_ 。

**強調** 。

**_超サイヤ人_** 。

## リンク

```markdown
[Googleリンク](https://www.google.com/)

[日本語リンク](https://ja.wikipedia.org/wiki/日本語)
```

↓

[Googleリンク](https://www.google.com/)

[日本語リンク](https://ja.wikipedia.org/wiki/日本語)

## テーブル

```markdown
| 左揃え | 中央揃え | 右揃え |
| :----- | :------: | -----: |
| 左     |   中央   |     右 |
| 左     |   中央   |     右 |
| 左     |   中央   |     右 |
```

↓

| 左揃え | 中央揃え | 右揃え |
| :----- | :------: | -----: |
| 左     |   中央   |     右 |
| 左     |   中央   |     右 |
| 左     |   中央   |     右 |

```markdown
| 列1 | 列2  | 列3 | 列4 | 列5 | 列6 | 列7 | 列8 | 列9 | 列10 | 列11 | 列12 | 列13 |列14 |列15 |列16 |列17 |列18 |列19 |列20 |列21 |列22 |列23 |
| :-- | :--: | --: | :-- | :-- | :-- | :-- | :-- | :-- | :--- | :--- | :--- | :--- |:--- |:--- |:--- |:--- |:--- |:--- |:--- |:--- |:--- |:--- |
| 左  | 中央 |  右 | 左  | 左  | 左  | 左  | 左  | 左  | 左   | 左   | 左   | 左   |左   |左   |左   |左   |左   |左   |左   |左   |左   |左   |
| 左  | 中央 |  右 | 左  | 左  | 左  | 左  | 左  | 左  | 左   | 左   | 左   | 左   |左   |左   |左   |左   |左   |左   |左   |左   |左   |左   |
| 左  | 中央 |  右 | 左  | 左  | 左  | 左  | 左  | 左  | 左   | 左   | 左   | 左   |左   |左   |左   |左   |左   |左   |左   |左   |左   |左   |
```

↓

| 列1 | 列2  | 列3 | 列4 | 列5 | 列6 | 列7 | 列8 | 列9 | 列10 | 列11 | 列12 | 列13 |列14 |列15 |列16 |列17 |列18 |列19 |列20 |列21 |列22 |列23 |
| :-- | :--: | --: | :-- | :-- | :-- | :-- | :-- | :-- | :--- | :--- | :--- | :--- |:--- |:--- |:--- |:--- |:--- |:--- |:--- |:--- |:--- |:--- |
| 左  | 中央 |  右 | 左  | 左  | 左  | 左  | 左  | 左  | 左   | 左   | 左   | 左   |左   |左   |左   |左   |左   |左   |左   |左   |左   |左   |
| 左  | 中央 |  右 | 左  | 左  | 左  | 左  | 左  | 左  | 左   | 左   | 左   | 左   |左   |左   |左   |左   |左   |左   |左   |左   |左   |左   |
| 左  | 中央 |  右 | 左  | 左  | 左  | 左  | 左  | 左  | 左   | 左   | 左   | 左   |左   |左   |左   |左   |左   |左   |左   |左   |左   |左   |

## コードブロック

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

## インラインコード

```markdown
インライン `日本語インラインコード` インライン。
```

↓

インライン `日本語インラインコード` インライン。

## テキスト改行

```markdown
日本語
改行(スペースが入るかな?)。
```

↓

日本語
改行(スペースが入るかな?)。

## 引用ブロック

````markdown
> ## 見出しその1
>
> ルイズ！ルイズ！ルイズ！ルイズぅぅうううわぁああああああああああああああああああああああん！！！
> あぁああああ…ああ…あっあっー！あぁああああああ！！！ルイズルイズルイズぅううぁわぁああああ！！！
> あぁクンカクンカ！クンカクンカ！スーハースーハー！スーハースーハー！いい匂いだなぁ…くんくん
>
> んはぁっ！ルイズ・フランソワーズたんの桃色ブロンドの髪をクンカクンカしたいお！クンカクンカ！あぁあ！！
> 間違えた！モフモフしたいお！モフモフ！モフモフ！髪髪モフモフ！カリカリモフモフ…きゅんきゅんきゅい！！
>
> - A: `inline code` 。
> - B: `日本語インライン` 。
>
> ```js
> const foo = `bar`;
> console.table({foo});
> ```
>
> ## 見出しその2
>
> アイエエエエ! ニンジャ!? ニンジャナンデ!?
>
> > 「ブレードランナー」のような2030年以降の近未来サイバーパンク大都市を舞台に、「ニンジャを殺す者」である主人公ニンジャスレイヤーと、超能力を有しカラテを駆使する半神的存在、「ニンジャ」が率いる強大な悪の組織との戦いを描くアクション小説である。2020年現在、第4部の連載が行われている。
>
> [ウィキペディア |  ニンジャスレイヤー](https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%B3%E3%82%B8%E3%83%A3%E3%82%B9%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC#%E6%A6%82%E8%A6%81)
````

↓

> ## 見出しその1
>
> ルイズ！ルイズ！ルイズ！ルイズぅぅうううわぁああああああああああああああああああああああん！！！
> あぁああああ…ああ…あっあっー！あぁああああああ！！！ルイズルイズルイズぅううぁわぁああああ！！！
> あぁクンカクンカ！クンカクンカ！スーハースーハー！スーハースーハー！いい匂いだなぁ…くんくん
>
> んはぁっ！ルイズ・フランソワーズたんの桃色ブロンドの髪をクンカクンカしたいお！クンカクンカ！あぁあ！！
> 間違えた！モフモフしたいお！モフモフ！モフモフ！髪髪モフモフ！カリカリモフモフ…きゅんきゅんきゅい！！
>
> - A: `inline code` 。
> - B: `日本語インライン` 。
>
> ```js
> const foo = `bar`;
> console.table({foo});
> ```
>
> ## 見出しその2
>
> アイエエエエ! ニンジャ!? ニンジャナンデ!?
>
> > 「ブレードランナー」のような2030年以降の近未来サイバーパンク大都市を舞台に、「ニンジャを殺す者」である主人公ニンジャスレイヤーと、超能力を有しカラテを駆使する半神的存在、「ニンジャ」が率いる強大な悪の組織との戦いを描くアクション小説である。2020年現在、第4部の連載が行われている。
>
> [ウィキペディア |  ニンジャスレイヤー](https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%B3%E3%82%B8%E3%83%A3%E3%82%B9%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC#%E6%A6%82%E8%A6%81)

多段引用ブロックテスト。

```markdown
> レベル1。
> > レベル2。
> > > レベル3。
> > > > レベル4。
> > > > > レベル5。
> > > > > レベル5。
> > > > レベル4。
> > > レベル3。
> > レベル2。
> レベル1。
```

↓

> レベル1。
> > レベル2。
> > > レベル3。
> > > > レベル4。
> > > > > レベル5。
> > > > > レベル5。
> > > > レベル4。
> > > レベル3。
> > レベル2。
> レベル1。

## 水平線

```markdown
サンド

---

ウィッチ
```

↓

サンド

---

ウィッチ

## HTML

```markdown
<p>光れ❗<mark>牛乳</mark>❗</p>
```

<p>光れ❗<mark>牛乳</mark>❗</p>
