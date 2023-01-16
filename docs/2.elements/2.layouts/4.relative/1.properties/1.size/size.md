---
nav: size
title: size
---

It is the size of the layout. It is an object with these properties:

- **width**: Width of the layout.
- **height**: Height of the layout.

Each of these properties can be `"auto"` to make the size adapt to the size of its content and it can also be an an object with these properties:

- **unit**: It is the unit used to define the size and it can be `"px"` and `"%"`.
- **value**: It is the size in terms of the unit specified in the other property.

If the unit is `"px"` the value will be in px. If it is `"%"` the value will be the percentage of its maximum available size.

Its default value is:

```javascript
{
  width: { unit: "%", value: 100 },
  height: { unit: "%", value: 100 }
}
```
