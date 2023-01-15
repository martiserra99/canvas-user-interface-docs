---
nav: Lifecycle
---

## Lifecycle

The layout element goes through different lifecycle states and it performs different tasks in each one of them:

- **Create**: It may perform some initial tasks and store some data if needed.

- **Start**: It may compute and store some data that may be used for the next states. After that, it iterates over every child and calls the `.start()` method on each child.

- **Measure**: It iterates over every child and for each one of them it computes the maximum size that the child is allowed to be and calls its `.measure(maxSize)` method. Then, it computes its size taking into consideration the maximum size that was passed in its `.measure(maxSize)` method and assigns it to its `size` property.

- **Locate**: It iterates over every child and for each one of them it computes the coords in which the child has to be located and calls its `.locate(coords)` method. Then, it assigns the coords that were passed in its `.locate(coords)` method to its `coords` property.

- **Draw**: It draws itself on the canvas using the canvas context that was passed in its `.draw(ctx)` method. Then, it iterates over every child and for each one of them it calls its `.draw(ctx)` method.

- **End**: It may perform some final tasks that may be needed. Then, it iterates over every child and for each one of them it calls its `end()` method.

To perform these tasks the layout will call its lifecycle functions. These functions are implemented differently by every layout type and to implemenet them you have to use the `.lifecycle.set(name, func)` method, like so:

```javascript
layoutType.lifecycle.set("onCreate", function (layout) {
  // Code
});
```

Notice how the first parameter of the function is the layout itself. That happens with every lifecycle function.

The lifecycle functions of the layout type that we can use are:

- `onCreate(layout)`: It is called when the layout enters the _create_ state.

- `onStart(layout)`: It is called when the layout enters the _start_ state.

- `onMeasure(layout, maxSize)`: It is called when the layout enters the _measure_ state. The second parameter is the maximum size that was passed in its `.measure(maxSize)` method.

- `sortChildrenToSetSizes(layout, maxSize)`: It is called in the _measure_ state. In this function the layout returns the children sorted by the order in which their sizes will be computed. If you don't implement this function the order of the children will be the order in which they were in inserted in the layout.

- `getChildMaxSize(layout, maxSize, child, childrenWithSizes)`: It is called in the _measure_ state for every child. In this function the layout computes and returns the maximum size of the child. The third parameter is the child and the fourth parameter is the sorted children that have their sizes defined. This function needs to be implemented and the size has to be in this format: `{ width: int, height: int }`.

- `getSize(layout, maxSize)`: It is called in the _measure_ state. This lifecycle function needs to be implemented and in it the layout has to compute and return its size. The size has to be in this format: `{ width: int, height: int }`.

- `onLocate(layout, coords)`: It is called when the layout enters the _locate_ state. The second parameter is the coords that were passed in its `.locate(coords)` method.

- `sortChildrenToSetCoords(layout, coords)`: It is called in the _locate_ state. In this function the layout returns the children sorted by the order in which their coords will be computed. If you don't implement this function the order of the children will be the order in which they were in inserted in the layout.

- `getChildCoords(layout, coords, child, childrenWithCoords)`: It is called in the _locate_ state for every child. In this function the layout computes and returns the coords of the child. The third parameter is the child and the fourth parameter is the sorted children that have their coords defined. This function needs to be implemented and the coords have to be in this format: `{ x: int, y: int }`.

- `onDraw(layout)`: It is called when the layout enters the _draw_ state.

- `drawItself(layout, ctx)`: It is called in the _draw_ state. This lifecycle function may not need to be implemented and in it the layout makes all the drawings. The second parameter is the canvas context that was passed in its `.draw(ctx)` method.

- `sortChildrenToDraw(layout)`: It is called in the _draw_ state. In this function the layout returns the children sorted by the order in which they will be drawn. If you don't implement this function the order of the children will be the order in which they were in inserted in the layout. This function is only useful when there are children that are overlapping on the user interface.

- `onEnd(view)`: It is called when the layout enters the _end_ state.
