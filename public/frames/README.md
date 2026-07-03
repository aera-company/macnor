# Frames da hero

Coloque aqui a sequência de imagens que a hero percorre durante o scroll.

## Convenção de nomes

```
frame_0001.jpg
frame_0002.jpg
frame_0003.jpg
...
```

- Zero-padding de 4 dígitos (`0001`), numeração começando em **1**.
- Mesma extensão para todos (JPG 80–85% para opaco; PNG só se precisar de alpha).
- Resolução sugerida: 1920×1080 (desktop).

## Ao trocar a sequência

Edite [`src/lib/hero.ts`](../../src/lib/hero.ts):

- `FRAME_COUNT` = quantidade exata de arquivos nesta pasta.
- `framePath` = ajuste o caminho/extensão se necessário.

## De onde vêm os frames

A sensação "3D" é uma sequência **pré-renderizada** (Blender / Cinema 4D /
After Effects) exportada como imagens — não é WebGL em runtime. Mire ~4s de
animação a 24–30fps (≈96–120 frames). Sem frames, a página roda normalmente,
mas o canvas fica em branco até você adicioná-los.
