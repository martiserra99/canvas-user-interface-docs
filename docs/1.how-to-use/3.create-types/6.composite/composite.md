---
nav: Composite
title: Composite
---

The composite is an element that it is composed of several elements and behaves like a single one. It is used like a view, but its inner workings are completely different. There are different types of composites and each one of them defines what are the elements it is composed of.

To create a composite type you first need to call the `canvasUI.composite.newType(name)` function passing as argument the name of the type, like so:

```javascript
const sudokuType = canvasUI.composite.newType("sudoku")
```

This will return an object that you will use to specify all the data about the type.
