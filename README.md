# Testing shadcn-ui for Deno

Radix UI と Tailwind CSS を用いたコンポーネントライブラリ shadcn/ui を Deno で使うテスト

[testing-shadcn-ui-in-fresh](https://github.com/nikogoli/testing-shadcn-ui-in-fresh) を 3rd-party module として利用できるかどうかを確認するためのテスト用レポジトリ

<br>

[Demo のページ](https://testing-shadcn-ui-in-fresh.deno.dev/)
※ 読み込み完了までにかなり時間がかかるので注意

<br>

## 使用方法
```
import { Textarea } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.8/components/textarea.tsx"

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

## 利用可能なコンポーネント (v0.0.7)
- 🆗：Accordion (**...but its open/close animations do not work well**)
- 🆗：Alert
- 🆗：AlertDialog
- 🆗：AspectRatio
- 🆗：Avatar
- 🆗：Badge
- 🆗：Button
- 🆗：Card
- 🆗：Checkbox
- 🆗：Collapsible
- 🆗：ComboBox
- 🆗：Command
- 🆗：ContextMenu
- 🆗：DataTable
- 🆗：Dialog
- 🆗：DropdownMenu
- 🆗：HoverCard
- 🆗：Input
- 🆗：Label
- 🆗：MenuBar
- 🆗：NavigationMenu
- 🆗：Popover
- 🆗：RadioGroup
- 🆗：Select
- 🆗：Sheet
- 🆗：Skeleton
- 🆗：Slider
- 🆗：Switch
- 🆗：Tabs
- 🆗：Table
- 🆗：TextArea
- 🆗：Toast (**...if you do not close a popup manually**)
- 🆗：Toggle
- 🆗：Toolip

