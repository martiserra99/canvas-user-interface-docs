---
name: Grid
---

# Grid (grid)

It is a layout that lets you create a grid with rows and columns and place its children in its cells.

```javascript
const grid = canvasUI.layout.new("grid-1", "grid");
grid.set("dimensions", {
  columns: [{ count: 2, unit: "px", value: 100 }],
  rows: [{ count: 2, unit: "px", value: 100 }],
});
grid.set("gap", {
  size: { horizontal: 50, vertical: 50 },
  color: "rgba(0,0,0,0)",
});

grid.insert(area1);
grid.insert(area2);
grid.insert(area3);

area1.layoutParams.set("position", { row: 0, column: 0 });
area2.layoutParams.set("position", { row: 0, column: 1 });
area3.layoutParams.set("position", { row: 1, column: 0 });
area3.layoutParams.set("span", { rows: 1, columns: 2 });
```
