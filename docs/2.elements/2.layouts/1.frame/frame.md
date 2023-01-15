---
name: Frame
---

# Frame (frame)

It is a layout that lets you place the children aligned vertically and horizontally in different ways.

```javascript
const frame = canvasUI.layout.new("frame-1", "frame");

frame.insert(area1);
frame.insert(area2);

area1.layoutParams.set("align", {
  horizontal: "middle",
  vertical: "middle",
});

area2.layoutParams.set("align", {
  horizontal: "right",
  vertical: "top",
});
```
