---
nav: size
title: size
---

It is the size of the view. It is an object with these properties:

- **width**: Width of the view.
- **height**: Height of the view.

Each of these properties is an object with these properties:

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
