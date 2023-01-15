---
nav: Text Area
---

# Text Area (textArea)

It is an area in which there is a text inside. You can define the background color, the text, the size of the area...

```javascript
const textArea = canvasUI.composite.new("textArea-1", "textArea");

textArea.set("text", "Hello World");
textArea.set("size", {
  width: { unit: "px", value: 200 },
  height: { unit: "px", value: 100 },
});
textArea.set("font", {
  family: "Inter",
  size: 24,
  weight: 700,
});
textArea.set("background", "#edede9");
textArea.set("border", { size: 5, color: "#023047" });
textArea.set("corner", { type: "round", size: 20 });
```
