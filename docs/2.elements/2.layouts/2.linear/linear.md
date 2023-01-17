---
nav: Linear
title: Linear (linear)
---

It is a layout that lets you place the children linearly, one next to the other one horizontally and vertically.

```javascript
const linear = canvasUI.layout.new("linear-1", "linear")

linear.set("direction", "horizontal")
linear.set("alignContent", "middle")
linear.set("gap", 30)

linear.insert(area1)
linear.insert(area2)
```

![linear](/docs/elements/layouts/linear.svg)
