---
nav: Properties
title: Properties
---

When creating a type of view, layout or composite you can define the properties that it will have and its default values using the `.set(property, value)` method, like so:

```javascript
elementType.set("size", { width: 100, height: 100 })
```

The element will be able to access these properties by using the `.set(property, value)` and `get(property)` methods.

You can also define inner properties. These are properties that are used for the inner workings of the element and should only be used when creating the type. To create them, you have to use the `.inner.set(property, value)` method, like so:

```javascript
elementType.inner.set("number", 4)
```

The element will be able to access these properties by using the `.inner.set(property, value)` and `.inner.get(property)` methods, like so:

```javascript
element.inner.set("number", 2)
const number = element.inner.get("number")
```

If the `.inner.set(property, value)` method accesses a property that is not defined by the type, this inner property will be created in the element.
