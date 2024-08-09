# Testing shadcn-ui for Deno

Radix UI と Tailwind CSS を用いたコンポーネントライブラリ shadcn/ui を Deno で使うテスト

[testing-shadcn-ui-in-fresh](https://github.com/nikogoli/testing-shadcn-ui-in-fresh) を 3rd-party module として利用できるかどうかを確認するためのテスト用レポジトリ

<br>

## 使用方法
```
import { Textarea } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.2/components/textarea.tsx"

export default function App(){
  return (
    <div>
      <Textarea placeholder="Type your message here." class='!w-100' />
      {/* Use these css files in the "css" directory of the repo.*/}
      <link href={asset("/uno.css")} rel="stylesheet" />
      <link href={asset("/shadcn.css")} rel="stylesheet" />
    </div>
  )
}
```
コメントにあるように、css ディレクトリの中にある2つの css を使うことが前提になっている。

<br>

## 利用可能なコンポーネント (v0.0.4)
- Accordion
- Alert
- Badge
- Button
- Input
- Skeleton
- Table
- TextArea

<br>

## オリジナルとの変更点
react と preact の違いによって、オリジナルのままではうまく機能しない場合があり、その対応のために変更を加えた部分がある。詳細は CHANGES.md を参照。
