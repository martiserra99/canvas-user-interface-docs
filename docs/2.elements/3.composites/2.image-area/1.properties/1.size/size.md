---
nav: size
title: size
---

It is the size of the composite. It is an object with these properties:

- **width**: Width of the composite.
- **height**: Height of the composite.

Each of these properties can be `"auto"` to make the size adapt to the size of its image, and it can also be an object with these properties:

- **unit**: It is the unit used to define the size, and it can be `"px"` and `"%"`.
- **value**: It is the size in terms of the unit specified in the other property.

If the unit is `"px"` the value will be in px. If it is `"%"` the value will be the percentage of its maximum available size.

Its default value is:

```javascript
{
  width: "auto",
  height: "auto"
}
```
