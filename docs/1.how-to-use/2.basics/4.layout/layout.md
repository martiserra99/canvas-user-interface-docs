---
nav: Layout
title: Layout
---

The layout is a container of elements that define how the elements it contains are placed. There are different types of layouts and each one of them places its elements in different ways (ex: by rows and columns). The elements that the layout contains are called children.

To create a layout, you have to call the function `canvasUI.layout.new(id, type)`. The first argument is the id and the second argument is the type of layout. The returned value is the layout. That is an example:

```javascript
const linear = canvasUI.layout.new("linear-1", "linear")
```

In this example, we have created a layout that places its children one next to the other horizontally.
