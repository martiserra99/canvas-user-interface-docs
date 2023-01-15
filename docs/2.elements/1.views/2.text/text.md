---
nav: Text
title: Text (text)
---

It is text. You can define its color, its size, its font...

```javascript
const text = canvasUI.view.new("text-1", "text");

text.set("text", "Hello World");
text.set("font", {
  family: "Raleway",
  size: 20,
  weight: 400,
});
```
