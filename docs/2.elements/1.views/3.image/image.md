---
nav: Image
title: Image (image)
---

It is an image. You can define its size and the image that has to draw.

```javascript
const image = canvasUI.view.new("image-1", "image")

image.set("size", {
  width: 100,
  height: 100,
})

image.set("src", "/img/logo.svg")
```

![image](/canvas-user-interface/docs/elements/views/image.svg)
