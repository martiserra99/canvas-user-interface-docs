---
name: Linear
---

# Linear (linear)

It is a layout that lets you place the children linearly one next to the other one horizontally and vertically.

```javascript
const linear = canvasUI.layout.new("linear-1", "linear");
linear.set("direction", "horizontal");
linear.set("gap", 50);

linear.insert(area1);
linear.insert(area2);

area1.layoutParams.set("position", 2);
area2.layoutParams.set("position", 1);
```
