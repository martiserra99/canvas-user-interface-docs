---
nav: Example
---

## Example

To give you a solid understanding about how to create a composite type I will show you how to create a type that consists of a grid of numbers (2x2). This grid will be composed of a grid layout with a text view in each cell.

We first need to create the composite type and give it some properties:

```javascript
const gridNumbersType = canvasUI.composite.newType("gridNumbers");

gridNumbersType.set("size", 200);
gridNumbersType.set("numbers", [
  [0, 0],
  [0, 0],
]);
gridNumbersType.set("gap", 1);
```

The `size` property defines the size of the grid.
The `numbers` property defines the numbers of the grid.
The `gap` property defines the gap between the cells.

Now, we are ready to start implementing some lifecycle functions.

We will start by implementing the `getElement` lifecycle function of the _create_ state. We will do it like so:

```javascript
gridNumbersType.lifecycle.set("getElement", function (composite) {
  const grid = canvasUI.layout.new("grid", "grid");
  grid.set("dimensions", {
    columns: [{ count: 2, unit: "fr", value: 1 }],
    rows: [{ count: 2, unit: "fr", value: 1 }],
  });
  grid.set("alignItems", { horizontal: "middle", vertical: "middle" });
  grid.get("gap").color = "#000";
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      const text = canvasUI.view.new(`text-${i},${j}`, "text");
      text.get("font").size = 16;
      text.get("font").color = "#000";
      grid.insert(text);
      text.layoutParams.set("position", { column: i, row: j });
    }
  }
  return grid;
});
```

In this function we have created a grid layout that has two rows and two columns and contains a text view in each cell.

After doing that, we can implement the `updateElement` lifecycle function of the _start_ state, like so:

```javascript
gridNumbersType.lifecycle.set("updateElement", function (composite, grid) {
  const size = composite.get("size");
  const numbers = composite.get("numbers");
  const gap = composite.get("gap");

  grid.set("size", {
    width: { unit: "px", value: size },
    height: { unit: "px", value: size },
  });

  grid.get("gap").size = {
    horizontal: gap,
    vertical: gap,
  };

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      const text = grid.find(`text-${i},${j}`);
      const number = numbers[j][i];
      text.set("text", `${number}`);
    }
  }
});
```

The gridNumbers type has been created and now we are ready to use it:

```javascript
const gridNumbers = canvasUI.composite.new("gridNumbers-1", "gridNumbers");

gridNumbers.set("numbers", [
  [5, 7],
  [2, 0],
]);
gridNumbers.set("gap", 5);
```
