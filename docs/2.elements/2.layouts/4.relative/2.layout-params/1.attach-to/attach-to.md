---
nav: attachTo
---

### attachTo

It defines where the child is attached to. It is an object with the properties `top`, `right`, `bottom` and `left`.

Each one of these properties can be `null` to define that it is not attached in this side, `"parent"` to define that it is attached to the side of its parent and an object with the properties `side` and `child` to define that the child is attached to the side of another child.

If the child is attached to the side of another child the `side` property has to be `"top"`, `"right"`, `"bottom"` or `"left"` and the `child` property has to the id of another child.

Its default value is:

`{ top: null, right: null, bottom: null, left: null }`
