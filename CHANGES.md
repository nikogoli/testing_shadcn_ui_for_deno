# オリジナルとの変更点


### Accordion
- **問題**：閉じている item の content が表示されることがある
- **対応**：<Accordion(Primitive).Content /> の class 設定に `data-[state=closed]:hidden` を追記

オリジナルでは、CollapsibleContent において、context.open が各アイテムの開閉状態を記録しており、これをもとに Content-element の data-state の close/open および hidden={true/false} を設定する仕組みになっていると思われる。

しかし、何かしらの理由で、開閉状態は前者には正しく反映されるものの後者にはズレて反映されることがある。そのため、あるアイテムをクリックしたとき、以前に閉じられた別のアイテムにおいて data-state が close なのに hidden が消えて、開いた状態になってしまう。

そこで、class 設定において、 data-state に合わせて display のスタイルを変更させることで対応した。


### Collapsible
- 問題：data-state が close でも item が閉じない
- 対応：<CollapsibleContent /> の class 設定に `data-[state=closed]:hidden` を追記

上記の Accordion における問題と同じもの。