---
nav: dimensions
---

### dimensions

It defines the number of rows and columns as well as their sizes. It is an object that has the properties `columns` and `rows`.

Each of these properties contains an array in which every element is an object with the properties `count`, `unit` and `value`.

The `count` property defines the number of rows or columns.

The `unit` property defines the unit used to define the sizes of the rows or columns and it can be `"px"` and `"fr"`.

The `value` property defines the sizes of the rows or columns and it is defined in terms of the unit specified.

If the unit is `"px"` the sizes will be in px. If the unit is `"fr"` (fractional unit) the sizes will take all the available space they can and each size will be proportional to the other sizes that are also in `"fr"`.

Its default value is:

```javascript
{
  columns: [{ count: 1, unit: "fr", value: 1 }],
  rows: [{ count: 1, unit: "fr", value: 1 }]
}
```
