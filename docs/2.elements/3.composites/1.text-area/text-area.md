---
nav: Text Area
title: Text Area (textArea)
---

It is an area in which there is a text inside. You can define the background color, the text, the size of the area...

```javascript
const textArea = canvasUI.composite.new("textArea-1", "textArea")

textArea.set("size", {
  width: { unit: "px", value: 250 },
  height: { unit: "px", value: 100 },
})

textArea.set("text", "Hello World!")
textArea.set("font", {
  family: "Poppins",
  size: 20,
  weight: 700,
})
textArea.set("color", "#FFF")

textArea.set("background", "#f94144")
textArea.set("border", { size: 10, color: "#e03b3d" })
textArea.set("corner", { type: "round", size: 10 })
```

![textArea](/canvas-user-interface/docs/elements/composites/text-area.svg)
