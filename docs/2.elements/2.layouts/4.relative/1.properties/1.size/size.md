---
nav: size
---

### size

It is the size of the layout. It is an object with the properties `width` and `height`.

Each of these properties can be `"auto"` to make the layout size adapt to its content or it can be an object with the properties `unit` and `value`.

The `unit` property is the unit used to define the size and it can be `"px"` and `"%"`.

The `value` property is the size in terms of the unit specified in the other property.

If the unit is `"px"` the value will be in px. If it is `"%"` the value will be the percentage of its maximum available size.

Its default value is:

`{ width: { unit: "%", value: 100 }, height: { unit: "%", value: 100 } }`
