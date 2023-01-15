---
nav: Example
---

## Example

To give you a solid understanding about how to create a layout type I will show you how to create a type that places its children one next to the other horizontally.

We first need to create the layout type and give it some properties:

```javascript
const horizontalType = canvasUI.layout.newType("horizontal");

horizontalType.set("size", { width: 100, height: 100 });
horizontalType.set("gap", 20);
horizontalType.set("background", "rgba(0,0,0,0)");
```

The `size` property defines the size of the layout in terms of percentages.
The `gap` property defines the horizontal gap between children and it is defined in px.
The `background` property defines the background color of the layout.

Now, we can define the layout parameters that the children will be able to use:

```javascript
horizontalType.layoutParams.set("position", 0);
```

The children will use this parameter to define the order in which they will be placed. The first child will be the one with the lowest value and the last child the one with the highest value. If several children have the same value they will be placed in the order in which they were inserted in the layout.

Now, we are ready to start implementing some lifecycle functions. To do that we will start thinking about how we want to approach it.

The children need to be placed in the order they define using their `position` layout parameter. That means that we will need to implement some lifecycle functions that deal with the ordering of the children. In these functions we don't want to sort the children several times, so it would be useful to store the sorted children in some place to avoid having to repeat this process again. We can do it like so:

```javascript
horizontalType.lifecycle.set("onStart", function (layout) {
  const sortedChildren = [...layout.children].sort(
    (first, second) =>
      first.layoutParams.get("position") - second.layoutParams.get("position")
  );
  layout.inner.set("sortedChildren", sortedChildren);
});
```

In this lifecycle function we have sorted the children and stored the result in an inner property. We will explain what inner properties are in another section. For now you just need to understand that we have stored the result for later use.

We will need to compute the maximum available size of every child. To be able to do that it may be useful to have the size of the layout already computed. We can compute and store the value in the `onMeasure` lifecycle function, like so:

```javascript
horizontalType.lifecycle.set("onMeasure", function (layout, maxSize) {
  const size = layout.inner.call("getSize", maxSize);
  layout.inner.set("size", size);
});

horizontalType.inner.fun("getSize", function (layout, maxSize) {
  const width = (layout.get("size").width * maxSize.width) / 100;
  const height = (layout.get("size").height * maxSize.height) / 100;
  return { width, height };
});
```

In this lifecycle function we have used an inner function. We will explain what inner functions are in another section. For now you just need to understand that we have stored the size for later use.

Now, we can implement the `sortChildrenToSetSizes` lifecycle function and use the value we stored before:

```javascript
horizontalType.lifecycle.set("sortChildrenToSetSizes", function (layout) {
  return layout.inner.get("sortedChildren");
});
```

After that, we define the maximum available size of every child, like so:

```javascript
horizontalType.lifecycle.set(
  "getChildMaxSize",
  function (layout, maxSize, child, childrenWithSizes) {
    const width = layout.inner.call("getChildMaxWidth", childrenWithSizes);
    const height = layout.inner.get("size").height;
    return { width, height };
  }
);

horizontalType.inner.fun(
  "getChildMaxWidth",
  function (layout, childrenWithSizes) {
    const usedWidth = childrenWithSizes.reduce((acc, child) => {
      return acc + child.size.width + layout.get("gap");
    }, 0);
    const childMaxWidth = layout.inner.get("size").width - usedWidth;
    if (childMaxWidth < 0) return 0;
    return childMaxWidth;
  }
);
```

To compute the maximum available size of every child we have used the size of the layout we stored previously and we have also used the sizes of the children in which their sizes have already been computed.

Since the elements are placed horizontally the maximum available height of the child will be the height of the layout and the maximum available width of the child will be all the remaining width that has not been used.

Now, we have to implement the `getSize` function:

```javascript
horizontalType.lifecycle.set("getSize", function (layout, maxSize) {
  return layout.inner.get("size");
});
```

We are now ready to implement the functions of the _locate_ state.

We have to implement the `sortChildrenToSetCoords` lifecycle function, like so:

```javascript
horizontalType.lifecycle.set(
  "sortChildrenToSetCoords",
  function (layout, coords) {
    return layout.inner.get("sortedChildren");
  }
);
```

Then, we will define the coords of every child by implementing the `getChildCoords` lifecycle function:

```javascript
horizontalType.lifecycle.set(
  "getChildCoords",
  function (layout, coords, child, childrenWithCoords) {
    const x = layout.inner.call("getChildX", coords, childrenWithCoords);
    const y = coords.y;
    return { x, y };
  }
);

horizontalType.inner.fun(
  "getChildX",
  function (layout, coords, childrenWithCoords) {
    if (childrenWithCoords.length === 0) return coords.x;
    const lastChild = childrenWithCoords[childrenWithCoords.length - 1];
    return lastChild.coords.x + lastChild.size.width + layout.get("gap");
  }
);
```

The `y` coord will be the top of the layout and the `x` coord will be computed to make the child be placed next to the last child that had its coords defined.

After doing that, we just need to implement the `drawItself` lifecycle function of the _draw_ state:

```javascript
horizontalType.lifecycle.set("drawItself", function (layout, ctx) {
  ctx.fillStyle = layout.get("background");
  ctx.fillRect(
    layout.coords.x,
    layout.coords.y,
    layout.size.width,
    layout.size.height
  );
});
```

The horizontal type has been created and now we are ready to use it:

```javascript
const horizontal = canvasUI.layout.new("horizontal-1", "horizontal");

horizontal.set("gap", 100);
horizontal.set("background", "#ffa234");

const text1 = canvasUI.view.new("text-1", "text");
text1.set("text", "Hello");

const text2 = canvasUI.view.new("text-2", "text");
text2.set("text", "Goodbye");

horizontal.insert(text1);
horizontal.insert(text2);

text1.layoutParams.set("position", 1);
```
