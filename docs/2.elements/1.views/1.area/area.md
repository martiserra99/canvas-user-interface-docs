---
name: Area
---

# Area (area)

It is a rectangular area. You can define its size, its corners...

```javascript
const area = canvasUI.view.new("area-1", "area");

area.set("size", {
  width: { unit: "px", value: 200 },
  height: { unit: "px", value: 100 },
});
area.set("background", "#f4a261");
area.set("border", { size: 5, color: "#e76f51" });
area.set("corner", { type: "round", size: 10 });
```
