---
nav: Quick Start
title: Quick Start
---

You can create your types of views, layouts and composites. To give you an idea about how to do that I will show you how to create a view type that consists of a rectangle.

To create it we first need to call the following function with the name of the type:

```javascript
const rectangleType = canvasUI.view.newType("rectangle");
```

Now, we have to define what properties we want the rectangle to have and their default values. We do that like so:

```javascript
rectangleType.set("size", { width: 200, height: 100 });
rectangleType.set("background", "#000");
```

After doing that, we have to define how we want the rectangle to compute its size taking into consideration the maximum size that it is allowed to be. To do that we have to implement the following function:

```javascript
rectangleType.lifecycle.set("getSize", function (view, maxSize) {
  // Code
});
```

In this function we have to return the size that the rectangle has to be. We can use the `size` property and the `maxSize` parameter of the function to compute the size. We do that like so:

```javascript
rectangleType.lifecycle.set("getSize", function (view, maxSize) {
  let width = view.get("size").width;
  if (width > maxSize.width) width = maxSize.width;
  let height = view.get("size").height;
  if (height > maxSize.height) height = maxSize.height;
  return { width, height };
});
```

After doing that we have to define how the rectangle will draw itself on the canvas and we do that by implementing the following function:

```javascript
rectangleType.lifecycle.set("drawItself", function (view, ctx) {
  // Code
});
```

The `ctx` is the canvas context and it is the object in which we have to make the drawings. We can use the `background` property for the color and we can implement the function like so:

```javascript
rectangleType.lifecycle.set("drawItself", function (view, ctx) {
  ctx.fillStyle = view.get("background");
  ctx.fillRect(view.coords.x, view.coords.y, view.size.width, view.size.height);
});
```

We have already created the rectangle type. We can use it like so:

```javascript
const rectangle = canvasUI.view.new("rectangle-1", "rectangle");
rectangle.set("background", "#053");
```
