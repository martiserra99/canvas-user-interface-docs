---
name: Lifecycle
---

## Lifecycle

The view element goes through different lifecycle states and it performs different tasks in each one of them:

- _Create_: It may perform some initial tasks and store some data if needed.

- _Start_: It may compute and store some data that may be used for the next states.

- _Measure_: It computes the size that it has to be taking into consideration the maximum size that was passed in its `.measure(maxSize)` method and assigns it to its `size` property.

- _Locate_: It assigns the coords that were passed in its `.locate(coords)` method to its `coords` property.

- _Draw_: It draws itself on the canvas using the canvas context that was passed in its `.draw(ctx)` method.

- _End_: It may perform some final tasks that may be needed.

To perform these tasks the view will call its lifecycle functions. These functions are implemented differently by every view type and to implement them you have to use the `.lifecycle.set(name, func)` method, like so:

```javascript
viewType.lifecycle.set("onCreate", function (view) {
  // Code
});
```

Notice how the first parameter of the function is the view itself. That happens with every lifecycle function.

The lifecycle functions of the view type that we can use are:

- `onCreate(view)`: It is called when the view enters the _create_ state.

- `onStart(view)`: It is called when the view enters the _start_ state.

- `onMeasure(view, maxSize)`: It is called when the view enters the _measure_ state. The second parameter is the maximum size that was passed in its `.measure(maxSize)` method.

- `getSize(view, maxSize)`: It is called in the _measure_ state. This lifecycle function needs to be implemented and in it the view has to compute and return its size. The size has to be in this format: `{ width: int, height: int }`.

- `onLocate(view, coords)`: It is called when the view enters the _locate_ state. The second parameter is the coords that were passed in its `.locate(coords)` method.

- `onDraw(view)`: It is called when the view enters the _draw_ state.

- `drawItself(view, ctx)`: It is called in the _draw_ state. This lifecycle function needs to be implemented and in it the view has to make all the drawings in the canvas context. The second parameter is the canvas context that was passed in its `.draw(ctx)` method.

- `onEnd(view)`: It is called when the view enters the _end_ state.
