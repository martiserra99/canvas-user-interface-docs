---
nav: alignSelf
---

### alignSelf

It defines how the element is aligned inside the cell. It is used to override its alignment defined in the `alignItems` property of the layout.

It is an object with the properties `horizontal` and `vertical`.

In the `horizontal` property if the value is `"auto"` it will take the horizontal alignment defined in the `alignItems` property of the layout. The other values it can be are `"left"`, `"middle"` and `"right"`.

In the `vertical` property if the value is `"auto"` it will take the vertical alignment defined in the `alignItems` property of the layout. The other values it can be are `"top"`, `"middle"` and `"bottom"`.

Its default value is:

`{ horizontal: "auto", vertical: "auto" }`
