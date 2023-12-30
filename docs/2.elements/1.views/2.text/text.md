---
nav: Text
title: Text (text)
---

It is text. You can define its color, its size, its font...

```javascript
const text = canvasUI.view.new("text-1", "text")

text.set("text", "Hello World!")

text.set("font", {
  family: "Poppins",
  size: 24,
  weight: 700,
})

text.set("color", "#14213d")
```

![text](/canvas-user-interface/docs/elements/views/text.svg)
