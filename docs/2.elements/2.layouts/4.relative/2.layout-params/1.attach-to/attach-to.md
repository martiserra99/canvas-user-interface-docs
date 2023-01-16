---
nav: attachTo
title: attachTo
---

It defines where the child is attached to. It is an object with these properties:

- **top**: It defines where the top side of the child is attached to.
- **right**: It defines where the right side of the child is attached to.
- **bottom**: It defines where the bottom side of the child is attached to.
- **left**: It defines where the left side of the child is attached to.

Each of these properties can be `null` to define that it is not attached in this side, `"parent"` to define that it is attached to the side of its parent and an object with the following properties to define that it is attached to the side of another child:

- **side**: The side of this other child that the child is attached to. It can be `"top"`, `"right"`, `"bottom"` and `"left"`.
- **child**: The id of this other child that the child is attached to.

Its default value is:

```javascript
{
  top: null,
  right: null,
  bottom: null,
  left: null
}
```
