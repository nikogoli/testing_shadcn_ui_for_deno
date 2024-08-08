# Testing shadcn-ui for Deno

Radix UI と Tailwind CSS を用いたコンポーネントライブラリ shadcn/ui を Deno で使うテスト

[testing-shadcn-ui-in-fresh]() を 3rd-party module として利用できるかどうかを確認するためのテスト用レポジトリ


## 使用方法
```
import { Textarea } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.2/components/textarea.tsx"

export default function App(){
  return (
    <Textarea placeholder="Type your message here." class='!w-100' />
  )
}
```

## 利用可能なコンポーネント (v0.0.2)
- Badge
- TextArea