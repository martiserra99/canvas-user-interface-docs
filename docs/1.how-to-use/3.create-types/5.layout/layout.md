---
nav: Layout
title: Layout
---

The layout is a container of elements that define how the elements it contains are placed. There are different types of layouts and each one of them places its elements in different ways (ex: by rows and columns). The elements that the layout contains are called children.

To create a layout type you first need to call the `canvasUI.layout.newType(name)` function passing as argument the name of the type, like so:

```javascript
const rowsType = canvasUI.layout.newType("rows");
```

This will return an object that you will use to specify all the data about the type.
