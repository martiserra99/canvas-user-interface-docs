---
nav: Lifecycle
title: Lifecycle
---

The composite element goes through different lifecycle states and it performs different tasks in each one of them:

- **Create**: It may perform some initial tasks and store some data if needed. Then, it creates an element. In case that the element is a layout it may create the elements the layout contains (most likely).

- **Start**: It may compute and store some data that may be used for the next states. Then, it updates the element and the elements it contains (in case that the element is a layout) and it calls the `.start()` method on the element.

- **Measure**: It calls the `.measure(maxSize)` method on the element with the maximum size that was passed in its `.measure(maxSize)` method. Then, the size of the element is assigned to its `size` property.

- **Locate**: It calls the `.locate(coords)` method on the element with the coords that were passed in its `.locate(coords)` method. Then, the coords of the element are assigned to its `coords` property.

- **Draw**: It calls the `.draw(ctx)` method on the element with the canvas context that was passed in its `.draw(ctx)` method.

- **End**: It may perform some final tasks that may be needed. Then, it calls the `.end()` method on the element.

To perform these tasks the composite will call its lifecycle functions. These functions are implemented differently by every composite type and to implemenet them you have to use the `.lifecycle.set(name, func)` method, like so:

```javascript
compositeType.lifecycle.set("onCreate", function (composite) {
  // Code
});
```

Notice how the first parameter of the function is the composite itself. That happens with every lifecycle function.

The lifecycle functions of the composite type that we can use are:

- `onCreate(composite)`: It is called when the composite enters the _create_ state.

- `getElement(composite)`: It is called in the _create_ state. This lifecycle function needs to be implemented and in it the composite has to create and return the element (if the element is a layout the elements it contains may also be created).

- `onStart(composite)`: It is called when the composite enters the _start_ state.

- `updateElement(composite, element)`: It is called in the _start_ state. This lifecycle function needs to be implemented and in it the composite has to update the element (if the element is a layout the elements it contains may also be updated). The second parameter is the element that has to be updated.

- `onMeasure(composite, maxSize)`: It is called when the composite enters the _measure_ state. The second parameter is the maximum size that was passed in its `.measure(maxSize)` method.

- `onLocate(composite, coords)`: It is called when the composite enters the _locate_ state. The second parameter is the coords that were passed in its `.locate(coords)` method.

- `onDraw(composite)`: It is called when the composite enters the _draw_ state.

- `onEnd(composite)`: It is called when the composite enters the _end_ state.
