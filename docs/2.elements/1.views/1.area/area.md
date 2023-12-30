---
nav: Area
title: Area (area)
---

It is a rectangular area. You can define its size, its corners...

```javascript
const area = canvasUI.view.new("area-1", "area")

area.set("size", {
  width: { unit: "px", value: 150 },
  height: { unit: "px", value: 100 },
})

area.set("background", "#f94144")
area.set("border", { size: 10, color: "#e03b3d" })
area.set("corner", { type: "round", size: 10 })
```

![area](/elements/views/area.svg)
