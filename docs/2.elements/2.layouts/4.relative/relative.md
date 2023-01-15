---
nav: Relative
title: Relative (relative)
---

It is a layout that lets you place the children relative to each other.

```javascript
const relative = canvasUI.layout.new("relative-1", "relative");

relative.insert(area1);
relative.insert(area2);

area1.layoutParams.set("attachTo", {
  top: "parent",
  right: "parent",
  bottom: "parent",
  left: "parent",
});

area2.layoutParams.set("attachTo", {
  top: "parent",
  right: area1,
  left: null,
  bottom: null,
});

area2.layoutParams.get("margin").top = 100;
area2.layoutParams.get("margin").right = 30;
```
