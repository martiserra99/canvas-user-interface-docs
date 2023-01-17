---
nav: Find child
title: Find child
---

If you want to get an element that's inside the layout, you can use the `.find(id)` method passing the id of the element as argument, like so:

```javascript
const child = linear.find("text-2")
```

This function will also look for elements that are inside layouts that your layout contains. If you don't want that to happen, you can pass a second argument with the value `true`:

```javascript
const child = linear.find("text-2", true)
```

If the value is `true` it will only look for direct children, and if the value is `false` it will look for everyone. Its default value is `false`.
