---
nav: Example
title: Example
---

To give you a solid understanding about how to create a view type, I will show you how to create a type that consists of a ball.

We first need to create the view type and give it some properties:

```javascript
const ballType = canvasUI.view.newType("ball")

ballType.set("radius", 50)
ballType.set("background", "#000")
```

Now, we are ready to start implementing some lifecycle functions.

We define how the ball will compute its size:

```javascript
ballType.lifecycle.set("getSize", function (view, maxSize) {
  let radius = view.get("radius")
  if (radius > maxSize.width / 2) radius = maxSize.width / 2
  if (radius > maxSize.height / 2) radius = maxSize.height / 2
  return { width: radius * 2, height: radius * 2 }
})
```

After doing that, we define how the ball will be drawn:

```javascript
ballType.lifecycle.set("drawItself", function (view, ctx) {
  ctx.fillStyle = view.get("background")
  ctx.beginPath()
  ctx.arc(
    view.coords.x + view.get("radius"),
    view.coords.y + view.get("radius"),
    view.get("radius"),
    0,
    2 * Math.PI
  )
  ctx.fill()
})
```

The ball type has been created, and now we are ready to use it:

```javascript
const ball = canvasUI.view.new("ball-1", "ball")

ball.set("radius", 100)
ball.set("background", "#718190")
```
