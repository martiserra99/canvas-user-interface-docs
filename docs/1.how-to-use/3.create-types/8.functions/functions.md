---
nav: Functions
title: Functions
---

You can define functions for the type of view, layout or composite you create. You can do that by using the `.fun(name, func)` method, like so:

```javascript
elementType.fun("changeBackground", function (element, background) {
  element.set("background", background);
  return background;
});
```

The first parameter of the function is the element itself. The other parameters are the values that will be passed when calling the function.

These functions will be able to be called by the elements using the `.call(name, ...params)` method.

You can also define inner functions. These are functions that are used for the inner workings of the element and should only be used when creating the type. To create them you have to use the `.inner.fun(name, func)` method, like so:

```javascript
elementType.inner.fun("changeNumber", function (element, number) {
  element.inner.set("number", number);
  return number;
});
```

The element will be able to call these functions by using the `.inner.call(name, ...params)` method, like so:

```javascript
const number = element.inner.call("changeNumber", 3);
```
