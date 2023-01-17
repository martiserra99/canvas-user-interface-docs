---
nav: Layout Params
title: Layout Params
---

Every layout also defines what we call layout parameters. These are parameters that its children can use to define how they have to be placed (ex: in a specific row and column). To use them, you have to use the `.layoutParams.set(param, value)` method of the child, like so:

```javascript
text2.layoutParams.set("position", 1)
text3.layoutParams.set("position", 0)
```

Changing these values, we have changed the order in which these elements are placed.

You can also get the values of the layout parameters by using the `.layoutParams.get(param)` method:

```javascript
const position = text2.layoutParams.get("position")
```
