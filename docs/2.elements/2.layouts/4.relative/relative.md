---
nav: Relative
title: Relative (relative)
---

It is a layout that lets you place the children relative to each other.

```javascript
const relative = canvasUI.layout.new("relative-1", "relative")

relative.insert(area1)
relative.insert(area2)

area1.layoutParams.set("attachTo", {
  top: "parent",
  right: null,
  bottom: "parent",
  left: "parent",
})

area1.layoutParams.get("margin").left = 50

area2.layoutParams.set("attachTo", {
  top: "parent",
  bottom: "parent",
  left: { side: "right", child: "area-1" },
  right: "parent",
})

area2.layoutParams.get("bias").horizontal = 50
```

![relative](/docs/elements/layouts/relative.svg)
